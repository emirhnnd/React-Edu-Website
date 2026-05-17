# 🚀 React & TypeScript Eğitim Platformu

Modern web geliştirme teknolojileri kullanılarak hazırlanmış, interaktif bir React ve TypeScript öğrenme platformu. Bu proje, temel React kavramlarından ileri seviye hook'lara kadar geniş bir müfredatı kullanıcı dostu ve interaktif bir arayüzle sunmaktadır.

<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/6b67f773-64c8-4f85-a3df-77d8a77404e5" />
<img width="1901" height="911" alt="image" src="https://github.com/user-attachments/assets/0ba54e3d-f8e7-4d18-af76-b32817b18b76" />
<img width="1906" height="910" alt="image" src="https://github.com/user-attachments/assets/f04a195d-e2dc-4b76-ad67-7a65f33119d9" />
<img width="1877" height="902" alt="image" src="https://github.com/user-attachments/assets/f9cd7c26-ac09-4182-a93c-4d70f8b0e5ee" />


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
