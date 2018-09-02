import React from 'react';
import {Marker,InfoWindow} from "react-google-maps"

export class AroundMarker extends React.Component{
    state = {
        isOpen: false,
    }

    onToggleOpen = () => {
        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen,
            };
        });
    }
    render(){
        const { location } = this.props.post;
        const { lat, lon } = location;
        return(
            <Marker
                position={{ lat, lng: lon }}
                onMouseOver={this.onToggleOpen}
                onMouseOut={this.onToggleOpen}>
            {this.state.isOpen ?
                <InfoWindow>
                <div>content</div>
                </InfoWindow>
                : null
                }
        </Marker>
        );
    }
}