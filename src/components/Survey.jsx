import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useStyles } from '../app/App';
import { useState } from 'react';
import { submitQuiz } from '../utils/contractFunctions';
import { useWeb3React } from '@web3-react/core';
import { SContractContext } from '../app/ContractProvider';

const Survey = ({ Quiz }) => {
	const { column, width, spacing, networkButton, radius, quiz, quizOptions, imgContainer } = useStyles();
	const { library, account } = useWeb3React();
	const { surveyContract } = useContext(SContractContext);

	const [surveyBegin, setSurveyBegin] = useState(false);
	const [surveyEnd, setSurveyEnd] = useState(false);
	const [question, setQuestion] = useState(null);
	const [answers, setAnswers] = useState([]);
	const [options, setOptions] = useState(true);
	const [init, setInit] = useState(0);
	console.log('Quiz', Quiz.questions);

	let initt = 0;
	// Iniciar Quiz
	const startSurvey = () => {
		let lifeTimeSeconds;
		const length = Quiz.questions.length; 
		console.log(length);
		setSurveyBegin(true);

		setQuestion(Quiz.questions[initt]);
		lifeTimeSeconds = Quiz.questions[initt].lifetimeSeconds * 1000;
		const myInterval = setInterval(() => {
			intervalos();
			console.log('EJECUTADO');
		}, lifeTimeSeconds);

		const intervalos = () => {
			setInit(prev => prev + 1);
			initt++;
			if (initt === length) { 
				clearInterval(myInterval);
				setSurveyEnd(true);
				return;
			}
			setQuestion(Quiz.questions[initt]);
			lifeTimeSeconds = Quiz.questions[initt].lifetimeSeconds * 1000;
			setOptions(true);
		};
	};

    
	const submitQ = () => {
		let surveyId;
		submitQuiz(library, surveyContract, surveyId = '0', answers, account)
			.then(result => console.log('result', result))
			.catch(e => console.log('error', e));
	};
	console.log(answers, account);
    
	return (
		<div className={`${spacing} ${column}`}>
			<Typography variant="h3">{ Quiz.title }</Typography>

			{
				surveyEnd ?
					<Button 
						onClick={() => submitQ()}
						className={`${spacing} ${networkButton} ${radius}`}>
						<Typography variant="h6">Submit Quiz</Typography>
					</Button>
					:
					surveyBegin && question ?
						<div className={`${column} ${quiz} ${width}`}>

							<Typography variant="h4" className={spacing}>{question.text}</Typography>
							<img src={question.image} alt="" className={`${radius} ${imgContainer}`} />

							<div className={`${quizOptions} ${spacing}`}>
								{
									options &&
                            question.options.map((options, i) => (
                            	<Button 
                            		onClick={() => {
                            			// console.log(options, i)
                            			if (answers.length === init) {
                            				setOptions(false);
                            			}
                            			setAnswers([ ...answers, `${i}` ]);
                            		}}
                            		key={i} className={`${spacing} ${networkButton} ${radius}`}>
                            		<Typography variant="h6">{options.text}</Typography>
                            	</Button>
                            ))
								}
							</div>

						</div>
						:
						<div className={column}>
							<img src={Quiz.image} />
							<Button className={`${spacing} ${networkButton} ${radius}`}
								onClick={() => startSurvey()}
							>
								<Typography variant="h6">Comenzar Quiz</Typography>
							</Button>
						</div>
			}
		</div>
	);
};

export default Survey;
