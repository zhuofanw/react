import React from 'react';
import {withScriptjs,
    withGoogleMap,
    GoogleMap,
} from "react-google-maps";
import {POS_KEY} from "../constants"
import {AroundMarker} from "./AroundMarker"

class AroundMap extends React.Component{
    render(){
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));//get current lat,lon from localStorage
        return(
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat, lng: lon }}
            >
                {
                    this.props.posts.map((post) => <AroundMarker key={post.url} post={post}/>)
                }
            </GoogleMap>
        );
    }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));