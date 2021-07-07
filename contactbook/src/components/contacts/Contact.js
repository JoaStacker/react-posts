import React from 'react'
import { useSelector } from 'react-redux';
import { Contacts } from './Contacts'

export const Contact = () => {
    const contacts = useSelector((state) => state.contactList.contacts);
    console.log(contacts);
    return (
        <div>
            <table className="table shadow">
                <thead >
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox"/>
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => <Contacts key={contact.id} contact={contact}/>)}
                </tbody>
            </table>
        </div>
    )
}
