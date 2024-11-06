import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { RestaurantDetails } from './component/Navbar/Restaurant/RestaurantDetails';
import { Navbar } from './component/common/navbar/Navbar';
import { Footer } from './component/common/footer/Footer';
import { Home } from './component/Navbar/Home/Home';
import { Cart } from './component/cart/Cart';





function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <Navbar/>
       {/* <Home/> */}
      {/* <RestaurantDetails></RestaurantDetails> */}
      <Cart></Cart>
      <Footer></Footer>
      
    </ThemeProvider>
    

    
     
    
  );
}

export default App;
