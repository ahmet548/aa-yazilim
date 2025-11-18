import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={logo} alt="AA Yazılım Logo" style={{ height: '30px' }} />
                        <p className="footer-description">Türkiye'nin önde gelen yazılım çözümleri şirketi. Web, mobil, güvenlik ve AI alanlarında uzman ekibimizle hizmetinizdeyiz.</p>
                        <div className="social-links">
                            <a href="https://facebook.com" className="social-icon facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://twitter.com" className="social-icon twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://www.instagram.com/aayazilim_/" className="social-icon instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://linkedin.com" className="social-icon linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Hızlı Linkler</h4>
                        <a href="#ana-sayfa">Ana Sayfa</a>
                        <a href="#hizmetler">Hizmetler</a>
                        <a href="#neden-biz">Hakkımızda</a>
                        <a href="#referanslar">Referanslar</a>
                        <a href="#iletisim">İletişim</a>
                    </div>
                    <div className="footer-section">
                        <h4>Hizmetler</h4>
                        <a href="#hizmetler">Web Geliştirme</a>
                        <a href="#hizmetler">Mobil Uygulama</a>
                        <a href="#hizmetler">Siber Güvenlik</a>
                        <a href="#hizmetler">Yapay Zeka</a>
                        <a href="#hizmetler">Bot Yazma</a>
                        <a href="#hizmetler">UI/UX Tasarım</a>
                    </div>
                    <div className="footer-section" id="iletisim">
                        <h4>İletişim</h4>
                        <p>📧 info@aayazilim.com</p>
                        <p>📞 0530 416 23 55</p>
                        <p>📍 İstanbul, Türkiye</p>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Pazartesi - Cuma: 09:00 - 18:00<br />Cumartesi: 10:00 - 15:00</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 AA Yazılım. Tüm hakları saklıdır. | <a href="/gizlilik" style={{ display: 'inline' }}>Gizlilik Politikası</a> | <a href="/kvkk" style={{ display: 'inline' }}>KVKK</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
