import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import WelcomeScreen from './WelcomeScreen'

const Login = ()=>{
    const [login,setLogin] = useState(false)
    const [info,setInfo] = useState([])
    const setInformation = (name,name2)=>{
        setInfo([name,name2])
        setLogin(true)
    }
    return (
        <>
        {!login ? <WelcomeScreen information={setInformation}/> : <App information={info}/>}
        </>
    )
}

ReactDOM.render(<Login/>,document.getElementById("root"))