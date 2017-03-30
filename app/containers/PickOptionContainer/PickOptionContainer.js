import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SubscribeFlight} from './../../components';

class PickOptionContainer extends Component{
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <SubscribeFlight/>
      </View>
    )
  }
}

export default PickOptionContainer;
