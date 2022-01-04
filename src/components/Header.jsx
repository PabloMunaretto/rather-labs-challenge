/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useContext, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { SContractContext } from '../app/ContractProvider';
import { configureNetwork, formatAccount } from '../utils/utils';

import { Button, AppBar, Typography } from '@material-ui/core';
import { useStyles } from '../app/App';


const Header = () => {
	const { spacing, outerSpacing, headerFlex, networkButton, radius, textPrimary, column } = useStyles();
	const [balance, setBalance] = useState(null);
	const { surveyContract } = useContext(SContractContext);
	const { account, library, chainId } = useWeb3React();
    
	if (surveyContract) {
		const balanceOf = async(account) => {
			const balance = await surveyContract.methods.balanceOf(account).call(); 
			setBalance(balance);
		};
		balanceOf(account);
	}
    
	return (
		<React.Fragment>

			{
				account && chainId === 3 &&
					<AppBar position="static" className={`${outerSpacing} ${radius}`} >
						<div className={`${spacing} ${headerFlex}`}>
							<Button>
								<Typography variant="h5" className={`${textPrimary}`}>{ formatAccount(account) }</Typography>
							</Button>
							<Typography variant="h5" className={`${headerFlex}`}>Quiz balance: { balance }</Typography>
						</div>
					</AppBar>
			}
			{
				account && chainId !== 3 && 
					<div className={column}>

						<Button
                    	className={`${spacing} ${networkButton} ${radius}`}
                    	onClick={() => configureNetwork(library)}
						>
                    	<Typography variant="h5">Cambiar network</Typography>
						</Button>
					</div>
			}

		</React.Fragment>
	);
};


export default Header;
