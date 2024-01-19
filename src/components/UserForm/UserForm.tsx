import React from 'react';
import {CATEGORIES} from "../../constants";

const UserForm: React.FC = () => {
    return (
        <form>
            <h4>Add user's info</h4>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='isActive'>Is Active ?</label> <br/>
                <input
                    type='checkbox'
                    name='isActive'
                    id='isActive'
                    className='form-check-input'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='category'>Category</label>
                <select
                    name='category'
                    id='category'
                    className='form-select'
                >
                    <option value=''>Select a category</option>
                    {CATEGORIES.map(category => (
                        <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                </select>
            </div>
            <button type='submit' className='btn btn-success mt-3'>Add</button>
        </form>
    );
};

export default UserForm;