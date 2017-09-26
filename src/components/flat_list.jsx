import React from 'react';
import Flat from './flat'

const FlatList = (props) => {

  const renderList = () => {
    return props.flats.map((flat) => {
      return (
        <Flat
          key={flat.lat}
          flat={flat}
          handleClick={props.handleClick}
        />
      )
    })
  }

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  )
}

export default FlatList;
