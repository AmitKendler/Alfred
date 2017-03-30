import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

const ArrangeFlightButton = ({style, onPress}) => {
  return (
    <View style={[style, {justifyContent: 'center'}]}>
      <Button full onPress={() => onPress()}>
        <Text>Arrange a flight</Text>
      </Button>
    </View>
  )
}

export default ArrangeFlightButton;
