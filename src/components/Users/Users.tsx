import React from 'react';
import UserItem from "../UserForm/UserItem";
import {User} from "../../type";

interface Props {
    users: User[];
}

const Users: React.FC<Props> = ({users}) => {
    return (
        <>
            <h4>User Info</h4>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    );
};

export default Users;