# Mersinli Hasan Usta Tantuni — Static Redesign

Bu paket, redesign edilmiş statik sayfayı ve orijinal siteden kullanılan görsellerin yerel asset kopyalarını hazırlar.

## Kurulum

Eski site hâlâ yayındayken proje klasöründe:

```bash
./download-assets.sh
```

Deploy sonrası **Cloudflare → Purge Cache → Purge Everything** (agresif edge cache; ayrıntı: `deploy/cloudflare-cache-rules.txt`).

Ardından klasörün tamamını yeni sunucuya yükleyebilirsin:

```text
index.html
assets/
```

`index.html` ürün görselleri, logo ve servis ikonları için artık eski sitenin `/storage/uploads` yollarına bağlı değildir.

## Dış bağımlılıklar

Özel web fontu yok; metin **sistem font stack** ile render edilir. Ölçüm: yalnızca **Google Ads** (`gtag`, AW-17880368457); GTM ve GA4 yok. Google Maps iframe harita işlevi nedeniyle harici olarak bırakıldı.
