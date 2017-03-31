import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

const ArrangeFlightButton = ({style, onPress}) => {
  return (
    <View style={[style, {justifyContent: 'center'}]}>
      {/* <Text style={{color: 'white', textAlign: 'center', marginBottom: 20, fontSize: 16}}>Have a flight</Text> */}
      <Button full success onPress={() => onPress()}>
        <Text style={{color: 'white'}}>Plan your next trip</Text>
      </Button>
    </View>
  )
}

export default ArrangeFlightButton;
