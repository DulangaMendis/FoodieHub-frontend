import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { RestaurantDetails } from './component/Navbar/Restaurant/RestaurantDetails';
import { Navbar } from './component/common/navbar/Navbar';
import { Footer } from './component/common/footer/Footer';
import { Home } from './component/Navbar/Home/Home';
import { Cart } from './component/cart/Cart';
import { Profile } from './component/profile/Profile';
import { CustomerRouter } from './Routers/CustomerRouter';





function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      {/* <Navbar/>
       <Home/>
      <RestaurantDetails></RestaurantDetails>
      <Cart></Cart>
      <Profile/> */}
      <CustomerRouter/>
      <Footer></Footer>
      
    </ThemeProvider>
    

    
     
    
  );
}

export default App;
