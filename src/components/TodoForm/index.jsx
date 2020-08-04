import React from 'react'


class todoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value:''}
    }

    handleSubmit = (e) => {
        this.props.addTodo(this.state.value)
        this.setState({value:''})
        e.preventDefault();
    }

    handleChange = (e) => {
        
        this.setState({value:e.target.value})
    }

     render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="" id="" value={this.state.value} 
                    placeholder="please input"  onChange={this.handleChange}/>
                <input type="submit" value="提交"/>
            </form>
        )
    }

}

export default todoForm