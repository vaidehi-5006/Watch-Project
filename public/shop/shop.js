/* ==========================================================================
   FS 60P - COMPLETE LUXURY HAUTE HORLOGERIE E-COMMERCE STORE SCRIPT
   Interactive E-Commerce Boutique, Live Currency, Cart Drawer & Checkout
   ========================================================================== */

(function () {
  'use strict';

  // --- 1. FULL PRODUCT CATALOGUE (8 EXQUISITE SWISS TIMEPIECES) ---
  const WATCH_CATALOGUE = [
    {
      id: 'fs60p-steel',
      title: 'FS 60P Pure Steel Chronograph',
      ref: 'REF. 60P-ST01',
      category: 'steel',
      material: '904L Monolithic Oystersteel',
      dial: 'Sunburst Slate & Rhodium Appliques',
      priceUSD: 14200,
      tag: 'Bestseller',
      specs: ['41mm Case', 'Calibre FS-60P', '60h Reserve', '100m Water Res.'],
      images: [
        '/assets/the-watch/img/images-section/first_1.webp',
        '/assets/the-watch/img/images-section/first_2.webp',
        '/assets/the-watch/img/images-section/first_3.webp',
        '/assets/the-watch/img/images-section/first_4.webp',
      ],
      description: 'The archetype of contemporary Swiss chronometry. Machined from solid blocks of 904L steel with hand-satin finishes and mirror chamfers. Accompanied by sapphire crystal and exhibition back displaying the high-beat mechanical balance.'
    },
    {
      id: 'fs60p-midnight',
      title: 'FS 60P Midnight DLC Phantom',
      ref: 'REF. 60P-BK02',
      category: 'steel',
      material: 'Grade 5 Titanium • Diamond-Like Carbon',
      dial: 'Obsidian Matte with Super-LumiNova BGW9',
      priceUSD: 16800,
      tag: 'Stealth Edition',
      specs: ['41mm Case', 'Ultra-Light 78g', '60h Reserve', '100m Water Res.'],
      images: [
        '/assets/the-watch/img/images-section/second_1.webp',
        '/assets/the-watch/img/images-section/second_2.webp',
        '/assets/the-watch/img/images-section/second_3.webp',
        '/assets/the-watch/img/images-section/second_4.webp',
      ],
      description: 'An audacious statement in monochrome stealth. Aerospace Grade 5 Titanium coated in micro-vaporized diamond carbon, delivering virtually scratch-proof durability with whisper-light wrist presence.'
    },
    {
      id: 'fs60p-gold',
      title: 'FS 60P Sovereign 18K Yellow Gold',
      ref: 'REF. 60P-YG03',
      category: 'gold',
      material: '18K Solid Yellow Gold (750‰)',
      dial: 'Champagne Guilloché Clous de Paris',
      priceUSD: 28500,
      tag: 'Precious Alloy',
      specs: ['18K Solid Gold', '22K Gold Rotor', '60h Reserve', '100m Water Res.'],
      images: [
        '/assets/the-watch/img/images-section/third_1.webp',
        '/assets/the-watch/img/images-section/third_2.webp',
        '/assets/the-watch/img/images-section/third_3.webp',
        '/assets/the-watch/img/images-section/third_4.webp',
      ],
      description: 'The golden age of Swiss horological mastery. Forged in pure 18-karat yellow gold with an undulating hand-lathed guilloché dial and solid 22K gold rotor, commanding admiration from every perspective.'
    },
    {
      id: 'fs60p-rose',
      title: 'FS 60P Eternal 18K Rose Gold',
      ref: 'REF. 60P-RG04',
      category: 'gold',
      material: '18K Everose Gold Alloy',
      dial: 'Smoked Anthracite & Warm Gold Markers',
      priceUSD: 29800,
      tag: 'Master Craft',
      specs: ['18K Rose Gold', 'Hand-Polished', '60h Reserve', '100m Water Res.'],
      images: [
        '/assets/the-watch/img/images-section/fourth_1.webp',
        '/assets/the-watch/img/images-section/fourth_2.webp',
        '/assets/the-watch/img/images-section/fourth_3.webp',
        '/assets/the-watch/img/images-section/fourth_4.webp',
      ],
      description: 'Poetic warmth harmonized with mechanical precision. A patented 18K rose gold formulation resistant to oxidation, framing a graduated smoky anthracite dial with luminous rose gold appliques.'
    },
    {
      id: 'fs60p-tourbillon',
      title: 'FS 60P Platinum Flying Tourbillon',
      ref: 'REF. 60P-TB05',
      category: 'complication',
      material: '950 Solid Platinum Case',
      dial: 'Openworked Slate Guilloché with Tourbillon Cage',
      priceUSD: 64000,
      tag: 'Grand Complication',
      specs: ['Platinum 950', '60s Tourbillon', '72h Reserve', 'COSC Chronometer'],
      images: [
        '/assets/the-watch/img/images-section/first_3.webp',
        '/assets/the-watch/img/images-section/first_1.webp',
        '/assets/the-watch/img/images-section/first_5.webp',
      ],
      description: 'The zenith of mechanical complexity. A gravity-defying 60-second flying tourbillon cage floating at 6 o’clock, cased in solid 950 Platinum with hand-beveled bridges.'
    },
    {
      id: 'fs60p-skeleton',
      title: 'FS 60P Squelette Openwork',
      ref: 'REF. 60P-SK06',
      category: 'complication',
      material: 'Black Ceramic & Anthracite Titanium',
      dial: 'Fully Skeletonized Calibre 60P Architecture',
      priceUSD: 24500,
      tag: 'Avant-Garde',
      specs: ['Black Ceramic', 'Skeletonized', '60h Reserve', 'Anti-Reflective Sapphire'],
      images: [
        '/assets/the-watch/img/images-section/second_3.webp',
        '/assets/the-watch/img/images-section/second_1.webp',
        '/assets/the-watch/img/images-section/second_5.webp',
      ],
      description: 'Stripped of all superfluous matter. Each bridge and gear is openworked by hand to reveal the heartbeat of the escapement and gear train in continuous mechanical dance.'
    },
    {
      id: 'fs60p-diver',
      title: 'FS 60P Sub-Aquatic Diver 300M',
      ref: 'REF. 60P-DV07',
      category: 'steel',
      material: 'Grade 5 Brushed Titanium & Ceramic Bezel',
      dial: 'Wave Guilloché Matte Navy',
      priceUSD: 15800,
      tag: 'New Release',
      specs: ['300m / 1000ft', 'Helium Valve', 'Ceramic Bezel', 'Glidelock Clasp'],
      images: [
        '/assets/the-watch/img/images-section/first_4.webp',
        '/assets/the-watch/img/images-section/first_2.webp',
        '/assets/the-watch/img/images-section/first_1.webp',
      ],
      description: 'Engineered for abyssal depths. Features a unidirectional 120-click ceramic dive bezel, automatic helium escape valve, and luminous maxi-dial legibility in extreme underwater conditions.'
    },
    {
      id: 'fs60p-moonphase',
      title: 'FS 60P Heritage Astronomical Moonphase',
      ref: 'REF. 60P-MP08',
      category: 'gold',
      material: '18K White Gold (750‰)',
      dial: 'Aventurine Glass Starry Sky Dial',
      priceUSD: 34500,
      tag: 'Vault Exclusive',
      specs: ['18K White Gold', 'Aventurine Dial', '122-Year Moonphase', 'Sapphire Back'],
      images: [
        '/assets/the-watch/img/images-section/third_4.webp',
        '/assets/the-watch/img/images-section/third_2.webp',
        '/assets/the-watch/img/images-section/third_1.webp',
      ],
      description: 'A poetic celebration of the cosmos. Features a genuine sparkling aventurine quartz dial and a lunar disc crafted from fired grand feu enamel that requires adjustment once every 122 years.'
    }
  ];

  // --- 2. CURRENCY CONVERSION ---
  const CURRENCIES = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    INR: { symbol: '₹', rate: 84.5 }
  };
  let currentCurrency = 'USD';

  function formatPrice(usdVal) {
    const info = CURRENCIES[currentCurrency] || CURRENCIES.USD;
    const converted = Math.round(usdVal * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  }

  // --- 3. AUDIO TICK FEEDBACK ---
  function playClickSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {}
  }

  // --- 4. CART & WISHLIST STORAGE ---
  const CART_KEY = 'fs60p_luxury_cart';
  const WISH_KEY = 'fs60p_luxury_wishlist';
  let cartItems = [];
  let wishlist = [];

  function loadStorage() {
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      if (savedCart) cartItems = JSON.parse(savedCart);
      const savedWish = localStorage.getItem(WISH_KEY);
      if (savedWish) wishlist = JSON.parse(savedWish);
    } catch (e) {
      cartItems = [];
      wishlist = [];
    }
    updateCartUI();
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    } catch (e) {}
    updateCartUI();
  }

  function addToCart(watchId, strap = 'Integrated Metal Bracelet', engraving = '') {
    const watch = WATCH_CATALOGUE.find(w => w.id === watchId);
    if (!watch) return;

    const existing = cartItems.find(item => item.id === watchId && item.strap === strap && item.engraving === engraving);
    if (existing) {
      existing.qty += 1;
    } else {
      cartItems.push({
        id: watch.id,
        title: watch.title,
        ref: watch.ref,
        priceUSD: watch.priceUSD,
        image: watch.images[0],
        strap: strap,
        engraving: engraving,
        qty: 1
      });
    }
    playClickSound();
    saveCart();
    openCartDrawer();
  }

  function updateItemQty(index, delta) {
    if (cartItems[index]) {
      cartItems[index].qty += delta;
      if (cartItems[index].qty <= 0) {
        cartItems.splice(index, 1);
      }
      playClickSound();
      saveCart();
    }
  }

  function removeItem(index) {
    cartItems.splice(index, 1);
    playClickSound();
    saveCart();
  }

  // --- 5. INJECT FULL E-COMMERCE STORE DOM ---
  function injectShopDOM() {
    // 1. Transparent Floating Button for 3D page
    const ctaContainer = document.createElement('div');
    ctaContainer.id = 'fs60p-shop-cta';
    ctaContainer.className = 'shop-cta-wrapper';
    ctaContainer.innerHTML = `
      <button class="btn-explore-shop-transparent" id="btn-trigger-explore-shop" title="Enter FS 60P Luxury Boutique">
        <span class="shop-btn-text">EXPLORE SHOP</span>
        <svg class="shop-btn-arrow" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
      </button>
    `;
    document.body.appendChild(ctaContainer);

    // 2. Fullscreen E-Commerce Store Container
    const store = document.createElement('div');
    store.id = 'luxury-shop-dashboard';
    store.setAttribute('data-lenis-prevent', 'true');
    store.setAttribute('data-lenis-prevent-wheel', 'true');
    store.setAttribute('data-lenis-prevent-touch', 'true');
    store.innerHTML = `
      <!-- VIP Top Announcement Ribbon -->
      <div class="store-announcement-bar">
        <div class="store-announcement-text">
          <span>COMPLIMENTARY INSURED WHITE-GLOVE AIR COURIER WORLDWIDE</span>
          <span>•</span>
          <span class="store-announcement-highlight">5-YEAR SWISS MANUFACTURE GUARANTEE</span>
          <span>•</span>
          <span>COSC CERTIFIED CHRONOMETER PRECISION</span>
        </div>
      </div>

      <!-- Main Store Header -->
      <header class="store-header">
        <div class="store-header-left">
          <div class="store-brand-group" id="btn-header-home" title="FS 60P Genève">
            <span class="store-brand-title">FS 60P</span>
            <span class="store-brand-subtitle">GENÈVE • HAUTE HORLOGERIE</span>
          </div>
        </div>

        <nav class="store-nav-links">
          <a class="store-nav-link active" data-nav="home">Home</a>
          <a class="store-nav-link" data-nav="categories">Categories</a>
          <a class="store-nav-link" data-nav="bespoke">Bespoke</a>
          <a class="store-nav-link" data-nav="about">About</a>
          <a class="store-nav-link" data-nav="contact">Contact</a>
        </nav>

        <div class="store-header-right">
          <select class="store-currency-select" id="store-currency-select" title="Change Currency">
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="INR">INR (₹)</option>
          </select>
          <button class="store-login-btn" id="btn-header-login" title="Client Account">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>LOGIN</span>
          </button>
          <button class="store-bag-btn" id="btn-header-cart" title="View Shopping Bag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
            <span>BAG</span>
            <span class="store-bag-count" id="cart-badge-count">0</span>
          </button>
          <button class="store-close-btn" id="btn-close-shop" title="Close Store">✕</button>
        </div>
      </header>

      <!-- Store Hero 50/50 Split Section: Left Editorial + CTA, Right Full Edge-to-Edge Image -->
      <section class="store-hero-section" id="hero-section">
        <div class="hero-split-container">
          <!-- Left 50% Editorial Brand & CTA Column -->
          <div class="hero-split-content">
            <div class="hero-editorial-wrapper">
              <div class="hero-heritage-tag">
                <span class="heritage-cross">✚</span>
                <span>MANUFACTURE HORLOGÈRE SUISSE • GENÈVE</span>
              </div>

              <span class="hero-edition-tag" id="hero-edition-tag">FS 60P IN-HOUSE CHRONOMETER</span>

              <h1 class="hero-editorial-title">
                THE ARCHETYPE<br>OF PRECISION.
              </h1>

              <p class="hero-editorial-desc">
                Forged in Geneva from monolithic 904L Oystersteel and 18-karat precious alloys. Powered by the in-house high-beat mechanical Calibre FS-60P with variable inertia balance and 60-hour power reserve.
              </p>

              <!-- Key Horlogerie Metrics Strip -->
              <div class="hero-metrics-strip">
                <div class="metric-item">
                  <span class="metric-val">41<small>MM</small></span>
                  <span class="metric-lbl">Case Size</span>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                  <span class="metric-val">60<small>H</small></span>
                  <span class="metric-lbl">Reserve</span>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                  <span class="metric-val">100<small>M</small></span>
                  <span class="metric-lbl">Water Res.</span>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                  <span class="metric-val">COSC</span>
                  <span class="metric-lbl">Certified</span>
                </div>
              </div>

              <!-- Grand Hero CTA Buttons -->
              <div class="hero-cta-group">
                <a href="#catalog-section" class="btn-hero-primary" id="btn-hero-explore">
                  <span>EXPLORE COLLECTION</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#bespoke-atelier-section" class="btn-hero-secondary" id="btn-hero-atelier">
                  <span>BESPOKE ATELIER</span>
                </a>
              </div>

              <!-- Trust Note -->
              <div class="hero-guarantee-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Complimentary Insured Courier Worldwide • 5-Year Swiss Manufacture Guarantee</span>
              </div>
            </div>
          </div>

          <!-- Right 50% Full Edge-to-Edge Visual Column -->
          <div class="hero-split-visual" id="hero-split-visual">
            <img id="hero-model-img" class="hero-fullhalf-img" src="/assets/the-watch/img/images-section/first_3.webp" alt="FS 60P Pure Steel" />
            <div class="hero-visual-vignette"></div>

            <!-- Corner Floating Hallmark Pill -->
            <div class="hero-floating-hallmark">
              <span class="hallmark-cross">✚</span>
              <span class="hallmark-text">CALIBRE FS-60P • GENÈVE</span>
            </div>

            <!-- Sleek Minimalist Model Selector Bar -->
            <div class="hero-visual-switcher" id="hero-visual-switcher">
              <button class="hero-switch-tab active" data-index="0" title="Pure Steel">01 STEEL</button>
              <button class="hero-switch-tab" data-index="1" title="Midnight DLC">02 DLC</button>
              <button class="hero-switch-tab" data-index="2" title="18K Yellow Gold">03 GOLD</button>
              <button class="hero-switch-tab" data-index="3" title="18K Rose Gold">04 ROSE</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Product Catalogue Section -->
      <section class="store-catalog-section" id="catalog-section">
        <div class="catalog-header-title-box">
          <div class="catalog-header-left">
            <h2 class="catalog-section-title">HAUTE HORLOGERIE TIMEPIECES</h2>
            <p class="catalog-section-desc">Explore the complete catalogue of 8 in-house chronometers engineered in Geneva.</p>
          </div>
          <a href="/shop/all-products.html" target="_blank" rel="noopener noreferrer" class="catalog-see-all-header-btn" title="Open Complete Collection Page">
            <span>SEE ALL PRODUCTS (8)</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div class="catalog-filter-bar">
          <div class="catalog-category-pills">
            <button class="catalog-pill-btn active" data-filter="all">All Models (8)</button>
            <button class="catalog-pill-btn" data-filter="steel">Oystersteel & Titanium (3)</button>
            <button class="catalog-pill-btn" data-filter="gold">18K Precious Gold (3)</button>
            <button class="catalog-pill-btn" data-filter="complication">Tourbillon & Complications (2)</button>
            <a href="/shop/all-products.html" target="_blank" rel="noopener noreferrer" class="catalog-pill-btn catalog-pill-see-all" title="View All Products in Full Catalog">
              <span>SEE ALL (8) ↗</span>
            </a>
          </div>

          <div class="catalog-sort-group">
            <span class="catalog-sort-label">Sort By:</span>
            <select class="catalog-sort-select" id="catalog-sort-select">
              <option value="featured">Featured Chronometry</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div class="store-products-grid" id="store-products-grid">
          <!-- Rendered dynamically -->
        </div>

        <!-- See All Products Bottom Banner -->
        <div class="catalog-see-all-bottom-bar">
          <div class="see-all-callout-text">
            <span class="see-all-highlight">Looking for the complete timepiece catalogue?</span>
            <span class="see-all-sub">Explore all 8 references with detailed technical sheets, complications & specifications.</span>
          </div>
          <a href="/shop/all-products.html" target="_blank" rel="noopener noreferrer" class="btn-see-all-banner" id="btn-open-all-products">
            <span>VIEW FULL COLLECTION (8 TIMEPIECES)</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      <!-- Bespoke Atelier / Customizer Section -->
      <section class="bespoke-atelier-section" id="bespoke-atelier-section">
        <div class="bespoke-container">
          <div class="bespoke-visual">
            <img class="bespoke-preview-img" id="bespoke-display-img" src="/assets/the-watch/img/images-section/first_1.webp" alt="Bespoke FS 60P">
          </div>
          <div class="bespoke-info-col">
            <span class="bespoke-tag">ATELIER SUR-MESURE</span>
            <h2 class="bespoke-title">BESPOKE PERSONALIZATION</h2>
            <p class="bespoke-desc">
              Every FS 60P timepiece can be tailored to the collector's exact aesthetic preference. Choose your handcrafted strap leather or integrated metal bracelet, and commission complimentary laser caseback engraving from our master artisans.
            </p>

            <span class="bespoke-options-title">Select Watch Model:</span>
            <div class="bespoke-straps-row" id="bespoke-model-chips">
              <button class="bespoke-strap-chip active" data-model="fs60p-steel">Pure Steel</button>
              <button class="bespoke-strap-chip" data-model="fs60p-midnight">Midnight DLC</button>
              <button class="bespoke-strap-chip" data-model="fs60p-gold">18K Yellow Gold</button>
              <button class="bespoke-strap-chip" data-model="fs60p-rose">18K Rose Gold</button>
            </div>

            <span class="bespoke-options-title">Select Handcrafted Bracelet:</span>
            <div class="bespoke-straps-row" id="bespoke-strap-chips">
              <button class="bespoke-strap-chip active" data-strap="Integrated Metal Bracelet">Metal Bracelet</button>
              <button class="bespoke-strap-chip" data-strap="French Alligator Leather">Alligator Leather</button>
              <button class="bespoke-strap-chip" data-strap="FKM Waterproof Rubber">FKM Sport Rubber</button>
            </div>

            <span class="bespoke-options-title">Complimentary Caseback Monogram / Date:</span>
            <input type="text" class="bespoke-engraving-field" id="bespoke-engraving-input" placeholder="e.g. V.M. 2026 (Max 14 characters)" maxlength="14">

            <button class="btn-bespoke-build" id="btn-bespoke-add">ADD BESPOKE TIMEPIECE TO BAG</button>
          </div>
        </div>
      </section>

      <!-- Manufacture Heritage & Pillars -->
      <section class="manufacture-heritage-section" id="heritage-section">
        <span class="heritage-header-tag">HAUTE HORLOGERIE TRADITION</span>
        <h2 class="heritage-header-title">THE PILLARS OF FS 60P</h2>

        <div class="heritage-pillars-grid">
          <div class="heritage-pillar-card">
            <span class="pillar-number">01</span>
            <h3 class="pillar-title">IN-HOUSE CALIBRE 60P</h3>
            <p class="pillar-desc">
              A bi-directional automatic movement comprising 286 hand-finished components, variable inertia balance wheel, and an anti-magnetic silicon hairspring with 60-hour power reserve.
            </p>
          </div>
          <div class="heritage-pillar-card">
            <span class="pillar-number">02</span>
            <h3 class="pillar-title">MONOLITHIC SCULPTING</h3>
            <p class="pillar-desc">
              Each 41mm case undergoes over 80 distinct machining and hand-finishing processes in our Geneva workshop, alternating between circular satin brushing and mirror-polished chamfers.
            </p>
          </div>
          <div class="heritage-pillar-card">
            <span class="pillar-number">03</span>
            <h3 class="pillar-title">GENEVA CERTIFICATION</h3>
            <p class="pillar-desc">
              Independently tested over 15 consecutive days under 5 positions and 3 temperatures to guarantee chronometric precision well within strict COSC standards (-4/+6 seconds per day).
            </p>
          </div>
        </div>
      </section>

      <!-- Collectors Reviews & Testimonials -->
      <section class="store-testimonials-section">
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">"The weight, ergonomics, and architectural finishing of the FS 60P Sovereign Gold rival the finest independent watchmakers in Switzerland. An extraordinary collector's piece."</p>
            <span class="testimonial-author">Lord Alistair Sterling</span>
            <span class="testimonial-location">Geneva & London</span>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">"The Midnight DLC Titanium feels practically weightless yet commands supreme wrist presence. The sapphire caseback reveals exquisite movement finishing."</p>
            <span class="testimonial-author">Dr. Kenji Takahashi</span>
            <span class="testimonial-location">Tokyo, Japan</span>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">"White-glove armored courier delivered directly to my private residence. Flawless presentation box and certificate of authenticity."</p>
            <span class="testimonial-author">Marcus Von Homburg</span>
            <span class="testimonial-location">Zurich, Switzerland</span>
          </div>
        </div>
      </section>

      <!-- Complete Luxury Footer -->
      <footer class="store-footer">
        <div class="footer-top-grid">
          <div class="footer-col-brand">
            <div class="footer-brand-title">FS 60P GENÈVE</div>
            <p class="footer-brand-desc">
              Haute Horlogerie Suisse. Dedicated to the relentless pursuit of chronometric precision, architectural case design, and hand-finished mechanical art.
            </p>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Collections</div>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#catalog-section">Pure Steel Chronograph</a></li>
              <li class="footer-link-item"><a href="#catalog-section">Midnight DLC Titanium</a></li>
              <li class="footer-link-item"><a href="#catalog-section">18K Sovereign Gold</a></li>
              <li class="footer-link-item"><a href="#catalog-section">18K Eternal Rose</a></li>
              <li class="footer-link-item"><a href="#catalog-section">Platinum Tourbillon</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Client Care</div>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#bespoke-atelier-section">Bespoke Atelier</a></li>
              <li class="footer-link-item"><a href="#">5-Year Guarantee</a></li>
              <li class="footer-link-item"><a href="#">COSC Authenticity Registry</a></li>
              <li class="footer-link-item"><a href="#">Insured Armored Dispatch</a></li>
              <li class="footer-link-item"><a href="#">Private Salon Viewing</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Collector's Circle</div>
            <p class="footer-newsletter-text">
              Subscribe for private salon invitations and early access to limited edition manufacture pieces.
            </p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Welcome to the FS 60P Private Collector Circle.');">
              <input type="email" class="newsletter-input" placeholder="Your Private Email" required>
              <button type="submit" class="btn-newsletter-join">JOIN</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom-bar">
          <span>© 2026 FS 60P MANUFACTURE HORLOGÈRE SUISSE. ALL RIGHTS RESERVED.</span>
          <span>GENÈVE • ZÜRICH • LONDON • NEW YORK • DUBAI • TOKYO</span>
        </div>
      </footer>
    `;
    document.body.appendChild(store);

    // 3. Quick View & Customizer Modal
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'shop-product-modal';
    modalOverlay.className = 'shop-modal-overlay';
    modalOverlay.setAttribute('data-lenis-prevent', 'true');
    modalOverlay.setAttribute('data-lenis-prevent-wheel', 'true');
    modalOverlay.setAttribute('data-lenis-prevent-touch', 'true');
    modalOverlay.innerHTML = `
      <div class="shop-modal-window" data-lenis-prevent="true">
        <button class="btn-modal-close" id="btn-close-modal">✕</button>
        <div class="modal-left-visual">
          <img class="modal-watch-img" id="modal-img" src="" alt="Watch">
        </div>
        <div class="modal-right-info">
          <span class="modal-ref" id="modal-ref">REF</span>
          <h2 class="modal-title" id="modal-title">TITLE</h2>
          <div class="modal-price" id="modal-price">$0</div>
          <p class="modal-desc" id="modal-desc">Description</p>

          <div class="modal-option-title">Select Bracelet / Strap:</div>
          <div class="strap-options-group" id="modal-strap-group">
            <button class="strap-btn selected" data-strap="Integrated Metal Bracelet">Metal Bracelet</button>
            <button class="strap-btn" data-strap="Hand-Stitched Alligator">Alligator Leather</button>
            <button class="strap-btn" data-strap="FKM Rubber Sport">FKM Sport Rubber</button>
          </div>

          <div class="modal-option-title">Complimentary Caseback Monogram (Optional):</div>
          <input type="text" class="engraving-input" id="modal-engraving" placeholder="e.g. O.M. 2026 (Max 14 chars)" maxlength="14">

          <button class="btn-modal-purchase" id="btn-modal-add-cart">
            ADD TO SHOPPING BAG
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    // 4. Slide-out Cart Drawer
    const cartOverlay = document.createElement('div');
    cartOverlay.id = 'shop-cart-drawer';
    cartOverlay.className = 'cart-drawer-overlay';
    cartOverlay.setAttribute('data-lenis-prevent', 'true');
    cartOverlay.setAttribute('data-lenis-prevent-wheel', 'true');
    cartOverlay.setAttribute('data-lenis-prevent-touch', 'true');
    cartOverlay.innerHTML = `
      <aside class="cart-drawer" data-lenis-prevent="true">
        <div class="cart-drawer-header">
          <span class="cart-drawer-title">YOUR SHOPPING BAG</span>
          <button class="btn-cart-close" id="btn-close-cart">✕</button>
        </div>
        <div class="cart-items-list" id="cart-items-list">
          <!-- Cart items rendered dynamically -->
        </div>
        <div class="cart-drawer-footer">
          <div class="cart-summary-line">
            <span>Insured Armored Courier</span>
            <span style="color:#D4AF37;">COMPLIMENTARY</span>
          </div>
          <div class="cart-summary-line">
            <span>Geneva VAT / Import Duties</span>
            <span>INCLUDED</span>
          </div>
          <div class="cart-summary-line total">
            <span>TOTAL AMOUNT</span>
            <span id="cart-total-price">$0</span>
          </div>
          <button class="btn-cart-checkout" id="btn-cart-checkout">PROCEED TO CONCIERGE CHECKOUT</button>
        </div>
      </aside>
    `;
    document.body.appendChild(cartOverlay);

    // 5. Concierge Checkout Modal
    const checkoutOverlay = document.createElement('div');
    checkoutOverlay.id = 'shop-checkout-modal';
    checkoutOverlay.className = 'checkout-modal-overlay';
    checkoutOverlay.setAttribute('data-lenis-prevent', 'true');
    checkoutOverlay.setAttribute('data-lenis-prevent-wheel', 'true');
    checkoutOverlay.setAttribute('data-lenis-prevent-touch', 'true');
    checkoutOverlay.innerHTML = `
      <div class="checkout-card" id="checkout-card-content" data-lenis-prevent="true">
        <button class="btn-modal-close" id="btn-close-checkout">✕</button>
        <div class="checkout-header">
          <div class="checkout-gold-seal">FS 60P</div>
          <h3 class="checkout-title">CONCIERGE CHECKOUT</h3>
          <p class="checkout-desc">Direct acquisition from FS 60P Geneva Manufacture</p>
        </div>

        <form id="checkout-form">
          <div class="checkout-form-grid">
            <input type="text" class="checkout-input" id="co-firstname" placeholder="First Name" required>
            <input type="text" class="checkout-input" id="co-lastname" placeholder="Last Name" required>
            <input type="email" class="checkout-input checkout-field-full" id="co-email" placeholder="Email for Certificate & Tracking" required>
            <input type="text" class="checkout-input checkout-field-full" id="co-address" placeholder="Delivery Destination (Country, City, Street)" required>
          </div>

          <div class="checkout-desc" style="margin-bottom:8px;">Preferred Payment Method:</div>
          <div class="payment-options-row">
            <button type="button" class="payment-btn active" data-pm="card">Credit Card (Amex / Visa)</button>
            <button type="button" class="payment-btn" data-pm="wire">Swiss Bank Wire</button>
            <button type="button" class="payment-btn" data-pm="crypto">Crypto (BTC / ETH)</button>
          </div>

          <button type="submit" class="btn-confirm-order" id="btn-submit-order">
            COMPLETE ACQUISITION
          </button>
        </form>
      </div>
    `;
    document.body.appendChild(checkoutOverlay);

    // 6. VIP Client Account & Login Modal
    const loginOverlay = document.createElement('div');
    loginOverlay.id = 'shop-login-modal';
    loginOverlay.className = 'login-modal-overlay';
    loginOverlay.setAttribute('data-lenis-prevent', 'true');
    loginOverlay.setAttribute('data-lenis-prevent-wheel', 'true');
    loginOverlay.setAttribute('data-lenis-prevent-touch', 'true');
    loginOverlay.innerHTML = `
      <div class="login-modal-card" data-lenis-prevent="true">
        <button class="btn-modal-close" id="btn-close-login">✕</button>
        <div class="login-modal-header">
          <div class="login-modal-brand">FS 60P GENÈVE</div>
          <div class="login-modal-subtitle">Client Portal & VIP Atelier</div>
        </div>

        <div class="login-tabs-row">
          <button class="login-tab-btn active" id="tab-login-signin" type="button">SIGN IN</button>
          <button class="login-tab-btn" id="tab-login-register" type="button">VIP REGISTER</button>
        </div>

        <!-- Sign In Form -->
        <form class="login-form" id="form-client-signin">
          <div class="login-field-group">
            <label class="login-field-label">Email Address</label>
            <input type="email" class="login-input" id="signin-email" placeholder="collector@domain.com" required>
          </div>
          <div class="login-field-group">
            <label class="login-field-label">Password</label>
            <input type="password" class="login-input" id="signin-password" placeholder="••••••••" required>
          </div>
          <div class="login-options-row">
            <label class="login-remember">
              <input type="checkbox" checked>
              <span>Remember me</span>
            </label>
            <a class="login-forgot-link" id="link-forgot-pass">Forgot key?</a>
          </div>
          <button type="submit" class="btn-login-submit">ENTER CLIENT PORTAL</button>
        </form>

        <!-- Register Form (hidden by default) -->
        <form class="login-form" id="form-client-register" style="display:none;">
          <div class="login-field-group">
            <label class="login-field-label">Full Name</label>
            <input type="text" class="login-input" id="reg-name" placeholder="Lord / Lady / Collector" required>
          </div>
          <div class="login-field-group">
            <label class="login-field-label">Email Address</label>
            <input type="email" class="login-input" id="reg-email" placeholder="collector@domain.com" required>
          </div>
          <div class="login-field-group">
            <label class="login-field-label">Create Password</label>
            <input type="password" class="login-input" id="reg-password" placeholder="At least 8 characters" minlength="8" required>
          </div>
          <button type="submit" class="btn-login-submit">REGISTER VIP ACCOUNT</button>
        </form>
      </div>
    `;
    document.body.appendChild(loginOverlay);
  }

  // --- 6. RENDER WATCH PRODUCTS GRID ---
  let activeFilter = 'all';
  let activeSort = 'featured';
  const cardImageIndices = {};

  function updateCardImage(cardId, newIndex) {
    const watch = WATCH_CATALOGUE.find(w => w.id === cardId);
    if (!watch || !watch.images || watch.images.length === 0) return;
    const total = watch.images.length;
    const safeIndex = (newIndex + total) % total;
    cardImageIndices[cardId] = safeIndex;

    const imgEl = document.getElementById(`img-${cardId}`);
    if (imgEl) {
      imgEl.src = watch.images[safeIndex];
    }

    const dotsContainer = document.getElementById(`dots-${cardId}`);
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.card-slider-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === safeIndex);
      });
    }
  }

  function renderWatchCards() {
    const container = document.getElementById('store-products-grid');
    if (!container) return;

    let items = WATCH_CATALOGUE.slice();

    // Filter
    if (activeFilter !== 'all') {
      items = items.filter(w => w.category === activeFilter);
    }

    // Sort
    if (activeSort === 'price-asc') {
      items.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (activeSort === 'price-desc') {
      items.sort((a, b) => b.priceUSD - a.priceUSD);
    }

    container.innerHTML = items.map(watch => {
      const activeIdx = cardImageIndices[watch.id] || 0;
      return `
      <article class="store-watch-card" data-watch-id="${watch.id}">
        <span class="card-badge-tag">${watch.tag}</span>

        <div class="card-visual-stage">
          <button class="card-nav-arrow card-arrow-prev" data-card-id="${watch.id}" aria-label="Previous Photo" title="Previous photo">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <img class="card-display-image" id="img-${watch.id}" src="${watch.images[activeIdx]}" alt="${watch.title}">

          <button class="card-nav-arrow card-arrow-next" data-card-id="${watch.id}" aria-label="Next Photo" title="Next photo">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div class="card-angle-dots" id="dots-${watch.id}">
            ${watch.images.map((img, i) => `
              <button class="card-slider-dot ${i === activeIdx ? 'active' : ''}" data-card-id="${watch.id}" data-index="${i}" aria-label="Photo ${i + 1}" title="Photo ${i + 1}"></button>
            `).join('')}
          </div>
        </div>

        <div class="card-details-body">
          <div class="card-ref-row">
            <span class="card-ref-text">${watch.ref}</span>
            <span class="card-category-indicator">${watch.category.toUpperCase()}</span>
          </div>
          <h3 class="card-watch-title">${watch.title}</h3>
          <p class="card-watch-material">${watch.material}</p>

          <div class="card-features-pills">
            ${watch.specs.map(spec => `<span class="feature-pill-badge">${spec}</span>`).join('')}
          </div>

          <div class="card-footer-row">
            <div class="card-price-row">
              <div class="card-price-group">
                <span class="card-price-caption">Price</span>
                <span class="card-price-amount">${formatPrice(watch.priceUSD)}</span>
              </div>
              <button class="btn-card-inspect" data-quickview="${watch.id}" title="Inspect Details & Customization">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z"/></svg>
                <span>QUICK VIEW</span>
              </button>
            </div>
            <button class="btn-card-order" data-add="${watch.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span>ADD TO BAG</span>
            </button>
          </div>
        </div>
      </article>
      `;
    }).join('');

    // Attach arrow button listeners
    container.querySelectorAll('.card-arrow-prev').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = btn.dataset.cardId;
        const current = cardImageIndices[cardId] || 0;
        updateCardImage(cardId, current - 1);
        playClickSound();
      });
    });

    container.querySelectorAll('.card-arrow-next').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = btn.dataset.cardId;
        const current = cardImageIndices[cardId] || 0;
        updateCardImage(cardId, current + 1);
        playClickSound();
      });
    });

    // Attach dot listeners
    container.querySelectorAll('.card-slider-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = dot.dataset.cardId;
        const index = parseInt(dot.dataset.index, 10);
        updateCardImage(cardId, index);
        playClickSound();
      });
    });

    container.querySelectorAll('[data-quickview]').forEach(btn => {
      btn.addEventListener('click', () => openQuickViewModal(btn.dataset.quickview));
    });

    container.querySelectorAll('[data-add]').forEach(btn => {
      btn.addEventListener('click', () => addToCart(btn.dataset.add));
    });
  }

  // --- 7. QUICK VIEW MODAL ---
  let modalSelectedWatch = null;
  let modalSelectedStrap = 'Integrated Metal Bracelet';

  function openQuickViewModal(watchId) {
    const watch = WATCH_CATALOGUE.find(w => w.id === watchId);
    if (!watch) return;
    modalSelectedWatch = watch;

    const modal = document.getElementById('shop-product-modal');
    document.getElementById('modal-img').src = watch.images[0];
    document.getElementById('modal-ref').textContent = watch.ref;
    document.getElementById('modal-title').textContent = watch.title;
    document.getElementById('modal-price').textContent = formatPrice(watch.priceUSD);
    document.getElementById('modal-desc').textContent = watch.description;

    document.getElementById('modal-engraving').value = '';
    modalSelectedStrap = 'Integrated Metal Bracelet';
    document.querySelectorAll('#modal-strap-group .strap-btn').forEach((b, idx) => {
      b.classList.toggle('selected', idx === 0);
    });

    modal.classList.add('active');
    playClickSound();
  }

  function closeQuickViewModal() {
    const modal = document.getElementById('shop-product-modal');
    if (modal) modal.classList.remove('active');
  }

  // --- 8. CART DRAWER ---
  function openCartDrawer() {
    const drawer = document.getElementById('shop-cart-drawer');
    if (drawer) drawer.classList.add('active');
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('shop-cart-drawer');
    if (drawer) drawer.classList.remove('active');
  }

  function updateCartUI() {
    const countBadge = document.getElementById('cart-badge-count');
    const listEl = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');

    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
    if (countBadge) countBadge.textContent = `${totalQty}`;

    if (!listEl) return;

    if (cartItems.length === 0) {
      listEl.innerHTML = `
        <div class="cart-empty-state">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.5" style="margin-bottom:12px;"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
          <p>Your shopping bag is currently empty.</p>
          <p style="font-size:11px; margin-top:6px; color:#555;">Select an FS 60P chronometer to begin acquisition.</p>
        </div>
      `;
      if (totalEl) totalEl.textContent = formatPrice(0);
      return;
    }

    const totalUSD = cartItems.reduce((acc, item) => acc + (item.priceUSD * item.qty), 0);
    if (totalEl) totalEl.textContent = formatPrice(totalUSD);

    listEl.innerHTML = cartItems.map((item, idx) => `
      <div class="cart-item-card">
        <img class="cart-item-img" src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <span class="cart-item-meta">${item.strap}</span>
          ${item.engraving ? `<span class="cart-item-meta" style="color:#D4AF37;">Engraving: "${item.engraving}"</span>` : ''}
          <div class="cart-item-price">${formatPrice(item.priceUSD * item.qty)}</div>
          <div class="cart-item-controls">
            <div class="cart-qty-group">
              <button class="btn-qty" data-dec="${idx}">−</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="btn-qty" data-inc="${idx}">+</button>
            </div>
            <button class="btn-remove-item" data-remove="${idx}">REMOVE</button>
          </div>
        </div>
      </div>
    `).join('');

    listEl.querySelectorAll('[data-dec]').forEach(b => {
      b.addEventListener('click', () => updateItemQty(parseInt(b.dataset.dec), -1));
    });
    listEl.querySelectorAll('[data-inc]').forEach(b => {
      b.addEventListener('click', () => updateItemQty(parseInt(b.dataset.inc), 1));
    });
    listEl.querySelectorAll('[data-remove]').forEach(b => {
      b.addEventListener('click', () => removeItem(parseInt(b.dataset.remove)));
    });
  }

  // --- 9. CHECKOUT FLOW ---
  function openCheckoutModal() {
    if (cartItems.length === 0) {
      alert('Your shopping bag is empty. Please add a timepiece first.');
      return;
    }
    closeCartDrawer();
    const modal = document.getElementById('shop-checkout-modal');
    if (modal) modal.classList.add('active');
  }

  function closeCheckoutModal() {
    const modal = document.getElementById('shop-checkout-modal');
    if (modal) modal.classList.remove('active');
  }

  function handleOrderSuccess(e) {
    e.preventDefault();
    const firstName = document.getElementById('co-firstname').value || 'Collector';
    const randomOrderNumber = `FS60P-${Math.floor(100000 + Math.random() * 900000)}`;

    const card = document.getElementById('checkout-card-content');
    card.innerHTML = `
      <button class="btn-modal-close" id="btn-close-checkout-success">✕</button>
      <div class="order-success-box">
        <div class="order-success-icon">✓</div>
        <h3 class="checkout-title">ACQUISITION CONFIRMED</h3>
        <p class="checkout-desc">Thank you, ${firstName}. Your timepiece has been allocated at the Geneva Manufacture.</p>
        <div class="order-success-number">${randomOrderNumber}</div>
        <p style="font-size:12px; color:#A1A1A1; line-height:1.7; max-width:440px; margin:0 auto 24px;">
          An official COSC certificate of chronometry, insured armored air dispatch dossier, and ownership registry card have been issued to your email.
        </p>
        <button class="btn-confirm-order" id="btn-finish-order">RETURN TO 3D EXPERIENCE</button>
      </div>
    `;

    document.getElementById('btn-close-checkout-success')?.addEventListener('click', () => {
      closeCheckoutModal();
      closeShopDashboard();
    });
    document.getElementById('btn-finish-order')?.addEventListener('click', () => {
      closeCheckoutModal();
      closeShopDashboard();
    });

    cartItems = [];
    saveCart();
    playClickSound();
  }

  // --- 10. BESPOKE ATELIER SECTION LOGIC ---
  let bespokeWatch = WATCH_CATALOGUE[0];
  let bespokeStrap = 'Integrated Metal Bracelet';

  function initBespokeSection() {
    const modelChips = document.querySelectorAll('#bespoke-model-chips .bespoke-strap-chip');
    const strapChips = document.querySelectorAll('#bespoke-strap-chips .bespoke-strap-chip');
    const displayImg = document.getElementById('bespoke-display-img');
    const addBtn = document.getElementById('btn-bespoke-add');

    modelChips.forEach(chip => {
      chip.addEventListener('click', () => {
        modelChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const match = WATCH_CATALOGUE.find(w => w.id === chip.dataset.model);
        if (match) {
          bespokeWatch = match;
          if (displayImg) displayImg.src = match.images[0];
          playClickSound();
        }
      });
    });

    strapChips.forEach(chip => {
      chip.addEventListener('click', () => {
        strapChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        bespokeStrap = chip.dataset.strap;
        playClickSound();
      });
    });

    addBtn?.addEventListener('click', () => {
      const engraving = document.getElementById('bespoke-engraving-input')?.value.trim() || '';
      addToCart(bespokeWatch.id, bespokeStrap, engraving);
    });
  }

  // --- 11. HERO 4-MODEL SHOWCASE CAROUSEL ---
  const HERO_MODELS = [
    {
      id: 'fs60p-steel',
      colorKey: 'steel',
      title: 'FS 60P PURE STEEL',
      badge: '904L OYSTERSTEEL CHRONOMETER',
      material: 'Monolithic 904L Stainless Steel • Sunburst Slate Dial',
      priceUSD: 14200,
      image: '/assets/the-watch/img/images-section/first_3.webp',
      specs: ['41mm Architecture Case', 'Calibre FS-60P', '60h Power Reserve', '100m Water Resistance']
    },
    {
      id: 'fs60p-midnight',
      colorKey: 'midnight',
      title: 'FS 60P MIDNIGHT DLC',
      badge: 'GRADE 5 TITANIUM PHANTOM',
      material: 'Aerospace Grade 5 Titanium • Diamond-Like Carbon Coating',
      priceUSD: 16800,
      image: '/assets/the-watch/img/images-section/second_3.webp',
      specs: ['Grade 5 Titanium', 'DLC Diamond Coating', 'Ultra-Light 78g', '100m Water Res.']
    },
    {
      id: 'fs60p-gold',
      colorKey: 'gold',
      title: 'FS 60P SOVEREIGN GOLD',
      badge: '18K SOLID YELLOW GOLD',
      material: '18-Karat Solid Yellow Gold (750‰) • Champagne Guilloché',
      priceUSD: 28500,
      image: '/assets/the-watch/img/images-section/third_3.webp',
      specs: ['18K Solid Gold', '22K Gold Rotor', '60h Reserve', '100m Water Res.']
    },
    {
      id: 'fs60p-rose',
      colorKey: 'rose',
      title: 'FS 60P ETERNAL ROSE',
      badge: '18K EVEROSE GOLD ALLOY',
      material: '18K Patented Rose Gold • Smoked Anthracite Graduated Dial',
      priceUSD: 29800,
      image: '/assets/the-watch/img/images-section/fourth_3.webp',
      specs: ['18K Rose Gold', 'Hand-Polished', '60h Reserve', '100m Water Res.']
    }
  ];

  let currentHeroIndex = 0;
  let heroCarouselTimer = null;
  let heroFadeTimeout = null;

  function updateHeroModel(index, animate = true) {
    currentHeroIndex = (index + HERO_MODELS.length) % HERO_MODELS.length;
    const model = HERO_MODELS[currentHeroIndex];

    const tagEl = document.getElementById('hero-edition-tag');
    const imgEl = document.getElementById('hero-model-img');

    // Switcher tabs active state updates immediately
    document.querySelectorAll('.hero-switch-tab').forEach((tab, i) => {
      tab.classList.toggle('active', i === currentHeroIndex);
    });

    const setContent = () => {
      if (tagEl) tagEl.textContent = `${model.title} • ${model.badge}`;
      if (imgEl) {
        imgEl.src = model.image;
        imgEl.alt = model.title;
      }
    };

    if (animate && imgEl) {
      if (heroFadeTimeout) clearTimeout(heroFadeTimeout);
      imgEl.classList.add('hero-fading-out');

      heroFadeTimeout = setTimeout(() => {
        setContent();
        imgEl.classList.remove('hero-fading-out');
        imgEl.classList.add('hero-fading-in');
        setTimeout(() => {
          imgEl.classList.remove('hero-fading-in');
        }, 220);
        heroFadeTimeout = null;
      }, 140);
    } else {
      setContent();
    }
  }

  function startHeroTimer() {
    stopHeroTimer();
    heroCarouselTimer = setInterval(() => {
      updateHeroModel(currentHeroIndex + 1, true);
    }, 6000);
  }

  function stopHeroTimer() {
    if (heroCarouselTimer) {
      clearInterval(heroCarouselTimer);
      heroCarouselTimer = null;
    }
  }

  function initHeroCarousel() {
    updateHeroModel(0, false);

    document.querySelectorAll('.hero-switch-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.dataset.index, 10);
        updateHeroModel(idx, true);
        startHeroTimer();
        playClickSound();
      });
    });

    document.getElementById('btn-hero-explore')?.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = document.getElementById('catalog-section');
      if (cat) cat.scrollIntoView({ behavior: 'smooth' });
      playClickSound();
    });

    document.getElementById('btn-hero-atelier')?.addEventListener('click', (e) => {
      e.preventDefault();
      const atelier = document.getElementById('bespoke-atelier-section');
      if (atelier) atelier.scrollIntoView({ behavior: 'smooth' });
      playClickSound();
    });
  }

  // --- 12. CLIENT ACCOUNT / LOGIN MODAL ---
  function openLoginModal() {
    const modal = document.getElementById('shop-login-modal');
    if (modal) modal.classList.add('active');
    playClickSound();
  }

  function closeLoginModal() {
    const modal = document.getElementById('shop-login-modal');
    if (modal) modal.classList.remove('active');
    playClickSound();
  }

  function initLoginModal() {
    const modal = document.getElementById('shop-login-modal');
    const openBtn = document.getElementById('btn-header-login');
    const closeBtn = document.getElementById('btn-close-login');
    const tabSignIn = document.getElementById('tab-login-signin');
    const tabRegister = document.getElementById('tab-login-register');
    const formSignIn = document.getElementById('form-client-signin');
    const formRegister = document.getElementById('form-client-register');

    openBtn?.addEventListener('click', openLoginModal);
    closeBtn?.addEventListener('click', closeLoginModal);
    modal?.addEventListener('click', (e) => {
      if (e.target.id === 'shop-login-modal') closeLoginModal();
    });

    tabSignIn?.addEventListener('click', () => {
      tabSignIn.classList.add('active');
      tabRegister?.classList.remove('active');
      if (formSignIn) formSignIn.style.display = 'flex';
      if (formRegister) formRegister.style.display = 'none';
      playClickSound();
    });

    tabRegister?.addEventListener('click', () => {
      tabRegister.classList.add('active');
      tabSignIn?.classList.remove('active');
      if (formRegister) formRegister.style.display = 'flex';
      if (formSignIn) formSignIn.style.display = 'none';
      playClickSound();
    });

    formSignIn?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email')?.value || 'Collector';
      alert(`Welcome back, ${email}.\nFS 60P Client Portal connected.`);
      closeLoginModal();
    });

    formRegister?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value || 'Collector';
      alert(`VIP Account created for ${name}.\nWelcome to FS 60P Haute Horlogerie Genève.`);
      closeLoginModal();
    });

    document.getElementById('link-forgot-pass')?.addEventListener('click', () => {
      alert('Password reset instructions have been dispatched to your private email address.');
    });
  }

  // --- 13. OPEN / CLOSE SHOP DASHBOARD & SCROLL DETECTION ---
  function openShopDashboard() {
    const dashboard = document.getElementById('luxury-shop-dashboard');
    if (dashboard) {
      dashboard.classList.add('active');
      document.body.style.overflow = 'hidden';
      dashboard.scrollTop = 0;
      renderWatchCards();
      updateHeroModel(0, false);
      startHeroTimer();
      playClickSound();

      if (window.Hero3DWatch) {
        const container = document.getElementById('hero-showcase-visual') || document.getElementById('hero-3d-canvas-container');
        if (container) {
          window.Hero3DWatch.init(container);
        }
        window.Hero3DWatch.onOpenShop();
        setTimeout(() => {
          window.Hero3DWatch.onResize();
        }, 120);
      }

      if (!dashboard._hasScrollBridge) {
        dashboard.addEventListener('scroll', () => {
          if (window.Hero3DWatch) {
            window.Hero3DWatch.onScroll(dashboard.scrollTop);
          }
        }, { passive: true });
        dashboard._hasScrollBridge = true;
      }
    }
  }

  function closeShopDashboard() {
    const dashboard = document.getElementById('luxury-shop-dashboard');
    if (dashboard) {
      dashboard.classList.remove('active');
      document.body.style.overflow = '';
      stopHeroTimer();
      closeLoginModal();
      if (window.Hero3DWatch) {
        window.Hero3DWatch.onCloseShop();
      }
      playClickSound();
    }
  }

  // Smart Scroll Trigger: Shows transparent button ONLY when at the last section of 3D presentation
  function initScrollWatcher() {
    const cta = document.getElementById('fs60p-shop-cta');
    if (!cta) return;

    function checkPosition() {
      const footer = document.querySelector('[data-section="Footer"]');
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) : 0;

      let isAtLastSection = false;

      // 1. Check if Footer section is in view
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          isAtLastSection = true;
        }
      }

      // 2. Check overall scroll progress (>= 86% of total scroll)
      if (progress >= 0.86 || (scrollHeight > 0 && (scrollHeight - window.scrollY) <= window.innerHeight * 0.75)) {
        isAtLastSection = true;
      }

      if (isAtLastSection) {
        cta.classList.add('visible');
      } else {
        cta.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', checkPosition, { passive: true });
    window.addEventListener('resize', checkPosition, { passive: true });
    setInterval(checkPosition, 300);
    checkPosition();
  }

  // --- 14. INITIALIZATION & EVENT BINDINGS ---
  function initShopApp() {
    injectShopDOM();
    loadStorage();
    renderWatchCards();
    initHeroCarousel();
    initLoginModal();
    initBespokeSection();
    initScrollWatcher();

    // Trigger button on 3D page
    document.getElementById('btn-trigger-explore-shop')?.addEventListener('click', openShopDashboard);
    document.getElementById('btn-close-shop')?.addEventListener('click', closeShopDashboard);

    // Prevent wheel/touch from being intercepted by window scroll
    const storeDashboard = document.getElementById('luxury-shop-dashboard');
    if (storeDashboard) {
      storeDashboard.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
      storeDashboard.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }

    // Logo click: scroll to top
    document.getElementById('btn-header-home')?.addEventListener('click', () => {
      if (storeDashboard) storeDashboard.scrollTo({ top: 0, behavior: 'smooth' });
      playClickSound();
    });

    // Navigation Menu (Home, Categories, Bespoke, About, Contact)
    document.querySelectorAll('.store-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.store-nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const targetNav = link.dataset.nav;

        if (targetNav === 'home') {
          storeDashboard?.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (targetNav === 'categories') {
          const cat = document.getElementById('catalog-section');
          if (cat && storeDashboard) storeDashboard.scrollTo({ top: cat.offsetTop - 70, behavior: 'smooth' });
        } else if (targetNav === 'bespoke') {
          const bes = document.getElementById('bespoke-atelier-section');
          if (bes && storeDashboard) storeDashboard.scrollTo({ top: bes.offsetTop - 70, behavior: 'smooth' });
        } else if (targetNav === 'about') {
          const abt = document.getElementById('heritage-section');
          if (abt && storeDashboard) storeDashboard.scrollTo({ top: abt.offsetTop - 70, behavior: 'smooth' });
        } else if (targetNav === 'contact') {
          const foot = document.querySelector('.store-footer');
          if (foot && storeDashboard) storeDashboard.scrollTo({ top: foot.offsetTop - 70, behavior: 'smooth' });
        }
        playClickSound();
      });
    });

    // Cart Button in Header
    document.getElementById('btn-header-cart')?.addEventListener('click', openCartDrawer);
    document.getElementById('btn-close-cart')?.addEventListener('click', closeCartDrawer);

    // Currency Switcher
    document.getElementById('store-currency-select')?.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      renderWatchCards();
      updateCartUI();
      updateHeroModel(currentHeroIndex, false);
      if (modalSelectedWatch) {
        document.getElementById('modal-price').textContent = formatPrice(modalSelectedWatch.priceUSD);
      }
    });

    // Filter Buttons in Catalog
    document.querySelectorAll('.catalog-pill-btn').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.catalog-pill-btn').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilter = pill.dataset.filter;
        renderWatchCards();
        playClickSound();
      });
    });

    // Sorting Dropdown
    document.getElementById('catalog-sort-select')?.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderWatchCards();
    });

    // Quick View Modal Controls
    document.getElementById('btn-close-modal')?.addEventListener('click', closeQuickViewModal);
    document.getElementById('shop-product-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'shop-product-modal') closeQuickViewModal();
    });

    // Modal Strap Selector
    document.querySelectorAll('#modal-strap-group .strap-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#modal-strap-group .strap-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        modalSelectedStrap = btn.dataset.strap;
        playClickSound();
      });
    });

    // Add to Bag from Modal
    document.getElementById('btn-modal-add-cart')?.addEventListener('click', () => {
      if (!modalSelectedWatch) return;
      const engraving = document.getElementById('modal-engraving')?.value.trim() || '';
      addToCart(modalSelectedWatch.id, modalSelectedStrap, engraving);
      closeQuickViewModal();
    });

    // Checkout Triggers
    document.getElementById('btn-cart-checkout')?.addEventListener('click', openCheckoutModal);
    document.getElementById('btn-close-checkout')?.addEventListener('click', closeCheckoutModal);
    document.getElementById('shop-checkout-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'shop-checkout-modal') closeCheckoutModal();
    });

    // Payment Methods
    document.querySelectorAll('.payment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        playClickSound();
      });
    });

    // Submit Checkout
    document.getElementById('checkout-form')?.addEventListener('submit', handleOrderSuccess);

    // Global ESC Listener
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeQuickViewModal();
        closeCartDrawer();
        closeCheckoutModal();
        closeLoginModal();
      }
    });

    console.info('FS 60P Complete E-Commerce Store Architecture Loaded');
  }

  // Safe Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShopApp);
  } else {
    initShopApp();
  }
})();
