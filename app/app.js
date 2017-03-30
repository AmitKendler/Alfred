import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PickOptionContainer } from './containers';
import { TripSelectorContainer } from './containers';

const app = () => (
  <View style={{flex: 1}}>
    <PickOptionContainer/>
  {/* </View> */}
    {/* <View style={{flex: 1}}>
    <TripSelectorContainer/> */}
  </View>
)

export default app;
