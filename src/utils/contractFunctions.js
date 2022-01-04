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
	const answersArray = Object.values(answers).map(obj => obj.id);
	
	console.log('AQUIIII', surveyId, answers, answersArray);
	await surveyContract.methods.submit(surveyId, answersArray)
		.send({ from: account })
		.on('transactionHash', (hash) => {
			return hash;
		})
		.on('error', (error) => {
			return error;
		});
};