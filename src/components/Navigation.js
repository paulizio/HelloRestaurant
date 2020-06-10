
import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation=()=>{

	return(

		<Navbar bg="light" variant="light"  >

			<Nav >
				<Nav.Link as={Link} to="/">Home</Nav.Link>
				<Nav.Link as={Link} to="/menu">Menu</Nav.Link>
				<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
				<Nav.Link as={Link} to="/info">About us</Nav.Link>
			</Nav>
		</Navbar>

	);
};

export default Navigation;