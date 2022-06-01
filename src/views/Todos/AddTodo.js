import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: '',
    }

    handleTittleChange = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleClickAdd = () => {
        if (this.state.title === "") {
            toast.error(`Missing title's todo!`);
            return;
        }

        this.props.addTodo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
        });

        this.setState({
            title: '',
        })
    };

    render() {
        let title = this.state.title;
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleTittleChange(event)}
                />
                <button
                    className="addBtn"
                    type="button"
                    onClick={() => this.handleClickAdd()}
                >
                    Add
        </button>
            </div>
        );
    }
}

export default AddTodo;
