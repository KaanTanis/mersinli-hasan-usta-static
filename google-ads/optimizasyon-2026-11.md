# Google Ads optimizasyonu – Kasım 2026

Hesap: Mersinli Hasan Usta Tantuni (484-555-3403) · Kampanya: "Arama kampanyası tantuni"

**Değişmeyecekler (karar: Kaan):** Hedef EBM 61 ₺ ve günlük bütçe 2.400 ₺ aynı kalıyor. Son dönem EBM'si ~62 ₺; "tüm zamanlar" ortalaması (133 ₺) eski dönemi de içerdiği için yüksek görünüyor.

## Hesapta görülen mevcut durum (24 Kas 2026)

| Ayar | Değer | Not |
| --- | --- | --- |
| Ağ | Yalnızca Google arama | Doğru |
| Konum | Şube çevresi 7 km, 83 yer hariç | Doğru |
| Reklam planı | Her gün 10:45–23:45 | Paket servis 09:00–00:00. Sabah 09:00–10:45 boşta kalıyor |
| Negatif kelimeler | 486 adet | Rakip ve alakasız terimlerin çoğu zaten hariç |
| Marka reklamı | Son URL `/#konum` · "online sipariş verin" | Sitede online sipariş yok |
| Genel reklam | Son URL `/siparis-ver/tantuni` · "anında kapınızda" | Sayfa ana sayfanın kopyasıydı. Artık `/tantuni-siparis/`'e 301 |
| Tavuk/Et/Biftek | Son URL'ler sonda `/` olmadan | Yönlendirme `http://`'ye düşüyordu (nginx'te düzeltildi) |
| Rakip grubu | KP 1/10, "Ortalama" reklam gücü | Duraklatılmalı |

Google İşletme Profili: restoran 09:00–22:00, paket servis 09:00–00:00 (her gün), 4,5 puan, 3.161 yorum.

## Site deploy edildikten sonra yapılacaklar

### 1. Son URL'ler

| Reklam grubu | Yeni son URL |
| --- | --- |
| Genel | https://www.mersinlihasanustatantuni.com/tantuni-siparis/ (www! aşağıya bakın) |
| Marka | https://www.mersinlihasanustatantuni.com (değişmedi) |
| Tavuk Tantuni | https://www.mersinlihasanustatantuni.com/tavuk-tantuni/ ✅ |
| Et Tantuni | https://www.mersinlihasanustatantuni.com/et-tantuni/ ✅ |
| Biftek Tantuni | https://www.mersinlihasanustatantuni.com/biftek-tantuni/ ✅ |

### 2. Reklam metni düzeltmeleri (vaat ↔ sayfa uyumu)

- Marka: "Menümüzü inceleyin, online sipariş verin." → "Menümüzü inceleyin, telefonla hemen sipariş verin."
- Genel: "Hızlı paket servis ile anında kapınızda." → "Paket servis her gün 00:00'a kadar, kapıda kredi kartı."

### 3. Yeni başlık önerileri (hepsi ≤30 karakter)

**Mersin Tantuni (Genel)** · 1. başlık sabit: `Mersin Tantuni – Hasan Usta`
Tantuni Mersin Yenişehir · Mersin'in Meşhur Tantunisi · Tavuk Tantuni 150₺'den · Et ve Biftek Tantuni · Hemen Ara: 0324 326 55 66 · Paket Servis 00:00'a Kadar · Kapıda Kredi Kartı · Yoğurtlu Tantuni Seçeneği · Her Gün 09:00'dan İtibaren · Taze Hazırlanır, Sıcak Gelir

**Sipariş / Paket** → `/tantuni-siparis/` · 1. başlık sabit: `Mersin Tantuni Sipariş`
Telefonla Hemen Sipariş · Paket Servis 00:00'a Kadar · Kapıda Kredi Kartı · Tantuni Paket Servis · Hemen Ara: 0324 326 55 66 · Tavuk Tantuni 150₺'den · Taze Hazırlanır, Sıcak Gelir · Hasan Usta Yenişehir

**Yakınımdaki / Konum** → `/konum/` · 1. başlık sabit: `En Yakın Tantunici Burada`
Yenişehir'de Tantuni · İsmet İnönü Blv. No:292/A · Yol Tarifi Al – Hasan Usta · Her Gün 09:00–22:00 Açık · Yerinde veya Paket Servis · Pozcu ve Güvenevler'e Yakın

**Marka** · 1. başlık sabit: `Mersinli Hasan Usta Tantuni`
Hasan Usta Tantuni Resmi Site · Hemen Ara: 0324 326 55 66 · Paket Servis 00:00'a Kadar · Yenişehir İsmet İnönü Blv.

**Açıklamalar (≤90 karakter)**
1. Telefonla sipariş verin, tantuniniz Yenişehir'den sıcak gelsin. Kapıda kredi kartı.
2. Tavuk, et ve biftek tantuni; lavaş, açık ekmek, sütlü somun veya yoğurtlu.
3. Paket servis her gün 09:00–00:00. Restoran 09:00–22:00. Hemen arayın: 0324 326 55 66.
4. İsmet İnönü Blv. Çekmez Apt No:292/A Yenişehir. Yerinde yiyin veya gel-al sipariş verin.

### 4. Öğeler

- Site bağlantıları: "Tantuni Sipariş" → `/tantuni-siparis/` · "Konum ve Saatler" → `/konum/` · "Menü ve Fiyatlar" → `/#menu` · "Tavuk Tantuni" → `/tavuk-tantuni/`
- Açıklama metinleri: Paket Servis 00:00'a Kadar · Kapıda Kredi Kartı · Gel-Al Sipariş · Yoğurtlu Tantuni

### 5. Yapı (aşamalı, öğrenmeyi bozmadan)

Hedef EBM şu an tutuyor; Genel grubu bir anda dağıtmak teklif stratejisinin öğrenmesini sıfırlar. Önerilen sıra:

1. Önce yukarıdaki URL ve metin düzeltmeleri (öğrenmeyi etkilemez).
2. Rakip grubunu duraklat.
3. 2 hafta sonra KP bileşenlerine bak. Açılış sayfası deneyimi düzelmişse "Sipariş/Paket" ve "Yakınımdaki/Konum" gruplarını aç; ilgili kelimeleri Genel'den taşı (Genel'de duraklat, yenisinde ekle).
4. Marka kelimelerini Genel'e negatif olarak ekle ("hasan usta", "mersinli hasan") ki marka aramaları yalnızca Marka grubunda çalışsın.

### 6. İsteğe bağlı

- Reklam planını paket servis saatine çek: 09:00–00:00 (şu an 10:45–23:45). Bütçe aynı kalır; yalnızca sabah saatleri açılır.

## Uygulama kaydı – 24 Kas 2026 (Chrome üzerinden)

Uygulananlar (bütçe ve Hedef EBM'ye dokunulmadı):

- **Genel reklam:** Rakip adı içeren "Öz Mersin Tantuni" başlığı → "Tantuni Mersin Yenişehir". "Hızlı paket servis ile anında kapınızda" → "Paket servis her gün 00:00'a kadar, kapıda kredi kartı". "Online sipariş ver" → "Telefonla sipariş ver". Görünen yol: /tantuni/mersin.
- **Marka reklamı:** "online sipariş verin" → "telefonla sipariş verin". Gerçeğe uymayan "Adresimiz her daim açık" → "Her gün 09:00–22:00 açığız, paket servis 00:00'a kadar". Görünen yol: /Yenişehir.
- **Et / Tavuk / Biftek:** Son URL'lere sondaki `/` eklendi (www korunarak). "Kampanyalı menülerimizi kaçırmayın" (sitede kampanya yok) ve iki zayıf açıklama gerçek fiyat + servis saatiyle değiştirildi.
- **Rakip reklam grubu:** Duraklatıldı.
- **Açıklama metinleri (hesap düzeyi):** Paket Servis 09:00–00:00 · Kapıda Kredi Kartı · Gel-Al Sipariş · Yoğurtlu Tantuni.

- **Reklam planı:** Her gün 10:45–23:45 → **her gün 09:00–00:00** (paket servis saatleriyle aynı). Planın kendi rapor istatistikleri sıfırlandı; kampanya verisi etkilenmez.

Sonuç: 5 etkin reklamın 5'i "Uygun".

### ÖNEMLİ: www'suz son URL kullanmayın (şimdilik)

Marka ve Genel reklamın son URL'si `https://mersinlihasanustatantuni.com/` yapılınca Google reklamı **"Onaylanmadı – Çalışmayan hedef"** olarak işaretledi. Gerekçe, 10 Ağu 2025 tarihli eski bir tarama kaydı (o adres o tarihte hata veriyordu). Bugün site AdsBot dahil herkese 200 dönüyor. Reklamların yayını durmasın diye son URL'ler `https://www.mersinlihasanustatantuni.com` olarak geri alındı ve reklamlar yeniden "Uygun" oldu.

Yapılacak: deploy sonrası yeni sayfalar için de www'lu son URL kullanın; www adresi yolu koruyarak www'suz adrese 301 ile yönleniyor:
- Genel / Sipariş: `https://www.mersinlihasanustatantuni.com/tantuni-siparis/`
- Konum: `https://www.mersinlihasanustatantuni.com/konum/`

İleride www'suz adrese geçmek isterseniz önce politika ekranındaki "Soruna itiraz et" ile yeniden tarama isteyin.

### Hâlâ bekleyenler

- Deploy (nginx + yeni sayfalar) ve Cloudflare "Purge Everything".
- Deploy sonrası: site bağlantıları `/tantuni-siparis/` ve `/konum/`; mevcut "Tantuni Sipariş Ver" ve "İletişim & Konum" site bağlantılarının URL'lerini bu sayfalara çekin.
- "Ücretsiz Paket Servis" açıklama metni sitede doğrulanmıyor. Doğruysa siteye de ekleyin, değilse kaldırın.
- 2 hafta sonra: Sipariş ve Konum gruplarını açma, marka negatifleri.

## Uygulama kaydı – 24 Kas 2026, ikinci tur (site deploy sonrası)

### Yeni yapı

| Kampanya | Grup | Son URL | Durum |
| --- | --- | --- | --- |
| Arama kampanyası tantuni (2.400 ₺/gün, Hedef EBM 61 ₺) | Genel (Mersin Tantuni) | www…/ (ana sayfa) | Etkin |
| | Sipariş / Paket (yeni) | www…/tantuni-siparis/ | Etkin, 1. başlık sabit: "Mersin Tantuni Sipariş" |
| | Yakınımdaki / Konum (yeni) | www…/konum/ | Etkin, 1. başlık sabit: "En Yakın Tantunici Burada" |
| | Tavuk / Et / Biftek Tantuni | www…/…-tantuni/ | Etkin |
| | Rakip | www…/ | Yeniden etkin (bilinirlik için) |
| | Marka | — | Duraklatıldı (yeni kampanyaya taşındı) |
| **Marka – Hasan Usta** (yeni, 300 ₺/gün, Hedef EBM 45 ₺) | Marka | www… | Etkin, reklam incelemede |

Marka kampanyası mevcut kampanyanın kopyası: aynı 7 km konum, 09:00–00:00 planı, yalnızca arama ağı, 423 kampanya negatifi, site bağlantıları ve açıklama metinleri.

### Anahtar kelime taşıma

- Genel'de duraklatılıp **Sipariş / Paket**'e taşınanlar: "tantuni sipariş", "mersin tantuni sipariş", "tantuni paket servis", "tantuni eve servis", "tantuni gel al". Yeni eklenenler: [tantuni sipariş], "tantuni siparişi", "tantuni sipariş ver", "mersin tantuni numarası", "mersin tantuni telefon".
- Genel'de duraklatılıp **Yakınımdaki / Konum**'a taşınanlar: "en yakın tantunici", "tantuni mersin yenişehir", "mersin yenişehir tantuni", "yakınımdaki tantuni", "yakınımdaki tantunici". Yeni eklenenler: [en yakın tantunici], "en yakın tantuni", "en yakın tantunici mersin", "yenişehir tantuni", "mersin tantuni nerede yenir", "pozcu tantuni", "mersin tantuni adres".
- "Açık tantuni" kelimeleri Genel'de bırakıldı: "açık" burada büyük ihtimalle açık ekmek tantunisi anlamında.
- Genel'e eklenenler: [mersin tantuni], [tantuni mersin], "mersin meşhur tantuni", "meşhur mersin tantuni".
- Tavuk Tantuni'ye eklenenler: "yoğurtlu tantuni", "yoğurtlu tavuk tantuni", "mersin yoğurtlu tantuni".
- Asıl kampanyaya marka negatifleri (sıralı): "hasan usta", "mersinli hasan", "hasanusta".

### Site bağlantıları (iki kampanyada ortak)

- "Tantuni Sipariş Ver" → www…/tantuni-siparis/ (2. açıklama: "Paket servis 00:00'a kadar")
- "İletişim & Konum" → "Konum ve Çalışma Saatleri", www…/konum/

### Politika dersleri (önemli)

- **Reklam metninde telefon numarası yasak.** "Hemen Ara: 0324 326 55 66" başlığı ve numaralı açıklamalar reddedildi; hepsi kaldırıldı. Numara yalnızca arama öğesinde kalmalı. (İlk turda Marka reklamına yazılan numaralı açıklama da düzeltildi.)
- **"Alkol" yanlış tespiti:** "Telefonla Hemen Sipariş", "Tantuni Eve Servis" ve "Telefonla sipariş verin, … sıcak gelsin" metinleri Türkiye'de alkol teslimat reklamı yasağı gerekçesiyle otomatik reddedildi. Telefon + eve teslim kalıbını birlikte kullanmayın; "paket servis" tek başına sorun çıkarmadı.

### Hâlâ bekleyenler

- **nginx yapılandırması canlıda değil:** `/siparis-ver/tantuni` hâlâ 200 dönüyor, `/tavuk-tantuni` hâlâ `http://` adrese yönleniyor. `deploy/nginx/tantuni.conf` sunucuya kopyalanıp `nginx -t && systemctl reload nginx` yapılmalı.
- Yeni grupların kalite puanı 1–3 hafta içinde oluşur; bu sürede yapıya dokunmayın.
- 2 hafta sonra: arama terimleri raporundan Sipariş/Konum gruplarına negatif ekleyin; Marka kampanyasının EBM'sine bakın (hedef 45 ₺).
