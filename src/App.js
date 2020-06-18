import React from "react";
import {Container} from "react-bootstrap";
import "./App.css";
import Navigation from "./components/Navigation";
import Frontpage from "./components/Frontpage";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Contact from "./components/Contact";
import {
	Switch,
	Route,
} from "react-router-dom";

const App=()=>{
	return(   

			<Container fluid  className="taustakuva" >
				<Navigation/>
				<Switch>
					<Route path="/menu">
						<Menu/>
					</Route>
					<Route path="/info">
						<Info/>
					</Route>
					<Route path="/contact">
						<Contact/>
					</Route>
					<Route path="/">
						<Frontpage/>
					</Route>
				</Switch>
			</Container>

	);
};


export default App;
