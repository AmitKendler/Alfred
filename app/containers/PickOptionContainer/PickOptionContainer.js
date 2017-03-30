import React, {Component} from 'react';
import {View, Text, Image, KeyboardAvoidingView} from 'react-native';
import {SubscribeFlight, ArrangeFlightButton} from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';
import {Actions} from 'react-native-router-flux';
import media from './../../media';

class PickOptionContainer extends Component{
  render(){
    return (
      <NavbarContainer styleContainer={{flex: 1}} title={'Welcome!'}>
         {/* <Image
           resizeMode={'cover'}
           source={media.backgrounds.mainViewBackground}
           style={{flex: 1, height: null, width: null, backgroundColor: 'white'}}> */}
           
      {/* <KeyboardAvoidingView behavior={'position'} contentContainerStyle={{flex: 1}} style={{flex: 1}}> */}

        <ArrangeFlightButton
          onPress={() => Actions.tripSelector()}
          style={{flex: 1, padding: 20}} />

          <Text style={{textAlign: 'center'}}>Or</Text>

          <SubscribeFlight
            style={{flex: 1}}
            onSubscribe={(a) => alert(a)}/>

      {/* </KeyboardAvoidingView> */}

        {/* </Image> */}
      </NavbarContainer>
    )
  }
}

export default PickOptionContainer;
