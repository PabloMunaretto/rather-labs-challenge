// import Web3 from "web3";
import Web3 from "web3/dist/web3.min";
import { InjectedConnector } from "@web3-react/injected-connector";

import SurveyContract from "../abis/survey.json";
import { SURVEY_ADDRESS } from "./utils";

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 97, 250],
});
export const getLibrary = (provider) => {
    return new Web3(provider); 
}

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