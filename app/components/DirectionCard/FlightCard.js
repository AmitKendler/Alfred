import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Card, CardItem, Content, Icon, Seperator} from 'native-base';
var moment = require('moment');

const FlightCard = ({
  id, departs_at, arrives_at, origin, destination,
  flight_number, operating_airline
}) => {
  let arriveAt = moment(arrives_at);
  let departAt = moment(departs_at);
  let arriveFormatted = arriveAt.format("DD MMM HH:mm");
  let departFormatted = departAt.format("DD MMM HH:mm");
  let timeDiff = departAt.from(arriveAt, true);
  return(
    <ScrollView>
    <Card>
      <CardItem>
        <Icon name="md-plane"/>
        <Text>Arrives at {arriveFormatted}</Text>
      </CardItem>
      <CardItem>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="md-time" />
          <Text>{departFormatted} - {arriveFormatted} ({timeDiff})</Text>
        </View>
      </CardItem>
      <CardItem style={{flexWrap: 'wrap'}}>
        <View>
          <Text> From {origin.airport}, terminal {origin.terminal}  To {destination.airport}, terminal {destination.terminal}
          </Text>
          <Text>#{flight_number} with {operating_airline}</Text>
        </View>
      </CardItem>
    </Card>
  </ScrollView>
  )
}

export default FlightCard;
