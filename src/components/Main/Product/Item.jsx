import React from 'react'
import classes from './Item.module.css'

const Item = (props) => {
  return (
    <div className={classes.item}>
        <img src={props.src} alt="foodpicture" className={classes.pic} />
        <div className={classes.tag}>
            <p>{props.title}</p>
            {!props.cat&&<p>Rs {props.price}</p>}
        </div>
      </div>
  )
}

export default Item