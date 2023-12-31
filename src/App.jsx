import Background from "./components/background.component";
import Navbar from "./components/navbar.component";
import Home from "./pages/home.page";
import Events from "./pages/events.page";
import History from "./pages/history.page";
import Articles from "./pages/articles.page";
import Spinner from "./components/spinner.component";

import { Suspense } from "react";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Home />
      <Articles />
    </>
  );
}

export default App;
