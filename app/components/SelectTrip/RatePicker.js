import React from 'react';
import StarRating from 'react-native-star-rating';

const RatePicker = ({ starCount, onChangeRate }) => {
    return (
        <StarRating
        disabled={false}
        emptyStar={'ios-pricetag-outline'}
        fullStar={'ios-pricetag'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={starCount}
        selectedStar={onChangeRate}
        starColor={'lightblue'}
      />)
}

export default RatePicker
