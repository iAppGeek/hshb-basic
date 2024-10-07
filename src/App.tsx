import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AppAppBar from './Layout/AppAppBar'
import Hero from './Layout/Hero';
import OurStaff from './Layout/OurStaff';
import Contact from './Layout/Contact';
import Divider from '@mui/material/Divider';
import Jobs from './Layout/Jobs';

function App() {
  const defaultTheme = createTheme({ palette: { mode: 'light', primary: {main: "#001489"} } });

  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Hero />
        <Divider />
        <OurStaff />
        <Divider />
        <Jobs />
        <Divider />
        <Contact />
      </ThemeProvider>
    </div>
  )
}

export default App
