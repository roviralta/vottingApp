require("@nomicfoundation/hardhat-toolbox");

const private_key =
    "813bb1b3357ffe5eb20b656a8d7bd39735754584199d6ea0ce58aede56b6cb6e";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.19",
    networks: {
        ropsten: {
            url: `http://127.0.0.1:7545`,
            accounts: [`0x${private_key}`],
        },
    },
};
