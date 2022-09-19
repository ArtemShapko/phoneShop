import React from 'react';

const Searсh = (props) => {
  return (
    <div>
      <input onChange={(e) => props.setSearchValue(e.target.value)} value={props.searthValue} />
    </div>
  );
};

export default Searсh;
