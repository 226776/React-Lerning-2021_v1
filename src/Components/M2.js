import React from 'react'
import ReactDOM from 'react-dom'

class M2_class extends React.Component {
    
    constructor() {
        super()
        this.state = {
            answer : "Yes"
        }
    }

    render() {
        return(
            <div>
                <p2>{this.props.text}</p2>
                <p2>Is state important? {this.state.answer}</p2>
            </div>
        )
    }
}

export default M2_class