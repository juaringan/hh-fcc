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
