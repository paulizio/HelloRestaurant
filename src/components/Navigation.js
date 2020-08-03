
import React from "react";
import {Nav,Navbar} from "react-bootstrap";
const Navigation=()=>{
	return(

		<Navbar bg="transparent" variant="dark" fixed="top" style={{fontSize:20}}>
			<Nav className="ml-auto">
				<Nav.Link  class="nav-item" class="nav-link js-scroll-trigger" href="#home">Home</Nav.Link>
				<Nav.Link  class="nav-item" class="nav-link js-scroll-trigger" href="#menu">Menu</Nav.Link>
				<Nav.Link  class="nav-item" class="nav-link js-scroll-trigger" href="#info">About us</Nav.Link>
				<Nav.Link  class="nav-item" class="nav-link js-scroll-trigger" href="#contact">Contact</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default Navigation;