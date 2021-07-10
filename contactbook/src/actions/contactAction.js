import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_ALL, SELECT_ONE, DELETE_ALL} from "../constants/types"

export const addContact = (contact) => ({
        type: CREATE_CONTACT,
        payload: contact
})

export const getContact = (id) => ({
        type: GET_CONTACT,
        payload: id
})

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

export const deleteContact = (id) => ({
        type: DELETE_CONTACT,
        payload: id
    })

export const applySelectAll = (value) => ({
        type: SELECT_ALL,
        payload: value
})

export const applySelectOne = (id) => ({
        type: SELECT_ONE,
        payload: id
})

export const deleteAll = (id) => ({
        type: DELETE_ALL,
})