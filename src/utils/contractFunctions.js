import SurveyContract from '../abis/survey.json';
import { SURVEY_ADDRESS } from './utils';

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

export const submitQuiz = async(library, surveyContract, surveyId, answers, account) => {

	console.log('AQUIIII', surveyId, answers);
	await surveyContract.methods.submit(surveyId, answers)
		.send({ from: account })
		.on('transactionHash', (hash) => {
			return hash;
		})
		.on('error', (error) => {
			return error;
		});
};