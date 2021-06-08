import React,{useState,useRef} from 'react'
import './style.css'
const WelcomeScreen = (props)=>{
    const [player1,setPlayer1] = useState('')
    const [player2,setPlayer2] = useState('')
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const handleStart = ()=>{
        if(player1.length<=0){
            inputRef1.current.placeholder = "Invalid Name"
        }
        if(player2.length<=0){
            inputRef2.current.placeholder = "Invalid Name"
        }
        if(player1.length>0 && player2.length>0){
            props.information(player1,player2)
        }
    }
    return (
        <>
        <div className="welcome-screen">
            <h3>Player 1</h3>
            <input type="text" onKeyPress={(event)=>{
                if(event.key=="Enter"){
                    inputRef2.current.focus()
                }
            }} ref={inputRef1} value={player1} onChange={(event)=>{
                if(event.target.value.length<=14){
                    setPlayer1(event.target.value)
                }
            }} placeholder="Enter Name"/>
            <h3>Player 2</h3>
            <input type="text" value={player2} onKeyPress={(event)=>{
                if(event.key=="Enter"){
                    document.getElementById('start').click()
                }
            }} ref={inputRef2} onChange={(event)=>{
                if(event.target.value.length<=14){
                    setPlayer2(event.target.value)
                }
            }} placeholder="Enter Name"/><br/><br/>
            <button id="start" onClick={handleStart}>Start</button>
        </div>
        </>
    )
}
export default WelcomeScreen