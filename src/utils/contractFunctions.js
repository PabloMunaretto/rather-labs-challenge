import SurveyContract from '../abis/survey.json';
import { SURVEY_ADDRESS, formatBalance } from './utils';

export const loadContract = async (library) => {
	const web3React = await library;
	const abi = SurveyContract;
  
	try {
		const surveyContract = new web3React.eth.Contract(abi, SURVEY_ADDRESS);
		return surveyContract;
	} catch (error) {
		return null;
	}
};

export const balanceOf = async(account, surveyContract) => {
	const balance = await surveyContract.methods.balanceOf(account).call().then(balance => {
		return formatBalance(balance);
	}); 
	return balance;
};
export const tokenName = async(surveyContract) => {
	const name = await surveyContract.methods.name().call().then(name => name);
	return name;
};

export const submitQuiz = async(library, surveyContract, surveyId, answers, account) => {
	const answersArray = Object.values(answers).map(obj => obj.id);
	
	console.log('AQUI ES', surveyId, answersArray);
	await surveyContract.methods.submit(surveyId, answersArray)
		.send({ from: account })
		.on('transactionHash', (hash) => {
			return hash;
		})
		.on('error', (error) => {
			return error;
		});
};