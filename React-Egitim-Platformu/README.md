# React + TypeScript Basics

React ve TypeScript kullanarak modern, bileşen tabanlı ve tip güvenli bir web arayüzü geliştirmeyi öğreten interaktif eğitim sitesi.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    Header.tsx          — Sayfa başlığı ve navigasyon menüsü
    Content.tsx         — Eğitim konuları, kod örnekleri, alıştırmalar ve quizler
    InteractiveDemo.tsx — Counter ve Tabs interaktif demoları
    Quiz.tsx            — Bilgi sınav bileşeni
    Footer.tsx          — Alt bilgi
  App.tsx               — Kök bileşen
  main.tsx              — Giriş noktası
  index.css             — Global stiller ve Tailwind teması
```

## Topics Covered

### 🟢 Temel Bilgiler
1. React & TypeScript'e Giriş — Bileşen, JSX, tip güvenliği
2. Değişkenler & TypeScript Tipleri — const/let, union, interface, generics
3. Kontrol Deyimleri & Döngüler — map, filter, koşullu render

### 🔵 Props & Bileşenler
4. Props — Temel Kullanım — type/interface, destructuring, default değerler
5. Props — İleri Örnekler — children, callback, render props deseni
6. State Yönetimi — useState, CRUD, derived state

### 🟣 Temel Hooks
7. useState Hook — Tipler, lazy init, nesne/dizi state
8. useEffect Hook — Bağımlılık dizisi, cleanup, race condition
9. useContext Hook — Context API, Provider, custom hook
10. useRef Hook — DOM erişimi, mutable değer, usePrevious

### 🟡 İleri Hooks
11. useReducer Hook — Discriminated union, reducer + context
12. useMemo Hook — Memoization, filtreleme optimizasyonu
13. useCallback Hook — Fonksiyon memoization, React.memo
14. useImperativeHandle Hook — forwardRef, imperative API

### 🔴 Form & Routing
15. Dinamik Form — Controlled inputs, çok adımlı form
16. React Hook Form — register, handleSubmit, validation
17. React Router — BrowserRouter, useParams, useNavigate
18. Nested Routes — Outlet, index route, korumalı route

## Interactive Features

- ✅ Her konu için interaktif kod örnekleri
- ✅ Açılır/kapanır alıştırma soruları
- ✅ Her konu için çoktan seçmeli quiz
- ✅ İlerleme takibi (localStorage)
- ✅ Counter + Tabs canlı demo
- ✅ Bilgi sınav bileşeni (skor + açıklama)
