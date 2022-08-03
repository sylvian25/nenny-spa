import React from 'react'
import Style from '../src/cando.module.css'

const ServiceCard = ({name,img,message}) => {
  return (
                    <div className={Style.card}>
                        <div className={Style.fish}>{name}</div>
                        <img src={img} alt="img" />
                        <div>{message}</div>
                        </div>
  )
}

export default ServiceCard