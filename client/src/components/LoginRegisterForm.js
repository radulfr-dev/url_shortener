import React, { useState, useCallback, useEffect } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function LoginRegisterForm() {

    const [isRegistered, setIsRegistered] = useState(true)
    const [buttonText, setButtonText] = useState('I don\'t have an account')

    const changeStatus = useCallback(() => {

        setIsRegistered(!isRegistered)

        if(!isRegistered){
            setButtonText('I don\'t have an account')
        }else{
            setButtonText('I already have an account')
        }
    }, [buttonText, isRegistered])


    function RenderForm(){
        if(isRegistered) return <LoginForm />
            return <RegisterForm />
    }

    return (
        <div className="loginRegisterForm">
        <RenderForm />
        <button onClick={ changeStatus }>{ buttonText }</button>
        </div>
    );
}

export default LoginRegisterForm
