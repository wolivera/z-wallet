import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './containers/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { SnackbarNotification } from './components/Snackbar';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <SnackbarNotification />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
