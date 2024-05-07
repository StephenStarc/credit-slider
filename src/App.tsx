import { Grid, ThemeProvider } from '@mui/material';
import theme from './Theme';
import AutoTopUp from './components/AutoTopUp';
import ContextProvider from './context/ContextProvider';


function App() {
  return (
    // Wraping the components with the ContextProvider and ThemeProvider
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}
          
          p={3}
        >
          {/* Grid item containing the AutoTopUp component */}
          <Grid item>
            <AutoTopUp />
          </Grid>
        </Grid>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
