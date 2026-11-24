/* Alt sayfalar için ortak davranış: telefon dönüşümü, "şu an açık" rozeti, gecikmeli ölçüm. */
(() => {
  // tel: tıklaması → Google Ads dönüşümü (gtag_report_conversion head'de tanımlı)
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="tel:"]');
    if (!link || typeof window.gtag_report_conversion !== 'function') return;
    event.preventDefault();
    window.gtag_report_conversion(link.getAttribute('href'));
  });

  // Çalışma saatleri (Google İşletme Profili): restoran 09:00–22:00, paket servis 09:00–00:00, her gün.
  const HOURS = { dineIn: [9 * 60, 22 * 60], delivery: [9 * 60, 24 * 60] };
  const istanbulMinutes = () => {
    try {
      const parts = new Intl.DateTimeFormat('tr-TR', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      const h = Number(parts.find((p) => p.type === 'hour').value) % 24;
      const m = Number(parts.find((p) => p.type === 'minute').value);
      return h * 60 + m;
    } catch (e) {
      const d = new Date();
      return ((d.getUTCHours() + 3) % 24) * 60 + d.getUTCMinutes();
    }
  };
  const now = istanbulMinutes();
  const isOpen = ([a, b]) => now >= a && now < b;
  document.querySelectorAll('[data-open-status]').forEach((el) => {
    const kind = el.dataset.openStatus === 'delivery' ? 'delivery' : 'dineIn';
    const open = isOpen(HOURS[kind]);
    el.classList.toggle('is-open', open);
    if (kind === 'delivery') {
      el.textContent = open ? 'Şu an paket servis açık · 00:00’a kadar' : 'Paket servis şu an kapalı · 09:00’da açılır';
    } else {
      el.textContent = open ? 'Şu an açık · 22:00’ye kadar' : 'Restoran şu an kapalı · 09:00’da açılır';
    }
  });

  // Harita: görünür olunca yükle
  const map = document.querySelector('[data-map-src]');
  if (map) {
    const loadMap = () => {
      if (map.dataset.loaded) return;
      map.dataset.loaded = 'true';
      const iframe = document.createElement('iframe');
      iframe.title = map.getAttribute('aria-label') || 'Harita';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.setAttribute('allowfullscreen', '');
      iframe.src = map.dataset.mapSrc;
      map.replaceChildren(iframe);
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { loadMap(); io.disconnect(); }
      }, { rootMargin: '200px' });
      io.observe(map);
    } else {
      loadMap();
    }
  }

  // Ölçüm betikleri: etkileşim veya boşta kalınca
  const boot = () => window.loadHasanAnalytics && window.loadHasanAnalytics();
  ['pointerdown', 'keydown', 'scroll'].forEach((ev) => window.addEventListener(ev, boot, { once: true, passive: true }));
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) requestIdleCallback(boot, { timeout: 8000 });
    else setTimeout(boot, 3500);
  }, { once: true });
})();
