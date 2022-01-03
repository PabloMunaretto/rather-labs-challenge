import React from 'react';
import { Web3ReactProvider } from "@web3-react/core";
import Header from '../components/Header';
import Survey from '../components/Survey';
import ContractProvider from './ContractProvider';
import { getLibrary } from "../utils/connectors";

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

import Quiz from "../quiz/QUIZ.json";

export const useStyles = makeStyles((theme) => ({
  back: {
    backgroundColor: theme.palette.secondary.main,
    margin: "0px",
    padding: "0px",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"

  },
  networkButton: {
    display: "flex",
    alignSelf: "center",
    border: "1px solid black",
    width: "50%",
  },
  textPrimary: { color: theme.palette.primary.main },
  textSecondary: { color: theme.palette.secondary.main },
  textWhite: { color: 'white' },
  
}));
const App = () => {
  const { back } = useStyles();

  return (
    <React.Fragment >
    <Container maxWidth="md" fixed >

      <Web3ReactProvider getLibrary={getLibrary}>
          <ContractProvider>
          
          <Header />
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
            <Survey Quiz={Quiz} />
          </Box>

          </ContractProvider>
      </ Web3ReactProvider>

    </Container>
    </React.Fragment>
  )
}

export default App;
