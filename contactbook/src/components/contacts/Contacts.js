import React from 'react';
import Avatar from "react-avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contactAction';

export const Contacts = ({contact}) => {
    const {id, name, phone, email} = contact
    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = () => {
        let del = window.confirm('Are you sure you want to delete this contact?');
        console.log(del)
        if(!del) return;
        dispatch(deleteContact(id));
        history.push("/");
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
                <Link to={`/contacts/edit/${id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                </Link>
                <Link to="/" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </Link>   
            </td>
        </tr> 
    )
}
