// import Web3 from "web3";
import Web3 from 'web3/dist/web3.min';
import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
	supportedChainIds: [1, 3, 4, 5, 42, 97, 250],
});
export const getLibrary = (provider) => {
	return new Web3(provider); 
};
