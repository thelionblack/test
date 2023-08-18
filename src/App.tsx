import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import { Layout } from './layout/Layout';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HomePage } from './pages/HomePage';

export const App = () => {
  const { theme, colorMode } = useMode();
  const countRef = useRef(0);

  console.log(++countRef.current);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
