import React, { useState } from 'react'

function Forms() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit (e) {
        e.preventDefault();

        alert(`Name: ${name}\nEmail: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name: 
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Email: 
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Forms