import React, {useState }from 'react';
import {CATEGORIES} from "../../constants";
import {User} from "../../type";

interface Props {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [role, setRole] = useState('user');

    const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsActive(e.target.checked);
    };

    const categoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser = {
            id: 0,
            active: true,
            name,
            email,
            isActive,
            role
        };

        onSubmit(newUser);
        setName('');
        setEmail('');
        setIsActive(false);
        setRole('user');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add user's info</h4>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    className='form-control'
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='isActive'>Is Active ?</label> <br/>
                <input
                    type='checkbox'
                    name='isActive'
                    id='isActive'
                    className='form-check-input'
                    checked={isActive}
                    onChange={checkboxChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='category'>Category</label>
                <select
                    name='category'
                    id='category'
                    className='form-select'
                    value={role}
                    onChange={categoryChange}
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