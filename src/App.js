import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import { RestaurantDetails } from "./component/Navbar/Restaurant/RestaurantDetails";
import { Navbar } from "./component/common/navbar/Navbar";
import { Footer } from "./component/common/footer/Footer";
import { Home } from "./component/Navbar/Home/Home";
import { Cart } from "./component/cart/Cart";
import { Profile } from "./component/profile/Profile";
import { CustomerRouter } from "./Routers/CustomerRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./component/State/Authentication/Action";
;

function App() {
  const dispatch=useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser( auth.jwt || jwt))
  },[auth.jwt])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <CustomerRouter />
    </ThemeProvider>
  );
}

export default App;
