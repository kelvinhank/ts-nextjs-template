// import { Contract, ContractInterface, ethers } from 'ethers';
// import { getTargetChain } from './network';

// export const getContractWithProvider = async ({
//   address,
//   abi,
// }: {
//   address: string;
//   abi: ContractInterface;
// }) => {
//   try {
//     if (!ethers.utils.isAddress(address)) {
//       throw Error(`Invalid 'address' parameter '${address}'.`);
//     }

//     const targetChain = getTargetChain();
//     const provider = new ethers.providers.JsonRpcProvider(
//       targetChain.rpcUrls.default.http[0]
//     );

//     return new Contract(address, abi, provider);
//   } catch (err) {
//     return false;
//   }
// };
