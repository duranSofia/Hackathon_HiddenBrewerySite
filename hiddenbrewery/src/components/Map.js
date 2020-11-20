//React 
import React, { useState, useEffect } from "react";

//Dependencies 
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  InfoWindow,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps/";
import Geocode from "react-geocode";

//APIKey 
import GoogleKey from "../key"; 

//CSS 
import "./Map.css"



Geocode.setApiKey(GoogleKey);


const MarkerComponent = (props) => {
    const [isShown, setIsShown] = useState(true);
    const [isExpand, setIsExpand] = useState(false);
    const [isLat, setIsLat] = useState(0);
    const [isLng, setIsLng] = useState(0)
    
    useEffect(()=> {
        props.place.street !== "" && props.place.latitude == null && Geocode.fromAddress(props.place.street)
        .then(
            response => {
               const { lat, lng } = response.results[0].geometry.location;
               setIsLat(lat);
               setIsLng(lng);
               },
            error => {
               console.error(error);
               })
            
    },[])

    return props.place.latitude != null ?
      <Marker 
      
      position={{ lat: Number(props.place.latitude) , lng: Number(props.place.longitude) }}   
      onClick={isExpand ? () => setIsExpand(false) : () => setIsExpand(true)}
      > 
      {isExpand === true &&
        <InfoWindow
          marker={isShown}
          visible={isShown}>
              <div>
      <h4 className="mapCard">{props.place.name}</h4>
      {props.place.street !== "" && <p>Address: {props.place.street}</p>}
            </div>
            </InfoWindow>}
    </Marker> : <Marker 
      
      position={{ lat: isLat, lng: isLng}}   
      onClick={isExpand ? () => setIsExpand(false) : () => setIsExpand(true)}
      > 
      {isExpand === true &&
        <InfoWindow
          marker={isShown}
          visible={isShown}>
              <div>
      <h4 className="mapCard">{props.place.name}</h4>
      {props.place.street !== "" && <p>Address: {props.place.street}</p>}
            </div>
            </InfoWindow>}
    </Marker>
    
  }






const MyMapComponent = 

  compose(
    
    withProps({
        googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${GoogleKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{position:"relative", right: "300px", display: "flex", justifyContent: "center",  height: `100%`, width: "100%" }} />,
    containerElement: <div style={{ height: `600px`, width: "100%" }} />,
    mapElement: <div style={{ height: `100%`, width: "100%" }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={9} defaultCenter={{}} center={props.userCoordinates}>
                  {props.places.map((place, index)=> {
                    
                  return (
                    <>
                      <MarkerComponent place={place} />
                     </>
                    )
                  })
                }
      
    </GoogleMap>
  ));


export default MyMapComponent; 