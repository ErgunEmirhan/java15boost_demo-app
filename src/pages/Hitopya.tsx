import React from 'react'
import Tabs from '../component/molecules/Tabs'
import Items from '../component/organisms/Items'
import GreenHeartButton from '../component/atoms/GreenHeartButton'
import ItemCard from '../component/molecules/ItemCard'

function Hitopya() {
  return (
    <div className='container-fluid border'>
        <Tabs/>
        <div className='row'>
            <Items/>
        </div>
        
    </div>
  )
}

export default Hitopya