import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            console.log("id: ", id);
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {},
            });
        }
    }

    handleClickBackBtn = () => {
        this.props.history.push('/user');
    }

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div> Hello world from Detail User component with id: {this.props.match.params.id}</div>
                {isEmptyObj === false ?
                    <>
                        <div>User's name: {user.first_name} {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div><img src={user.avatar} alt={user.avatar} /></div>
                        <button type="button" onClick={() => this.handleClickBackBtn()}>Back</button>
                    </>
                    :
                    <div>
                        Do not have any user with id: {this.props.match.params.id}
                    </div>

                }

            </>

        )
    }
}

export default withRouter(DetailUser);
