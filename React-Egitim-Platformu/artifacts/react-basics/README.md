# React Eğitim Sitesi

React ve TypeScript kullanarak geliştirilmiş interaktif bir React öğrenme platformu. Kullanıcılar konuları okuyabilir, kod örneklerini inceleyebilir, alıştırma sorularını çözebilir ve testlerle bilgilerini ölçebilir.

## Özellikler

- Konu anlatımı, kod örnekleri, alıştırma soruları ve testler
- Quiz sonuçları ve tamamlanan konular localStorage'a kaydedilir
- Sayfa yenilenince kaldığı yerden devam eder
- Koyu / Açık tema desteği
- Memory (hafıza) oyunu
- Genel sınav (tüm konuları tamamlayınca açılır)
- Mobil uyumlu tasarım

## Kullanılan Teknolojiler

- **React 18** — Fonksiyonel bileşenler ve Hooks
- **TypeScript** — Tip güvenli geliştirme
- **Vite** — Hızlı geliştirme ortamı
- **Tailwind CSS** — Utility-first CSS framework
- **Lucide React** — İkon kütüphanesi

## Proje Yapısı

```
src/
├── components/
│   ├── Header.tsx        # Navigasyon ve tema butonu
│   ├── Content.tsx       # Ana içerik ve sidebar
│   ├── Footer.tsx        # Alt bilgi
│   ├── MemoryGame.tsx    # Hafıza oyunu bileşeni
│   └── InteractiveDemo.tsx
├── data/
│   ├── contentData.ts    # Tüm konu içerikleri
│   └── contentTypes.ts   # TypeScript tip/interface tanımları
├── hooks/
│   └── useProgress.ts    # localStorage ilerleme takibi
├── App.tsx
├── main.tsx
└── index.css
```

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18 veya üzeri
- npm veya pnpm

### Adımlar

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start
```

Uygulama varsayılan olarak [http://localhost:5173](http://localhost:5173) adresinde açılır.

### Alternatif komutlar

```bash
# pnpm ile
pnpm install
pnpm run dev

# Production build
npm run build
```

## Bileşen Mimarisi

| Bileşen | Açıklama |
|---|---|
| `Header` | Logo, navigasyon linkleri, koyu/açık tema butonu |
| `Content` | Sidebar (konu listesi + ilerleme) + Ana içerik alanı |
| `MemoryGame` | Kart eşleştirme oyunu |
| `useProgress` | Quiz skorları ve ilerlemeyi localStorage'da yöneten hook |

## Props ve Type Tanımları

Tüm veri tipleri `src/data/contentTypes.ts` dosyasında tanımlanmıştır:

```typescript
interface Topic {
  id: string;
  title: string;
  group: string;
  explanation: string[];
  examples: Example[];
  practice: PracticeQuestion[];
  quiz: QuizQuestion[];
}

interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}
```
