import React from 'react';

import './SeasonDisplay.css';

//this is a config objects
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr, It is cold",
    iconName: 'snowflake'
  }
}

const getSeason = (latitude, month) => {
  if( month > 2 && month < 9 ){
    return latitude > 0 ? 'summer' : 'winter';
//if lat is > 0 between march - september => summer in the northern hemisphere(truthy)
//if lat is < 0 between march - september => winter in the southern hemisphere(falsy)
  } else {
//if lat is > 0 between october - february => winter in the northern hemisphere(truthy)
//if lat is < 0 between october - february => summer in the southern hemisphere(falsy)
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay;