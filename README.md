# 🚀 React & TypeScript Eğitim Platformu

Modern web geliştirme teknolojileri kullanılarak hazırlanmış, interaktif bir React ve TypeScript öğrenme platformu. Bu proje, temel React kavramlarından ileri seviye hook'lara kadar geniş bir müfredatı kullanıcı dostu ve interaktif bir arayüzle sunmaktadır.

![Proje Görseli](https://via.placeholder.com/800x400?text=Proje+Ekran+Görüntüsü+Buraya+Eklenebilir) <!-- Buraya projenin bir ekran görüntüsünü ekleyebilirsiniz -->

## ✨ Özellikler

- 🌙 **Karanlık/Aydınlık Tema:** Modern, şık ve göz yormayan (Dark/Light Mode) arayüz deneyimi.
- 📊 **İlerleme Takibi:** Konuları tamamladıkça ve testleri çözdükçe ilerlemenizi kaydeden ve gösteren sistem.
- 💡 **İnteraktif Kod Örnekleri:** Her konunun altında, teoriyi pratiğe döken canlı demolar.
- 📝 **Bölüm Sonu Sınavları:** Öğrenilenleri pekiştirmek için her modülün sonunda yer alan kapsamlı testler.
- 🧩 **Kapsamlı Müfredat:**
  - Temel Bilgiler (JSX, Bileşenler, TS Tipleri)
  - Props & State Yönetimi
  - Temel Hooks (useState, useEffect, useContext, useRef vb.)
  - İleri Seviye Hooks (useReducer, useMemo, useCallback)
  - Form Yönetimi ve React Hook Form
  - API Entegrasyonu (Fetching)

## 🛠️ Kullanılan Teknolojiler

Bu proje güncel web teknolojileri kullanılarak geliştirilmiştir:

- **[React 18](https://react.dev/)**: Kullanıcı arayüzü kütüphanesi
- **[TypeScript](https://www.typescriptlang.org/)**: Tip güvenli JavaScript
- **[Vite](https://vitejs.dev/)**: Hızlı ve modern geliştirme ortamı (Build Tool)
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)**: Akıcı ve dinamik sayfa geçiş animasyonları
- **[Radix UI](https://www.radix-ui.com/)**: Erişilebilir, modern UI bileşenleri
- **[Wouter](https://github.com/molefrog/wouter)**: Hafif ve hızlı yönlendirme (Routing)

## 🚀 Kurulum ve Çalıştırma

Projeyi bilgisayarınızda yerel (local) olarak çalıştırmak için şu adımları izleyin:

```bash
# Projeyi bilgisayarınıza klonlayın
git clone https://github.com/kullanici-adiniz/proje-adiniz.git

# Proje dizinine gidin
cd proje-adiniz

# Gerekli paketleri (bağımlılıkları) yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev


src/
  ├── components/    # Yeniden kullanılabilir UI bileşenleri (Header, Content, Quiz vb.)
  ├── pages/         # Yönlendirme (route) işlemi yapılan ana sayfalar
  ├── hooks/         # Proje içindeki özel (Custom) React hook'ları
  ├── App.tsx        # Ana uygulama bileşeni
  └── index.css      # Global Tailwind ayarları
