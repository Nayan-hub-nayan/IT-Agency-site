import { useEffect, useRef } from 'react';
import './Hero.css';

function WaveCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = 280;
        const height = canvas.height = 100;
        let frame = 0;

        function draw() {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = '#00e676';
            ctx.lineWidth = 1;

            for (let row = 0; row < 8; row++) {
                ctx.beginPath();
                const y = 12 + row * 11;
                for (let x = 0; x < width; x++) {
                    const wave = Math.sin((x * 0.03) + (frame * 0.02) + (row * 0.5)) * (6 + row * 0.5);
                    if (x === 0) ctx.moveTo(x, y + wave);
                    else ctx.lineTo(x, y + wave);
                }
                ctx.globalAlpha = 0.3 + (row * 0.05);
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
            frame++;
            requestAnimationFrame(draw);
        }

        draw();
    }, []);

    return <canvas ref={canvasRef} width={280} height={100} />;
}

function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Navigation */}
            <nav className="hero__nav">
                <a href="/" className="hero__nav-logo">IT AGENCY.</a>
                <div className="hero__nav-links">
                    <a href="/" className="active">HOME</a>
                    <a href="/about">ABOUT</a>
                </div>
            </nav>

            {/* Background gradient */}
            <div className="hero__bg" />

            {/* Portrait Image */}
            <div className="hero__portrait">
                <img src="/portrait.png" alt="Creative portrait" />
            </div>

            {/* Decorative cross top-right */}
            <div className="hero__cross">
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
                <span className="hero__cross-block" />
            </div>

            {/* Side metadata */}
            <div className="hero__side-meta">
                <div className="hero__coord-box">
                    <span className="hero__coord">40.7440°N73.9873° W</span>
                    <span className="hero__coord" style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>
                        19:03 DESIGN
                    </span>
                </div>
                <span className="hero__ina-label">INA</span>
                <div className="hero__barcode">
                    <span className="hero__diamond" />
                    <div className="hero__barcode-bars">
                        {Array.from({ length: 24 }, (_, i) => (
                            <span key={i} className="hero__barcode-bar" />
                        ))}
                    </div>
                    <span className="hero__barcode-numbers">1899 &nbsp;&nbsp; 4997</span>
                </div>
            </div>

            {/* Main grid content */}
            <div className="hero__content">
                {/* Left card */}
                <div className="hero__card">
                    <div>
                        <div className="hero__card-number">(N°001)</div>
                        <h2 className="hero__card-heading">
                            Digital<br />
                            Innovation<br />
                            <em>for the future.</em>
                        </h2>
                        <p className="hero__card-desc">
                            We bridge the gap between<br />
                            vision and reality with<br />
                            cutting-edge technology<br />
                            solutions.
                        </p>
                    </div>
                    <button className="hero__card-btn" aria-label="Our Solutions">
                        <svg viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Center content */}
                <div className="hero__center">
                    <span className="hero__about-tag">IT AGENCY</span>
                    <h1 className="hero__headline">
                        Empowering brands with<br />
                        scalable, intelligent -<br />
                        <span className="hero__headline-underline">software and digital<br />transformation.</span>
                    </h1>
                    <div className="hero__purple-bar" />
                </div>

                {/* Right column */}
                <div className="hero__right">
                    <span className="hero__number-label">(024)</span>
                    <p className="hero__approach-text">
                        STRATEGIC PLANNING.<br />
                        EXPERT DEVELOPMENT.<br />
                        SEAMLESS DEPLOYMENT.<br />
                        RESULTS DRIVEN.
                    </p>
                </div>

                {/* Middle row */}
                <div className="hero__mid-row">
                    <div className="hero__info-panel">
                        <div className="hero__info-header">
                            <span>INNOVATION</span>
                            <span>STUDIO</span>
                        </div>
                        <div className="hero__wave-box">
                            <WaveCanvas />
                            <span className="hero__wave-label">◆</span>
                        </div>
                        <p className="hero__project-desc">
                            SPECIALIZING IN CLOUD ARCHITECTURE, AI INTEGRATION,<br />
                            ENTERPRISE SOFTWARE, AND MODERN WEB EXPERIENCES—<br />
                            DESIGNED FOR SCALE AND ENGINEERED FOR EXCELLENCE.
                        </p>
                    </div>

                    <div className="hero__eye-icon" aria-label="View Projects">
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
                        </svg>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="hero__bottom">
                    <p className="hero__freelance-text">
                        FULL-SERVICE IT AGENCY<br />
                        CRAFTING ROBUST SOLUTIONS<br />
                        —FROM MVP TO ENTERPRISE—WITH<br />
                        PRECISION AND PASSION.
                    </p>
                    <span className="hero__since">// ESTABLISHED 2020</span>
                </div>
            </div>

            {/* Banner */}
            <div className="banner">
                <h2 className="banner__name">AGENCY.</h2>
                <div className="banner__right">
                    <span className="banner__tm">TM</span>
                    <div className="banner__japanese">クリエイティ<br />ブ・マインド</div>
                    <span className="banner__coords">40.7440°N 73.9873° W</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
