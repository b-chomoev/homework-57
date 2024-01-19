import React from 'react';
import {User} from "../../type";

const UserItem: React.FC<{user: User}> = () => {
    return (
        <div className='card mb-3'>
            <div className='row g-0'>
                <div className='col-sm-12'>
                    <div className='card-body'>
                        <h5 className='card-title'>User Info</h5>
                        <p className='card-text'>Email</p>
                        <p className='card-text'>Is Active</p>
                        <p className='card-text'>Category</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;