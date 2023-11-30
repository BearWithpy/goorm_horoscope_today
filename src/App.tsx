import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header/Header"
import CardBack from "./components/Card/CardBack";
import CardFront from "./components/Card/CardFront";

function App() {
	return (
		<div>
      <Header />
			<CardBack />
			<CardFront />
		</div>
	)
}

export default App;
