import React, { Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


export class MapContainer extends Component {
      constructor(props) {
    super(props);
    this.state = { 
        address: '',
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: {
            lat: 51.753666, 
            lng: -0.4749016
        },
        
    }
      };
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
          console.log('Success', latLng)
          this.setState({ address })
          this.setState({ mapCenter: latLng })
      })
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
        <div className='googlemaps'>
            <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <Map google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
          }}
          center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
          }}
          >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('hidden-code')
})(MapContainer)
