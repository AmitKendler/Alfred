import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

const TripChangesNotification = ({ style, onPress }) => {
    return (
        <View>
        <Card style={{flex:1}}>
            <CardItem>
                <Body>
                    <Text>
                        There has been a change in one of your trip's flights
                    </Text>
                </Body>
            </CardItem>
        </Card>
          <Card style={{flex:2}}>
            <CardItem>
                <Body>
                    <Text>
                       options
                    </Text>
                </Body>
            </CardItem>
        </Card>
        </View>
    )
}

export default TripChangesNotification;
