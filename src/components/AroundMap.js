import React from 'react';
import {withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import {POS_KEY} from "../constants"

class AroundMap extends React.Component{
    render(){
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));//get current lat,lon from localStorage
        return(
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat, lng: lon }}
            >
                <Marker
                    position={{ lat, lng: lon + 0.01 }}
                />
                <Marker
                    position={{ lat: lat + 0.01, lng: lon - 0.01 }}
                />
            </GoogleMap>
        );
    }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));