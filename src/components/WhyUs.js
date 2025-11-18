import React from 'react';
import { TbTargetArrow, TbBolt, TbUsers, TbHeadset, TbBrush, TbShieldLock } from 'react-icons/tb';

const WhyUs = () => {
    return (
        <section className="why-us" id="neden-biz">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>Dijital Dönüşümde Güvenilir İş Ortağınız</h2>
                    <p>AA Yazılım olarak sadece kod yazmıyoruz; işletmenizin dijital geleceğini inşa ediyoruz. Teknolojinin hızla değiştiği bu çağda, size yalnızca güncel çözümler sunmakla kalmıyor, yarının trendlerini bugünden projenize entegre ediyoruz.</p>
                </div>
                <div className="why-us-grid">
                    <div className="feature-card fade-in">
                        <h4><TbTargetArrow className="icon-emoji" /> Başarı Odaklı Yaklaşım</h4>
                        <p>Her projede hedefiniz bizim hedefimiz. Ölçülebilir sonuçlar, kullanıcı memnuniyeti ve iş büyümesi odaklı çalışıyoruz.</p>
                    </div>
                    <div className="feature-card fade-in">
                        <h4><TbBolt className="icon-emoji" /> Teknoloji Liderliği</h4>
                        <p>Son teknolojileri takip etmekle kalmıyor, sektördeki en yenilikçi araçları projelerinize kazandırıyoruz. React, Flutter, Python, TensorFlow - en iyisiyle çalışıyoruz.</p>
                    </div>
                    <div className="feature-card fade-in">
                        <h4><TbUsers className="icon-emoji" /> Şeffaflık ve İletişim</h4>
                        <p>Proje sürecinin her aşamasında yanınızdayız. Düzenli raporlama, açık iletişim ve esnek çalışma modelimizle size özel hizmet sunuyoruz.</p>
                    </div>
                    <div className="feature-card fade-in">
                        <h4><TbHeadset className="icon-emoji" /> 7/24 Destek</h4>
                        <p>Yazılım asla uyumaz. Projeleriniz için kesintisiz destek ve bakım hizmeti sağlıyoruz. Sorun anında çözülür.</p>
                    </div>
                    <div className="feature-card fade-in">
                        <h4><TbBrush className="icon-emoji" /> Kullanıcı Odaklı Tasarım</h4>
                        <p>Estetik ve işlevselliği bir araya getirerek, kullanıcıların seveceği, sezgisel ve etkileşimli deneyimler tasarlıyoruz.</p>
                    </div>
                    <div className="feature-card fade-in">
                        <h4><TbShieldLock className="icon-emoji" /> Güvenlik ve Veri Koruma</h4>
                        <p>Dijital varlıklarınız bizimle güvende. En güncel güvenlik protokolleri ve veri koruma standartları ile projelerinizi koruma altına alıyoruz.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;