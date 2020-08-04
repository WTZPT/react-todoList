import React from 'react'


class todoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value:''}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.value)
        // this.setState({value:''})
    }

    handleChange = (e) => {
        
        this.setState({value:e.target.value})
    }

     render(){
        return (
            <div >
                <input type="text" name="" id="" value={this.state.value} 
                    placeholder="please input"  onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleSubmit} value="提交"/>
            </div>
        )
    }

}

export default todoForm