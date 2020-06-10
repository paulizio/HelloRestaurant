import React from "react";
import { Map, TileLayer, Marker, Popup  } from "react-leaflet";
import { Container } from "react-bootstrap";

const Location =()=>{

	const position = [60.168333, 24.95625];

	return(
		<Container>
			<div className="center">
				<Map center={position} zoom={12}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					/>
					<TileLayer
						url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
					/>
					<Marker position={position}>
						<Popup>Mariankatu 2, 00170 Helsinki</Popup>
					</Marker>
				</Map>
			</div>
		</Container>
	);
 
};


export default Location;