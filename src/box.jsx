import React from 'react'

const Box = (props)=>{
    return (
        <>
        <div onClick={()=>{
            props.tap(props.item.id)
        }} className="box">
          {props.item.val}
        </div>
        </>
    )
}
export default Box