import React from 'react';
import {View, Text, Animated} from 'react-native';
import {ListView} from 'react-native';
import {FlightCard, HotelCard, CarCard} from './..';

import {sortDirections, DIRECTIONS} from './../../utils';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const renderRow = (data) => {
  switch (data.type) {
    case DIRECTIONS.FLIGHT:
      return <FlightCard {...data.outbound.flights[0]} />
    case DIRECTIONS.CAR:
      return <CarCard {...data} />
    case DIRECTIONS.HOTEL:
      return <HotelCard {...data} />
  }
}

const DirectionList = ({data, animatedVal, style}) => {
  // let sortedData = sortDirections(data)
  return (
    <Animated.View style={style, [{transform: [
      {
        scale: animatedVal.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        })
      },
      {
        translateX: animatedVal.interpolate({
          inputRange: [0,1],
          outputRange: [
            500, 0
          ]
        }),
      },
      {
        translateY: animatedVal.interpolate({
          inputRange: [0,1],
          outputRange: [
            200, 0
          ]
        })
      }
    ]}]}>
      <ListView
        style={style}
        dataSource={ds.cloneWithRows(data)}
        renderRow={(rowData) => (
          <View>
            {renderRow(rowData)}
          </View>
        )}
      />
    </Animated.View>
  )
}

export default DirectionList;
