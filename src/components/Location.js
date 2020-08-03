import React ,{useState} from "react";
import L from 'leaflet';
import '../App.css'
const Location =()=>{

	// const position = [60.168333, 24.95625];
	const [markerPosition,setMarkerPosition]=useState({
		lat:60.168333,
		lng:24.95625
	})
	const mapRef = React.useRef(null);
	React.useEffect(() => {
	  mapRef.current = L.map('map', {
		center: [60.168333, 24.95625],
		zoom: 16,
		layers: [
		  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution:
			  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		  }),
		]
	  });
	}, []);
	
	// add marker 
	 const markerRef = React.useRef(null);
	   React.useEffect(    () => {
		    if (markerRef.current) {
				 markerRef.current.setLatLng(markerPosition);
				} else {
			 markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
			 }
			},
		[markerPosition]  );
	  

	return(	
		
		<div style={{width:400,height:300,margin:"auto"}} id="map">			
		</div>

	);
 
};


export default Location;