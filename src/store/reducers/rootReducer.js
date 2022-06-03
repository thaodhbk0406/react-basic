const initState = {
    users: [
        { id: 1, name: 'Torres' },
        { id: 2, name: 'Sarah' },
    ],
    pots: []
}


const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_DELETE':
            console.log('check redux user need to delete: ', action.payload);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);

            return { ...state, users }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `User - ${id}` }
            return { ...state, users: [...state.users, user] }
        default:
            return state
    }

}

export default rootReducer;