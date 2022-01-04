import React, { useEffect, useCallback, createContext, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/connectors';
import { loadContract } from '../utils/contractFunctions';

export const SContractContext = createContext();

const ContractProvider = ({ children }) => {
	const { library, chainId, activate } = useWeb3React();
	const [surveyContract, setSurveyContract] = useState(undefined);

	const connect = () => {
		return activate(injected);
	};
    
	useEffect(() => { connect(); }, []);

	const loadContractsData = useCallback(async () => {
		const surveyContract = await loadContract(library);
		setSurveyContract(surveyContract);
	}, [library]);
    
	useEffect(async () => {
		if (library && (!surveyContract)) {
			await loadContractsData();
		}
	}, [library, chainId]);

	return (
		<SContractContext.Provider value={{ surveyContract }}>
			{ children }
		</SContractContext.Provider>
	);
};


export default ContractProvider;

