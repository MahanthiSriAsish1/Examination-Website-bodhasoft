import React, { useState } from 'react';

const UserForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        college: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(formData.email)) {
            alert('Please enter a valid Gmail address.');
            return;
        }

        onSubmit(formData)

        setFormData({
            fullName: '',
            email: '',
            college: '',
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        pattern="^[a-zA-Z0-9._-]+@gmail\.com$"
                        title="Please enter a valid Gmail address."
                        required
                    />
                </label>
                <br />
                <label>
                    College:
                    <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
