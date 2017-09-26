import React from 'react';
import Flat from './flat'

const FlatList = (props) => {

  const renderList = () => {
    return props.flats.map((flat) => {
      return (
        <Flat
          key={flat.lat}
          name={flat.name}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          imageUrl={flat.imageUrl}
          lat={flat.lat}
          lng={flat.lng}
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
