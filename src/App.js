import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { RestaurantDetails } from './component/Navbar/Restaurant/RestaurantDetails';
import { Navbar } from './component/common/navbar/Navbar';





function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <Navbar/>
       
      {/* <Home></Home>   */}
      <RestaurantDetails></RestaurantDetails>
    </ThemeProvider>
    

    
     
    
  );
}

export default App;
