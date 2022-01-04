import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useStyles } from '../theme/theme';
import { useState } from 'react';
import { submitQuiz } from '../utils/contractFunctions';
import { useWeb3React } from '@web3-react/core';
import { SContractContext } from '../app/ContractProvider';

const Survey = ({ Quiz }) => {
	const { column, width, spacing, networkButton, radius, quiz, quizOptions, imgContainer, enRows, ownShadow, darkerBox, textPrimary } = useStyles();
	const { library, account } = useWeb3React();
	const { surveyContract } = useContext(SContractContext);

	const [surveyBegin, setSurveyBegin] = useState(false);
	const [surveyEnd, setSurveyEnd] = useState(false);
	const [question, setQuestion] = useState(null);
	const [answers, setAnswers] = useState({});
	const [options, setOptions] = useState(true);
	const [init, setInit] = useState(0);

	let initt = 0;
	// Iniciar Quiz
	const startSurvey = () => {
		let lifeTimeSeconds;
		const length = Quiz.questions.length; 
		setSurveyBegin(true);

		setQuestion(Quiz.questions[initt]);
		lifeTimeSeconds = Quiz.questions[initt].lifetimeSeconds * 1000;
		const myInterval = setInterval(() => {
			// eslint-disable-next-line
			intervalos();
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
			.catch(e => {
				if (e.code === 4001) {
					window.alert('denied transaction');
				}
				console.log('error', e);
			});
	};

	return (
		<div className={`${spacing} ${column}`}>
			<Typography className={textPrimary} variant="h3">{ Quiz.title }</Typography>

			{
				surveyEnd ?
					<div className={column} style={{ width: '100%'}}>
						<div className={`${enRows}`} style={{ margin: '16px' }}>
							{
								Object.entries(answers).map((answer, i) => {
									return (
										<div key={i} className={`${radius} ${column} ${darkerBox} ${ownShadow}`}>
											<div className={`${spacing}`}>
												<Typography className={`${textPrimary}`} variant="h5">{ answer[0] }</Typography>
											</div>
											<div className={`${spacing}`}>
												<Typography className={`${textPrimary}`} variant="h6">{ answer[1].response }</Typography>
											</div>
										</div>
									);
								})
							}
						</div>
						<Button 
							onClick={() => submitQ()}
							className={`${darkerBox} ${spacing} ${networkButton} ${radius} `}>
							<Typography className={`${textPrimary}`} variant="h6">Submit Quiz</Typography>
						</Button>
					</div>
					:
					surveyBegin && question ?
						<div className={`${column} ${quiz} ${width}`}>

							<Typography className={`${textPrimary} ${spacing}`} variant="h4">{question.text}</Typography>
							<img src={question.image} alt="" className={`${radius} ${imgContainer}`} />

							<div className={`${quizOptions} ${spacing}`}>
								{
									options &&
                            question.options.map((options, i) => (
                            	<Button 
                            		onClick={() => {
                            			if (Object.keys(answers).length === init) {
                            				setOptions(false);
                            			}
                            			setAnswers({ ...answers, [question.text]: {
                            				response: options.text,
                            				id: `${i}`,
                            			} });
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
							<img src={Quiz.image} alt=""/>
							<Button className={`${spacing} ${networkButton} ${radius}`}
								onClick={() => startSurvey()}
							>
								<Typography className={`${textPrimary}`} variant="h6">Comenzar Quiz</Typography>
							</Button>
						</div>
			}
		</div>
	);
};

export default Survey;
