import React from 'react';
import Flat from './flat'

const FlatList = (props) => {

  const renderList = () => {
    return props.flats.map((flat) => {
      return (
        <Flat
          key={flat.name}
          name={flat.name}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          imageUrl={flat.imageUrl}
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
