const sortDirections = ({ flights, cars, hotels }) => {
    let allDirs = [];
    flights && flights.forEach(f => allDirs.push({ type: 'flight', ...f }));
    cars && cars.forEach(c => allDirs.push({ type: 'car', ...c }))
    hotels && hotels.forEach(h => allDirs.push({ type: 'hotel', ...h }));

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

const getStartTime = (dir) => dir.departs_at || dir.pick_up || dir.check_in
const getEndTime = (dir) => dir.arrives_at || dir.drop_off || dir.check_out

const DIRECTIONS = {
    FLIGHT: 'flight',
    CAR: 'car',
    HOTEL: 'hotel '
}
export { sortDirections, DIRECTIONS, getStartTime, getEndTime }
