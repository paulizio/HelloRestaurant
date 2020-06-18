import React from "react";
import Location from "./Location";
import {Container,Jumbotron } from "react-bootstrap";

const Contact =()=>{

	return(
		<Container >
			<div><h1 className="otsikko">Contact information</h1>
				<Jumbotron className="jumbotron">
					<ul className="left" >
						<ul>Phonenumber: 040-1234567</ul>
						<ul>Address: Mariankatu 2, 00170 Helsinki</ul>
					</ul>
					<Location />
				</Jumbotron>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</div>


		</Container>
	);
};
export default Contact;