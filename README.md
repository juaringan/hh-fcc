# hh-fcc: tests ether y node

---

- [curso](https://www.youtube.com/watch?v=gyMwXuJrbJQ)

- 06:38:00 -> Async programming
- 06:46:16 -> Compiling solidity
- 06:55:13 -> Ganache & networks
- 07:10:25 -> Adding transaction overrides
- 07:12:18 -> Transaction receipts. Nos quedamos en que no se puede comprobar el
  nº de bloques una vez desplegado, porque la versión de ethers parece que ya no lo
  lleva. No olvides arranacar el ganache (en downloads).
- 07:14:56 -> Sending a raw transaction in ethersjs.
- 07:24:58 -> Interacting with contracts in ethersjs. Nos quedamos en el 07:28:00
  interactuando con el contract, cambiando el currentFavouriteNumber
- 07:34:08 -> Environment variables.
- 07:40:00 -> Better private key Management
- 07:54:01 -> Optional Prettier Formatting. TODO: buscar el settings de VSCode
  porque no hemos configurado correctamente los prettiers.
- 07:57:53 -> Deploying to a testnet or mainnet
- 08:04:29 -> Verifying block explorers from the UI. Nos quedamos en que no verifica en etherscan
- 08:07:25 -> Alchemy Dashboard & the mempool
- 08:20:18 -> Lesson 6 HardHat SimpleStorage
- 08:22:47 -> HardHat Setup. Nos quedamos en el 08:24:05 en el tutorial oficial
de hardhat, que no compile porque es incapaz de bajarse el solc (da error de proxy)
FIXED!: Para utilizar el hardhat (npx hardhat comile) hay que hacer unset de 
las variables del proxy (http_proxy, HTTP_PROXY, etc etc). Nos quedamos ahora
en el testing porque ```     TypeError: Cannot read properties of undefined (reading 'JsonRpcProvider')``` (parece una incompatibilidad de versiones con ethrersjs
- 08:29:42 -> Hardhat setup troubleshouting
- 08:31:50 -> Hardhat setup continue
- 08:33:11 -> Deploying SimpleStorage from HardHat
- 08:41:45 -> Networks in HardHat
- 08:51:26 -> Programatic verification. Nos quedamos en el 08:54:47, creando una
  cuenta en etherscan para poder cerificar programáticamente los contratos en 
  sepolia
- 09:06:36 -> Interacting with contracts in hardhat
- 09:09:42 -> Artifacts troubleshouting
- 09:10:52 -> Custom hardhat tasks
- 09:18:12 -> hardhat localhost node.
- 09:23:11 -> hardhat console
- 09:26:13 -> Running tests
- 09:38:10 -> Hardhat gas reporter
- 09:44:40 -> Solidity coverage
- 09:47:02 -> Harhat waffle
- 09:47:39 -> Lesson 6 recap
- 10:00:49 -> Lesson7: Hardhat Fund Me
- 10:03:44 -> Hardhat setup
              Para este punto ha cambiado bastante el hardhat, y las opciones 
              que antes había de crear un 'advanced project' ya no existen.
              No hay alternativa en el {chronological updates](https://github.com/smartcontractkit/full-blockchain-solidity-course-js/blob/main/chronological-updates.md), así que toca instalar las dependencias a manija. Eso incluye:

``` bash
yarn add --dev eslint dotenv solhint prettier @nomiclabs/hardhat-waffle \
  @chainlink/contracts hardhat-deploy
touch .npmignore
```

Además, hay muchos ficheros que vienen pre-configurados, como los .prettierrc y el
hardhat.config.js, que viene ya con redes de test (sepolia) predefinidas.


- 10:06:20 -> Linting
- 10:07:49 -> Hardhat setup continued
- 10:09:38 -> Importing from NPM
- 10:10:43 -> Hardhat Deploy:

``` bash
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```
- 10:14:00 -> comoenzamos con los scripts de deploy.
@TODO: A ver cómo organizamos esto en el git, porque parece que va a ir como repo 
separado. Hay que ver lo que condiciona esto

- 10:21:05 -> Mocking & helper-hardhat-config
- 10:40:00 -> Justo antes de crear el contrato Mock para despliegue en local
