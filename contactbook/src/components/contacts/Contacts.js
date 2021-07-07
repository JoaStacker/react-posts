import React from 'react';
import Avatar from "react-avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Contacts = ({contact}) => {
    const {id, name, phone, email} = contact

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
                    <Link to={`/contacts/edit/${id}`}>
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon icon={faTrash} />
                    </Link>   
                </td>
            </tr> 
    )
}
