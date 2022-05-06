import React, {useState} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import redData from "./customer.json";
import Layout from "./layout";
import Modal from 'react-responsive-modal';




const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function App() {
  const [modal, setmodal] = useState(false);
  const [data, setData] = useState(null);
 
  return (
    <Layout>
      <div className="flex h-full" style={{width: '100%', height: '100%'}}>

<div className="w-full mb-4 ml-2 mr-2 shadow-lg">
  <div style={{width: '100%', height: '91.5%'}}>
    <WrappedMap 
    googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyD775Dx91IUOQ5Ut6ksVcdxROpezNp0udg&v=3.exp&libraries=geometry,drawing,places}"}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%`}} />}
    mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
  </div>
  <div className='w-1/2 h-full' >
          <div className=' flex-wrap place-content-center pl-5 pb-12 pt-5' style={{ height: '100vh', display: 'block', overflow: 'scroll', width: '100%' }}>
             
            {redData.features.map(property => (
              
              <div className="w-11/12 mb-4 ml-2 mr-2 shadow-lg " >
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="rounded" src={property.properties.Image} onClick={property.properties.INFO}/>
                  <div className="px-6 py-4">
                    <h4 className=" text-xl mb-2 font-bold text-black" style={{ fontFamily: "Raleway" }} >{property.properties.NAME}</h4>
                    <p className="text-gray-700 text-base" style={{ fontFamily: "Raleway" }} >{property.properties.DESCRIPTION}</p>
                    <hr style={{ borderTop: "3px solid purple" }} />
                  </div>
                </div>
              </div>
            ))}
          </div></div>
      </div>
  {data ? <Modal
        open={modal}
        onClose={() => setmodal(false)}
      >
        <div className="flex">
          <div className="w-full">
            <img src={data.properties.Image} style={{ width: '100px', height: '100px' }} />
          </div>
          <div className="w-full ml-3">
         
            <h1>{data.properties.NAME}</h1>
            <p>{data.properties.DESCRIPTION}</p>
          </div>
        </div>
      </Modal>
        : null}
  </Layout>
  );
} 



function Map() {
  
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  //


  //

  return ( 
  <GoogleMap 
  defaultZoom={10} 
  defaultCenter={{ 
    lat: 40.712776,
    lng: -74.005974 }} 
  >
  
    {redData.features.map((property) => (
    <Marker 
    key={property.properties.ID} 
    position={{
      lat: property.geometry.coordinates[1],
      lng: property.geometry.coordinates[0]
    }} 
    icon={{
      url: `https://cdn-icons-png.flaticon.com/512/3448/3448609.png`,
      scaledSize: new window.google.maps.Size(25, 25)
    }}
    onClick={() => {
      setSelectedProperty(property);
    }}
  
    /> 
    
      
    )) },
    {selectedProperty && (
      
      <InfoWindow

    
    
        onCloseClick={() => {
          setSelectedProperty(null);
        }}
        position={{
          lat: selectedProperty.geometry.coordinates[1],
          lng: selectedProperty.geometry.coordinates[0]
        }}
        
      >
        
        <div style={{height: 'auto'}}>
          <img src={selectedProperty.properties.PICTURES} style={{height: '50vh', width: 'auto'}}/>
         <p><div className="text-xl italic mb-2 mt-2 font-bold" style={{ fontFamily: "Raleway" }}>{selectedProperty.properties.NAME}</div></p>
          <p><div className="mb-2" style={{ fontFamily: "Raleway" }}>{selectedProperty.properties.INFO}</div></p>
          <p><div className="mb-2" style={{ fontFamily: "Raleway" }}>{selectedProperty.properties.LOCATION}</div></p>
          <p><div className="mb-2" style={{ fontFamily: "Raleway" }}>{selectedProperty.properties.HOURS}</div></p>
          <p><div className="mb-2" style={{ fontFamily: "Raleway" }}>{selectedProperty.properties.Cost}</div></p>
          <p>Click <a href={selectedProperty.properties.RES} style={{color: "purple", fontFamily: "Raleway"}}>here</a> to make a reservation</p>
        </div>
        
      </InfoWindow>
    
    )}
    
  </GoogleMap>
  );
        
}
