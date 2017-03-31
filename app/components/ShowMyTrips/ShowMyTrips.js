import React from 'react';
import {Button, Text} from 'native-base';

const ShowMyTrips = ({onShowPressed}) => (
  <Button onPress={() => onShowPressed()} warning full style={{marginHorizontal: 20, marginVertical: 10}}>
    <Text style={{color: 'white'}}>
      Show my trips
    </Text>
  </Button>
);

export default ShowMyTrips
