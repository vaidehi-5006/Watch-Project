/**
 * FS 60P GENÈVE - ALL PRODUCTS CATALOGUE SCRIPT
 * Complete 8 Timepieces Showcase, Search, Filter, Quick View & Cart Synchronization
 */

(function () {
  'use strict';

  // --- 1. FULL 8 TIMEPIECES CATALOGUE ---
  const WATCH_CATALOGUE = [
    {
      id: 'fs60p-steel',
      title: 'FS 60P Monolithic Oystersteel',
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
        '/assets/the-watch/img/images-section/first_2.webp',
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
        '/assets/the-watch/img/images-section/second_2.webp',
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
        '/assets/the-watch/img/images-section/first_3.webp',
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
        '/assets/the-watch/img/images-section/third_3.webp',
      ],
      description: 'A poetic celebration of the cosmos. Features a genuine sparkling aventurine quartz dial and a lunar disc crafted from fired grand feu enamel that requires adjustment once every 122 years.'
    }
  ];

  // --- 2. CURRENCY HANDLING ---
  const CURRENCIES = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    INR: { symbol: '₹', rate: 84.5 }
  };
  let currentCurrency = 'USD';

  function formatPrice(usdVal) {
    const cur = CURRENCIES[currentCurrency] || CURRENCIES.USD;
    const amount = Math.round(usdVal * cur.rate);
    return `${cur.symbol}${amount.toLocaleString()}`;
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
      osc.frequency.setValueAtTime(820, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.04);
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

  function saveWishlist() {
    try {
      localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
    } catch (e) {}
  }

  function showToast(message) {
    let toast = document.getElementById('luxury-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'luxury-toast';
      toast.className = 'luxury-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DFBA73" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${message}</span>
    `;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3200);
  }

  function addToCart(watchId, strap = 'Integrated Metal Bracelet', engraving = '') {
    const watch = WATCH_CATALOGUE.find(w => w.id === watchId);
    if (!watch) return;

    const existing = cartItems.find(
      item => item.id === watchId && item.strap === strap && item.engraving === engraving
    );

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

    saveCart();
    playClickSound();
    showToast(`Added ${watch.title} to shopping bag.`);
    openCartDrawer();
  }

  function toggleWishlist(watchId, btn) {
    const index = wishlist.indexOf(watchId);
    if (index > -1) {
      wishlist.splice(index, 1);
      btn.classList.remove('active');
      showToast('Removed timepiece from private wishlist.');
    } else {
      wishlist.push(watchId);
      btn.classList.add('active');
      showToast('Timepiece saved to private wishlist.');
    }
    saveWishlist();
    playClickSound();
  }

  // --- 5. CART DRAWER UI ---
  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) drawer.classList.add('active');
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) drawer.classList.remove('active');
  }

  function updateCartUI() {
    const countBadge = document.getElementById('bag-pill-count');
    const listEl = document.getElementById('drawer-items-list');
    const totalEl = document.getElementById('drawer-total-price');

    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
    if (countBadge) countBadge.textContent = `${totalQty}`;

    if (!listEl) return;

    if (cartItems.length === 0) {
      listEl.innerHTML = `
        <div class="drawer-empty-notice">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="1.5" style="margin-bottom:12px;"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
          <p style="font-weight:600; color:#0A0A0A; margin-bottom:4px;">Your Shopping Bag is Empty</p>
          <p style="font-size:11px;">Select an FS 60P master chronometer to begin acquisition.</p>
        </div>
      `;
      if (totalEl) totalEl.textContent = formatPrice(0);
      return;
    }

    const totalUSD = cartItems.reduce((acc, item) => acc + item.priceUSD * item.qty, 0);
    if (totalEl) totalEl.textContent = formatPrice(totalUSD);

    listEl.innerHTML = cartItems.map((item, idx) => `
      <div class="drawer-item-card">
        <img class="drawer-item-img" src="${item.image}" alt="${item.title}">
        <div class="drawer-item-details">
          <h4 class="drawer-item-title">${item.title}</h4>
          <span class="drawer-item-meta">${item.strap}</span>
          ${item.engraving ? `<span class="drawer-item-meta" style="color:#C5A059; font-weight:600;">Monogram: "${item.engraving}"</span>` : ''}
          <div class="drawer-item-price">${formatPrice(item.priceUSD * item.qty)}</div>
          <div class="drawer-item-controls">
            <div class="qty-counter-group">
              <button class="btn-qty-adj" data-dec="${idx}">−</button>
              <span class="qty-display-num">${item.qty}</span>
              <button class="btn-qty-adj" data-inc="${idx}">+</button>
            </div>
            <button class="btn-drawer-remove" data-remove="${idx}">REMOVE</button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach listeners
    listEl.querySelectorAll('[data-dec]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.dec, 10);
        if (cartItems[idx]) {
          cartItems[idx].qty -= 1;
          if (cartItems[idx].qty <= 0) cartItems.splice(idx, 1);
          saveCart();
          playClickSound();
        }
      });
    });

    listEl.querySelectorAll('[data-inc]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.inc, 10);
        if (cartItems[idx]) {
          cartItems[idx].qty += 1;
          saveCart();
          playClickSound();
        }
      });
    });

    listEl.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.remove, 10);
        if (cartItems[idx]) {
          cartItems.splice(idx, 1);
          saveCart();
          playClickSound();
        }
      });
    });
  }

  // --- 6. QUICK VIEW MODAL ---
  let activeModalWatch = null;
  let activeModalStrap = 'Integrated Metal Bracelet';

  function openQuickView(watchId) {
    const watch = WATCH_CATALOGUE.find(w => w.id === watchId);
    if (!watch) return;
    activeModalWatch = watch;

    const modal = document.getElementById('modal-quickview-overlay');
    document.getElementById('modal-main-img').src = watch.images[0];
    document.getElementById('modal-ref-num').textContent = watch.ref;
    document.getElementById('modal-watch-name').textContent = watch.title;
    document.getElementById('modal-watch-cost').textContent = formatPrice(watch.priceUSD);
    document.getElementById('modal-watch-desc').textContent = watch.description;

    document.getElementById('modal-engraving-field').value = '';
    activeModalStrap = 'Integrated Metal Bracelet';
    document.querySelectorAll('.modal-strap-btn').forEach((b, idx) => {
      b.classList.toggle('selected', idx === 0);
    });

    modal.classList.add('active');
    playClickSound();
  }

  function closeQuickView() {
    const modal = document.getElementById('modal-quickview-overlay');
    if (modal) modal.classList.remove('active');
  }

  // --- 7. FILTER, SEARCH & RENDER LOGIC ---
  let activeCategory = 'all';
  let activeSort = 'featured';
  let searchQuery = '';
  const cardImageIndices = {};

  function updateProductImage(cardId, newIndex) {
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
      dotsContainer.querySelectorAll('.product-slider-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === safeIndex);
      });
    }
  }

  function renderGrid() {
    const container = document.getElementById('all-products-grid');
    const counter = document.getElementById('results-counter');
    if (!container) return;

    let items = WATCH_CATALOGUE.slice();

    // 1. Filter by category
    if (activeCategory !== 'all') {
      items = items.filter(w => w.category === activeCategory);
    }

    // 2. Filter by search query
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(w =>
        w.title.toLowerCase().includes(q) ||
        w.ref.toLowerCase().includes(q) ||
        w.material.toLowerCase().includes(q) ||
        w.dial.toLowerCase().includes(q) ||
        w.tag.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.specs.some(s => s.toLowerCase().includes(q))
      );
    }

    // 3. Sort
    if (activeSort === 'price-asc') {
      items.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (activeSort === 'price-desc') {
      items.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (activeSort === 'ref') {
      items.sort((a, b) => a.ref.localeCompare(b.ref));
    }

    // Update live counter
    if (counter) {
      counter.innerHTML = `Showing <strong>${items.length}</strong> of <strong>${WATCH_CATALOGUE.length}</strong> Master Timepieces`;
    }

    // Render cards
    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-catalog-state">
          <h3>No Chronometers Found</h3>
          <p>No timepieces matched your search criteria "${searchQuery}".</p>
          <button class="btn-reset-filters" id="btn-reset-search">Reset Search Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-search');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchQuery = '';
          const input = document.getElementById('catalog-search-input');
          if (input) input.value = '';
          activeCategory = 'all';
          document.querySelectorAll('.category-pill-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === 'all');
          });
          renderGrid();
        });
      }
      return;
    }

    container.innerHTML = items.map(watch => {
      const isWished = wishlist.includes(watch.id);
      const activeIdx = cardImageIndices[watch.id] || 0;
      return `
        <article class="product-card" data-watch-id="${watch.id}">
          <span class="card-badge">${watch.tag}</span>

          <button class="card-wish-btn ${isWished ? 'active' : ''}" data-wish="${watch.id}" title="Save to Private Wishlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>

          <div class="card-media-stage">
            <button class="product-nav-arrow product-arrow-prev" data-card-id="${watch.id}" aria-label="Previous Photo" title="Previous photo">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            <img class="card-product-img" id="img-${watch.id}" src="${watch.images[activeIdx]}" alt="${watch.title}">

            <button class="product-nav-arrow product-arrow-next" data-card-id="${watch.id}" aria-label="Next Photo" title="Next photo">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <div class="card-slider-dots-box" id="dots-${watch.id}">
              ${watch.images.map((img, i) => `
                <button class="product-slider-dot ${i === activeIdx ? 'active' : ''}" data-card-id="${watch.id}" data-index="${i}" aria-label="Photo ${i + 1}" title="Photo ${i + 1}"></button>
              `).join('')}
            </div>
          </div>

          <div class="card-info-box">
            <div class="card-meta-row">
              <span class="card-ref-number">${watch.ref}</span>
              <span class="card-cat-tag">${watch.category}</span>
            </div>

            <h3 class="card-product-title">${watch.title}</h3>
            <p class="card-product-material">${watch.material}</p>

            <div class="card-specs-pills">
              ${watch.specs.map(spec => `<span class="spec-chip">${spec}</span>`).join('')}
            </div>

            <div class="card-action-footer">
              <div class="card-price-container">
                <div class="price-meta-group">
                  <span class="price-label">Price (Excl. VAT)</span>
                  <span class="price-val">${formatPrice(watch.priceUSD)}</span>
                </div>
                <button class="btn-card-quickview" data-quickview="${watch.id}" title="Inspect Details & Specifications">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z"/></svg>
                  <span>SPECS</span>
                </button>
              </div>

              <button class="btn-card-add-bag" data-add="${watch.id}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span>ADD TO BAG</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach arrow button listeners
    container.querySelectorAll('.product-arrow-prev').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = btn.dataset.cardId;
        const current = cardImageIndices[cardId] || 0;
        updateProductImage(cardId, current - 1);
        playClickSound();
      });
    });

    container.querySelectorAll('.product-arrow-next').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = btn.dataset.cardId;
        const current = cardImageIndices[cardId] || 0;
        updateProductImage(cardId, current + 1);
        playClickSound();
      });
    });

    // Attach dot listeners
    container.querySelectorAll('.product-slider-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = dot.dataset.cardId;
        const index = parseInt(dot.dataset.index, 10);
        updateProductImage(cardId, index);
        playClickSound();
      });
    });

    container.querySelectorAll('[data-wish]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(btn.dataset.wish, btn);
      });
    });

    container.querySelectorAll('[data-quickview]').forEach(btn => {
      btn.addEventListener('click', () => openQuickView(btn.dataset.quickview));
    });

    container.querySelectorAll('[data-add]').forEach(btn => {
      btn.addEventListener('click', () => addToCart(btn.dataset.add));
    });
  }

  // --- 8. INITIALIZATION & BINDINGS ---
  function init() {
    loadStorage();
    renderGrid();

    // Category pills
    document.querySelectorAll('.category-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category || 'all';
        playClickSound();
        renderGrid();
      });
    });

    // Sort select
    const sortSelect = document.getElementById('catalog-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        activeSort = e.target.value;
        playClickSound();
        renderGrid();
      });
    }

    // Currency select
    const currSelect = document.getElementById('currency-select');
    if (currSelect) {
      currSelect.addEventListener('change', (e) => {
        currentCurrency = e.target.value;
        playClickSound();
        renderGrid();
        updateCartUI();
        if (activeModalWatch) {
          const costEl = document.getElementById('modal-watch-cost');
          if (costEl) costEl.textContent = formatPrice(activeModalWatch.priceUSD);
        }
      });
    }

    // Search input
    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderGrid();
      });
    }

    // Bag triggers
    const bagBtn = document.getElementById('btn-open-bag');
    if (bagBtn) bagBtn.addEventListener('click', openCartDrawer);

    const closeBagBtn = document.getElementById('btn-close-drawer');
    if (closeBagBtn) closeBagBtn.addEventListener('click', closeCartDrawer);

    const drawerOverlay = document.getElementById('cart-drawer-overlay');
    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', (e) => {
        if (e.target === drawerOverlay) closeCartDrawer();
      });
    }

    // Modal triggers
    const closeModalBtn = document.getElementById('btn-close-modal');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeQuickView);

    const modalOverlay = document.getElementById('modal-quickview-overlay');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeQuickView();
      });
    }

    // Modal strap select
    document.querySelectorAll('.modal-strap-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-strap-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        activeModalStrap = btn.dataset.strap;
        playClickSound();
      });
    });

    // Modal add to cart
    const modalAddBtn = document.getElementById('btn-modal-add-cart');
    if (modalAddBtn) {
      modalAddBtn.addEventListener('click', () => {
        if (!activeModalWatch) return;
        const engraving = (document.getElementById('modal-engraving-field').value || '').trim();
        addToCart(activeModalWatch.id, activeModalStrap, engraving);
        closeQuickView();
      });
    }

    // Checkout concierge button
    const checkoutBtn = document.getElementById('btn-drawer-checkout');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (cartItems.length === 0) {
          alert('Your shopping bag is empty.');
          return;
        }
        alert('Thank you for choosing FS 60P Genève. Our Private Client Concierge has been notified and will contact you directly to complete secure insured delivery.');
      });
    }

    // ESC key closes overlays
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeQuickView();
        closeCartDrawer();
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
