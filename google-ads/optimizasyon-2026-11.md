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
| Genel | https://mersinlihasanustatantuni.com/tantuni-siparis/ |
| Marka | https://mersinlihasanustatantuni.com/ |
| Tavuk Tantuni | https://mersinlihasanustatantuni.com/tavuk-tantuni/ |
| Et Tantuni | https://mersinlihasanustatantuni.com/et-tantuni/ |
| Biftek Tantuni | https://mersinlihasanustatantuni.com/biftek-tantuni/ |

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
