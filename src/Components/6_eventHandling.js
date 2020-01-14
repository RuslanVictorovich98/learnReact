import React from "react";

class EventHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: false}
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        alert(this.state.date)
    }
    //
    // handleClick = () => {
    //     alert(this.state.date)
    // }


    render() {
        return(
            <h3 onClick={(e) => this.handleClick(e)}>Click me! - {this.state.date}</h3>
        )
    }

}

export default EventHandling