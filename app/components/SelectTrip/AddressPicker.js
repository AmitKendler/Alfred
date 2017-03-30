import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View } from 'react-native';

const AddressPicker = ({
    onAddressChange
}) => {
    return (
        <View style={{height:70, width:'100%'}}>
            <GooglePlacesAutocomplete placeholder={"Enter your meeting address"}
            minLength={ 2 } // minimum length of text to search
            autoFocus={ false }
            listViewDisplayed='auto' // true/false/undefined
            fetchDetails={ true }
            renderDescription={
                (row) => row.description } // custom description render
            onPress={
                onAddressChange}
            getDefaultValue={
                () => {
                    return '';                 
                }
            }
            query={
                {
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyB1A5rTTn2LtWyhryiJBzxjZYxlBE3B0pw',
                    language: 'en', // language of the results
                    types: '(cities)', // default: 'geocode'
                }
            }
            currentLocation={ false } // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch

            GooglePlacesSearchQuery={
                {
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food',
                }
            }

            filterReverseGeocodingByTypes={
                ['locality', 'administrative_area_level_3'] } // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

            debounce={ 200 } // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
            </View>)
}

export default AddressPicker
