import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return(
            <>Current data -<strong>{this.state.date.toLocaleTimeString()}</strong></>
        )
    }
}

export default Clock