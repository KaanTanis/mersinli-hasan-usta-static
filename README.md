# Mersinli Hasan Usta Tantuni — Static Redesign

Bu paket, redesign edilmiş statik sayfayı ve orijinal siteden kullanılan görsellerin yerel asset kopyalarını hazırlar.

## Kurulum

Eski site hâlâ yayındayken proje klasöründe:

```bash
./download-assets.sh
```

Ardından klasörün tamamını yeni sunucuya yükleyebilirsin:

```text
index.html
assets/
```

`index.html` ürün görselleri, logo ve servis ikonları için artık eski sitenin `/storage/uploads` yollarına bağlı değildir.

## Dış bağımlılıklar

Google Fonts kaldırıldı; sistem font stack kullanılıyor. Google Maps iframe ise harita işlevi nedeniyle harici olarak bırakıldı.
