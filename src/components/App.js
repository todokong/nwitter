import { Fragment, useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

function App() {
  const [ init, setInit] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  console.log(`currentUser ${authService.currentUser}`)
  console.log(isLoggedIn)
  useEffect(() => {
    authService.onAuthStateChanged(user => { 
      console.log(`user ${user}`)
      if(user){
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])
  return (
    <Fragment>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initialzing..."}
      <footer>&copy; {new Date().getFullYear()} Nwiiter</footer>
    </Fragment>
  );
}

export default App;
