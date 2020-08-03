import React from 'react'
import "./App.css";
import Navigation from "./components/Navigation";
import Frontpage from "./components/Frontpage";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Contact from "./components/Contact";

const App=()=>{

	return(   
			<div>
				<Navigation/>
				<Frontpage/>
				<Menu/>
				<Info/>	
				<Contact/>
				</div>


	);
};


export default App;
