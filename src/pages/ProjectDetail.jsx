import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock data for projects since we don't have a backend
const getProjectData = (id) => {
  const defaultData = {
    id: id || 'OP-AI-01',
    name: 'OMNI_AURA DIGITAL AGENCY',
    year: '2025',
    desc: 'A comprehensive digital agency platform offering custom Web Apps, AI Agent integration, Strategic Consulting, and Data-Driven Digital Marketing.',
    imgMain: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    imgSub1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    imgSub2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    missionDesc: 'We architected a dynamic, performance-optimized agency web application designed to showcase comprehensive digital services. The platform integrates interactive AI chatbots for immediate client consultation, interactive service portfolios for Web Apps and Marketing, and an automated booking system to streamline the consulting pipeline.',
    stack: ['React_Web_App', 'OpenAI_Agents', 'Next.js_SEO', 'Framer_Motion', 'Node.js_Backend'],
    engagement: '94%',
    likes: '15.8k',
    shares: '4.5k',
    clientQuote: '"Omni Aura transformed our digital presence. Their custom AI agents handle 60% of our initial customer inquiries, and the new web app they built increased our conversions by unprecedented margins."',
    clientImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
    clientName: 'Sarah Jenkins',
    clientRole: 'CEO // TechNova Solutions',
    videoThumb: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    demoUrl: 'https://reapcapital.in',
    githubRepo: 'https://github.com/Nayan-hub-nayan/nk-portfolio.git'
  };

  return defaultData;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [previewMode, setPreviewMode] = useState('desktop');
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [sharesCount, setSharesCount] = useState(0);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
    const data = getProjectData(id);
    setProject(data);

    // Parse 'k' numbers if present
    const parseK = (str) => {
      if (typeof str === 'string' && str.toLowerCase().endsWith('k')) {
        return parseFloat(str) * 1000;
      }
      return parseInt(str) || 0;
    };

    setLikesCount(parseK(data.likes));
    setSharesCount(parseK(data.shares));
    setIsLiked(false);
  }, [id]);

  const formatK = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    setSharesCount(prev => prev + 1);
    navigator.clipboard.writeText(window.location.href);
    alert('Project link copied to clipboard!');
  };

  const openNewTab = () => {
    if (project && project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  };

  const getPreviewWidth = () => {
    switch (previewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  const handleUnlock = () => {
    setIsProcessingPayment(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsUnlocked(true);
      setIsProcessingPayment(false);
    }, 1500);
  };

  if (!project) return null;

  return (
    <div className="flex-1 flex flex-col items-center pt-32 pb-20 bg-background-dark grid-bg overflow-x-hidden">

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 mb-6 border border-primary/40 bg-primary/5 rounded-full"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Case Study // {project.year}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none font-display"
        >
          {project.name.split(' ')[0]}<br />
          <span className="text-primary italic">{project.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-slate-400 max-w-2xl mx-auto font-light text-lg"
        >
          {project.desc}
        </motion.p>
      </section>

      {/* Main Images 
      <section className="w-full max-w-7xl px-6 py-20 relative">
        <div className="flex flex-col lg:flex-row items-end justify-center gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block w-72 h-[480px] rounded-[2rem] border-8 border-slate-800 bg-slate-900 glass-panel neon-glow relative overflow-hidden transform -rotate-6"
          >
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${project.imgSub1}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl h-[500px] rounded-xl border-[12px] border-slate-800 bg-slate-900 glass-panel neon-glow relative overflow-hidden z-20 shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-4 gap-2 z-30">
              <div className="size-2 rounded-full bg-red-500"></div>
              <div className="size-2 rounded-full bg-yellow-500"></div>
              <div className="size-2 rounded-full bg-green-500"></div>
            </div>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${project.imgMain}')` }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block w-96 h-[420px] rounded-2xl border-[10px] border-slate-800 bg-slate-900 glass-panel neon-glow relative overflow-hidden transform rotate-3 -translate-x-12"
          >
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${project.imgSub2}')` }}></div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>*/}

      {/* Live Preview Iframe Section */}
      <section className="w-full max-w-7xl px-6 py-12 border-t border-primary/20">
        <div className="flex items-center gap-2 mb-10">
          <span className="material-symbols-outlined text-primary">visibility</span>
          <h3 className="text-xl font-bold uppercase tracking-widest italic">[ Live_Preview ]</h3>
        </div>
        <div className="relative rounded-xl overflow-hidden glass-panel border-primary/30 p-2">
          <div className="w-full bg-slate-900 rounded-lg overflow-hidden border border-white/10 flex flex-col items-center" style={{ height: '70vh', minHeight: '600px' }}>
            <div className="bg-slate-800 px-4 py-2 w-full flex items-center justify-between">
              <div className="flex gap-2 pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="bg-slate-900 px-4 py-1.5 rounded-full flex items-center gap-6 border border-white/10 shadow-inner">
                <div className="flex items-center gap-3">
                  <button onClick={() => setPreviewMode('mobile')} className={`hover:text-white transition-colors ${previewMode === 'mobile' ? 'text-primary' : 'text-slate-500'}`} title="Mobile">
                    <span className="material-symbols-outlined text-[18px]">smartphone</span>
                  </button>
                  <button onClick={() => setPreviewMode('tablet')} className={`hover:text-white transition-colors ${previewMode === 'tablet' ? 'text-primary' : 'text-slate-500'}`} title="Tablet">
                    <span className="material-symbols-outlined text-[18px]">tablet_mac</span>
                  </button>
                  <button onClick={() => setPreviewMode('desktop')} className={`hover:text-white transition-colors ${previewMode === 'desktop' ? 'text-primary' : 'text-slate-500'}`} title="Desktop">
                    <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                  </button>
                </div>

                <div className="w-px h-4 bg-white/20"></div>

                <div className="flex items-center gap-3">
                  <button onClick={openNewTab} className="text-slate-500 hover:text-white transition-colors" title="Open in New Tab">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </button>
                  <button onClick={handleShare} className="text-slate-500 hover:text-white transition-colors" title="Copy Link">
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </button>
                </div>
              </div>

              <div className="w-16 flex justify-end">
                <span className="bg-slate-900 px-2 flex items-center rounded text-[10px] font-mono text-slate-500 border border-white/5 truncate max-w-[100px]">{previewMode.toUpperCase()}</span>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center bg-black/50 overflow-hidden py-4 transition-all duration-300">
              <iframe
                src={project.demoUrl}
                className="h-full border border-white/10 shadow-2xl bg-white transition-all duration-300 ease-in-out rounded-xl"
                style={{ width: getPreviewWidth() }}
                title="Live Preview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details & Stats */}
      <section className="w-full max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-primary/20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">analytics</span>
            <h3 className="text-xl font-bold uppercase tracking-widest italic">Mission_Data</h3>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
            {project.missionDesc}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.stack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-800 border border-primary/30 rounded text-[10px] font-bold text-primary uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl border-accent/20">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-accent">hub</span>
            <h3 className="text-xl font-bold uppercase tracking-widest italic">Interaction_Hub</h3>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Engagement_Level</span>
              <span className="text-xl font-mono text-accent">{project.engagement}</span>
            </div>
            <div className="flex justify-around py-4">
              <button
                onClick={handleLike}
                className="text-center group transition-colors cursor-pointer"
              >
                <div
                  className={`material-symbols-outlined mb-1 group-hover:scale-110 transition-transform ${isLiked ? 'text-primary fill-1' : 'text-slate-500 group-hover:text-primary'}`}
                  style={isLiked ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  favorite
                </div>
                <div className={`text-lg font-bold ${isLiked ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                  {formatK(likesCount)}
                </div>
                <div className="text-[10px] text-slate-500 uppercase">Likes</div>
              </button>

              <div className="w-px h-10 bg-white/10"></div>

              <button
                onClick={handleShare}
                className="text-center group transition-colors cursor-pointer"
              >
                <div className="material-symbols-outlined text-accent mb-1 group-hover:scale-110 transition-transform">
                  share
                </div>
                <div className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                  {formatK(sharesCount)}
                </div>
                <div className="text-[10px] text-slate-500 uppercase">Shares</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Source Code */}
      <section className="w-full max-w-7xl px-6 py-12 border-t border-primary/20">
        <div className="flex items-center gap-2 mb-10">
          <span className="material-symbols-outlined text-primary">{isUnlocked ? 'lock_open' : 'lock'}</span>
          <h3 className="text-xl font-bold uppercase tracking-widest italic">[ Protected_Repository ]</h3>
        </div>

        <div className="relative rounded-xl overflow-hidden glass-panel border-primary/30 p-1 group">
          <div className="relative h-[400px] w-full bg-slate-900/50 overflow-y-auto rounded-lg custom-scrollbar">
            {isUnlocked ? (
              <div className="flex flex-col items-center justify-center h-full space-y-8 absolute inset-0 bg-slate-900 z-10 p-8">
                <div className="flex items-center gap-4 text-accent">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                  <h4 className="text-2xl font-bold uppercase tracking-widest font-mono">Access Granted</h4>
                </div>
                <p className="text-slate-400 text-center max-w-md font-mono text-sm leading-relaxed">
                  Repository decrypted. You can now clone or download the source code locally. Keep this URL secure.
                </p>

                <div className="w-full max-w-lg bg-black/60 border border-accent/30 p-4 rounded-lg flex items-center justify-between gap-4">
                  <div className="truncate font-mono text-sm text-slate-300">
                    git clone {project.githubRepo}
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`git clone ${project.githubRepo}`);
                      alert('Clone command copied to clipboard!');
                    }}
                    className="text-accent hover:text-white transition-colors flex-shrink-0"
                    title="Copy Clone Command"
                  >
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => window.open(project.githubRepo.replace('.git', ''), '_blank')}
                    className="px-6 py-3 bg-accent/10 border border-accent/40 text-accent font-bold text-xs uppercase tracking-[0.2em] rounded hover:bg-accent hover:text-black transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                    Open in GitHub
                  </button>
                  <button
                    onClick={() => window.open(`${project.githubRepo.replace('.git', '')}/archive/refs/heads/main.zip`)}
                    className="px-6 py-3 bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] rounded hover:bg-white hover:text-black transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined">download</span>
                    Download ZIP
                  </button>
                </div>
              </div>
            ) : (
              <code className="select-none blur-md">{`// ENCRYPTED_MODULE_V4.0
import { initializeNeuralLink } from "@neon/core";
import { SecurityContext } from "./security";

const ACCESS_KEY = "SHA-512:********************";

export async function decryptRepository(userId, token) {
  const securityLayer = await verifyCredentials(userId, token);
  
  if (securityLayer.status === "LOCKED") {
    throw new Error("Access Denied: Encrypted Block Detected");
  }

  const payload = await fetchProtectedNodes({
    tier: 'ENTERPRISE',
    nodes: ['alpha', 'beta', 'gamma'],
    encryption: 'AES-256-GCM'
  });

  return parsePayload(payload);
}

// SECURITY_EXCEPTION: Payment_Protocol_Required
// ERROR_CODE: 0x402_PAYMENT_REQUIRED
`}</code>
            )}

            {!isUnlocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px]">
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 border border-primary bg-primary/20 rounded-full">
                  <span className="material-symbols-outlined text-primary text-sm">security</span>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">Encrypted_Access</span>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={handleUnlock}
                    disabled={isProcessingPayment}
                    className="px-8 py-4 bg-primary text-white font-bold text-sm tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(255,0,122,0.6)] hover:scale-105 transition-transform flex items-center gap-3 rounded disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                  >
                    {isProcessingPayment ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">key</span>
                        Unlock Source Code
                      </>
                    )}
                  </button>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-mono text-accent font-bold tracking-widest">ACCESS_FEE: $199</span>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Payment required for full decryption.</p>
                  </div>
                </div>
              </div>
            )}

            {isUnlocked && (
              <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/50 rounded-full">
                <span className="material-symbols-outlined text-accent text-sm">verified</span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white font-mono">Decrypted</span>
              </div>
            )}
          </div>

          <div className="absolute top-0 right-0 p-4">
            <div className={`size-3 rounded-full ${isUnlocked ? 'bg-accent shadow-[0_0_10px_var(--accent)]' : 'bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]'}`}></div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="w-full max-w-7xl px-6 py-20">
        <div className="flex items-center gap-2 mb-10">
          <span className="material-symbols-outlined text-primary">reviews</span>
          <h3 className="text-xl font-bold uppercase tracking-widest italic">Client_Feedback</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-accent fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <blockquote className="text-2xl font-medium italic leading-snug">
              {project.clientQuote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full border border-primary p-1">
                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${project.clientImage}')` }}></div>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-primary font-mono text-sm">{project.clientName}</p>
                <p className="text-xs text-slate-500 uppercase font-mono">{project.clientRole}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden glass-panel p-2">
              <div className="w-full h-full rounded-lg bg-cover bg-center grayscale contrast-125 opacity-50" style={{ backgroundImage: `url('${project.videoThumb}')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="size-20 rounded-full bg-primary/20 backdrop-blur-md border border-primary flex items-center justify-center group hover:bg-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-white text-4xl group-hover:scale-110 transition-transform">play_arrow</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="w-full max-w-7xl px-6 py-20 border-t border-primary/20">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">account_tree</span>
            <h3 className="text-xl font-bold uppercase tracking-widest italic">[ Related_Operations ]</h3>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 transition-all font-mono text-xs tracking-widest cursor-pointer">
              &lt; PREV
            </button>
            <button className="px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 transition-all font-mono text-xs tracking-widest cursor-pointer">
              NEXT &gt;
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
          {/* Related Card 1 */}
          <div className="min-w-[300px] flex-none glass-panel p-4 rounded-xl border-primary/20 group hover:border-primary/50 transition-all snap-start">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
              <img alt="Project Alpha" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNDTnRaYwtMHlPHzs9TJlBbbr2_EH3fqEA1IokwcF9Q_XiXdLtQrl7XHgTC1pZTjUo_-64Xg3KRegPiCF-n6WQMTJd9mCG36TDFDc4ZU2CvojmuoXJFKsmGkEkKJ9-1k7U0oRSXs0MAAGYiiVyBX794u14GbD2tkT95u9bipgHbOr-APhG3cYbtRM2Aptkasfc6iN81m3RNLltLj89xFtCeoeVuIUyPaeghffr_W6jsAUJohuTWx17qO7L8c4jJKP_k1FjcW6YK-rD" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">CYBER_NET_V3</h4>
            <button onClick={() => { navigate('/project/CC-09'); window.scrollTo(0, 0) }} className="w-full py-2 bg-transparent border border-accent/40 text-accent font-bold text-[10px] uppercase tracking-widest hover:bg-accent/10 transition-all cursor-pointer">
              View_Data
            </button>
          </div>

          {/* Related Card 2 */}
          <div className="min-w-[300px] flex-none glass-panel p-4 rounded-xl border-primary/20 group hover:border-primary/50 transition-all snap-start">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
              <img alt="Project Beta" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCna8dQakiM4NeoWSaORey5QCaCwyCk9akrzFZX56-yf7yN4yGlYbvUcAe8imZYUFhk5VkcJY1pH-UmddMUCy2CkeFP37DbYUrtKscAom16uUpK8s5ZUuxkeb1adYjJ3b1IUae3MJYiaQQbv-s3wdsLSbvviYi1XB3w_NqCMTS11RlaX8kheJfbCeWyhJMZJ5JX74l0dZHeLvzkTyPG3DsgIJNY3PnzROofb_pTyAawzLaKULpmS43lnVW2nYJE7Cn0m00livycv--p" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">VOID_SHELL_CORE</h4>
            <button onClick={() => { navigate('/project/AX-11'); window.scrollTo(0, 0) }} className="w-full py-2 bg-transparent border border-accent/40 text-accent font-bold text-[10px] uppercase tracking-widest hover:bg-accent/10 transition-all cursor-pointer">
              View_Data
            </button>
          </div>

          {/* Related Card 3 */}
          <div className="min-w-[300px] flex-none glass-panel p-4 rounded-xl border-primary/20 group hover:border-primary/50 transition-all snap-start">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
              <img alt="Project Gamma" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPBhbfz_xYtWXKshFq5ESFKyy-ZGPHkFWdgG3lMQi3qFRJT2aUlUUgiqcmjcHFRgSfYvKegBOWkydTX06pS5PZxfaop2Dtp4p25Fr5omPDWcSCWnJxd5T7eixOkYesbWFUsAybcTb5v1mkZdxTfwusrDpcRkJng4yR0iJ5hdVEgUSkFCNabTxyK6kqcIeAywBCakD3bFMqygmDRH2sZ2U7HV_QiUWP7p1MLpoeHhCKWUGQv7aigFsCD82HwToi4yswJon_mYfsScdq" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">NEXUS_POINT_OS</h4>
            <button onClick={() => { navigate('/project/NX-99'); window.scrollTo(0, 0) }} className="w-full py-2 bg-transparent border border-accent/40 text-accent font-bold text-[10px] uppercase tracking-widest hover:bg-accent/10 transition-all cursor-pointer">
              View_Data
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
