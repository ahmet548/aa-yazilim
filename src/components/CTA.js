import React, { useState } from 'react';
import ContactModal from './ContactModal';

const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="cta-section" id="iletisim">
            <div className="container">
                <div className="cta-content fade-in">
                    <h2>Projenizi Hayata Geçirmeye Hazır mısınız?</h2>
                    <p>Ücretsiz danışmanlık için bugün iletişime geçin. Dijital dönüşüm yolculuğunuzda size rehberlik edelim.</p>
                    <button onClick={openModal} className="btn-white">Hemen Başlayalım</button>
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default CTA;
