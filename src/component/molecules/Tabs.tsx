import React from 'react'
import Tab from '../atoms/Tab';
import { dataProperties } from '../../utils/data';

function Tabs() {

  return (
    <div className='row shadow m-2 p-3'>
        {dataProperties.map((prop, index)=>{
            return <Tab key={index} tabName={prop}/>
        })
        }
        
    </div>
    
    
  )
}

export default Tabs