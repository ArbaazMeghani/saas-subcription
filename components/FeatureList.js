import React from 'react';
import Feature from './Feature';

const FeatureList = ({features}) => {
  return (
    features.map(feature => <Feature value={feature} />)
  );
}

export default FeatureList;