import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap,} from "react-google-maps";
import {POS_KEY} from "../constants"
import {AroundMarker} from "./AroundMarker"

class AroundMap extends React.Component{
    reloadMarkers = () => {
        const mapCenter = this.map.getCenter();
        const center = { lat: mapCenter.lat(), lon: mapCenter.lng()};
        const radius = this.getRadius();
        this.props.loadNearbyPosts(center, radius);
    }
    getRadius = () => {
        const google = window.google;
        const center = this.map.getCenter();
        const bounds = this.map.getBounds();
        if (center && bounds) {
            const ne = bounds.getNorthEast();
            const right = new google.maps.LatLng(center.lat(), ne.lng());
            return 0.001 * google.maps.geometry.spherical.computeDistanceBetween(center, right);
        }
    }

    saveMapRef = (mapInstance) => {
        this.map = mapInstance;
    }
    render(){
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));//get current lat,lon from localStorage
        return(
            <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat, lng: lon }}
                ref = {this.saveMapRef}
                onDragEnd={this.reloadMarkers}
                onZoomChange={this.reloadMarkers}
            >
                {this.props.posts.map((post) => <AroundMarker key={post.url} post={post}/> )}
            </GoogleMap>
        );
    }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));