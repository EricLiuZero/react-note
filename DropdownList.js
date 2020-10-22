import React from 'react';

const DropdownList = ({ data }) => {
  const listItem = item => {
    const handleClick = option => evt => {
      return option.id + evt.target.value;
    };

    return (
      <option key={item.id} onClick={handleClick}>
        {item.name}
      </option>
    );
  };

  return <select>{data.map(listItem)}</select>;
};

DropdownList.propTypes = {
  data: pts.array.isRequired,
};

export default DropdownList;
