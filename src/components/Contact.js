import React from "react";
import Location from "./Location";
import {Container,Jumbotron } from "react-bootstrap";

import '../App.css'
const Contact =()=>{

	return(

			<div>
				<div className="helsinki">
				<h1>Contact information</h1>
				<ul >
						<ul>Phonenumber: 040-1234567</ul>
						<ul>Address: Mariankatu 2, 00170 Helsinki</ul>
					</ul>
					<Container style={{alignItems:"center"}}>
					<Location/>
					</Container>
			</div>
</div>

	);
};
export default Contact;