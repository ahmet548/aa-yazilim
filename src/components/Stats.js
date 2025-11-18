import React from 'react';

const Stats = () => {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item fade-in">
                        <h3 className="counter" data-target="150">0</h3>
                        <p>Tamamlanan Proje</p>
                    </div>
                    <div className="stat-item fade-in">
                        <h3 className="counter" data-target="50">0</h3>
                        <p>Mutlu Müşteri</p>
                    </div>
                    <div className="stat-item fade-in">
                        <h3 className="counter" data-target="98">0</h3>
                        <p>Müşteri Memnuniyeti</p>
                    </div>
                    <div className="stat-item fade-in">
                        <h3>7/24</h3>
                        <p>Teknik Destek</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
