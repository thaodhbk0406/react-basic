import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from 'react-router-dom'

class ListUser extends React.Component {
    state = {
        listUser: [],
    };
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : [],
        });
    }

    hanldeOnclickOnUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">Fetch All List Users</div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 ? (
                        listUser.map((user, index) => {
                            return (
                                <div className="child" key={user.id} onClick={() => this.hanldeOnclickOnUser(user)}>
                                    <span>
                                        {index + 1} - {user.first_name} - {user.last_name}
                                    </span>
                                </div>
                            );
                        })
                    ) : (
                        <div>Do not have any user</div>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(ListUser);
