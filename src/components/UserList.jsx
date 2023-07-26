import React, { useEffect } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../store/slices/users';

const UserList = () => {
    // const users = [];

    const { list: users } = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);


    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    users.map((user, index) => (
                        <div key={index} className='col-md-3 mb-4'>
                            <div className='card'>
                                <img src={user.avatar} alt='avatar' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                                    <p className='card-text'>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UserList;