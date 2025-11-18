import React, { useState } from 'react';
import './ContactModal.css'; // We'll create this CSS file

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '', // Soyadı için yeni state
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Ad ve soyadı birleştirerek gönder
            const { name, lastName, email, subject, message } = formData;
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${name} ${lastName}`, // Ad ve soyadı birleştir
                    email,
                    subject,
                    message
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message.');
            }

            setSuccess(true);
            alert('Mesajınız başarıyla gönderildi!');
            onClose();
            // Formu temizlerken soyadını da sıfırla
            setFormData({ name: '', lastName: '', email: '', subject: '', message: '' });
        } catch (err) {
            setError(err.message);
            alert(`Mesaj gönderilemedi: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <h2>Bize Ulaşın</h2>
                <p>Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Adınız:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Soyadınız:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-posta Adresiniz:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Konu:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mesajınız:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                    </button>
                    {error && <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                    {success && <p className="success-message" style={{ color: 'green', marginTop: '10px' }}>Mesaj başarıyla gönderildi!</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactModal;