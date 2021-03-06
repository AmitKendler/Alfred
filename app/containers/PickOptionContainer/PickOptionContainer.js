import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { SubscribeFlight, ArrangeFlightButton, ShowMyTrips } from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';
import { Actions } from 'react-native-router-flux';
import media from './../../media';
import { ListItem } from 'native-base';

class PickOptionContainer extends Component {
    render() {
        return (
            <NavbarContainer styleContainer={{flex: 1}} title={'Hello, joe!'}>
         <Image
           resizeMode={'cover'}
           source={media.backgrounds.mainViewBackground}
           style={{flex: 1, height: null, width: null, backgroundColor: 'white'}}>

        <SubscribeFlight
          style={{flex: 1}}
          onSubscribe={(a) => alert("Subsribed to flight " + a)}/>

      <KeyboardAvoidingView behavior={'position'} contentContainerStyle={{flex: 1}} style={{flex: 1}}>
        <Text style={{flex: 1, textAlign: 'center'}}>Or</Text>

        <ArrangeFlightButton
          onPress={() => Actions.tripSelector()}
          style={{flex: 1, padding: 20}} />
        <ShowMyTrips onShowPressed={() => Actions.myTrips()} />
      </KeyboardAvoidingView>

        </Image>
      </NavbarContainer>
        )
    }
}

export default PickOptionContainer;
