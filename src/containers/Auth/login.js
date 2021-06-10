import React, { useState } from "react"

const login = () => {
    return (
        <div style={styles.root}>
            <h3>Login</h3>
            <form style={styles.form}>
                <label>
                    Email:
                    <input
                        type="text"
                        name="name"
                        style={styles.inputText}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="name"
                        style={styles.inputText}
                    />
                </label>
                <input
                    type="submit"
                    value="Submit"
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
