import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>CHECK OUT THESE AMAZING DESTINATIONS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src={require('../images/img-9.jpg')}
                text='Explore the hidden waterfall deep inside the Amazon Jungle.'
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src={require('../images/img-8.jpg')}
                text='Go play in the sand.'
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src={require('../images/img-4.jpg')}
                text='Comptete at the worlds most exclusive football venue.'
                label='Competition'
                path='/services'
                />
                <CardItem 
                src={require('../images/img-5.jpg')}
                text='Relax, at the renowned HOTEL.'
                label='Service'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
