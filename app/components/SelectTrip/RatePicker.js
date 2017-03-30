import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';

const RatePicker = () => {
    return (
        <View style={{flexDirection : 'row'}}>
      <Icon  style={styles.stars} name="ios-star-outline" />
      <Icon  style={styles.stars} name="ios-star-outline" />
      <Icon  style={styles.stars} name="ios-star-outline" />
      <Icon  style={styles.stars} name="ios-star-outline" />
      <Icon  style={styles.stars} name="ios-star-outline" />
    </View>
    )
}

const styles = {
    stars: {
        marginRight: 22,
        fontSize: 50
    }
}

export default RatePicker
