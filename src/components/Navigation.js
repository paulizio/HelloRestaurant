
import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation=({home,menu,info,contact})=>{

const handleHome=()=>{
	window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}
const handleMenu=()=>{
	window.scrollTo({top: 997, left: 0, behavior: 'smooth' });
}
const handleContact=()=>{
	window.scrollTo({top: 2500, left: 0, behavior: 'smooth' });
}
const handleInfo=()=>{
	window.scrollTo({top: 2050, left: 0, behavior: 'smooth' });
}
	return(

		<Navbar bg="transparent" variant="dark" fixed="top" style={{fontSize:20}}>

			<Nav className="ml-auto">
				<Nav.Link  as={Link} onClick={handleHome} to="/">Home</Nav.Link>
				<Nav.Link as={Link} onClick={handleMenu} to="/menu">Menu</Nav.Link>
				<Nav.Link as={Link} onClick={handleInfo} to="/info">About us</Nav.Link>
				<Nav.Link as={Link} onClick={handleContact} to="/contact">Contact</Nav.Link>
			</Nav>
		</Navbar>

	);
};

export default Navigation;