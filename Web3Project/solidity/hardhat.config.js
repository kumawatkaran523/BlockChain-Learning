

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  network :{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/R4smiAu4LwmNcLrmwy6_NeWmn1xDbmTm',
      accounts:['eff8dafa0f24ec7d89e8678c8d8c6e4d2a76b8512d1760f91fea034e2ae32fe1']
    }
  }
}