import { Fragment, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

function App() {
  console.log(authService)
  console.log(authService.currentUser)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <Fragment>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwiiter</footer>
    </Fragment>
  );
}

export default App;
