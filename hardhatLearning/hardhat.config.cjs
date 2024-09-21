/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "4sH8ME3mAeZe_t-xek8JPC-5RRpVwlMH";

const SEPOLIA_PRIVATE_KEY = "85daf4819632da0fd51dc23763d2c722fd33189866e7fbd69e84738c8ffe84d7";
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://shape-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};
