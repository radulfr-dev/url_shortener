import React, { useState, useCallback, useEffect } from 'react'

function RegisterForm() {

  return (
    <div className="registerForm">
      <label htmlFor="registerUsername">Username:</label>
      <input name="registerUsername"></input>
      <label htmlFor="registerPassword">Password:</label>
      <input name="registerPassword"></input>
      <label htmlFor="registerPasswordConfirm">Confirm Password:</label>
      <input name="registerPasswordConfirm"></input>

    </div>
  );
}

export default RegisterForm
