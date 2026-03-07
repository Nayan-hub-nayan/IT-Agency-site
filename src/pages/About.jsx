import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <div className="about-bg" />
            
            <header className="about-header">
                <nav className="about-nav">
                    <a href="/" className="nav-logo">IT AGENCY.</a>
                    <div className="nav-links">
                        <a href="/">HOME</a>
                        <a href="/about" className="active">ABOUT</a>
                        <a href="#services">SERVICES</a>
                        <a href="#portfolio">PORTFOLIO</a>
                    </div>
                </nav>
            </header>

            <main className="about-content">
                <section className="about-hero">
                    <div className="hero-tag">ABOUT US</div>
                    <h1 className="hero-title">
                        Architecting the<br />
                        <span>Digital Future.</span>
                    </h1>
                    <div className="hero-line" />
                </section>

                <section className="about-grid">
                    <div className="grid-item mission">
                        <span className="item-num">(01)</span>
                        <h2 className="item-title">OUR MISSION</h2>
                        <p className="item-text">
                            To empower businesses through disruptive technology and strategic digital transformation. 
                            We don't just build software; we engineer competitive advantages.
                        </p>
                    </div>

                    <div className="grid-item vision">
                        <span className="item-num">(02)</span>
                        <h2 className="item-title">OUR VISION</h2>
                        <p className="item-text">
                            Becoming the global benchmark for technical excellence and innovative problem-solving 
                            in the enterprise software landscape.
                        </p>
                    </div>

                    <div className="grid-item technical">
                        <span className="item-num">(03)</span>
                        <h2 className="item-title">TECH STACK</h2>
                        <div className="tech-tags">
                            <span>CLOUD NATIVE</span>
                            <span>AI & ML</span>
                            <span>BLOCKCHAIN</span>
                            <span>DEVOPS</span>
                        </div>
                    </div>
                </section>

                <section className="about-details">
                    <div className="details-left">
                        <h3 className="section-label">// PHILOSOPHY</h3>
                        <p className="big-text">
                            We believe in <em>precision</em>, <em>scalability</em>, and <em>human-centric</em> design. 
                            Every line of code we write is a step toward a more efficient world.
                        </p>
                    </div>
                    <div className="details-right">
                        <div className="stat-box">
                            <span className="stat-num">150+</span>
                            <span className="stat-label">PROJECTS DELIVERED</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-num">50+</span>
                            <span className="stat-label">EXPERT ENGINEERS</span>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="about-footer">
                <div className="footer-line" />
                <div className="footer-content">
                    <span className="copyright">© 2026 IT AGENCY STUDIO</span>
                    <span className="location">EST. IN NEW YORK // OPERATING GLOBALLY</span>
                </div>
            </footer>
        </div>
    );
};

export default About;
