# Cryptoholdings

A simple cli utility to show you crypto holdings at a glance.

## Quickstart

* Install package `npm install -g cryptoholdings`
* Create a .holdings.json file in your home directory
* Run `crypto`

### `.holdings.json` structure

The `holdings.json` file should be valid json, with keys corresponding to cryptocurrency names as listed on the coinmarketcap API, and values corresponding to the number of coins you own.

A full list of currencies supported on coinmarketcap can be found at [https://api.coinmarketcap.com/v1/ticker/](https://api.coinmarketcap.com/v1/ticker/)

Example `.holdings.json` file

```json
{
  "bitcoin": 1.0001,
  "ethereum": 1.0
}
```

### Base currency

The CLI uses CAD as its base currency by default. To use a different currency, use a `currency` environment variable.

For example, to use USD as the base currency, run `currency=USD crypto`

You can also set this in your `.bashrc` file. simply append `export currency=USD` to it.

Valid base currencies at the time of writing include the following:

* "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"

An updated list can be found at https://coinmarketcap.com/api/
