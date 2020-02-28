import React, { Component } from 'react';
import ReactMapGL  from 'react-map-gl'

export default function MapGl(){
    const [viewport, setViewport] = useState({
        latitude: 125,
        longitude: -95,
        width: "50vw",
        height: "50vh",
        zoom: 10

    })
    return(
        <div>
            <ReactMapGl {...viewport}></ReactMapGl>
        </div>
    )
}