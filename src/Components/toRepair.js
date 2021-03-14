import React from 'react'
//import ReactDOM from 'react-dom'

class NotApp extends React.Component {

    constructor() {
        super()
        this.state = {
            name:       "NotYourBuisness",
            age:        "25",
            isLogedIn : true,
            actionText : "",
            count: 0
        }
        this.updateCount=this.updateCount.bind(this)
        this.onClickFunc=this.onClickFunc.bind(this)
        this.onMouseEnterFunc=this.onMouseEnterFunc.bind(this)
    }

    updateCount() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1 
            }
        })
    }

    onClickFunc() { 
        console.log("You fucking WUT? I was clicked...")
        this.setState({actionText: "You fucking WUT? I was clicked..."})
        this.updateCount()
    }
    
    onMouseEnterFunc() {
        console.log("Do it again, and you will DIE!!!")
        this.setState({actionText: "Do it again, and you will DIE!!!"})
        this.updateCount()
    }

    render() {

        let displayWord

        if(this.state.isLogedIn){ 
            displayWord = <div> 
                <h3>{this.props.text}</h3>
                <h1>Logged in:</h1>
                <h2>{this.state.name}</h2>
                <h3>{this.state.age} years old!</h3>
                <img src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528" onMouseEnter={this.onMouseEnterFunc}/>
                <button onClick={this.onClickFunc}>Don't click me!</button>
                <h1>{this.state.actionText}</h1>
                <h3>Action count: {this.state.count}</h3>
            </div>
        } 
        else {
            displayWord = <div> 
            <h1>User offline!</h1>
        </div>
        }

        return(
            displayWord
        )

        
    }
}

export default NotApp