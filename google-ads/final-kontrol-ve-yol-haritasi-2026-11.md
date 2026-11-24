# Final kontrol ve yol haritası – 24 Kasım 2026

İlk analiz raporu ile canlı site ve Google Ads hesabı madde madde karşılaştırıldı. Bu belge: ne yapıldı, ne eksik, kalite puanı (KP) için neyi beklemek gerekiyor, sıradaki optimizasyonlar.

## 1. Dürüst durum özeti

- **KP bugün değişmedi.** Hesaptaki KP değerleri (ör. "tantuni mersin" 3/10, "mersin tantuni" 3/10, rakip kelimeler 1/10) rapordakiyle aynı. Google KP'yi yeni reklam, sayfa ve yapı verisi biriktikçe 1–3 haftada günceller; bugün ölçülebilecek bir iyileşme yok.
- **KP'nin üç bileşeninin üçüne de müdahale edildi:** Beklenen TO (reklam metni + yapı), Reklam alaka düzeyi (kelime ↔ başlık eşleşmesi), Açılış sayfası deneyimi (vaat ↔ sayfa uyumu, her niyete ayrı sayfa).
- **Yeni gruplar (Sipariş/Paket, Yakınımdaki/Konum) ve Marka kampanyası henüz hiç gösterim almadı;** KP'leri yok. 2 hafta sonra bakılmalı.
- **Reklam gücü:** 1. başlığı sabitlemek reklam gücünü "Mükemmel"den "Ortalama"ya düşürdü (Google uyarısı: "bazı öğelerin sabitlemesini kaldırın"). Aynı gün ölçülüp geri alındı; bkz. bölüm 7. Güncel durum: Genel, Et, Tavuk, Marka **Mükemmel**; Sipariş **İyi**; Rakip Ortalama (bilinçli); Biftek ve Konum Google incelemesinde, düzenleme ekranında Mükemmel görünüyor.

## 2. İlk rapor ↔ güncel durum

### Raporun 4 ana sorunu

| # | Sorun | Durum |
| --- | --- | --- |
| 1 | Genel grup marka ve rakip aramalarını yiyor | ✅ Marka ayrı kampanyaya taşındı; asıl kampanyaya "hasan usta", "mersinli hasan", "hasanusta" negatifleri eklendi. Rakip grubu **bilinçli olarak açık** (karar: bilinirlik). |
| 2 | Genel reklam jenerik aramaya marka metniyle cevap veriyor | ✅ Bugün düzeltildi: 1. başlık "Mersin Tantuni – Hasan Usta" (sabit), marka başlıkları jenerik olanlarla değişti, fiyatlı açıklama eklendi. |
| 3 | Reklam vaat ediyor, site karşılamıyor | ✅ Reklamlardan "online sipariş" / "anında kapınızda" çıkarıldı. Sitede saat, paket servis, kapıda kart bilgisi var. ⚠️ Teslimat bölgesi ve süresi hâlâ bilinmiyor. |
| 4 | Teknik tutarsızlıklar | ✅ Canonical/sitemap/schema www'suz. nginx yönlendirmeleri canlıda (eski `/siparis-ver/`, sonda `/` yönlendirmeleri doğrulandı). |

### Site güncellemeleri (rapordaki 8 madde)

| # | Madde | Durum |
| --- | --- | --- |
| 1 | Reklam vaadi ↔ sayfa | ✅ |
| 2 | Gerçek `/tantuni-siparis/` sayfası | ✅ Canlı |
| 3 | Tek host (www'suz) | ✅ |
| 4 | Ürün URL'lerinde sonda `/` | ✅ Reklamlarda düzeltildi; nginx de yönlendiriyor |
| 5 | Ürün sayfaları ince | ✅ Saat, paket servis, ödeme, 4 soruluk SSS, yorum puanı eklendi |
| 6 | `/konum/` sayfası | ✅ Canlı (harita, yol tarifi, saat tablosu, semtler, "şu an açık") |
| 7 | PageSpeed mobil testi | ❌ **Ölçülmedi** (API kotası doldu). Elle test edilmeli. |
| 8 | tel: / WhatsApp dönüşümleri Tag Assistant ile doğrulama | ⚠️ `config` komutu `conversion`'dan önce çalışacak şekilde düzeltildi ama Tag Assistant ile **test edilmedi**. |

### Yeni grup yapısı

| Grup | Rapor | Durum |
| --- | --- | --- |
| Mersin Tantuni (Genel) | 8 kelime, URL `/` | ✅ Kelimeler + [mersin tantuni], [tantuni mersin]; sabitsiz |
| Yakınımdaki / Konum | `/konum/` | ✅ 12 kelime, sabitsiz; Google incelemesinde |
| Sipariş / Paket | `/tantuni-siparis/` | ✅ 10 kelime, sabitsiz |
| Tavuk / Et / Biftek | sonda `/`, "yoğurtlu tantuni" | ✅ + sabitsiz; "yoğurtlu tantuni" Tavuk'a eklendi |
| Açık / Gece | şartlı | ⏸ Kurulmadı. Restoran 09:00–22:00, paket servis 00:00'a kadar; "7/24 açık" iddiası yanlış olurdu. |
| Marka (ayrı kampanya) | ayrı bütçe | ✅ "Marka – Hasan Usta": 300 ₺/gün, Hedef EBM 45 ₺, 15 kelime (pozcu/mezitli/yenişehir/telefon dahil) |
| Rakip | duraklat | ⏸ **Açık** (karar). Reklam URL'si yeni sayfaya çekildi, sahte vaat çıkarıldı. |

### Negatifler

| Liste | Durum |
| --- | --- |
| Marka negatifleri | ✅ Eklendi (asıl kampanya) |
| Rakipler | ➖ Rakip grubu açık olduğu için eklenmedi. Genel grupta zaten 400+ eski negatif (rakip adları dahil) var. |
| Alakasız niyet | ✅ Çoğu zaten vardı (tarif, evde, kalori, nedir, döner, franchise, bayilik, iş ilanı…). Eksik olan "tatvan, manisa, istanbul, izmir, yemeksepeti" **bugün iki kampanyaya da eklendi.** |

### Teklif ve bütçe

| Madde | Durum |
| --- | --- |
| Hedef EBM | ✅ Karar: 61 ₺ aynı kalır (son dönem ~62 ₺). |
| Bütçe | ✅ 2.400 ₺/gün aynı; Marka 300 ₺/gün ayrı. |
| Reklam planı | ✅ 09:00–00:00 (rapor: servis saatleriyle uyumlu). |

## 3. Eksik / yarım kalanlar (öncelik sırasıyla)

1. **Google İşletme Profili Ads'e bağlı değil.** Hesapta hiç "Konum" öğesi yok. Rapor bunun doğrulanmasını istemişti. Bağlanınca reklamda adres, mesafe ve harita çıkar; "en yakın tantunici" aramalarında en güçlü öğe budur. Yapılış: Ads → Araçlar → Bağlı hesaplar → Google İşletme Profili → Bağla. İşletme profilinin sahibi onaylamalı.
2. **Fiyat öğesi yok.** Menü fiyatlarını (tavuk 150 ₺, et 300 ₺, biftek 320 ₺, künefe 250 ₺) reklamın altında gösteren öğe ekleyin.
3. **PageSpeed (mobil) ölçümü** yapılmadı. Trafiğin %98'i mobilden geliyor.
4. **Tag Assistant ile tel: tıklama dönüşümü testi** yapılmadı.
5. ~~"Ücretsiz Paket Servis"~~ — teyit edildi, siteye eklendi (deploy bekliyor).
6. **Teslimat bilgileri** (bölgeler, süre, minimum tutar) bilinmiyor. Sayfalarda "adresinizi telefonda söyleyin" yazıyor; netleşirse siteye ve reklamlara eklenmeli.
7. **Reklam URL'leri hâlâ `www` adresli.** Google bir kez www'suz adresi "çalışmayan hedef" saydı (10 Ağu 2025 tarihli eski kayıt). Şimdi site sağlıklı; ileride Ads'te "Soruna itiraz et" ile yeniden tarama isteyip www'suza geçilebilir. Önemsiz: www adresi tek yönlendirmeyle çalışıyor.

## 4. Verinin gösterdiği şeyler

- **Cihaz:** Cep telefonu 377 dönüşüm, 130 ₺/dönüşüm. Bilgisayar 3 dönüşüm, **450 ₺/dönüşüm**. Tablet 7 tıklama, 0 dönüşüm. Site tel: bağlantısına dayalı; masaüstünde aranamıyor.
- **Dönüşüm maliyeti:** Marka grubu 36 ₺, tavuk 80 ₺, biftek 73 ₺, et 71 ₺, rakip 108 ₺, Genel 171 ₺ (tüm zamanlar; yeni dönem ~62 ₺).
- **Rakip anahtar kelimeleri** 1/10 KP ve "sınırlı yayın". Reklam gücü düşük kalacak.
- **En verimli jenerik niyetler:** "en yakın tantunici" (80 ₺), "mersin tantuni numarası" (22 ₺), "nerede yenir". Yeni grupların temeli bunlar.

## 5. Önerilen sonraki adımlar

### Şimdi (bu hafta)
- İşletme Profili bağla, fiyat öğesi ekle (yukarıda 1–2).
- PageSpeed testini çalıştır: https://pagespeed.web.dev/ → mobil. LCP 2,5 sn üstündeyse hero görselini küçült.
- Tag Assistant ile bir tel: tıklaması yapıp dönüşümün düştüğünü doğrula.
- Cihaz ayarı: masaüstü ve tablet için teklif ayarlamasını −100% yap (Cihazlar sayfası). Akıllı teklifleme zaten düşük teklif veriyor, kazanç küçük (~1.400 ₺ 10 ayda) ama maliyetsiz.
- WhatsApp butonları sitede gizli (CSS). Hat aktifse tekrar açılması dönüşümü artırır; reklamda yine de vaat edilmesin.

### 1. hafta
- Arama terimleri raporunu (Tüm zamanlar) haftalık gözden geçir; Sipariş/Konum gruplarına gelen alakasız terimleri negatif yap.
- Yeni grupların reklam durumunu kontrol et; reddedilen varsa metni düzelt.
- Yeni Marka kampanyasında ilk 7 günün dönüşüm maliyetine bak. 45 ₺ hedefin üstündeyse 55 ₺'ye çıkar (öğrenmeyi bozmadan).

### 2–3. hafta
- KP bileşenlerini (Beklenen TO, Reklam alaka, Açılış sayfası) not al. Hedef: "tantuni mersin" ve "mersin tantuni" 3/10 → 5–6/10.
- En düşük TO'lu başlıkları (Öğe ayrıntıları → performans) değiştir.
- Genel'de duraklatılmış eski kelimeleri (tamamen yeni gruplara taşınanlar) kaldır.

### 4–6. hafta
- Jenerik dönüşüm maliyeti < 100 ₺ ise Hedef EBM'yi 61 ₺ → 55 ₺ → 50 ₺ kademeli indir (her adım arası 2 hafta). Hedef EBM şu an sabit tutuldu.
- Bütçeyi en verimli gruba (Konum / Sipariş) kaydır.
- Öğle (12–15) ve akşam (18–22) saatleri için saat/gün raporuna bak.
- Rakip grubu: 3 hafta sonra maliyet/dönüşüm 100 ₺'yi aşıyorsa teklif tavanı koy veya duraklat.

### Uzun vade
- Google yorumlarını (4,5 ★ / 3.161) reklam ve sayfalarda kullanmaya devam et; yeni yorum toplamak için kasada QR kod.
- Görsel öğeleri (resim) güncel ürün fotoğraflarıyla yenile; mevcut resimlerin TO'su %1,75–%2,97, aramada belirgin düşük.
- Yemeksepeti/Getir sayfası varsa siteye ve Ads'e bağlantı ekle (rapordaki açık soru hâlâ cevapsız).

## 6. Politika notları (tekrar yapılmaması için)

- Reklam metninde **telefon numarası yok.** Numara yalnızca arama öğesinde.
- "Telefonla sipariş" + "eve servis/eve teslim" kalıbı **alkol politikası** otomatik reddine takılıyor. "Paket servis" sorun çıkarmadı.
- Başlık sabitleme (pin) **kullanmayın**: ölçüldü, reklam gücünü Mükemmel'den Ortalama'ya düşürüyor. İlk raporun "ana kelimeyi 1. başlığa sabitle" önerisi bu yüzden terk edildi.
- Başlık ve açıklamalarda rakip marka adı kullanmayın (politika). Bu yüzden Rakip reklamı en fazla "Ortalama" olur.


## 7. Reklam gücü iyileştirmesi (aynı gün, 2. tur)

**Bulgu:** Reklam gücü, düzenleme ekranındaki "Fikirleri göster" listesine göre beş ölçütle belirleniyor: yeterli başlık, başlıklarda popüler anahtar kelime, başlıkların birbirinden farklı olması, açıklamaların farklı olması, site bağlantısı. 1. başlığı sabitleyince "başlıkların farklı olması" ölçütü düşüyor ve reklam "Ortalama"ya iniyor; sabitlemesiz Genel, Tavuk, Et ve Biftek düzenleme ekranında "Mükemmel" gösterdi.

**Yapılan:**
- Genel, Tavuk, Et, Biftek, Sipariş, Konum reklamlarında 1. başlık sabitlemesi kaldırıldı.
- Başlık setleri çeşitlendirildi: her reklamda ana kelime 2–3 başlıkta, geri kalanı fiyat (150/300/320 ₺), servis saati, ödeme, ekmek çeşitleri, adres, semt başlıkları.
- Sipariş ve Konum reklamlarına grup kelimelerinden başlıklar eklendi ("Tantuni Sipariş Ver", "Mersin Tantuni Siparişi", "Pozcu Tantuni – Hasan Usta", "Mersin Tantuni Nerede Yenir").
- Tavuk, Et, Biftek açıklamaları gerçek fiyat, saat ve ödeme bilgisiyle yeniden yazıldı; telefon numarası ve "telefonla … eve teslim" kalıbı yok.
- Rakip reklamının son URL'si `/tantuni-siparis/` yapıldı, "anında kapınızda" vaadi çıkarıldı.
- **Ek açıklamalı snippet düzeltildi:** "Hizmetler: Online Sipariş, Hızlı Teslimat, Gel Al, Kapıda Ödeme" → "Paket Servis, Yerinde Yemek, Gel Al, Kapıda Ödeme" (iki kampanyada da). Sitede online sipariş yoktu.

**Sonuç (kayıtlı reklamlar, Google listesi):** Genel Mükemmel · Et Mükemmel · Tavuk Mükemmel · Marka Mükemmel · Sipariş İyi · Rakip Ortalama · Biftek ve Konum inceleniyor.

**Neden Rakip "Ortalama" kalıyor:** Eksik tek ölçüt "başlıklarda popüler anahtar kelime"; bu grubun kelimeleri rakip marka adları. Başkasının markasını reklam metnine yazmak politika ihlali, o yüzden yapılmadı.

**Sipariş "İyi" → "Mükemmel" için:** başlıklara "mersin tantuni numarası" ve "mersin tantuni telefon" kelimelerini içeren bir başlık eklemek yetebilir. Telefon/numara ifadeleri politika riski taşıdığı için denenmedi.

**"Ücretsiz Paket Servis":** İşletme sahibi teyit etti; siteye de eklendi (ana sayfa, sipariş, konum, ürün sayfaları, SSS ve schema). Deploy sonrası reklamdaki açıklama metniyle tutarlı. "Mersin'in Yerli Markası" öğesi hâlâ doğrulanmadı.
