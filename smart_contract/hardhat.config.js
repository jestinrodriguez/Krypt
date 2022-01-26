//https://eth-ropsten.alchemyapi.io/v2/Bd-fNSc4RpF73mp_x2yoa5trlAA0ifnM

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Bd-fNSc4RpF73mp_x2yoa5trlAA0ifnM",
      accounts: [
        "fcc83c0c042434907d9637e2fe95263000bb1dfda57ea0c8b007fec3a31d186c",
      ],
    },
  },
};
