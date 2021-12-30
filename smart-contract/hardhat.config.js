require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/JQmAkRyoZ5IlsluOEmyar5AryA1y_0w2',
      accounts: ['a87262fa8e0637ccf56374b19e84c40173387c37a40fa33e6997a8910ee031f7'],
    },
  },
};