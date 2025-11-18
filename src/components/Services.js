import React from 'react';
import { TbCode, TbDeviceMobile, TbShieldLock, TbCpu, TbRouter, TbPalette, TbMessageChatbot } from 'react-icons/tb';

const Services = () => {
    return (
        <section className="services" id="hizmetler">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>Dijital İhtiyaçlarınıza Özel Çözümler</h2>
                    <p>Web geliştirmeden yapay zeka uygulamalarına, siber güvenlikten mobil uygulamalara kadar tam yığın yazılım hizmetleri sunuyoruz.</p>
                </div>
                <div className="services-grid">
                    {/* Service Card 1 */}
                    <div className="service-card fade-in">
                        <div className="service-icon"><TbCode /></div>
                        <h3>Web Geliştirme</h3>
                        <p>Modern, hızlı ve kullanıcı dostu web çözümleri. Responsive tasarım ve güçlü backend altyapısı ile markanızı dijitalde zirveye taşıyoruz.</p>
                        <a href="#iletisim" className="service-link">Detaylı Bilgi →</a>
                    </div>
                    {/* Service Card 2 */}
                    <div className="service-card fade-in">
                        <div className="service-icon"><TbDeviceMobile /></div>
                        <h3>Mobil Uygulama</h3>
                        <p>iOS ve Android için native ve cross-platform uygulamalar. Kullanıcı deneyimini merkeze alan, performans odaklı mobil çözümler geliştiriyoruz.</p>
                        <a href="#iletisim" className="service-link">Detaylı Bilgi →</a>
                    </div>
                    {/* Service Card 3 */}
                    <div className="service-card fade-in">
                        <div className="service-icon"><TbShieldLock /></div>
                        <h3>Siber Güvenlik</h3>
                        <p>Dijital varlıklarınızı koruma altına alın. Penetrasyon testleri, güvenlik denetimleri ve 7/24 izleme sistemleri ile güvendeyiz.</p>
                        <a href="#iletisim" className="service-link">Detaylı Bilgi →</a>
                    </div>
                    {/* Service Card 4 */}
                    <div className="service-card fade-in">
                        <div className="service-icon"><TbCpu /></div>
                        <h3>Yapay Zeka Çözümleri</h3>
                        <p>İş süreçlerinizi otomatikleştirin, verilerinizden değer çıkarın. Makine öğrenimi ve derin öğrenme teknolojileri ile geleceğe hazırlanın.</p>
                        <a href="#iletisim" className="service-link">Detaylı Bilgi →</a>
                    </div>
                    {/* Service Card 5 */}
                    <div className="service-card fade-in">
                        <div className="service-icon"><TbRouter /></div>
                        <h3>IoT Çözümleri</h3>
                        <p>Akıllı cihazlar ve sensör ağları ile fiziksel dünyayı dijitalleştirin. Veri toplama, analiz ve otomasyon projeleri geliştiriyoruz.</p>
                        <a href="#iletisim" className="service-link">Detaylı Bilgi →</a>
                    </div>
                    {/* Service Card 6 */}
                    <div className="service-card fade-in">
                        <div className="service-icon"><TbPalette /></div>
                        <h3>UI/UX Tasarım</h3>
                        <p>Kullanıcıların seveceği, estetik ve sezgisel arayüzler tasarlıyoruz. Marka kimliğinizi yansıtan, etkileşimli ve modern tasarımlar.</p>
                        <a href="#iletisim" className="service-link">Detaylı Bilgi →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
