import React, { useState } from "react"

const login = () => {

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e, type) => {
        type === 'username' ?
            setState({ ...state, username: e.target.value })
            :
            setState({ ...state, password: e.target.value })
    }

    return (
        <div style={styles.root}>
            <h3>Login</h3>
            <form style={styles.form}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="user name"
                        autoFocus
                        className='form-input-email'
                        style={styles.inputText}
                        value={state.username}
                        onChange={evt => handleChange(evt, 'username')}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="passowrd"
                        className='form-input-password'
                        style={styles.inputText}
                        value={state.passowrd}
                        onChange={evt => handleChange(evt, 'password')}
                    />
                </label>
                <input
                    type="submit"
                    value="Submit"
                    className='form-input-submit'
                    style={styles.button}
                />
            </form>
        </div>
    )
}
const styles = {
    root: {
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    form: { width: '60%' },
    inputText: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box'
    },
    button: {
        width: '100%',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
}
export default login
