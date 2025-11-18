import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials" id="referanslar">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>Müşterilerimizin Sesi</h2>
                    <p>Onların başarı hikayesi, bizim gururumuz. Birlikte neler başardığımızı görün.</p>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card fade-in">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">"AA Yazılım ile e-ticaret platformumuzu yeniledik. 3 ay içinde site hızımız %60 arttı, mobil dönüşüm oranlarımız ikiye katlandı. Profesyonel yaklaşımları ve teknik uzmanlıkları takdire şayan."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">AK</div>
                            <div className="author-info">
                                <h5>Ahmet Kaya</h5>
                                <p>E-ticaret Firması Sahibi</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card fade-in">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">"Mobil uygulamamızı Flutter ile geliştirdiler. Hem iOS hem Android'de mükemmel çalışıyor. Kullanıcı geri bildirimleri harika. Proje sürecinde iletişim ve şeffaflık mükemmeldi."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">SY</div>
                            <div className="author-info">
                                <h5>Selin Yılmaz</h5>
                                <p>Startup Kurucusu</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card fade-in">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">"Siber güvenlik denetimi sonrası birçok kritik açık tespit ettiler ve hızla çözdük. Şimdi çok daha güvendeyiz. 7/24 destek ekibi gerçekten her zaman ulaşılabilir."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">MÇ</div>
                            <div className="author-info">
                                <h5>Murat Çelik</h5>
                                <p>IT Müdürü</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
