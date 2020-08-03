import React from 'react'
import {Jumbotron} from "react-bootstrap";
import "../App.css";

const Frontpage=()=>{

	return(
		<section id="home">
		<div className="frontpage" >  
			<h1 style={{fontSize: 60,paddingTop:60,color:"white"}}>The "Hello World" Restaurant</h1>  
<Jumbotron className="transparent">
				<h1 className="welcomeText">Welcome</h1>
				<p style={{fontSize: 20}}>
    Our menu includes italian fine dining such as pizza and pasta. We are more than happy to welcome you to enjoy an extraordinary experience of pizza, pasta and great atmosphere.
				</p>
</Jumbotron>
		</div>
		</section>
	);
};
export default Frontpage;