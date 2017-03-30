import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

const TripChangesNotification = ({ style, onPress }) => {
    return (
        <View style={[style, {justifyContent: 'center'}]}>
      <Button>
      <Text>click me</Text>
      </Button>
    </View>
    )
}

export default TripChangesNotification;
