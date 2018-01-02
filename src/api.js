import axios from 'axios';
import accounting from 'accounting';

const BASE_URL = 'https://api.coinmarketcap.com/v1/ticker';

const convertTo = process.env.currency || 'CAD';

const createApiUrl = currency =>
  `${BASE_URL}/${currency}/?convert=${convertTo}`;

const getUnitPrice = async currency => {
  const response = await axios.get(createApiUrl(currency));
  if (response.data && response.data.length >= 1)
    return response.data[0][`price_${convertTo.toLowerCase()}`];
  return new Error('Error ', response.status);
};

const getTotalPrice = async (currency, amount) =>
  (await getUnitPrice(currency)) * amount;

export const getTotalValue = async holdings => {
  const requests = Object.keys(holdings).map(async currency => ({
    value: await getTotalPrice(currency, holdings[currency]),
    currency
  }));
  const responses = (await Promise.all(requests)).reduce(
    (acc, curr) => ({ ...acc, [curr.currency]: curr.value }),
    {}
  );
  const total = Object.keys(responses)
    .map(currency => responses[currency])
    .reduce((acc, curr) => acc + curr, 0);
  return {
    ...responses,
    total
  };
};

export const getFormattedTotalValue = async holdings => {
  const unformatted = await getTotalValue(holdings);
  return Object.keys(unformatted)
    .map(key => ({
      [key]: accounting.formatNumber(unformatted[key])
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
};
