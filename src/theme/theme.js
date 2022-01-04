import { createTheme, makeStyles } from '@material-ui/core/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#cfe8fc',
			dark: '#B5DCE8',
		},
		secondary: {
			main: '#FAFCFD',
			light: '#40bf00',
		},
	},
	typography: {
		fontFamily: [
			'Fugaz One', 'cursive'
		].join(','),
		// fontSize: 18,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});

export const useStyles = makeStyles((theme) => ({
	width: { width: '100%' },
	surveyBox: {
		position: 'relative',
		marginTop: theme.spacing(6),
		backgroundColor: theme.palette.primary.dark,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '10px 10px 20px gray',
		[theme.breakpoints.down('sm')]: {
			width: '350px',
		},
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
	enRows: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
			padding: theme.spacing(2),
		}
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
		alignItems: 'center',
		height: '100vh',
	},
	quizOptions: {
		width: '80%',
		display: 'flex',
		justifyContent: 'space-around'
	},
	networkButton: {
		display: 'flex',
		alignSelf: 'center',
		boxShadow: '5px 5px 10px gray',
		width: '50%',
	},
	imgContainer: {
		maxWidth: '600px',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '350px',
		},
	},
	img: { 
		maxWidth: '600px',
		margin: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			maxWidth: '320px',
		}
 	},
	textPrimary: { 
		color: 'dark',
		[theme.breakpoints.up('lg')]: {
			fontSize: 36,
		},
		[theme.breakpoints.down('lg')]: {
			fontSize: 24,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 14,
		},
	},
	textSecondary: { color: theme.palette.secondary.main },
	border: { border: `1px solid ${theme.palette.primary.dark}` },
	darkerBox: {
		backgroundColor: theme.palette.primary.main,
	},
	ownShadow: { 
		boxShadow: '5px 5px 10px gray',
	},
}));