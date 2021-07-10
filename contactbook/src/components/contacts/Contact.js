import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { applySelectAll, deleteAll } from '../../actions/contactAction';
import { Contacts } from './Contacts'

export const Contact = () => {
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contactList.contacts);
    console.log(contacts);
    const dispatch = useDispatch();
    
    const handleSelectAll = () => {
        if(selectAll) setSelectAll(false);
        else setSelectAll(true);
        dispatch(applySelectAll(!selectAll));
    }

    return (
        <div>
            <table className="table shadow">
                <thead >
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" checked={selectAll} onClick={handleSelectAll}/>
                                <label className="custom-control-label"></label>
                                {selectAll && <button onClick={() => {
                                    setSelectAll(false)
                                    dispatch(deleteAll())
                                }} className="btn btn-danger m-2" >Delete all</button>}
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
