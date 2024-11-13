import React from 'react'
import ItemCard from '../molecules/ItemCard'
import { dataProductList } from '../../utils/data'

function Items() {
  console.log(dataProductList);
  return (
    <div className='m-1 shadow d-flex flex-wrap'>
        {
          dataProductList.map((data, index)=>{
            return <ItemCard key={index}
            kimlik={data.id} ad={data.ad}
            tur={data.tur} fiyat={data.fiyat}
            image={data.image}
            />
          })
        }
    </div>
  )
}

export default Items