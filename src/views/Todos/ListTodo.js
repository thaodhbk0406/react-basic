import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color.js";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Learning ReactJS" },
      { id: "todo2", title: "Learning NodeJS" },
      { id: "todo3", title: "Learning FullstackJS" },
    ],
    editTodo: {},
  };

  addTodo = (todo) => {
    console.log(todo);
    console.log("ListTodos: ", this.state.listTodos);
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("Wow It is so easy!");
  };

  handleDeleteTodo = (todo) => {
    console.log("todo: ", todo);
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);

    this.setState({
      listTodos: currentTodos,
    });

    toast.success("Delete success!");
  };

  handleEditTodo = (item) => {
    this.setState({
      editTodo: item,
    });
  };

  handleChangeTitle = (event, item) => {
    this.setState({
      editTodo: {
        id: item.id,
        title: event.target.value,
      },
    });
  };

  handleSaveEdited = (editTodo) => {
    if (editTodo.title === "") {
      toast.error("Title can not be null!");
      return;
    }
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.map((item) => {
      if (item.id === editTodo.id) {
        return editTodo;
      }
      return item;
    });
    this.setState({
      editTodo: {},
      listTodos: currentTodos,
    });
    toast.success("Edited success!");
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <>
        <p>Simple Todo Apps from Torres &amp; Sarah</p>
        <div className="list-todo-container">
          <AddTodo addTodo={this.addTodo} />
          <div className="list-todo-content">
            {listTodos && listTodos.length > 0 ? (
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <>
                        <span>
                          {index + 1} - {item.title}
                        </span>
                        <button
                          className="editBtn"
                          onClick={() => this.handleEditTodo(item)}
                        >
                          Edit
                        </button>
                      </>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <>
                            <span>
                              {index + 1} -{" "}
                              <input
                                onChange={(event) =>
                                  this.handleChangeTitle(event, item)
                                }
                                value={editTodo.title}
                              />
                            </span>
                            <button
                              className="editBtn"
                              onClick={() => this.handleSaveEdited(editTodo)}
                            >
                              Save
                            </button>
                          </>
                        ) : (
                          <>
                            <span>
                              {index + 1} - {item.title}
                            </span>
                            <button
                              className="editBtn"
                              onClick={() => this.handleEditTodo(item)}
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </>
                    )}

                    <button
                      className="deleteBtn"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            ) : (
              <div>Do not have any todo</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
