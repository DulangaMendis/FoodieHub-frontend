import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Home } from './component/Navbar/Home/Home';
import { RestaurantDetails } from './component/Navbar/Restaurant/RestaurantDetails';





function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <Navbar></Navbar> 
      {/* <Home></Home>   */}
      <RestaurantDetails></RestaurantDetails>
    </ThemeProvider>
    

    
     
    
  );
}

export default App;
