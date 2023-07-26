import { configureStore } from '@reduxjs/toolkit';
//REDUCERS
import users from './slices/users';

export default configureStore({
    reducer: {
        users
    }
});