import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Tablet,
  ShieldCheck,
  Zap,
  Eye,
  Target,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  Award,
  Check,
  Flame,
  AlertTriangle,
  Cpu,
  MonitorCheck,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { translations, checkoutUrls, telegramSupportUrl } from "./languages";
import { LanguageCode } from "./types";

export default function App() {
  // Pre-load or select language (pt, en, or es)
  const [lang, setLang] = useState<LanguageCode>("pt");

  // Dynamic system warning state
  const [isIOS, setIsIOS] = useState(false);

  // Before vs After interactive slider simulation (0 to 100)
  const [sliderVal, setSliderVal] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  // Expanded FAQ Index state
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // Secure checkout routing overlay
  const [redirectingProduct, setRedirectingProduct] = useState<{
    isActive: boolean;
    title: string;
    targetUrl: string;
  }>({
    isActive: false,
    title: "",
    targetUrl: ""
  });

  // Sound/Vibe triggers simulation
  const [userNotification, setUserNotification] = useState<string | null>(null);

  // Automatically check if visitor is using an iOS device (iPhone, iPad, iPod)
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Auto-detect browser language to preset if matches our translations
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === "es") {
      setLang("es");
    } else if (browserLang === "pt") {
      setLang("pt");
    } else {
      setLang("en");
    }
  }, []);

  const t = translations[lang];

  // Helper trigger notification toast simulation
  const showToast = (message: string) => {
    setUserNotification(message);
    setTimeout(() => {
    setUserNotification(null);
    }, 4000);
  };

  const handleLanguageChange = (code: LanguageCode) => {
    setLang(code);
    const label = code === "pt" ? "Português Brasileiro" : code === "es" ? "Español LatAm" : "English USA";
    showToast(`Idioma alterado para / Language changed to: ${label}`);
  };

  const handleBuyClick = (productKey: "ipad" | "fps" | "bundle") => {
    const selectedProd = t.products[productKey];
    const targetUrl = checkoutUrls[lang][productKey];

    setRedirectingProduct({
      isActive: true,
      title: selectedProd.title,
      targetUrl: targetUrl
    });

    // Simulate high-converting loading sequence of 2 seconds
    setTimeout(() => {
      window.open(targetUrl, "_blank");
      setRedirectingProduct(prev => ({ ...prev, isActive: false }));
    }, 1800);
  };

  // Quick purchase anchor scroll or checkout click
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100 selection:bg-[#deff9a] selection:text-black font-sans antialiased">
      
      {/* ⚠️ NOT INTERFERING BANNER: TOP WARNING FOR IOS VISITORS */}
      <AnimatePresence>
        {isIOS && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0 }}
            className="relative bg-gradient-to-r from-red-600 via-amber-600 to-red-700 text-white font-bold text-xs py-3.5 px-4 text-center z-50 flex items-center justify-center gap-2 shadow-lg"
          >
            <ShieldAlert className="h-4.5 w-4.5 shrink-0 animate-bounce" />
            <span className="tracking-wide">{t.topWarning}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECURE CHECKOUT DYNAMIC SIMULATOR OVERLAY */}
      <AnimatePresence>
        {redirectingProduct.isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute h-24 w-24 rounded-full border-4 border-[#deff9a]/10 animate-ping" />
              <div className="absolute h-20 w-20 rounded-full border-t-2 border-b-2 border-cyan-400 animate-spin" />
              <div className="h-14 w-14 rounded-full bg-[#11192e] border-2 border-[#deff9a]/40 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-[#deff9a]" />
              </div>
            </div>
            
            <span className="font-mono text-[10px] tracking-widest text-[#deff9a] bg-[#deff9a]/10 px-3 py-1 rounded-full uppercase border border-[#deff9a]/20 mb-3">
              Secure SigiloPay gateway verified
            </span>

            <h3 className="font-cyber text-2xl font-black text-white uppercase tracking-wider mb-2">
              {lang === "pt" ? "Conectando ao Checkout..." : lang === "es" ? "Conectando al Checkout..." : "Redirecting to Secure Gateway..."}
            </h3>

            <p className="font-sans text-sm text-slate-300 max-w-sm mb-1 font-medium text-cyan-400">
              {redirectingProduct.title}
            </p>

            <p className="font-mono text-[10px] text-slate-500 max-w-xs break-all leading-normal mt-3">
              {redirectingProduct.targetUrl}
            </p>

            <div className="mt-8 flex items-center gap-1.5 justify-center text-[10px] uppercase font-mono text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SSL encrypted connection / biosintese.com.br</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOAT NOTIFICATION TOAST OVERLAY */}
      <AnimatePresence>
        {userNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#111827] border border-cyan-400/40 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <span className="text-xs text-slate-200 font-mono font-medium">{userNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚀 FLOAT TELEGRAM ACTION BUTTON */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <a
          href={telegramSupportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-900 font-cyber font-black tracking-wider text-xs px-5 py-3.5 rounded-xl uppercase transition-all duration-300 shadow-2xl shadow-cyan-400/20 hover:scale-105 active:scale-95"
        >
          <span className="absolute -top-1 -right-1 bg-red-500 text-white font-mono text-[8px] px-1 rounded-full animate-bounce">
            VIP
          </span>
          <Send className="h-4 w-4 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          <span>SUPPORT LIVE</span>
        </a>
      </div>

      {/* MAIN HEADER & STICKY TOP NAVIGATION BANNER */}
      <header className="sticky top-0 z-40 bg-[#06070a]/90 backdrop-blur-md border-b border-slate-800/60 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#deff9a] p-[1.5px] flex items-center justify-center shadow-lg shadow-blue-500/10">
              <div className="h-full w-full rounded-[10px] bg-[#0c0e14] flex items-center justify-center">
                <Tablet className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-cyber text-sm sm:text-base font-black tracking-wider text-slate-100 block leading-tight">
                BIOSÍNTESE <span className="text-[#deff9a]">SUITE</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#3b82f6] uppercase font-bold leading-none block">
                {t.domainName}
              </span>
            </div>
          </div>

          {/* Floated Lang Flags Selectors with visual flags */}
          <div className="flex items-center gap-2">
            {[
              { code: "pt", flag: "🇧🇷", name: "PT-BR" },
              { code: "en", flag: "🇺🇸", name: "EN" },
              { code: "es", flag: "🇪🇸", name: "ES" }
            ].map((option) => {
              const active = lang === option.code;
              return (
                <button
                  key={option.code}
                  onClick={() => handleLanguageChange(option.code as LanguageCode)}
                  className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all border cursor-pointer ${
                    active
                      ? "bg-[#deff9a] text-black border-[#deff9a] shadow-md shadow-[#deff9a]/20"
                      : "bg-[#0f111a] text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-[#151926]"
                  }`}
                >
                  <span className="text-sm leading-none shrink-0">{option.flag}</span>
                  <span className="font-mono text-[9px] tracking-wider leading-none">{option.name}</span>
                </button>
              );
            })}
          </div>

        </div>
      </header>

      {/* HERO SECTION / THE MAIN IMPACT GREETING */}
      <section className="relative pt-12 pb-20 px-6 overflow-hidden border-b border-slate-900">
        
        {/* Dynamic visual ambient glow nodes */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-96 bg-[#deff9a]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          
          {/* OS and Specs chips tags row */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[10px] font-extrabold px-3.5 py-1.5 rounded-lg uppercase tracking-widest">
              <Cpu className="h-3.5 w-3.5" />
              {t.systemBadge}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#deff9a]/10 border border-[#deff9a]/20 text-[#deff9a] font-mono text-[10px] font-extrabold px-3.5 py-1.5 rounded-lg uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5 text-[#deff9a] animate-pulse" />
              {t.metaBadge}
            </span>
          </div>

          {/* Action Header Headline */}
          <h1 className="font-cyber text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] uppercase tracking-tight">
            {t.headline}
          </h1>

          {/* Support subheadline content descriptions */}
          <p className="font-sans text-sm.5 sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            {t.subheadline}
          </p>

          {/* Double action hero triggers row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={scrollToPricing}
              className="glow-btn-green w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#deff9a] hover:bg-[#ebffc0] text-black font-cyber font-black tracking-widest text-sm sm:text-base px-8 py-5 rounded-xl uppercase transition transform hover:scale-103 active:scale-97 cursor-pointer"
            >
              <Zap className="h-4.5 w-4.5 text-black shrink-0" />
              <span>{t.ctaButtonText}</span>
            </button>

            <a
              href="#problem"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0f111a] hover:bg-[#151926] border border-slate-800 hover:border-slate-700 text-slate-200 font-cyber font-bold tracking-widest text-xs px-8 py-5 rounded-xl uppercase transition cursor-pointer"
            >
              <span>{lang === "pt" ? "LER DIFERENCIAIS ↓" : lang === "es" ? "LEER DETALLES ↓" : "LEARN MORE ↓"}</span>
            </a>
          </div>

          <p className="text-slate-500 font-mono text-[11px] uppercase tracking-wider block">
            {t.ctaSubText}
          </p>

        </div>
      </section>

      {/* BEFORE VS AFTER: INTERACTIVE SLIDER MODULE FOR IPAD FOV COMPARISON */}
      <section className="py-20 px-6 bg-[#090b10] border-b border-slate-900">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              <MonitorCheck className="h-3 w-3" />
              {t.videoSubtitle}
            </div>
            <h2 className="font-cyber text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              {t.sliderTitle}
            </h2>
            <p className="font-sans text-sm text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              {t.sliderDesc}
            </p>
          </div>

          {/* Interactive slider rendering graphics elements */}
          <div className="bg-[#0f111a] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl relative">
            
            {/* The absolute container box size */}
            <div className="relative h-[240px] sm:h-[400px] w-full block bg-slate-950 overflow-hidden select-none">
              
              {/* Virtual Background map landscape representation */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 filter saturate-[1.2]"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.5.0')",
                }}
              />
              
              {/* Crosshair Center Grid overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                <div className="h-28 w-28 border border-dashed border-cyan-400 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-[#deff9a] rounded-full" />
                </div>
              </div>

              {/* LAYER 1: Full iPad view activated rendered background (Widescreen 110 FOV) */}
              <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-12 text-center select-none pointer-events-none">
                
                {/* Out of bounds visual targets revealed on far limits */}
                <div className="bg-red-500/15 border border-red-500/40 rounded-xl p-3 flex flex-col items-center animate-pulse shadow-md">
                  <span className="font-mono text-[8px] bg-red-600 text-white font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest leading-none mb-1">
                    ENEMY REVEALED
                  </span>
                  <p className="font-cyber text-[10px] text-red-400 font-extrabold">LEFT TACTICAL BOUND</p>
                  <p className="font-mono text-[9px] text-slate-400 mt-0.5">Visible: 110° FOV</p>
                </div>

                <div className="bg-red-500/15 border border-red-500/40 rounded-xl p-3 flex flex-col items-center animate-pulse shadow-md">
                  <span className="font-mono text-[8px] bg-red-600 text-white font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest leading-none mb-1">
                    ENEMY REVEALED
                  </span>
                  <p className="font-cyber text-[10px] text-red-400 font-extrabold">RIGHT TACTICAL BOUND</p>
                  <p className="font-mono text-[9px] text-slate-400 mt-0.5">Visible: 110° FOV</p>
                </div>

                {/* Main active status badge bottom center */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#06070a] border border-[#deff9a]/40 rounded-full py-1.5 px-4 block">
                  <span className="font-cyber text-xs text-[#deff9a] font-bold tracking-widest">
                    ✔️ {t.sliderIpadLabel}
                  </span>
                </div>
              </div>

              {/* LAYER 2: Phone View standard crop wrapper overlapping standard screen limits */}
              <div
                className="absolute inset-y-0 left-0 bg-[#0c0d12]/95 border-r-[3px] border-[#3b82f6] shadow-xl overflow-hidden z-20 flex items-center justify-center"
                style={{ width: `${sliderVal}%`, transition: isSliding ? "none" : "all 0.12s ease-out" }}
              >
                {/* Redundant landscape BG aligned with the core outer landscape to match comparative look */}
                <div
                  className="absolute inset-0 w-full bg-cover bg-center opacity-25 filter saturate-[0.8] grayscale-[30%]"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.5.0')",
                    minWidth: "400px",
                    width: "800px",
                  }}
                />

                {/* Restricted standard mobile frame */}
                <div className="relative text-center flex flex-col items-center justify-center p-6 bg-slate-950/80 border border-slate-800/40 rounded-2xl max-w-xs mx-auto select-none pointer-events-none">
                  <Smartphone className="h-10 w-10 text-red-400 mb-2 shrink-0 animate-pulse" />
                  <span className="font-cyber text-xs uppercase text-red-400 font-bold tracking-widest">
                    ⚠️ {t.sliderPhoneLabel}
                  </span>
                  <p className="font-sans text-[11px] text-slate-400 font-light mt-1 max-w-[200px] leading-tight">
                    {lang === "pt" ? "Márgenes horizontais ocultados pela engine padrão." : lang === "es" ? "Márgenes horizontales ocultos por el motor oficial." : "Side views are completely clipped by official layout limits."}
                  </p>
                </div>
              </div>

              {/* Slider Center handle line */}
              <div
                className="absolute inset-y-0 z-30 pointer-events-none"
                style={{ left: `calc(${sliderVal}% - 16px)` }}
              >
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-[#deff9a] text-black flex items-center justify-center shadow-xl shadow-[#deff9a]/40 cursor-col-resize pointer-events-auto active:scale-95 transition-transform border border-black font-mono font-bold text-sm">
                    ↔
                  </div>
                </div>
              </div>

            </div>

            {/* Slider Bottom Selector inputs */}
            <div className="bg-[#10141f] px-6 py-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-mono text-xs text-slate-300 font-medium">
                {t.sliderInstruction}
              </span>
              <div className="flex-1 max-w-md flex items-center gap-3">
                <span className="font-mono text-slate-500 text-[10px] tracking-widest font-extrabold uppercase">PHONE FOV</span>
                <input
                  type="range"
                  min="8"
                  max="92"
                  value={sliderVal}
                  onMouseDown={() => setIsSliding(true)}
                  onMouseUp={() => setIsSliding(false)}
                  onTouchStart={() => setIsSliding(true)}
                  onTouchEnd={() => setIsSliding(false)}
                  onChange={(e) => setSliderVal(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-[#deff9a]"
                />
                <span className="font-mono text-[#deff9a] text-[10px] tracking-widest font-extrabold uppercase">IPAD FOV (110°)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* THE PROBLEM VIEW: WHY PLAYERS FAIL UNDER REGULAR SCREEN CONSTRAINTS */}
      <section id="problem" className="py-24 px-6 bg-[#06070a] border-b border-slate-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left description */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-[#deff9a] uppercase tracking-widest block">
                // {t.problemTitle}
              </span>
              <h2 className="font-cyber text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight leading-none">
                {t.problemHeading}
              </h2>
              <p className="font-sans font-light text-slate-300 text-sm.5 leading-relaxed">
                {t.problemText1}
              </p>
              <p className="font-sans font-light text-slate-300 text-sm.5 leading-relaxed">
                {t.problemText2}
              </p>
            </div>

            {/* Right statistics panels */}
            <div className="md:col-span-5 space-y-4">
              
              {/* Stat box Left */}
              <div className="bg-[#0f111a]/95 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5">
                  <Flame className="h-16 w-16 text-red-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span className="font-cyber font-black text-xl text-[#deff9a]">{t.problemStat1Title}</span>
                </div>
                <p className="font-sans text-[12px] text-slate-400 font-light leading-relaxed">
                  {t.problemStat1Text}
                </p>
              </div>

              {/* Stat box Right */}
              <div className="bg-[#0f111a]/95 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5">
                  <Cpu className="h-16 w-16 text-blue-500" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                  <span className="font-cyber font-black text-xl text-blue-400">{t.problemStat2Title}</span>
                </div>
                <p className="font-sans text-[12px] text-slate-400 font-light leading-relaxed">
                  {t.problemStat2Text}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* COMPANION SPEC GRID: TWO COLUMNS SHOWING INDIVIDUAL BREAKDOWNS */}
      <section className="py-24 px-6 bg-[#090b10] border-b border-slate-900">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-center text-[#deff9a] uppercase tracking-widest block">
              // {lang === "pt" ? "VISÃO GERAL DO PRODUTO" : lang === "es" ? "VISTA GENERAL DEL PRODUCTO" : "PRODUCT OVERVIEW"}
            </span>
            <h2 className="font-cyber text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              {t.comparisonHeading}
            </h2>
            <p className="font-sans text-sm text-slate-400 font-light max-w-md mx-auto leading-relaxed">
              {t.comparisonSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PRODUCT CARD 1: iPad View spec */}
            <div className="bg-[#10141f]/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-[#deff9a]/40 transition duration-300 relative">
              <span className="absolute -top-3.5 left-6 bg-[#3b82f6]/10 border border-[#3b82f6]/20 font-mono text-[8px] font-bold text-cyan-400 px-3 py-1 rounded uppercase tracking-widest">
                FPS COMPACT FILE
              </span>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-cyan-400">
                    <Tablet className="h-5.5 w-5.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    FOV 110° MAX
                  </span>
                </div>
                
                <h3 className="font-cyber text-xl font-bold text-white uppercase">
                  {t.ipadCardTitle}
                </h3>

                <p className="font-sans text-xs.5 text-slate-300 leading-relaxed font-light">
                  {t.ipadCardDesc}
                </p>

                <div className="border-t border-slate-800 p-0.5" />

                <div className="space-y-3">
                  {t.ipadCardSpecs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PRODUCT CARD 2: 120 FPS spec */}
            <div className="bg-[#10141f]/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-[#3b82f6]/40 transition duration-300 relative">
              <span className="absolute -top-3.5 left-6 bg-[#deff9a]/10 border border-[#deff9a]/25 font-mono text-[8px] font-bold text-[#deff9a] px-3 py-1 rounded uppercase tracking-widest">
                ACTIVE COREGPU MOD
              </span>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-[#deff9a]/5 border border-[#deff9a]/10 flex items-center justify-center text-[#deff9a]">
                    <Cpu className="h-5.5 w-5.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    120Hz SUPPORT
                  </span>
                </div>

                <h3 className="font-cyber text-xl font-bold text-white uppercase">
                  {t.fpsCardTitle}
                </h3>

                <p className="font-sans text-xs.5 text-slate-300 leading-relaxed font-light">
                  {t.fpsCardDesc}
                </p>

                <div className="border-t border-slate-800 p-0.5" />

                <div className="space-y-3">
                  {t.fpsCardSpecs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                      <CheckCircle className="h-4 w-4 text-[#deff9a] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING MODULE CONTAINER TABLE (THE CONVERTING HEART) */}
      <section id="pricing" className="py-24 px-6 bg-[#06070a] border-b border-slate-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-[#deff9a] uppercase tracking-widest block">
              // {t.offerTitle}
            </span>
            <h2 className="font-cyber text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              {t.pricingHeading}
            </h2>
            <p className="font-sans text-sm text-slate-400 font-light max-w-md mx-auto leading-relaxed">
              {t.pricingSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
            
            {/* PROD 1: IPAD VIEW CARD */}
            <div className="bg-[#0f111a]/95 border border-slate-850 rounded-2xl flex flex-col justify-between p-8 relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <span className="bg-[#3b82f6]/10 border border-[#3b82f6]/20 font-mono text-[8px] font-bold text-cyan-400 px-2.5 py-1 rounded inline-block uppercase tracking-wider mb-3">
                    {t.products.ipad.badge}
                  </span>
                  <h3 className="font-cyber text-xl font-bold text-white uppercase leading-tight">
                    {t.products.ipad.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-2 font-light leading-relaxed">
                    {t.products.ipad.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="font-mono text-xs text-slate-500 line-through">
                    {t.products.ipad.strike}
                  </span>
                  <span className="font-cyber font-black text-3xl text-white">
                    {t.products.ipad.price}
                  </span>
                </div>

                <div className="border-t border-slate-800 p-0.5" />

                <ul className="space-y-3">
                  {t.products.ipad.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                      <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleBuyClick("ipad")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f111a] hover:bg-[#151926] text-white border border-slate-800 hover:border-slate-700 font-cyber font-bold tracking-wider text-xs py-4 rounded-xl uppercase cursor-pointer"
                >
                  <span>{t.buyButtonText}</span>
                  <ArrowRight className="h-4 w-4 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* PROD 3: BUNDLE CARD (MELHOR VALOR - COMBO SUPREMO) IN MIDDLE OR END (HIGHLIGHTED) */}
            <div className="bg-gradient-to-b from-[#111c1d] via-[#090e15] to-[#0d1514] border-2 border-[#deff9a] rounded-3xl flex flex-col justify-between p-8 sm:p-10 relative overflow-hidden order-first lg:order-none lg:scale-105 z-10 shadow-2xl">
              
              {/* Highlight ribbon tag */}
              <div className="absolute top-0 right-0 bg-[#deff9a] text-black font-cyber font-black tracking-widest text-[9px] px-4 py-1.5 uppercase rounded-bl-xl shadow-md">
                {lang === "pt" ? "COMBO RECOMENDADO" : lang === "es" ? "RECOMENDADO" : "BEST SELLER"}
              </div>

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[#deff9a]/10 border border-[#deff9a]/20 font-mono text-[9px] font-extrabold text-[#deff9a] px-3 py-1 rounded uppercase tracking-wider mb-3">
                    <Award className="h-3.5 w-3.5 text-[#deff9a] shrink-0" />
                    <span>{t.bundleBadge}</span>
                  </div>
                  
                  <h3 className="font-cyber text-2xl font-black text-white uppercase leading-none">
                    {t.products.bundle.title}
                  </h3>
                  <p className="font-sans text-xs.5 text-slate-300 mt-2 font-light leading-relaxed">
                    {t.products.bundle.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="font-mono text-xs text-slate-500 line-through">
                    {t.products.bundle.strike}
                  </span>
                  <span className="font-cyber font-black text-4xl text-[#deff9a] tracking-tight">
                    {t.products.bundle.price}
                  </span>
                </div>

                <div className="border-t border-[#deff9a]/10 p-0.5" />

                <ul className="space-y-3">
                  {t.products.bundle.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-slate-200 mt-0.5">
                      <div className="p-0.5 rounded bg-[#deff9a]/10 border border-[#deff9a]/20 shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-[#deff9a] shrink-0" />
                      </div>
                      <span className="font-sans font-medium text-slate-150 leading-tight">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleBuyClick("bundle")}
                  className="glow-btn-green w-full inline-flex items-center justify-center gap-2.5 bg-[#deff9a] text-black font-cyber font-black tracking-widest text-sm py-4.5 rounded-xl uppercase transition duration-300 cursor-pointer active:scale-97"
                >
                  <Zap className="h-4.5 w-4.5 text-black shrink-0" />
                  <span>{t.buyButtonText}</span>
                </button>
              </div>
            </div>

            {/* PROD 2: 120 FPS CARD */}
            <div className="bg-[#0f111a]/95 border border-slate-850 rounded-2xl flex flex-col justify-between p-8 relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <span className="bg-[#deff9a]/10 border border-[#deff9a]/20 font-mono text-[8px] font-bold text-[#deff9a] px-2.5 py-1 rounded inline-block uppercase tracking-wider mb-3">
                    {t.products.fps.badge}
                  </span>
                  <h3 className="font-cyber text-xl font-bold text-white uppercase leading-tight">
                    {t.products.fps.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-2 font-light leading-relaxed">
                    {t.products.fps.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="font-mono text-xs text-slate-500 line-through">
                    {t.products.fps.strike}
                  </span>
                  <span className="font-cyber font-black text-3xl text-white">
                    {t.products.fps.price}
                  </span>
                </div>

                <div className="border-t border-slate-800 p-0.5" />

                <ul className="space-y-3">
                  {t.products.fps.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                      <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleBuyClick("fps")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f111a] hover:bg-[#151926] text-white border border-slate-800 hover:border-slate-700 font-cyber font-bold tracking-wider text-xs py-4 rounded-xl uppercase cursor-pointer"
                >
                  <span>{t.buyButtonText}</span>
                  <ArrowRight className="h-4 w-4 text-cyan-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Moneyback guarantee bullet info ribbon */}
          <div className="mt-16 text-center max-w-sm mx-auto bg-slate-900/40 border border-slate-850 p-4 rounded-xl flex items-center justify-center gap-3">
            <ShieldCheck className="h-8 w-8 text-[#deff9a] shrink-0" />
            <div className="text-left font-mono text-[10px] text-slate-400 uppercase tracking-wide leading-tight">
              <span>{lang === "pt" ? "Garantia incondicional de reembolso caso o seu aparelho seja incompatível." : lang === "es" ? "Garantía total de reembolso por incompatibilidad." : "No-questions-asked refund guarantee on hardware incompatibility."}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section className="py-24 px-6 bg-[#090b10] border-b border-slate-900">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-[#deff9a] tracking-widest uppercase block text-center">
              // INFO
            </span>
            <h2 className="font-cyber text-3xl font-extrabold text-white uppercase tracking-tight">
              {t.faqHeading}
            </h2>
            <p className="font-sans text-sm text-slate-400 font-light max-w-md mx-auto leading-relaxed">
              {t.faqSub}
            </p>
          </div>

          <div className="space-y-4">
            {t.faqs.map((faq, idx) => {
              const isExpanded = expandedFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-[#0f111a]/90 rounded-xl border border-slate-850 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-cyber text-sm sm:text-base font-bold text-white uppercase tracking-wide leading-snug">
                      {faq.question}
                    </span>
                    <span className="ml-4 shrink-0 text-[#deff9a]">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-[#deff9a]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-500 hover:text-[#deff9a] transition" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-850 bg-slate-950/40"
                      >
                        <p className="p-6 font-sans text-slate-300 text-sm leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER DIRECT SUPPORT ACCESS CHAT CARD */}
      <section className="bg-gradient-to-tr from-[#0a111a] via-[#090b10] to-[#071311] py-20 px-6 border-b border-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-md mx-auto relative z-10 space-y-6">
          <div className="inline-flex p-3 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 animate-pulse">
            <Send className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#deff9a] tracking-widest uppercase block mb-1">
              {t.supportTitle}
            </span>
            <h3 className="font-cyber text-2xl font-extrabold text-white uppercase tracking-tight">
              {t.supportHeading}
            </h3>
            <p className="font-sans text-xs.5 text-slate-405 leading-relaxed font-light mt-2 max-w-sm mx-auto text-slate-400">
              {t.supportDesc}
            </p>
          </div>
          <div>
            <a
              href={telegramSupportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-cyan-400 hover:bg-cyan-300 text-black font-cyber font-black tracking-widest text-xs px-8 py-4.5 rounded-full uppercase cursor-pointer transition transform hover:scale-102 active:scale-98 shadow-xl shadow-cyan-450/20"
            >
              <Send className="h-4.5 w-4.5 transform rotate-[-12deg]" />
              <span>{t.supportButtonText}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER COMPLIANCE WARNINGS */}
      <footer className="bg-[#050609] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-slate-500 font-mono tracking-wider uppercase text-center md:text-left">
          
          <div className="space-y-1">
            <p className="text-slate-400">{t.footerDisclaimer}</p>
            <div className="flex flex-wrap gap-2.5 items-center justify-center md:justify-start pt-2 font-semibold">
              <span className="text-[#deff9a] bg-[#deff9a]/5 border border-[#deff9a]/10 px-2 py-0.5 rounded text-[8px]">
                SECURE PLATFORM
              </span>
              <span className="text-cyan-400 bg-[#3b82f6]/5 border border-[#3b82f6]/10 px-2 py-0.5 rounded text-[8px]">
                BIOSINTESE INT.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-600 shrink-0 select-none">
            <span>ENGINE: V4 GRAPHICS LEVEL</span>
            <span className="text-[#deff9a]">MATRIX ACTIVE</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
