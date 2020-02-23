import React, {Component} from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
            valueSelect: 'cocount'
         }

        this.handleChange = this.handleChange.bind(this)
        this.hundleSubmit = this.hundleSubmit.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
        console.log(this.state.value);
        
    }

    handleChangeSelect(event) {
        this.setState({ valueSelect: event.target.value })
        console.log(this.state.value);
        
    }

    hundleSubmit(event) {
        event.preventDefault();
        alert('Send name: ' + this.state.value)
        alert('Send select: ' + this.state.valueSelect)

    }

    render() {
        return (
            <div>
                <form onSubmit={this.hundleSubmit}> 
                    <label>
                        Name:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label><br/>
                    <select onChange={this.handleChangeSelect}>
                        <option defaultValue="grapefruit">Грейпфрут</option>
                        <option defaultValue="lime">Лайм</option>
                        <option selected defaultValue="coconut">Кокос</option>
                        <option defaultValue="mango">Манго</option>                
                    </select>
                    <input type="submit" value="Send" />
                    <input type="file" />
                </form><br/>
                
            </div>
        )
    }

}

class Forms1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oneInput: '',
            twoInput: ''
        }


    }


    setInput(event) {
        const name = event.name
        
        this.setState({
            [name]
        })
    }
}
export default Forms1