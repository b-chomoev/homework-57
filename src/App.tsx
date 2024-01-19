import Appbar from "./components/Appbar/Appbar";
import React, {useState} from "react";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {User} from "./type";

function App() {

    const [users, setUsers] = useState<User[]>([]);

    const addInfo = (user: User) => {
        setUsers([...users, { ...user, id: users.length + 1}]);
    };

    return (
        <React.Fragment>
            <header>
                <Appbar />
            </header>
            <main className='container-fluid'>
                <div className='row mt-2'>
                    <div className='col-6'>
                        <UserForm onSubmit={addInfo}/>
                    </div>
                    <div className='col-6'>
                        <Users users={users}/>
                    </div>
                </div>
            </main>

        </React.Fragment>
    )
}

export default App
