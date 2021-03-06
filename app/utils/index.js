var moment = require('moment')

const DIRECTIONS = {
    FLIGHT: 'flight',
    CAR: 'car',
    HOTEL: 'hotel '
}

const sortDirections = (flight, hotel, car ) => {
    let allDirs = [];
    flight && allDirs.push(Object.assign({}, flight, {type: DIRECTIONS.FLIGHT}))
    hotel && allDirs.push(Object.assign({}, hotel, {type: DIRECTIONS.HOTEL}))
    car && allDirs.push(Object.assign({}, car, {type: DIRECTIONS.CAR}))
    // flights && flights.forEach(f => allDirs.push({ type: 'flight', ...f }));
    // cars && cars.forEach(c => allDirs.push({ type: 'car', ...c }))
    // hotels && hotels.forEach(h => allDirs.push({ type: 'hotel', ...h }));

    // sort the directions by date, it might be a fligh, an hotel
    // or a car rent
    allDirs.sort((d1, d2) => {
        //        flight           car rent
        let m1 = getStartTime(d1);
        let m2 = getStartTime(d2);
        let moment1 = moment(m1);
        let moment2 = moment(m2);

        return moment1.isBefore(moment2) ? 1 : -1;
    })

    return allDirs;
}

const sortDirectionOfMine = ({hotel, flight}) => {
  let allDirs = [];

  if (moment(hotel.check_in).isAfter(moment(flight.arrival_date))){
    allDirs.push(Object.assign({}, hotel, {type: DIRECTIONS.HOTEL}));
    allDirs.push(Object.assign({}, flight, {type: DIRECTIONS.FLIGHT}));
  }
  else{
    allDirs.push(Object.assign({}, flight, {type: DIRECTIONS.FLIGHT}));
    allDirs.push(Object.assign({}, hotel, {type: DIRECTIONS.HOTEL}));
  }

  return allDirs;
}

const getStartTime = (dir) =>
(dir.outbound && moment(dir.outbound.flights[0].departs_at).format("YYYY-MM-DD")) ||
(dir.rooms && dir.rooms[0].rates[0].start_date) ||
(dir.check_in) ||
(moment(dir.departure_datetime).format("YYYY-MM-DD"));

const getEndTime = (dir) =>
(dir.outbound && moment(dir.outbound.flights[0].arrives_at).format("YYYY-MM-DD")) ||
(dir.rooms && dir.rooms[0].rates[0].end_date) ||
(dir.check_out) ||
(moment(dir.arrival_date).format("YYYY-MM-DD"))



export { sortDirections, DIRECTIONS, getStartTime, getEndTime, sortDirectionOfMine }
