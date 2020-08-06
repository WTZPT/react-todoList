import React from 'react'
import { Input, Button } from 'antd';
import 'antd/dist/antd.css'
class todoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.value)
        this.setState({ value: '' })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <Input value={this.state.value} onChange={this.handleChange} />
                    <Button type="primary" onClick={this.handleSubmit} >提交 </Button>
                </div>
            </div>
        )
    }

}

export default todoForm