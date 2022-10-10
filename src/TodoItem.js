import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDeleted = this.handleDeleted.bind(this);
    }

    // 子组件如果想要和父组件通信，要调用父组件传递过来的方法

    handleDeleted() {
        const { deleted, index } = this.props;
        deleted(index);
    }

    render() {
        const content = this.props.content
        return (
            <li onClick={this.handleDeleted}>{content}</li>
        );
    }
}

export default TodoItem;