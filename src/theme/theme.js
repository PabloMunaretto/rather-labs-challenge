import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#cfe8fc',
			light: '#a3ff00',
		},
		secondary: {
			main: '#1d9c00',
			light: '#40bf00',
		},
	},
	typography: {
		fontFamily: [
			'Nunito',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		].join(','),
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});