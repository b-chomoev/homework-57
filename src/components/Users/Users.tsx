import React from 'react';
import UserItem from "../UserForm/UserItem";

const Users: React.FC = () => {
    return (
        <>
            <h4>User Info</h4>
            <UserItem/>
            <UserItem/>
            <UserItem/>
        </>
    );
};

export default Users;