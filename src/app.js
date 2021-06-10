import React, { Component } from 'react'
import Login from './containers/Auth/login'

class App extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Login />
            </div>
        )
    }
}
const styles = {
    root: {
        height: '100vh',
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
}
export default App