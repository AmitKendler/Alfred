import React from 'react';
import {ListView} from 'react-native';
import {FlightCard, HotelCard, CarCard} from './..';

import {sortDirections, DIRECTIONS} from './../../utils';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const renderRow = (data) => {
  switch (data.type) {
    case DIRECTIONS.FLIGHT:
      return <FlightCard {...data} />
    case DIRECTIONS.CAR:
      return <CarCards {...data} />
    case DIRECTIONS.HOTEL:
      return <HotelCard {...data} />
  }
}

const DirectionList = ({data}) => {
  let sortedData = sortDirections(data)
  return (
    <View>
      <ListView
        dataSource={ds.cloneWithRows(sortedData)}
        renderRow={(rowData) => renderRow(rowData)}
      />
    </View>
  )
}

export default DirectionList;
