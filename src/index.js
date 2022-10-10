import React from 'react';
import ReactDOM from 'react-dom/client';
// TodoList组件， 大写字母开头
import TodoList from './TodoList';
import "./style.css"

ReactDOM.createRoot(document.getElementById('root')).render(<TodoList />);
// or
// ReactDOM.render(<TodoList />, document.getElementById('root'));