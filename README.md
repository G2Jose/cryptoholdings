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
