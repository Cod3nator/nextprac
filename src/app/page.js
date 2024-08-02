'use client';

import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        console.log(result);
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="number" style={styles.label}>Number:</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.label}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ ...styles.input, height: '100px' }}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4'
    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px'
    },
    formGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px'
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#0070f3',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

export default Form;
