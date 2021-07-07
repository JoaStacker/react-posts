import React from 'react';
import Avatar from "react-avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export const Contacts = ({contact}) => {
    const {name, phone, email} = contact

    const handleEdit = () => {

    }

    const handleRemove = () => {
        
    }


    return (
           <tr>
                <th scope="row">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"/>
                        <label className="custom-control-label"></label>
                    </div>
                </th>
                <td><Avatar className="mr-2" name={name} size="45" round={true}/></td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <button className="btn" onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn" onClick={handleRemove}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>   
                </td>
            </tr> 
    )
}
