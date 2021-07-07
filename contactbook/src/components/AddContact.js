import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactAction'
import shortid from 'shortid';
import { useHistory } from 'react-router';


const initialForm = {
    name: "",
    phone: "",
    email: ""
}

export const AddContact = () => {
    const [form, setForm] = useState(initialForm);
    const dispatch = useDispatch();
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(form))
        setForm(initialForm)
        history.push('/');
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            id: shortid.generate(),
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Create contact</h1>
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
