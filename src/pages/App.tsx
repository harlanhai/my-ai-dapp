import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@/utils/muiTheme';

import Home from '@pages/Home/Home'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Home />
    </ThemeProvider>
  );
}

App.whyDidYouRender = true; // Enable WDYR for this component
export default App;
