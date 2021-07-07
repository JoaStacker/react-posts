import { CREATE_CONTACT } from "../constants/types"

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}