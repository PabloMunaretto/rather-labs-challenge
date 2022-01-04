import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Header from '../components/Header';
import Survey from '../components/Survey';
import ContractProvider from './ContractProvider';
import { getLibrary } from '../utils/connectors';


import Quiz from '../quiz/QUIZ.json';
import '../theme/App.css';
import { Container, Box } from '@material-ui/core';
import { useStyles } from '../theme/theme';

const App = () => {
	const { surveyBox, surveyContainer, radius, columnFullH } = useStyles();

	return (
		<React.Fragment >
			<Container maxWidth="md" fixed className={columnFullH} >

				<Web3ReactProvider getLibrary={getLibrary}>
					<ContractProvider>
          
						<Header />
						<div className={surveyContainer}>
							<Box className={`${radius} ${surveyBox}`} >
								<Survey Quiz={Quiz} />
							</Box>
						</div>

					</ContractProvider>
				</ Web3ReactProvider>

			</Container>
		</React.Fragment>
	);
};

export default App;
