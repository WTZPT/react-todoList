import React from 'react'
import { Input, Button } from 'antd';
import { addTodo } from '../../API'
import 'antd/dist/antd.css'
class todoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleSubmit = (e) => {
        addTodo({text:this.state.value}).then(response => {
            if(response.data.code === "200"){
                alert("添加成功！")
                this.props.updateTodos(response.data.data)
            }
        })
        e.preventDefault()
        this.setState({ value: '' })
    }

    handleChange = (e) => {
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