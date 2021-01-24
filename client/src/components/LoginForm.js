import React, { useState, useCallback, useEffect } from 'react'

function LoginForm() {

    function attemptLogin(){
        
    }

    return (
        <div className="loginForm">
        <form onSubmit={ attemptLogin }>
        <label htmlFor="loginUsername">Username:</label>
        <input name="loginUsername"></input>
        <label htmlFor="loginPassword">Password:</label>
        <input name="loginPassword"></input>
        </form>
        </div>
    );
}

export default LoginForm
