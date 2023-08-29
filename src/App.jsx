import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => {
return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      Home Body Container
    </div>
    <Footer />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
