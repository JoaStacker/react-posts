import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContact } from '../actions/contactAction'
import { updateContact } from '../actions/contactAction'
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

const initialForm = {
    name: "",
    phone: "",
    email: "",
}

export const EditContact = () => {
    const [form, setForm] = useState(initialForm);

    const dispatch = useDispatch();
    let {id} = useParams();
    let history = useHistory();
    
    const contact = useSelector((state) => state.contactList.contact);

    useEffect(()=> {
        dispatch(getContact(id))

        if(contact != null){
            let {name, phone, email} = contact
            setForm({
                id,
                name, 
                phone, 
                email
            })
        }

    }, [contact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateContact(form));
        history.push('/');
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h1>Edit contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputText1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" value={form.name} name="name" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputText2" className="form-label">Phone number</label>
                    <input type="text" className="form-control" id="exampleInputText2"  value={form.phone} name="phone" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} name="email" onChange={handleChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
