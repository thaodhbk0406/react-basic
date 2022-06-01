import React from 'react'
import { withRouter } from 'react'
import axios from 'axios'

class Detail extends React.Component {

    state = {
        user: {},
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {},
            });
        }

    }
    render() {
        return (
            <div> </div>
        )
    }
}

export default withRouter(DetailUser);