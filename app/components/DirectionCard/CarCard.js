import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Card, CardItem, Content, Icon, Seperator} from 'native-base';
var moment = require('moment');

const CarCard = ({
  pick_up, drop_off, origin, provider, car: {estimated_total}
}) => {
  let pickUp = moment(pick_up);
  let dropOff = moment(drop_off);
  let pickUpFormat = pickUp.format("DD MMM HH:mm");
  let dropOffFormat = dropOff.format("DD MMM HH:mm");
  let timeDiff = pickUp.from(dropOff, true);
  return(
    <ScrollView>
      <Card>
        <CardItem>
          <Icon name="md-car"/>
          <Text>Pick up at {pickUpFormat}</Text>
        </CardItem>
        <CardItem>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="md-time" />
            <Text>{pickUpFormat} - {dropOffFormat} ({timeDiff})</Text>
          </View>
        </CardItem>
        <CardItem>
          <Text>
            {estimated_total.amount}{estimated_total.currency}
          </Text>
        </CardItem>
        <CardItem style={{flexWrap: 'wrap'}}>
          <View>
            <Text>Of {provider.company_name}</Text>
          </View>
        </CardItem>
      </Card>
    </ScrollView>
  )
}

export default CarCard;
