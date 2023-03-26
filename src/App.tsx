import { ThemeProvider } from 'styled-components';

import AppContent from 'container/app-content/AppContent';
import GlobalStyles from 'styles/Global';
import { theme } from 'styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContent />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
