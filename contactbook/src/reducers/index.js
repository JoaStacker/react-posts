import { combineReducers } from 'redux';
import { contactReducer } from './contactReducer'

export default combineReducers ({
    contactList: contactReducer,
})