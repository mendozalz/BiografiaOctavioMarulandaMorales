import React from 'react';
import LibrosItem from './LibrosItem.astro';

const LibrosItemWrapper = (props) => {
  return <LibrosItem {...props} />;
};

export default LibrosItemWrapper;