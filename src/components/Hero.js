import React from 'react';
import { TbCode, TbDeviceMobile, TbShieldLock, TbCpu, TbRouter, TbPalette } from 'react-icons/tb';


const Hero = () => {
    const scrollToCTA = () => {
        const ctaElement = document.getElementById('iletisim');
        if (ctaElement) {
            ctaElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="ana-sayfa">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Geleceği Kodluyoruz, <span className="highlight">Başarınızı İnşa Ediyoruz</span></h1>
                    <p>Web'den mobil uygulamaya, siber güvenlikten yapay zeka çözümlerine kadar dijital dönüşümünüzün tüm aşamalarında yanınızdayız. AA Yazılım ile teknolojinin gücünü keşfedin.</p>
                    <div className="hero-buttons">
                        <button onClick={scrollToCTA} className="cta-btn">Projeni Başlat</button>
                        <button onClick={scrollToCTA} className="btn-secondary">Detaylı Bilgi</button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-element">
                        <div className="code-snippet"><TbCode className="icon-emoji" /> Web Dev</div>
                    </div>
                    <div className="floating-element">
                        <div className="code-snippet"><TbDeviceMobile className="icon-emoji" /> Mobile</div>
                    </div>
                    <div className="floating-element">
                        <div className="code-snippet"><TbShieldLock className="icon-emoji" /> Security</div>
                    </div>
                    <div className="floating-element">
                        <div className="code-snippet"><TbCpu className="icon-emoji" /> AI</div>
                    </div>
                    <div className="floating-element">
                        <div className="code-snippet"><TbRouter className="icon-emoji" /> IoT</div>
                    </div>
                    <div className="floating-element">
                        <div className="code-snippet"><TbPalette className="icon-emoji" /> UI/UX Tasarım</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
