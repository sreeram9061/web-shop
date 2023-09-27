import React from 'react'
import { useAppSelector } from '../store'
import Card from '../components/Card'
import Emty from '../components/Emty'

const Favorite = () => {
    const favoriteItems=useAppSelector(state=>state?.favoriteReducer?.favoriteItems)


  return(
    <>
        {favoriteItems.length==0?(
            <div className="emty_favorites">
                <Emty section='Favorite' />
            </div>
        ):(
        <>
            <div className='favorite'>
                {
                    favoriteItems.map(item=>{
                        return (
                            <Card data={item}/>
                        )
                    })
                }
            </div>
            <div className="bottom" style={{height:"50px"}}>
            </div>
        </>
        )}

    </>
  )
}

export default Favorite
