import { ethers } from 'ethers';
import { abi, networks } from '../../../build/contracts/Counter.json';

const counterAddress = Object.values(networks)[0].address; // TODO: Only works with one network
const provider = new ethers.providers.JsonRpcProvider(); // TODO: Only works locally
const signer = provider.getSigner();

export const counter = new ethers.Contract(counterAddress, abi, signer);
