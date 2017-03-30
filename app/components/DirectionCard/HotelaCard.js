import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Card, CardItem, Content, Icon, Seperator} from 'native-base';
var moment = require('moment');

const HotelCard = ({
  check_in, check_out, property_code, property_name, total_price,
  booking_info, id
}) => {
  let checkIn = moment(check_in);
  let checkOut = moment(check_out);
  let checkInFormat = checkIn.format("DD MMM");
  let checkOutFormat = checkOut.format("DD MMM");
  let timeDiff = checkIn.from(checkOut, true);
  return(
    <ScrollView>
      <Card>
        <CardItem>
          <Icon name="md-home"/>
          <Text>Check in at {checkInFormat}</Text>
        </CardItem>
        <CardItem>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="md-time" />
            <Text>{checkInFormat} - {checkOutFormat} ({timeDiff}), {total_price.amount}{total_price.currency}</Text>
          </View>
        </CardItem>
        <CardItem style={{flexWrap: 'wrap'}}>
          <View>
            <Text>In {property_name}</Text>
          </View>
        </CardItem>
      </Card>
    </ScrollView>
  )
}

export default HotelCard;
