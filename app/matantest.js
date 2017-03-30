import React, { Component } from 'react';
import {View, ScrollView} from 'react-native';
import {FlightCard, HotelCard, CarCard} from './components';
const matantest = () => (
  <ScrollView style={{flex: 1}}>
      <FlightCard
        id={1}
        departs_at={"2015-10-05T20:45"}
        arrives_at={"2015-10-06T09:25"}
        origin={{"airport" : "BOS",
                "terminal" : "E"}}
        destination={{"airport" : "CDG",
                "terminal" : "2E"}}

        flight_number="333"
        operating_airline={"EL-AL"}/>

        <HotelCard
                check_in={"2015-10-06"}
      check_out="2015-10-07"
      property_code="BWTLV023"
      property_name='BEST WESTERN REGENCY SUITES'
      total_price= {{
        "amount" : "240.00",
        "currency" : "USD"
      }}
      booking_info ={{
        reservation_code : "161799940",
        status : "CONFIRMED"
      }}
      traveler_ids={[ "PT1" ]}
      id="ST3"/>



      <CarCard
      id="ST4"
      pick_up={"2015-10-06T16"}
      drop_off="2015-10-07T16"
      origin="TLV"
      provider={{
        "company_code" : "SX",
        "company_name" : "SIXT"
      }}
      car ={{
        "vehicle_info" : {
          "acriss_code" : "MCMR",
          "transmission" : "Manual",
          "fuel" : "Unspecified",
          "air_conditioning" : true,
          "category" : "Mini",
          "type" : "2/4 Door"
        },
        "estimated_total" : {
          "amount" : "33.74",
          "currency" : "USD"
        }
      }}
      booking_info={{
        "reservation_code" : "9815366672",
        "status" : "CONFIRMED"
      }}
       />
  </ScrollView>
)

export default matantest;
