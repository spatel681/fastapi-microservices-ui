import React, { useState } from 'react';
import { userApi } from '../api'; 

function UserForm({ onUserCreated }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userApi.post('/users', { username, email });
            alert("User created successfully!");
            setUsername("");
            setEmail("");
            if (onUserCreated) onUserCreated();
        } catch (err) {
            alert(err.response?.data?.detail || "Error creating user");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create User</h3>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Create</button>
        </form>
    );
}

export default UserForm;