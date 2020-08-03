import React from "react";
import Location from "./Location";
import {Container} from "react-bootstrap";

import '../App.css'
const Contact =()=>{

	return(
<section id="contact">
			<div >
				<div className="contact">
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
</section>

	);
};
export default Contact;