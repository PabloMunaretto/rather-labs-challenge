import { createTheme } from '@material-ui/core/styles';

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
		fontSize: 18,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});