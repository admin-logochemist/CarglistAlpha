import React from "react"
import '../styles/globals.css'
import '../styles/check_out.css'
import '../styles/Profile.css'
import '../styles/Temp.css'
import '../styles/SellerStore.css'
import store from '../components/app/store';
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }) {
  const [authState, setAuthState] = React.useState({
    token: "",
   });
 
   const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);
 
    setAuthState({
     token,
    });
  };
 
  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
   if (!authState.token) {
     return false;
   }
  };
  return (
    <Provider
    value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
    store={store} >
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
