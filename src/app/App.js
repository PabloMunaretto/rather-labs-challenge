import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import Header from '../components/Header';
import Survey from '../components/Survey';
import ContractProvider from './ContractProvider';
import { getLibrary } from '../utils/connectors';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

import Quiz from '../quiz/QUIZ.json';
import '../theme/App.css';

export const useStyles = makeStyles((theme) => ({
	surveyContainer: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	width: { width: '100%' },
	surveyBox: {
		backgroundColor: theme.palette.primary.main,
		width: '80%',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '10px 10px 20px gray'
	},
	spacing: {
		paddingRight: theme.spacing(2), 
		paddingLeft: theme.spacing(2),
		margin: theme.spacing(2), 
	},
	outerSpacing: {
		paddingRight: theme.spacing(2), 
		paddingLeft: theme.spacing(2),
		marginTop: theme.spacing(2), 
		marginBottom: theme.spacing(2), 
	},
	radius: {
		borderRadius: 8
	},
	headerFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	column: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	columnFullH: {
		display: 'flex',
		flexFlow: 'column',
		height: '100vh',
	},
	quiz: {
		transition: theme.transitions.create(['background-color', 'transform'], {
			duration: theme.transitions.duration.standard,
		})
	},
	quizOptions: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around'
	},
	networkButton: {
		display: 'flex',
		alignSelf: 'center',
		border: '1px solid black',
		width: '50%',
	},
	imgContainer: {
		maxWidth: '600px',
	},
	textPrimary: { color: theme.palette.primary.main },
	textSecondary: { color: theme.palette.secondary.main },
	textWhite: { color: 'white' },
  
}));
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
