import React from "react";
import Pasta from "./Pasta";
import Pizza from "./Pizza";
import Navigation from './Navigation'
const Menu=()=>{

	return(
		<section id="menu">
		<div className="menu" >
			<Navigation/>
			<h2 className="otsikko">Menü</h2>
			<Pasta/>
			<Pizza/>
		</div>
	</section>
	);
};
export default Menu;