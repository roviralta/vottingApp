# Descentralized Votting App

## 1. Prerequisites
Before running the application, make sure you have the following prerequisites installed on your system:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).
- Ionic: You can install it running this command:

```bash
npm i -g @ionic/cli
```

## Installation

If the application requires installation, follow these steps:

1. Open a terminal or command prompt.

2. Navigate to the project directory

3. Run this command to install the dependecies:
```bash
npm install
```

4. Edit the hardhat file and modify the network that you will use

5. Compile and deploy the smart contract:
```bash
npx hardhat compile
npx hardhat run script/deploy
```

6. Change the address contract in funcs.tsx

7. Run ionic to deploy the app in localhost
```bash
ionic serve -l
```

## Enjoy Votting!
