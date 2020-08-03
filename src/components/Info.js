import React from "react";
import {Jumbotron} from "react-bootstrap";
import '../App.css'
const Info=()=>{

	return(

		<div  className="info">
			<h1 style={{fontSize:60}}>About us</h1>    
			<Jumbotron style={{backgroundColor:"lightgrey",margin:20}}>
				<p >
  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</Jumbotron>
		</div>

	);
};

export default Info;