import React, { useContext} from 'react'
import { userContext } from '../context/UserContext'

function UserProfile () {
    const { user } = useContext(userContext);

    return (
        <div>
            <h1>User profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile