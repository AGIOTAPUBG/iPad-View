import { CopyDatabase, LanguageCode } from "./types";

// State variable checkout URLs for easily pasting checkout links later
export const checkoutUrls: Record<LanguageCode, { ipad: string; fps: string; bundle: string }> = {
  pt: {
    ipad: "https://sigilopay.com/checkout/pt-ipad-view-biosintese",
    fps: "https://sigilopay.com/checkout/pt-fps-unlocker-biosintese",
    bundle: "https://sigilopay.com/checkout/pt-combo-supremo-biosintese"
  },
  en: {
    ipad: "https://sigilopay.com/checkout/en-ipad-view-biosintese",
    fps: "https://sigilopay.com/checkout/en-fps-unlocker-biosintese",
    bundle: "https://sigilopay.com/checkout/en-combo-supremo-biosintese"
  },
  es: {
    ipad: "https://sigilopay.com/checkout/es-ipad-view-biosintese",
    fps: "https://sigilopay.com/checkout/es-fps-unlocker-biosintese",
    bundle: "https://sigilopay.com/checkout/es-combo-supremo-biosintese"
  }
};

export const telegramSupportUrl = "https://t.me/biosintese_pubgm_support";

export const translations: Record<LanguageCode, CopyDatabase> = {
  pt: {
    topWarning: "⚠️ Atenção: Esta suíte de otimização é exclusiva para dispositivos Android. Não funcionará no iOS.",
    systemBadge: "EXCLUSIVO ANDROID",
    metaBadge: "SEM BAN • 120 FPS CONFIG • ANTIALIASING EM NÍVEL DE DRIVER",
    domainName: "biosintese.com.br",
    
    // Hero
    headline: "Domine o PUBG Mobile: Visão iPad + 120 FPS",
    subheadline: "Ganhe vantagem real de tela widescreen e taxa de quadros ultra fluida de forma nativa. Sem ban, sem lag, apenas performance bruta no seu celular.",
    ctaButtonText: "DESBLOQUEAR VANTAGEM AGORA 🚀",
    ctaSubText: "⚡ Envio imediato e Download seguro enviado para o seu e-mail.",
    videoSubtitle: "Demonstração Real: Visão Ampliada vs Padrão de Fábrica",

    // Before vs After Slider
    sliderTitle: "SIMULADOR DE CAMPO DE VISÃO (FOV)",
    sliderDesc: "Arraste o marcador para comparar a Visão Padrão de Celular (campo de visão limitado que oculta inimigos) contra a nossa Visão iPad de 110° calibrada nativamente.",
    sliderPhoneLabel: "Visão Padrão (Corte Lateral de 80°)",
    sliderIpadLabel: "Visão iPad de 110° Habilitada",
    sliderInstruction: "↔️ Arraste para comparar o campo de visão",

    // The Problem Section
    problemTitle: "POR QUE VOCÊ PERDE CONFRONTOS?",
    problemHeading: "A Vantagem Oculta que Mantém Você Preso no Rank",
    problemText1: "Se você joga em um celular comum com as configurações padrão, você está competindo em extrema desvantagem. No PUBG Mobile convencional, os lados da sua tela são cortados. Jogadores de tablets premium possuem até 40% mais visão periférica.",
    problemText2: "Além disso, a variação extrema de quadros por segundo (FPS) causa micro-travamentos que estragam sua precisão na hora do spray. Nossa suíte de arquivos resolve ambos os problemas calibrando os parâmetros diretamente no diretório do jogo de forma 100% nativa.",
    problemStat1Title: "VANTAGEM DE FOV +40%",
    problemStat1Text: "Veja inimigos localizados fora da sua tela sem precisar mover a câmera de lugar.",
    problemStat2Title: "FRAME RATES ESTÁVEIS",
    problemStat2Text: "Combate à queda de frames em tiroteios intensos com otimização contínua de memória.",

    // Product Comparison Grid
    comparisonHeading: "Diferenciais Técnicos Detalhados",
    comparisonSub: "Descubra o poder que cada arquivo entrega individualmente para elevar o seu gameplay.",
    ipadCardTitle: "iPad View Config",
    ipadCardDesc: "Expande a proporção de renderização da câmera para que o mapa se comporte exatamente como em um iPad Pro de tela cheia.",
    ipadCardSpecs: [
      "FOV Widescreen Realístico de 110°",
      "Reduz visualmente o tremor da mira (Sprays mais limpos)",
      "Detecção periférica instantânea de inimigos",
      "Perfeito para combates de curta distância (CQB)"
    ],
    fpsCardTitle: "120 FPS Unlocker APK",
    fpsCardDesc: "Desbloqueia os modos de taxa de quadros Ultra-Extrema (90 FPS e 120 FPS) eliminando qualquer barreira imposta pelo hardware do celular.",
    fpsCardSpecs: [
      "Taxa de atualização máxima de 120 Hz ativada",
      "Resposta tátil acelerada (Menor input lag)",
      "Otimização térmica interna para evitar superaquecimento",
      "Configuração de filtragem de texturas otimizadas"
    ],

    // Pricing Table Section
    pricingHeading: "Escolha Seu Arsenal de Performance",
    pricingSub: "Adquira as ferramentas individualmente ou garanta a suíte completa com um desconto monstruoso de tempo limitado.",
    bundleBadge: "MELHOR VALOR (COMBO SUPREMO)",
    buyButtonText: "ADQUIRIR AGORA ⚡",

    // Product Cards
    products: {
      ipad: {
        title: "iPad View Config",
        badge: "EXPANSÃO DE TELA NATIVA",
        price: "R$ 35,00",
        strike: "R$ 69,00",
        description: "Ajuste milimétrico de câmera nativa de 110° para aumentar suas taxas de abate e detectar flancos secretos.",
        benefits: [
          "FOV Ampliado de 110° nativos",
          "Mira proporcionalmente mais estável",
          "Não requer privilégios Root",
          "Guia passo a passo de 3 minutos",
          "Suporte via e-mail e Telegram"
        ]
      },
      fps: {
        title: "120 FPS Unlocker APK",
        badge: "DESEMPENHO MÁXIMO BRUTO",
        price: "R$ 30,00",
        strike: "R$ 59,00",
        description: "Acelere a engine do seu jogo para até 120 FPS constantes mesmo se o seu celular estiver travado em taxas inferiores.",
        benefits: [
          "Frames desbloqueados em 90/120 Hz",
          "Redução drástica no Input Lag do toque",
          "Instalação profissional sem penalidade térmica",
          "Compatível com todos processadores comuns",
          "Instalador direto e limpo"
        ]
      },
      bundle: {
        title: "Combo Supremo PRO",
        badge: "IPAD VIEW + 120 FPS UNLOCKER",
        price: "R$ 55,00",
        strike: "R$ 128,00",
        description: "O combo supremo e inquestionável. Consiga a máxima otimização unindo o super FOV de iPad de 110° com a reatividade impecável dos 120 FPS.",
        benefits: [
          "Visão Superior de iPad (110° FOV completo)",
          "Ativação nativa automática de 120 FPS",
          "Garantia anti-ban vitalícia para todas atualizações",
          "Acesso VIP ao canal exclusivo do Telegram",
          "Atualizações automáticas gratuitas para toda nova patch",
          "E-book tático e de instalação instantânea rápida"
        ]
      }
    },

    // FAQs
    faqHeading: "Respostas Diretas às Suas Dúvidas",
    faqSub: "Tire todas as suas dúvidas técnicas sobre o comportamento e segurança do arquivo.",
    faqs: [
      {
        question: "Dá ban na minha conta principal?",
        answer: "Não! Os arquivos de configuração do iPad View utilizam coordenadas e parâmetros internos que já existem no próprio motor do jogo (SDK nativa). Não há injeção de scripts maliciosos, nem modificação do código binário APK. É 100% legítimo e seguro."
      },
      {
        question: "O processo de instalação do 120 FPS é difícil?",
        answer: "De forma alguma! Desenvolvemos um guia passo a passo em vídeo curto que permite que qualquer pessoa configure tudo em menos de 3 minutos usando apenas o explorador de arquivos nativo do celular."
      },
      {
        question: "Como e onde eu recebo os arquivos após a compra?",
        answer: "O processamento dos pagamentos no checkout é instantâneo. Assim que o pagamento via PIX ou cartão de crédito for autorizado, você receberá um e-mail securizado do biosintese.com.br com os links diretos para download e instruções."
      },
      {
        question: "Funciona se o meu jogo atualizar na Play Store?",
        answer: "Sim! Periodicamente as atualizações do PUBG Mobile mudam seus diretórios. Nesse caso, atualizamos nossa suíte de forma automática e enviamos a versão atualizada para o seu e-mail de cadastro de forma 100% gratuita para sempre."
      },
      {
        question: "O meu celular precisa ser 'Root'? ",
        answer: "Absolutamente não! Todo o fluxo de modificações funciona no espaço de armazenamento livre de usuário que o Android disponibiliza, sem a necessidade de comandos de root complexos."
      }
    ],

    // Support
    supportTitle: "SUPORTE VIP DEDICADO",
    supportHeading: "Precisa de ajuda com a instalação?",
    supportDesc: "Ao comprar qualquer um dos arquivos ou o Combo Supremo, você recebe link para nossa comunidade fechada no Telegram com suporte ao vivo e interações diárias.",
    supportButtonText: "Telegram VIP Support",

    // Footer
    footerDisclaimer: "© 2026 biosintese.com.br - Todos os direitos reservados. Este produto consiste em arquivos de otimização gráfica criados para fins de calibração de tela. Não possuímos nenhuma afiliação oficial com a Krafton Inc, Tencent Games, PUBG Corporation ou suas marcas."
  },
  en: {
    topWarning: "⚠️ Notice: This optimization suite is exclusive for Android devices. It will not work on iOS.",
    systemBadge: "ANDROID EXCLUSIVE",
    metaBadge: "NO BAN RISK • 120 FPS CONFIG • DRIVER-LEVEL ANTIALIASING",
    domainName: "biosintese.com.br",

    // Hero
    headline: "Unlock the iPad Advantage & 120 FPS Performance",
    subheadline: "Get real widescreen tablet vision and extremely fluid frame rates natively. No ban, no lag, pure performance directly on your phone.",
    ctaButtonText: "UNLOCK THE ADVANTAGE NOW 🚀",
    ctaSubText: "⚡ Secured instant download links sent to your Email right after approval.",
    videoSubtitle: "Real Demo: Widescreen FOV vs Standard Factory Camera",

    // Before vs After Slider
    sliderTitle: "FIELD OF VIEW (FOV) SIMULATOR",
    sliderDesc: "Drag the slider to compare typical cropped Phone FOV (blind spots that hide opponents) versus our calibrated 110° iPad View active resolution.",
    sliderPhoneLabel: "Standard Mobile FOV (80° Crop)",
    sliderIpadLabel: "iPad View Activated (110° Vision)",
    sliderInstruction: "↔️ Drag slider to compare field of view",

    // The Problem Section
    problemTitle: "WHY DO YOU LOSE COMBATS?",
    problemHeading: "The Hidden Angle That Keeps You Stuck in Your Rank",
    problemText1: "Playing on standard mobile parameters severely restricts your field of vision. The horizontal screen edges are heavily cropped, giving premium iPad players up to 40% wider sightlines. They spot you around corners long before you see them.",
    problemText2: "Additionally, unstable frame rates can cause lethal micro-stutters during precise crosshair sprays. Our optimization tool updates layout vectors inside the game storage to render beautiful, uninterrupted screen aspect ratios natively.",
    problemStat1Title: "+40% FOV MARGIN",
    problemStat1Text: "Instantly catch running flankers without rotating your crosshair orientation.",
    problemStat2Title: "ROCK-SOLID FRAMES",
    problemStat2Text: "Stop visual lag during massive hotdrops with engineered game parameters.",

    // Product Comparison Grid
    comparisonHeading: "Technical Breakdowns",
    comparisonSub: "Take a look at how each module upgrades your hardware performance in-game.",
    ipadCardTitle: "iPad View Config",
    ipadCardDesc: "Adjust game engine scaling variables so your screen renders exactly like a top-tier iPad Pro device.",
    ipadCardSpecs: [
      "Real 110° Wide Angle active state",
      "Reduces target jitter during bullet sprays",
      "Instant close-range visual feedback",
      "Perfect for intense close-quarter battles"
    ],
    fpsCardTitle: "120 FPS Unlocker APK",
    fpsCardDesc: "Unlocks the extreme framerate thresholds within the PUBG Engine, overriding native brand restrictions.",
    fpsCardSpecs: [
      "Maximum 120 Hz update loop achieved",
      "Optimized touchscreen response lag",
      "Thermal guard configurations preventing drops",
      "Stable texture filter optimization"
    ],

    // Pricing Table Section
    pricingHeading: "Choose Your Upgrade Path",
    pricingSub: "Get specific individual optimization setups or grab the ultimate combined pack at a massive discount.",
    bundleBadge: "BEST VALUE (ULTIMATE COMBO)",
    buyButtonText: "UNLOCK NOW ⚡",

    // Product Cards
    products: {
      ipad: {
        title: "iPad View Config",
        badge: "NATIVE VIEW EXPANSION",
        price: "$6.99",
        strike: "$14.99",
        description: "Perfect 110° camera calibration setup file to see extra visual angles and master your rank push.",
        benefits: [
          "Calibrated 110° FOV file",
          "Proportional crosshair stability",
          "No Android Root required",
          "3-minute video installation guide",
          "Fully vetted and safe to use"
        ]
      },
      fps: {
        title: "120 FPS Unlocker APK",
        badge: "PEAK SMOOTHNESS ENGINE",
        price: "$5.99",
        strike: "$11.99",
        description: "Bypasses standard hardware locks to deliver highly responsive frame rates during demanding play sessions.",
        benefits: [
          "90 Hz and 120 Hz frame support",
          "Decreased touch response latency",
          "No performance thermal throttling",
          "Tested against all common chips",
          "Super lightweight and clean"
        ]
      },
      bundle: {
        title: "Ultimate Combo PRO",
        badge: "IPAD VIEW + 120 FPS UNLOCKER",
        price: "$9.99",
        strike: "$26.98",
        description: "The absolute best choice for competitive players. Combine the wide 110° view file with ultra-fluid, stable frame triggers.",
        benefits: [
          "iPad View file (Full 110° FOV scale)",
          "120 FPS unlock parameters combined",
          "100% lifetime seasonal update patch access",
          "Exclusive VIP Telegram support community",
          "Anti-ban protection guaranteed permanently",
          "No root or dangerous exploits required"
        ]
      }
    },

    // FAQs
    faqHeading: "Frequently Answered Questions",
    faqSub: "Get immediate clarification on system safety, mechanics, and compatibility.",
    faqs: [
      {
        question: "Can I get banned on my main account?",
        answer: "No. The configuration files modify native render parameters that are built right inside the official game engine. It does not use unsafe scripts or third-party executable overlays. It is completely secure."
      },
      {
        question: "Is the installation difficult?",
        answer: "Not at all. We provide comprehensive, brief 3-minute video tutorials. All you need to do is paste the parameter values into your game folder using standard files explorer utilities."
      },
      {
        question: "How do I receive the files after ordering?",
        answer: "Delivery is fully automated. Right after your payment is finalized, the server instantly fires a secure email link from biosintese.com.br with all target downloads."
      },
      {
        question: "Will it still work after a PUBG Store Update?",
        answer: "Yes. When the game undergoes a major season update, we modify the alignment of our parameters and deliver updated files straight to your email free of charge."
      },
      {
        question: "Do I need to Root my mobile phone?",
        answer: "No root at all. The entire optimization operates on the standard filesystem partition allocated by Android to user application caches."
      }
    ],

    // Support
    supportTitle: "VIP CONCIERGE HELP",
    supportHeading: "Need setup guidance?",
    supportDesc: "Every copy or bundle includes priority access to our dedicated customer support lounge on Telegram with live chat operators ready to assist.",
    supportButtonText: "Telegram VIP Support",

    // Footer
    footerDisclaimer: "© 2026 biosintese.com.br - All rights reserved. This product consists of graphic parameter optimization materials. We are not officially affiliated with Krafton Inc, Tencent Games, PUBG Corporation, or their official trademarks."
  },
  es: {
    topWarning: "⚠️ Notice: Esta suite de optimización es exclusiva para dispositivos Android. No funcionará en iOS.",
    systemBadge: "EXCLUSIVO DE ANDROID",
    metaBadge: "SIN RIESGO DE BAN • 120 FPS CONFIG • ANTIALIASING AVANZADO",
    domainName: "biosintese.com.br",

    // Hero
    headline: "Domina PUBG Mobile: Visión iPad + 120 FPS",
    subheadline: "Consigue la verdadera ventaja de visión de tableta ancha y cuadros ultraprescisos de forma nativa. Sin ban, sin lag, rendimiento puro en tu celular.",
    ctaButtonText: "DESBLOQUEAR LA VENTAJA HOY 🚀",
    ctaSubText: "⚡ Descarga instantánea y confiable enviada a tu Correo justo después del pago.",
    videoSubtitle: "Demostración Real: Visión Amplia vs Cámara de Fábrica Cortada",

    // Before vs After Slider
    sliderTitle: "SIMULADOR DE CAMPO VISUAL (FOV)",
    sliderDesc: "Arrastra el regulador central para contrastar el campo de visión convencional móvil contra la calibración activa del iPad View de 110°.",
    sliderPhoneLabel: "Visión Celular Estándar (Corte de 80°)",
    sliderIpadLabel: "Visión iPad de 110° Activada",
    sliderInstruction: "↔️ Desliza para comparar el campo visual",

    // The Problem Section
    problemTitle: "¿POR QUÉ CONCEDES VENTAJAS?",
    problemHeading: "El Detalle Ocular que te Mantiene Estancado en tu Rango",
    problemText1: "Competir en un teléfono normal con configuraciones por defecto es sumamente complicado. PUBG Mobile recorta los márgenes horizontales de tu pantalla. Los jugadores de iPad Pro visualizan un 40% más de cobertura en las esquinas.",
    problemText2: "A esto súmale las constantes fluctuaciones de FPS que arruinan tu precisión de mira a media distancia. Nuestra suite calibra los valores directamente en la carpeta de configuración oficial de forma 100% nativa y segura.",
    problemStat1Title: "+40% CAMPO EXTRALATERAL",
    problemStat1Text: "Encuentra flanqueadores hostiles sin tener que rotar constantemente tu mira.",
    problemStat2Title: "FPS CLAVADOS CONSTANTES",
    problemStat2Text: "Reduce los tirones en combates de corto rango con parámetros térmicos corregidos.",

    // Product Comparison Grid
    comparisonHeading: "Desglose de Capacidades",
    comparisonSub: "Mira cómo cada uno de los archivos repotencia el motor gráfico del juego de inmediato.",
    ipadCardTitle: "iPad View Config",
    ipadCardDesc: "Reescribe los márgenes de visualización de cámara para simular la perspectiva auténtica de una pantalla Pro de ratio 4:3.",
    ipadCardSpecs: [
      "Ángulo visual expandido a 110° reales",
      "Reducción visual del rebote en miras altas",
      "Fácil detección en áreas de hierba densa",
      "Excelente para combates rápidos en tercera persona"
    ],
    fpsCardTitle: "120 FPS Unlocker APK",
    fpsCardDesc: "Desbloquea las tasas de FPS ocultas por las marcas en celulares de gama media y alta de forma segura.",
    fpsCardSpecs: [
      "Optimización de refresco de pantalla a 120 Hz",
      "Reduce drásticamente el input-lag táctil",
      "Ajustes térmicos contra la fatiga de GPU",
      "Máxima fluidez dinámica disponible"
    ],

    // Pricing Table Section
    pricingHeading: "Escoge tu Arsenal de Opciones",
    pricingSub: "Elige configurar por separado cada parámetro, o consigue la suite definitiva con un pack de descuento imperdible.",
    bundleBadge: "MEJOR PRECIO (COMBO SUPREMO)",
    buyButtonText: "NIVEL DE MIRA ACTIVO ⚡",

    // Product Cards
    products: {
      ipad: {
        title: "iPad View Config",
        badge: "VISTA REDISEÑADA NATIVA",
        price: "$6.99",
        strike: "$14.99",
        description: "Archivo calibrado de 110° de FOV exacto para monitorear flancos de baneo imposibles y ganar el lobby.",
        benefits: [
          "Vista iPad calibrada a 110° nativos",
          "Mayor constancia visual de puntería",
          "No requiere rootear el dispositivo",
          "Video tutorial breve de instalación (3 min)",
          "100% libre de fallos o bloqueos técnicos"
        ]
      },
      fps: {
        title: "120 FPS Unlocker APK",
        badge: "RITMO ULTRA FLUIDO",
        price: "$5.99",
        strike: "$11.99",
        description: "Rompe los límites de fábrica de tu celular y mantén un framerate pulido incluso en enfrentamientos masivos.",
        benefits: [
          "Soporta configuraciones de 90/120 Hz",
          "Optimiza la detección táctil de pulsaciones",
          "Seguridad térmica contra caídas de FPS",
          "Compatible con casi todos los procesadores",
          "Herramienta ágil y directa"
        ]
      },
      bundle: {
        title: "Combo Supremo PRO",
        badge: "IPAD VIEW + 120 FPS UNLOCKER",
        price: "$9.99",
        strike: "$26.98",
        description: "Nuestra recomendación absoluta. Alcanza el rendimiento insignia en tu teléfono combinando la amplitud de 110° con la suavidad ininterrumpida.",
        benefits: [
          "Visión iPad Pro exclusiva (FOV 110° completo)",
          "Parámetros desbloqueados estables de 120 FPS",
          "Updates de por vida totalmente gratis",
          "Acceso preferente al canal VIP de Telegram",
          "Protección homologada anti-ban intacta",
          "Sin necesidad de rootear o alterar el software base"
        ]
      }
    },

    // FAQs
    faqHeading: "Preguntas y Respuestas Técnicas",
    faqSub: "Resolvemos cualquier duda sobre la instalación, seguridad y actualizaciones.",
    faqs: [
      {
        question: "¿Puedo recibir baneo por usarlo?",
        answer: "No. El configurador modifica arreglos nativos de renderización provistos de forma interna por la misma base de Unreal Engine. No hay inyecciones de hacks externos en la RAM, por lo que es indetectable y seguro."
      },
      {
        question: "¿Es complicada la instalación?",
        answer: "Para nada. Enviamos un instructivo visual en video de 3 minutos de duración. Solo debes transferir los valores a tu carpeta interna usando la app de Archivos de tu móvil."
      },
      {
        question: "¿Cómo y cuándo me envían los archivos?",
        answer: "La distribución es inmediata. Tan pronto se acredite la compra en el procesador de pagos seguro, se te enviará un correo automático de biosintese.com.br con el enlace de descarga."
      },
      {
        question: "¿Funciona si saca PUBG un nuevo parche?",
        answer: "Sí. Para cada gran actualización de temporada, corregimos la estructura del archivo y te enviamos la nueva versión estable a tu correo electrónico sin coste alguno."
      },
      {
        question: "¿Se necesita Root en mi celular?",
        answer: "No, en absoluto. Todo el proceso utiliza directorios públicos de almacenamiento creados para el guardado de perfiles de juego por el sistema Android."
      }
    ],

    // Support
    supportTitle: "SOPORTE ESPECIALIZADO",
    supportHeading: "¿Requieres asistencia?",
    supportDesc: "Adquiriendo tu producto accedes de inmediato a nuestro equipo de moderadores en el canal VIP de Telegram para solucionar dudas.",
    supportButtonText: "Telegram VIP Support",

    // Footer
    footerDisclaimer: "© 2026 biosintese.com.br - Todos los derechos reservados. Archivos de calibración técnica de rendimiento celular. No estamos afiliados comercial u oficialmente con Krafton Inc, Tencent Games o PUBG Mobile."
  }
};
