import React from "react";
import "./App.css";
import Card from "components/Card/Card";
import { Footer, Header } from "containers";

const App = (): React.JSX.Element => {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
