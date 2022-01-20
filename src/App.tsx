import AppRouter from './routes/AppRouter';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultTheme from './utils/styles/DefaultTheme';
import React from 'react';
import { ThemeProvider } from '@mui/material';

function App() {
	return (
		<>
			<ThemeProvider theme={DefaultTheme}>
				<CssBaseline />
				<AppRouter />
			</ThemeProvider>
		</>
	);
}

export default App;
