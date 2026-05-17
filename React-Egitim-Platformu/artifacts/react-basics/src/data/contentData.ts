import type { Group } from "./contentTypes";

export const DATA: Group[] = [
  {
    "id": "temel",
    "title": "Temel Bilgiler",
    "color": "bg-emerald-500",
    "bgColor": "bg-emerald-50",
    "textColor": "text-emerald-600",
    "activeBg": "bg-emerald-100",
    "activeText": "text-emerald-700",
    "topics": [
      {
        "id": "react-giris",
        "title": "React & TypeScript'e Giriş",
        "group": "temel",
        "explanation": [
          "React, kullanıcı arayüzleri oluşturmak için Facebook tarafından geliştirilen açık kaynaklı bir JavaScript kütüphanesidir. Bileşen tabanlı yapısı sayesinde büyük uygulamaları küçük, yeniden kullanılabilir parçalara bölerek geliştirmenizi sağlar.",
          "TypeScript, JavaScript'in üzerine inşa edilmiş ve statik tip denetimi ekleyen bir dildir. Hataları derleme zamanında yakalar, kod tamamlama ve refactoring araçlarını güçlendirir.",
          "React ve TypeScript birlikte kullanıldığında bileşen props'ları ve state'leri tam olarak tip güvenli hale gelir. Bu da büyük ekiplerde ve uzun vadeli projelerde hata oranını önemli ölçüde azaltır."
        ],
        "tip": "React bileşenleri PascalCase (büyük harfle başlayan) isimlendirilmeli. Küçük harfle başlayan bileşen adları React tarafından HTML etiketi olarak yorumlanır ve beklenmedik hatalar oluşur.",
        "examples": [
          {
            "label": "Temel Bileşen",
            "tip": "React.FC<Props> generic tipi sayesinde hem bileşen tipi hem de props tipi tek satırda tanımlanır. version?: number yazımındaki ? işareti bu prop'un zorunlu olmadığını belirtir.",
            "code": "// React + TypeScript ile ilk bileşen\ntype WelcomeProps = {\n  name: string;\n  version?: number;  // ? => zorunlu değil\n};\n\nconst Welcome: React.FC<WelcomeProps> = ({ name, version = 18 }) => {\n  return (\n    <div>\n      <h1>Merhaba, {name}!</h1>\n      <p>React v{version} kullanıyorsunuz.</p>\n    </div>\n  );\n};\n\n// Kullanım\n<Welcome name=\"Emirhan\" version={18} />"
          },
          {
            "label": "Fragment & Koşullu Render",
            "tip": "Fragment (<> </>) DOM'a ekstra element eklemeden birden fazla element döndürmenizi sağlar. Listelerde wrapper div eklemek istemediğinizde kullanın.",
            "code": "// Fragment — gereksiz wrapper div olmadan çoklu element\nconst KullaniciBilgi: React.FC<{ ad: string; premium: boolean }> = ({\n  ad,\n  premium,\n}) => {\n  return (\n    <>\n      <h2>{ad}</h2>\n      {/* Koşullu render: premium ise rozet göster */}\n      {premium && (\n        <span className=\"bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs\">\n          Premium Üye\n        </span>\n      )}\n      {/* Üçlü operatör ile farklı içerik */}\n      <p>\n        {premium\n          ? \"Tüm içeriklere erişiminiz var.\"\n          : \"Ücretsiz plan kullanıyorsunuz.\"}\n      </p>\n    </>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "React'ın bileşen tabanlı mimarisinin avantajları nelerdir?",
            "answer": "Bileşenler yeniden kullanılabilir, bağımsız olarak test edilebilir ve büyük uygulamaları yönetmeyi kolaylaştırır."
          },
          {
            "q": "TypeScript, saf JavaScript'e göre ne gibi avantajlar sunar?",
            "answer": "Statik tip denetimi sayesinde hatalar derleme zamanında yakalanır, IDE desteği gelişir ve kod okunabilirliği artar."
          },
          {
            "q": "React.FC generic tipinin anlamı nedir?",
            "answer": "React.FC (FunctionComponent), bileşenin bir fonksiyon bileşeni olduğunu belirtir ve generic parametreyle props tipini alır."
          }
        ],
        "quiz": [
          {
            "q": "React hangi şirkete tarafından geliştirilmiştir?",
            "options": [
              "Google",
              "Microsoft",
              "Facebook (Meta)",
              "Apple"
            ],
            "correct": 2,
            "explanation": "React, Facebook (şimdiki adıyla Meta) tarafından 2013 yılında açık kaynak olarak yayımlanmıştır."
          },
          {
            "q": "TypeScript hangi şirkete tarafından geliştirilmiştir?",
            "options": [
              "Google",
              "Microsoft",
              "Facebook",
              "JetBrains"
            ],
            "correct": 1,
            "explanation": "TypeScript, Microsoft tarafından 2012 yılında geliştirilmiş ve açık kaynak olarak yayımlanmıştır."
          },
          {
            "q": "React.FC<Props> yazımında <Props> ne anlama gelir?",
            "options": [
              "Bileşenin adı",
              "Props'un tipini belirtir",
              "State tipini belirtir",
              "Return tipini belirtir"
            ],
            "correct": 1,
            "explanation": "Generic parametre <Props>, bileşenin kabul edeceği props'ların TypeScript tipini tanımlar."
          },
          {
            "q": "JSX nedir?",
            "options": [
              "CSS framework'ü",
              "JavaScript XML — HTML benzeri sözdizimi",
              "Veritabanı dili",
              "Test kütüphanesi"
            ],
            "correct": 1,
            "explanation": "JSX, React'te UI tanımlamak için kullanılan JavaScript uzantısıdır."
          },
          {
            "q": "Virtual DOM ne işe yarar?",
            "options": [
              "Hızlı yükleme",
              "Gerçek DOM değişikliklerini minimize eder",
              "CSS optimize eder",
              "Veritabanı bağlantısı"
            ],
            "correct": 1,
            "explanation": "Virtual DOM farkları hesaplayıp minimum güncelleme yapar."
          }
        ]
      },
      {
        "id": "degiskenler",
        "title": "Değişkenler & TypeScript Tipleri",
        "group": "temel",
        "explanation": [
          "JavaScript'te değişken tanımlamak için const, let ve var anahtar kelimeleri kullanılır. Modern kodda var kullanımından kaçınılır; const değişmez referanslar, let ise değişebilir değerler için tercih edilir.",
          "TypeScript'te her değişkene bir tip atanabilir: string, number, boolean, null, undefined, ve daha karmaşık tipler. Tip çıkarımı (type inference) sayesinde TypeScript çoğu zaman tipi otomatik algılar.",
          "Union tipler (|) bir değişkenin birden fazla tip alabilmesini, literal tipler ise yalnızca belirli değerleri kabul etmesini sağlar. Bu özellikler React state yönetiminde sıkça kullanılır."
        ],
        "tip": "TypeScript'te 'type assertion' (as) kullanımından kaçının; mümkün olduğunda tip çıkarımına güvenin veya doğru tiplerle tanımlayın. as any kullanmak TypeScript'in tüm güvenlik avantajlarını ortadan kaldırır.",
        "examples": [
          {
            "label": "Temel Tipler",
            "tip": "TypeScript değişkenlerin tipini çoğu zaman otomatik algılar (tip çıkarımı). Açık tip yazmak zorunlu değildir ancak okunabilirliği artırır.",
            "code": "// Temel tipler\nconst ad: string = \"Emirhan\";\nlet yas: number = 20;\nlet aktif: boolean = true;\n\n// Union tipler\nlet durum: \"aktif\" | \"pasif\" | \"beklemede\" = \"aktif\";\n\n// Tip çıkarımı (TypeScript otomatik algılar)\nconst pi = 3.14; // number olarak çıkarım yapılır\n\n// Array tipleri\nconst sayilar: number[] = [1, 2, 3];\nconst isimler: Array<string> = [\"Ali\", \"Veli\"];\n\n// Optional chaining\nconst kullanici = { profil: { yas: 25 } };\nconst kullaniciYas = kullanici?.profil?.yas; // güvenli erişim"
          },
          {
            "label": "Interface & Generics",
            "tip": "Generic tipler <T> kod tekrarını önler. Aynı mantığı farklı tip verilere uygulamak için idealdir. API yanıtlarını sarmak için ApiResponse<T> gibi generic wrapper'lar yaygın bir pratiktir.",
            "code": "// Interface tanımı (type alias'a alternatif)\ninterface Kullanici {\n  readonly id: number;  // readonly: sonradan değiştirilemez\n  ad: string;\n  yas: number;\n  email?: string;       // opsiyonel alan\n}\n\n// Generic tip — T herhangi bir tip olabilir\ntype ApiYanit<T> = {\n  veri: T;\n  durum: \"basarili\" | \"hata\";\n  mesaj: string;\n};\n\n// Kullanım — T yerine Kullanici geçirildi\nconst yanit: ApiYanit<Kullanici> = {\n  veri: { id: 1, ad: \"Emirhan\", yas: 20 },\n  durum: \"basarili\",\n  mesaj: \"Kullanıcı bulundu\",\n};\n\n// Tuple tipi — sabit uzunluk + sıralı tipler\nconst koordinat: [number, number] = [41.015, 28.979];\n\n// Record tipi — key-value eşleşmesi\nconst puanlar: Record<string, number> = {\n  matematik: 85,\n  fizik: 92,\n};"
          }
        ],
        "practice": [
          {
            "q": "const ile let arasındaki fark nedir? Ne zaman hangisini kullanmalısınız?",
            "answer": "const yeniden atanamaz (nesne içeriği değiştirilebilir), let ise yeniden atanabilir. Mümkün olduğunca const tercih edilmeli, sadece değişecekse let kullanılmalıdır."
          },
          {
            "q": "'aktif' | 'pasif' gibi literal union tip ne zaman kullanılır?",
            "answer": "Bir değişkenin yalnızca belirli string/number değerlerini alabilmesi gerektiğinde kullanılır. React'te status, theme, role gibi alanlarda yaygındır."
          }
        ],
        "quiz": [
          {
            "q": "Hangisi doğru TypeScript tip tanımıdır?",
            "options": [
              "let x = string",
              "let x: string = 'merhaba'",
              "let x: String = 'merhaba'",
              "string x = 'merhaba'"
            ],
            "correct": 1,
            "explanation": "TypeScript'te tip anotasyonu değişken adından sonra : ile yazılır: let x: string = 'merhaba'"
          },
          {
            "q": "const ile tanımlanan bir nesnenin özelliği değiştirilebilir mi?",
            "options": [
              "Hayır, const tamamen değişmezdir",
              "Evet, nesne içeriği değiştirilebilir",
              "Sadece number özellikleri değiştirilebilir",
              "Hayır, hata verir"
            ],
            "correct": 1,
            "explanation": "const yeniden atamayı engeller ama nesne/dizi içeriğini değiştirmeye izin verir. Nesne'nin referansı sabittir, içeriği değil."
          },
          {
            "q": "TypeScript'te number | string ne anlama gelir?",
            "options": [
              "number ve string aynı anda olabilir",
              "number veya string olabilir",
              "number ile string çarpımı",
              "number'ı string'e çevirir"
            ],
            "correct": 1,
            "explanation": "| (pipe) ile oluşturulan union tipler, değişkenin belirtilen tiplerden biri olabileceğini gösterir."
          },
          {
            "q": "readonly ne yapar?",
            "options": [
              "Siler",
              "Okunabilir yapar, değiştirilemez",
              "Global yapar",
              "Async yapar"
            ],
            "correct": 1,
            "explanation": "readonly atandıktan sonra değiştirilmesini engeller."
          },
          {
            "q": "never tipi ne anlama gelir?",
            "options": [
              "Her tipi kabul",
              "Asla return etmez",
              "null ile aynı",
              "undefined ile aynı"
            ],
            "correct": 1,
            "explanation": "never asla değer üretmeyen fonksiyonlar için kullanılır."
          }
        ]
      },
      {
        "id": "kontrol-donguler",
        "title": "Kontrol Deyimleri & Döngüler",
        "group": "temel",
        "explanation": [
          "if/else, switch deyimleri ile koşullu mantık yazılır. TypeScript'te koşul ifadelerinde boolean olmayan değerler tip güvenli şekilde kontrol edilir.",
          "for, while döngüleri ve dizi metodları (map, filter, reduce, forEach) iterasyon için kullanılır. React'te liste render etmek için map() en yaygın yöntemdir.",
          "React JSX içinde koşullu render için && operatörü, üçlü operatör (? :) veya erken return kullanılır. Bu pattern'ler TypeScript ile birleşince tip güvenli koşullu UI elde edilir."
        ],
        "tip": "React'te her map() çağrısında mutlaka key prop ekleyin. key, React'in Virtual DOM diffing algoritmasının doğru çalışması için şarttır. key için dizi indeksi yerine benzersiz ve stabil bir ID kullanın.",
        "examples": [
          {
            "label": "Koşullu Render & Map",
            "tip": "filter().map() zinciri React'te en yaygın veri dönüşüm kalıbıdır. filter gereksiz elemanları eler, map geri kalanları JSX'e dönüştürür.",
            "code": "// Koşullu render\nconst Durum: React.FC<{ puan: number }> = ({ puan }) => {\n  if (puan >= 90) return <span className=\"text-green-600\">Mükemmel</span>;\n  if (puan >= 70) return <span className=\"text-blue-600\">İyi</span>;\n  return <span className=\"text-red-600\">Geliştirilmeli</span>;\n};\n\n// Map ile liste render\ntype Ogrenci = { id: number; ad: string; puan: number };\nconst ogr: Ogrenci[] = [\n  { id: 1, ad: \"Ali\", puan: 85 },\n  { id: 2, ad: \"Ayşe\", puan: 92 },\n];\n\nconst OgrenciListesi: React.FC = () => (\n  <ul>\n    {ogr.map((o) => (\n      <li key={o.id}>{o.ad} — {o.puan}</li>\n    ))}\n  </ul>\n);\n\n// Filter + map kombinasyonu\nconst basarilar = ogr.filter(o => o.puan >= 70).map(o => o.ad);"
          },
          {
            "label": "Object Map Deseni",
            "tip": "Switch yerine Object map deseni (nesne literal ile tip eşleştirme) daha kısa ve okunabilirdir. Record<K, V> tipiyle anahtar-değer eşlemesi tip güvenli tanımlanır.",
            "code": "// Switch yerine Object map deseni\ntype Seviye = \"basit\" | \"orta\" | \"ileri\";\n\n// Her seviye için stil sınıfı — Record ile tip güvenli\nconst seviyeStilleri: Record<Seviye, string> = {\n  basit:  \"bg-green-100 text-green-800\",\n  orta:   \"bg-yellow-100 text-yellow-800\",\n  ileri:  \"bg-red-100 text-red-800\",\n};\n\nconst SeviyeRozeti: React.FC<{ seviye: Seviye }> = ({ seviye }) => (\n  <span className={`px-2 py-1 rounded text-sm ${seviyeStilleri[seviye]}`}>\n    {seviye.toUpperCase()}\n  </span>\n);\n\n// Object.entries ile key-value render\nconst istatistikler = {\n  \"Toplam Soru\": 17,\n  \"Tamamlanan\": 5,\n  \"Başarı Oranı\": \"85%\",\n};\n\nconst Istatistik: React.FC = () => (\n  <dl className=\"grid grid-cols-3 gap-4\">\n    {Object.entries(istatistikler).map(([etiket, deger]) => (\n      <div key={etiket}>\n        <dt className=\"text-slate-500 text-sm\">{etiket}</dt>\n        <dd className=\"font-bold text-xl\">{deger}</dd>\n      </div>\n    ))}\n  </dl>\n);"
          }
        ],
        "practice": [
          {
            "q": "React'te liste render ederken neden key prop'u zorunludur?",
            "answer": "React, key prop'u kullanarak liste elemanlarını tanımlar ve DOM güncellemelerini optimize eder. key olmazsa konsol uyarısı alınır ve performans düşer."
          },
          {
            "q": "JSX içinde if/else kullanılamaz, bunun yerine ne kullanılır?",
            "answer": "Üçlü operatör (koşul ? a : b), kısa devre değerlendirme (koşul && element) veya erken return kullanılır."
          }
        ],
        "quiz": [
          {
            "q": "React'te list render ederken her elemana verilmesi gereken prop hangisidir?",
            "options": [
              "id",
              "name",
              "key",
              "index"
            ],
            "correct": 2,
            "explanation": "key prop'u React'in her liste elemanını benzersiz olarak tanımasını sağlar. Mümkünse dizi indeksi yerine gerçek ID kullanılmalıdır."
          },
          {
            "q": "JSX içinde {koşul && <Component />} ifadesi ne anlama gelir?",
            "options": [
              "Her zaman Component'i render eder",
              "koşul true ise Component render edilir",
              "koşul false ise Component render edilir",
              "Hata verir"
            ],
            "correct": 1,
            "explanation": "&& (kısa devre) değerlendirmesi: sol taraf true ise sağ taraf evaluate edilir ve render edilir. false ise hiçbir şey render edilmez."
          },
          {
            "q": "Array.map() ile Array.forEach() arasındaki temel fark nedir?",
            "options": [
              "map daha hızlıdır",
              "map yeni dizi döndürür, forEach döndürmez",
              "forEach daha güvenlidir",
              "Aralarında fark yoktur"
            ],
            "correct": 1,
            "explanation": "map() dönüşüm yaparak yeni bir dizi döndürür. forEach() ise yan etki için kullanılır, yeni dizi döndürmez. React'te render için map() kullanılır."
          },
          {
            "q": "map() yerine forEach() kullanılırsa?",
            "options": [
              "Aynı sonuç",
              "JSX render edilmez",
              "Daha hızlı",
              "Hata fırlatılır"
            ],
            "correct": 1,
            "explanation": "forEach() undefined döndürür. JSX için map() kullanılmalıdır."
          },
          {
            "q": "key olarak dizi indeksi riski?",
            "options": [
              "Riski yok",
              "Yanlış elemanlar güncellenebilir",
              "TypeScript hata verir",
              "Performans artar"
            ],
            "correct": 1,
            "explanation": "İndeksler kayar, React yanlış eşleştirme yapabilir."
          }
        ]
      }
    ]
  },
  {
    "id": "props",
    "title": "Props & Bileşenler",
    "color": "bg-blue-500",
    "bgColor": "bg-blue-50",
    "textColor": "text-blue-600",
    "activeBg": "bg-blue-100",
    "activeText": "text-blue-700",
    "topics": [
      {
        "id": "props-temel",
        "title": "Props — Temel Kullanım",
        "group": "props",
        "explanation": [
          "Props (properties), React bileşenlerine dışarıdan veri aktarmanın temel yoludur. Ebeveyn bileşenden çocuk bileşene tek yönlü akar ve çocuk bileşen tarafından değiştirilemez (read-only).",
          "TypeScript ile props tanımlamak için type alias veya interface kullanılır. ? ile opsiyonel, = ile default değer belirtilir.",
          "Props destructuring ile okunabilir kod yazılır. React.FC<Props> generic tipini kullanmak veya fonksiyon parametresinde doğrudan tip vermek iki geçerli yöntemdir."
        ],
        "tip": "Props'u tanımlarken önce zorunlu alanları (? işaretsiz), sonra opsiyonel alanları (?) yazın. Bu alışkanlık, bileşeni kullananlar için hangi alanların zorunlu olduğunu açıkça gösterir.",
        "examples": [
          {
            "label": "Temel Props",
            "tip": "Renk gibi union literal tipler, IDE'nin otomatik tamamlamasını devreye sokar. Yanlış değer girilirse TypeScript derleme hatası verir — bu, runtime hataların önüne geçer.",
            "code": "// Type alias ile props tanımı\ntype KartProps = {\n  baslik: string;\n  aciklama: string;\n  renk?: \"mavi\" | \"yesil\" | \"kirmizi\"; // opsiyonel\n  tiklandi: () => void;\n};\n\nconst Kart: React.FC<KartProps> = ({\n  baslik,\n  aciklama,\n  renk = \"mavi\", // default değer\n  tiklandi,\n}) => {\n  const renkMap = {\n    mavi: \"bg-blue-100 border-blue-300\",\n    yesil: \"bg-green-100 border-green-300\",\n    kirmizi: \"bg-red-100 border-red-300\",\n  };\n\n  return (\n    <div className={`border rounded-xl p-4 ${renkMap[renk]}`}>\n      <h3 className=\"font-bold\">{baslik}</h3>\n      <p>{aciklama}</p>\n      <button onClick={tiklandi}>Detay</button>\n    </div>\n  );\n};\n\n// Kullanım\n<Kart\n  baslik=\"React Nedir?\"\n  aciklama=\"UI kütüphanesi\"\n  renk=\"yesil\"\n  tiklandi={() => console.log(\"tıklandı\")}\n/>"
          },
          {
            "label": "Destructuring & Defaults",
            "tip": "Karmaşık prop yapılarında nested destructuring kullanabilirsiniz. urun: { id, ad, fiyat } doğrudan nesnenin içini açar. Okunabilirlik artar ve ayrı değişken tanımlamanıza gerek kalmaz.",
            "code": "// Karmaşık prop yapısı — nested destructuring\ntype UrunKartProps = {\n  urun: {\n    id: number;\n    ad: string;\n    fiyat: number;\n    stok: number;\n  };\n  onSatinAl: (id: number) => void;\n  vurgula?: boolean;\n  para?: string;\n};\n\nconst UrunKart: React.FC<UrunKartProps> = ({\n  urun: { id, ad, fiyat, stok }, // nested destructuring\n  onSatinAl,\n  vurgula = false,\n  para = \"₺\",\n}) => {\n  // Derived: state'e gerek yok, render sırasında hesapla\n  const stokDurumu =\n    stok === 0 ? \"Tükendi\" : stok < 5 ? \"Az kaldı\" : \"Mevcut\";\n\n  return (\n    <div\n      className={`border rounded-xl p-4 ${\n        vurgula ? \"border-indigo-400 bg-indigo-50\" : \"border-slate-200\"\n      }`}\n    >\n      <h3 className=\"font-bold\">{ad}</h3>\n      <p className=\"text-slate-500 text-sm\">{stokDurumu}</p>\n      <div className=\"flex items-center justify-between mt-3\">\n        <span className=\"text-lg font-bold\">\n          {para}{fiyat}\n        </span>\n        <button\n          onClick={() => onSatinAl(id)}\n          disabled={stok === 0}\n          className=\"bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm disabled:opacity-50\"\n        >\n          Satın Al\n        </button>\n      </div>\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "Props neden read-only (salt okunur) olarak tasarlanmıştır?",
            "answer": "Props tek yönlü veri akışını sağlar. Çocuk bileşenin props'u değiştirememesi, uygulamanın durumunun öngörülebilir ve izlenebilir kalmasını sağlar."
          },
          {
            "q": "Opsiyonel prop ile default değerli prop arasındaki fark nedir? Örnek verin.",
            "answer": "? ile işaretlenen prop tanımlanmadan geçilebilir (undefined olur). Default değer ise tanımlanmazsa fallback değeri kullanır: renk = 'mavi' gibi."
          }
        ],
        "quiz": [
          {
            "q": "Props'un yönü nasıldır?",
            "options": [
              "Çocuktan ebeveyne",
              "Ebeveynden çocuğa",
              "Her iki yönde",
              "Rastgele"
            ],
            "correct": 1,
            "explanation": "React'te veri akışı tek yönlüdür: ebeveynden çocuğa. Bu 'unidirectional data flow' olarak bilinir."
          },
          {
            "q": "TypeScript'te opsiyonel prop nasıl tanımlanır?",
            "options": [
              "prop: string | undefined",
              "prop?: string",
              "optional prop: string",
              "prop = string"
            ],
            "correct": 1,
            "explanation": "? operatörü prop'u opsiyonel yapar. Bu, prop'un string | undefined tipinde olduğunu belirtir."
          },
          {
            "q": "Aşağıdakilerden hangisi geçerli bir props destructuring örneğidir?",
            "options": [
              "const C = (props) => props.name",
              "const C = ({ name }: { name: string }) => name",
              "const C = [name] => name",
              "const C = <name> => name"
            ],
            "correct": 1,
            "explanation": "Destructuring ile props nesnesinden doğrudan değerler alınır, aynı anda tip de belirtilebilir."
          },
          {
            "q": "Prop drilling nedir?",
            "options": [
              "Yanlış tip",
              "Birçok ara bileşenden geçirme",
              "Değiştirme",
              "Silme"
            ],
            "correct": 1,
            "explanation": "Context API ile çözülen veri aktarma sorunudur."
          },
          {
            "q": "Default prop değeri nasıl tanımlanır?",
            "options": [
              "defaultProps",
              "Destructuring'de = ile",
              "null yaparak",
              "TypeScript ile"
            ],
            "correct": 1,
            "explanation": "({ renk = 'mavi' }) şeklinde default değer verilir."
          }
        ]
      },
      {
        "id": "props-ornekler",
        "title": "Props — İleri Örnekler",
        "group": "props",
        "explanation": [
          "Children prop'u bileşenin etiketleri arasına yazılan içeriği temsil eder. React.ReactNode tipiyle tanımlanır ve bileşeni wrapper olarak kullanmayı mümkün kılar.",
          "Fonksiyon prop'ları (callback props) ile çocuk bileşenler olayları ebeveyne iletebilir. Bu pattern lifting state up olarak bilinir.",
          "Props spreading (...props) tüm prop'ları alt bileşene iletmenin kısa yoludur. Ancak dikkatli kullanılmazsa gereksiz prop'ların geçmesine yol açabilir."
        ],
        "tip": "Callback prop'larını daraltın (narrow): onSave: (id: number) => void yerine genel onSave: () => void yazmayın. Daraltılmış tipler, hangi verinin iletildiğini açıkça belirtir ve kullanım hatalarını önler.",
        "examples": [
          {
            "label": "Children & Callback Props",
            "tip": "'Lifting state up' React'in temel veri akışı desenidir. State'i iki kardeş bileşenden en yakın ortak ebeveyne taşıyın ve callback prop ile aşağıya iletin.",
            "code": "// Children prop\ntype KartProps = {\n  baslik: string;\n  children: React.ReactNode;\n};\n\nconst Kart: React.FC<KartProps> = ({ baslik, children }) => (\n  <div className=\"border rounded-xl p-4\">\n    <h3 className=\"font-bold mb-2\">{baslik}</h3>\n    {children}\n  </div>\n);\n\n// Callback prop ile state lifting\ntype SayacProps = {\n  deger: number;\n  onArtir: () => void;\n  onAzalt: () => void;\n};\n\nconst Sayac: React.FC<SayacProps> = ({ deger, onArtir, onAzalt }) => (\n  <div>\n    <button onClick={onAzalt}>-</button>\n    <span>{deger}</span>\n    <button onClick={onArtir}>+</button>\n  </div>\n);\n\n// State ebeveyinde tutulur\nconst Uygulama: React.FC = () => {\n  const [sayi, setSayi] = useState(0);\n  return (\n    <Kart baslik=\"Sayac Örneği\">\n      <Sayac\n        deger={sayi}\n        onArtir={() => setSayi(s => s + 1)}\n        onAzalt={() => setSayi(s => s - 1)}\n      />\n    </Kart>\n  );\n};"
          },
          {
            "label": "Render Props Deseni",
            "tip": "Render props, bileşen mantığını paylaşmanın güçlü bir yoludur. children prop'u fonksiyon olarak kullanılır. Mantık → render ayrımı sağlanır. Custom hook'lar bu desenin modern alternatifidir.",
            "code": "// Render Props deseni — mantık bileşeni, render dışarıya bırakılır\ntype VeriListesiProps<T> = {\n  veri: T[];\n  bos: React.ReactNode;\n  render: (item: T, index: number) => React.ReactNode;\n};\n\n// Generic bileşen — T herhangi bir tip olabilir\nfunction VeriListesi<T>({ veri, bos, render }: VeriListesiProps<T>) {\n  if (veri.length === 0) return <>{bos}</>;\n  return (\n    <ul className=\"space-y-2\">\n      {veri.map((item, i) => render(item, i))}\n    </ul>\n  );\n}\n\n// Kullanım — render prop ile farklı görünüm\ntype Urun = { id: number; ad: string; fiyat: number };\nconst urunler: Urun[] = [\n  { id: 1, ad: \"Kitap\", fiyat: 120 },\n  { id: 2, ad: \"Kalem\", fiyat: 15 },\n];\n\nconst App: React.FC = () => (\n  <VeriListesi\n    veri={urunler}\n    bos={<p className=\"text-slate-400\">Ürün bulunamadı.</p>}\n    render={(urun, i) => (\n      <li\n        key={urun.id}\n        className=\"flex justify-between p-3 bg-slate-50 rounded-lg\"\n      >\n        <span>{urun.ad}</span>\n        <span className=\"font-semibold\">{urun.fiyat}₺</span>\n      </li>\n    )}\n  />\n);"
          }
        ],
        "practice": [
          {
            "q": "children prop'u hangi durumlarda kullanışlıdır? Örnek verin.",
            "answer": "Modal, Card, Layout gibi wrapper bileşenler için kullanışlıdır. İçerik esnek tutulur: <Modal><FormComponent /></Modal> gibi."
          },
          {
            "q": "'Lifting state up' ne demektir? Neden gereklidir?",
            "answer": "İki kardeş bileşenin aynı state'e ihtiyacı olduğunda, state ortak ebeveyne taşınır ve callback prop'larla aşağıya iletilir."
          }
        ],
        "quiz": [
          {
            "q": "React.ReactNode ile React.ReactElement arasındaki fark nedir?",
            "options": [
              "Aynı şeydir",
              "ReactNode daha dar kapsamlıdır",
              "ReactNode string/null/array dahil her şeyi içerir",
              "ReactElement daha geniştir"
            ],
            "correct": 2,
            "explanation": "ReactNode; ReactElement, string, number, null, undefined ve bunların dizilerini içerir. ReactElement yalnızca JSX elementleridir."
          },
          {
            "q": "Aşağıdakilerden hangisi callback prop örneğidir?",
            "options": [
              "title: string",
              "onSave: () => void",
              "children: ReactNode",
              "style: CSSProperties"
            ],
            "correct": 1,
            "explanation": "onSave: () => void bir fonksiyon prop'udur. Çocuk bileşen bu fonksiyonu çağırarak ebeveyne event bildirir."
          },
          {
            "q": "Props spreading {...props} ne işe yarar?",
            "options": [
              "Prop'ları siler",
              "Tüm prop'ları alt bileşene iletir",
              "Prop'ları klonlar",
              "State oluşturur"
            ],
            "correct": 1,
            "explanation": "Spread operatörü nesnenin tüm özelliklerini ayrı ayrı iletir. <Button {...buttonProps} /> ifadesi buttonProps nesnesindeki tüm prop'ları Button'a verir."
          },
          {
            "q": "Render props yerine ne kullanılır?",
            "options": [
              "HOC",
              "Custom Hooks",
              "Redux",
              "Class"
            ],
            "correct": 1,
            "explanation": "Custom hooks modern ve okunabilir alternatiftir."
          },
          {
            "q": "children tipi ne olmalıdır?",
            "options": [
              "string",
              "JSX.Element",
              "React.ReactNode",
              "HTMLElement"
            ],
            "correct": 2,
            "explanation": "ReactNode en geniş ve doğru tiptir."
          }
        ]
      },
      {
        "id": "state-yonetimi",
        "title": "State Yönetimi",
        "group": "props",
        "explanation": [
          "State, bileşenin zaman içinde değişebilen iç verisidir. State değiştiğinde React bileşeni yeniden render eder. Props'tan farkı: state bileşenin kendisine aittir ve değiştirilebilir.",
          "React'te state yönetimi birkaç seviyede ele alınır: local state (useState), ortak state (lifting up / Context), ve global state (Context API, Redux, Zustand).",
          "State güncellemesi asenkrondur. Önceki state'e bağlı güncellemelerde fonksiyonel form (setState(prev => prev + 1)) kullanmak güvenlidir ve yarış koşullarını önler."
        ],
        "tip": "State'i olabildiğince küçük tutun — sadece minimum gerekli veriyi saklayın. Hesaplanabilen değerleri (toplam, filtre sonucu vs.) state'e koymak yerine render sırasında hesaplayın. Buna 'derived state' denir.",
        "examples": [
          {
            "label": "State Temelleri",
            "tip": "Nesne state güncellemesinde spread (...önceki) şarttır. React nesneyi klonlamaz, yeni referansla değiştirir. Spread olmadan diğer alanlar kaybolur.",
            "code": "import { useState } from \"react\";\n\n// Tek değer state\nconst [sayi, setSayi] = useState<number>(0);\n\n// Nesne state\ntype Form = { ad: string; soyad: string };\nconst [form, setForm] = useState<Form>({ ad: \"\", soyad: \"\" });\n\n// Nesne state güncellemesi (spread ile birleştirme)\nconst adGuncelle = (yeniAd: string) => {\n  setForm(onceki => ({ ...onceki, ad: yeniAd }));\n};\n\n// Dizi state\nconst [liste, setListe] = useState<string[]>([]);\n\nconst ekle = (item: string) => {\n  setListe(onceki => [...onceki, item]);\n};\n\nconst sil = (index: number) => {\n  setListe(onceki => onceki.filter((_, i) => i !== index));\n};"
          },
          {
            "label": "CRUD State Yönetimi",
            "tip": "Dizi state'inde mutasyon (push, splice, sort) yapmayın — her zaman yeni dizi döndürün. React shallow comparison ile değişikliği algılar; mutasyon referansı korur, re-render tetiklenmez.",
            "code": "import { useState } from \"react\";\n\ntype Gorev = { id: number; metin: string; tamamlandi: boolean };\n\nconst GorevListesi: React.FC = () => {\n  const [gorevler, setGorevler] = useState<Gorev[]>([]);\n  const [yeniGorev, setYeniGorev] = useState(\"\");\n\n  // Ekle — spread ile yeni dizi\n  const ekle = () => {\n    if (!yeniGorev.trim()) return;\n    setGorevler(prev => [\n      ...prev,\n      { id: Date.now(), metin: yeniGorev, tamamlandi: false },\n    ]);\n    setYeniGorev(\"\");\n  };\n\n  // Toggle — map ile güncelleme (yeni dizi döndürür)\n  const toggle = (id: number) =>\n    setGorevler(prev =>\n      prev.map(g => g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g)\n    );\n\n  // Sil — filter ile çıkarma\n  const sil = (id: number) =>\n    setGorevler(prev => prev.filter(g => g.id !== id));\n\n  // Derived state — state'ten hesaplanan değer\n  const tamamlananSayisi = gorevler.filter(g => g.tamamlandi).length;\n\n  return (\n    <div>\n      <p className=\"text-sm text-slate-500 mb-2\">\n        {tamamlananSayisi}/{gorevler.length} tamamlandı\n      </p>\n      <div className=\"flex gap-2 mb-3\">\n        <input\n          value={yeniGorev}\n          onChange={e => setYeniGorev(e.target.value)}\n          placeholder=\"Yeni görev\"\n          className=\"border rounded px-2 py-1\"\n        />\n        <button onClick={ekle} className=\"bg-blue-500 text-white px-3 py-1 rounded\">\n          Ekle\n        </button>\n      </div>\n      {gorevler.map(g => (\n        <div key={g.id} className=\"flex items-center gap-2 py-1\">\n          <input\n            type=\"checkbox\"\n            checked={g.tamamlandi}\n            onChange={() => toggle(g.id)}\n          />\n          <span className={g.tamamlandi ? \"line-through text-slate-400\" : \"\"}>\n            {g.metin}\n          </span>\n          <button onClick={() => sil(g.id)} className=\"text-red-400 ml-auto text-sm\">\n            Sil\n          </button>\n        </div>\n      ))}\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "Neden state güncellemesinde setState(prev => prev + 1) kullanmak, setState(state + 1) yerine daha güvenlidir?",
            "answer": "React, state güncellemelerini birleştirebilir (batch). Fonksiyonel form her zaman en güncel prev değerini garanti eder. Closure problemi olmaz."
          },
          {
            "q": "Nesne state güncellemesinde neden spread (...) kullanılır?",
            "answer": "React nesneyi tamamen değiştirir, merge etmez. Spread ile mevcut alanlar korunur, sadece değişen alan güncellenir: {...onceki, ad: yeniAd}"
          }
        ],
        "quiz": [
          {
            "q": "State değiştiğinde ne olur?",
            "options": [
              "Sayfa tamamen yenilenir",
              "Bileşen yeniden render edilir",
              "Uygulama sıfırlanır",
              "Hiçbir şey olmaz"
            ],
            "correct": 1,
            "explanation": "State değişikliği React'e bileşenin güncellenmesi gerektiğini bildirir. React, Virtual DOM farkını hesaplayarak minimum DOM güncellemesi yapar."
          },
          {
            "q": "useState<string[]>([]) ile ne tanımlanmış olur?",
            "options": [
              "Boş nesne",
              "String tipinde tek değer",
              "Başlangıçta boş bir string dizisi",
              "Undefined değeri"
            ],
            "correct": 2,
            "explanation": "useState'e generic tip olarak string[] verilmiş ve başlangıç değeri olarak boş dizi ([]) atanmıştır."
          },
          {
            "q": "Local state ile global state arasındaki temel fark nedir?",
            "options": [
              "Local state daha hızlıdır",
              "Local state sadece o bileşene aittir, global state uygulama genelinde paylaşılır",
              "Global state sadece hooks ile kullanılır",
              "Aralarında fark yoktur"
            ],
            "correct": 1,
            "explanation": "Local state useState ile yönetilir ve yalnızca o bileşen ile alt bileşenleri etkiler. Global state (Context, Redux) tüm uygulamaya açıktır."
          },
          {
            "q": "State neden asenkron güncellenir?",
            "options": [
              "JS asenkron",
              "Batch'leyerek performans artırır",
              "API'den gelir",
              "TypeScript kısıtlaması"
            ],
            "correct": 1,
            "explanation": "React setState'leri birleştirerek tek re-render ile işler."
          },
          {
            "q": "Immutability neden önemli?",
            "options": [
              "JS zorunlu kılar",
              "React shallow comparison yapar",
              "Sadece TS'te",
              "Önemli değil"
            ],
            "correct": 1,
            "explanation": "Mutasyon referansı değiştirmez, güncelleme fark edilmez."
          }
        ]
      }
    ]
  },
  {
    "id": "temel-hooks",
    "title": "Temel Hooks",
    "color": "bg-violet-500",
    "bgColor": "bg-violet-50",
    "textColor": "text-violet-600",
    "activeBg": "bg-violet-100",
    "activeText": "text-violet-700",
    "topics": [
      {
        "id": "usestate",
        "title": "useState Hook",
        "group": "temel-hooks",
        "explanation": [
          "useState, fonksiyonel bileşenlere state eklemenin temel yoludur. [deger, setDeger] = useState(baslangic) şeklinde kullanılır. TypeScript ile generic tip eklenebilir.",
          "State başlangıç değeri sadece ilk render'da kullanılır. Başlangıç hesaplaması pahalıysa lazy initialization (fonksiyon geçme) kullanılır: useState(() => hesapla())",
          "Union tip state'ler React'te çok yaygındır: useState<'idle' | 'loading' | 'error'> gibi. Bu tip belirli string değerleriyle kısıtlama sağlar ve switch/if dallarını kapsamlı kılar."
        ],
        "tip": "useState'i birden fazla ilişkili state için kullanıyorsanız, bunları tek bir nesne state'e birleştirmeyi düşünün. Ancak bağımsız parçalar (farklı hızda güncellenenler) ayrı useState'te kalmalı — bu re-render optimizasyonunu kolaylaştırır.",
        "examples": [
          {
            "label": "useState Temelleri",
            "tip": "useState'e generic tip vermek zorunlu değildir — TypeScript başlangıç değerinden tipi çıkarır. Ancak complex tipler ve null başlangıç için explicit generic gerekir: useState<Kullanici | null>(null)",
            "code": "import { useState } from \"react\";\n\n// Temel kullanım\nconst [sayi, setSayi] = useState<number>(0);\nconst [metin, setMetin] = useState<string>(\"\");\nconst [acik, setAcik] = useState<boolean>(false);\n\n// Union type state (API durumu için idealdir)\ntype Durum = \"bekliyor\" | \"yukleniyor\" | \"basarili\" | \"hata\";\nconst [durum, setDurum] = useState<Durum>(\"bekliyor\");\n\n// Lazy initialization (pahalı hesaplama — sadece bir kez çalışır)\nconst [liste, setListe] = useState<number[]>(() => {\n  return Array.from({ length: 10 }, (_, i) => i * i);\n});\n\n// Nesne state + parçalı güncelleme\ntype Kullanici = { ad: string; yas: number; aktif: boolean };\nconst [kullanici, setKullanici] = useState<Kullanici>({\n  ad: \"Emirhan\",\n  yas: 20,\n  aktif: true,\n});\n\n// Sadece 'ad' değiştirilir, diğerleri korunur\nconst adGuncelle = (yeniAd: string) =>\n  setKullanici(onceki => ({ ...onceki, ad: yeniAd }));"
          },
          {
            "label": "Toggle & Multi-state",
            "tip": "Boolean state geçişlerinde setter'ı fonksiyonel formda kullanın: setAcik(prev => !prev). Doğrudan !acik yerine bu form, batch güncelleme sırasında en güncel değeri garanti eder.",
            "code": "import { useState } from \"react\";\n\n// Yeniden kullanılabilir toggle hook\nfunction useToggle(baslangic = false): [boolean, () => void] {\n  const [deger, setDeger] = useState(baslangic);\n  const toggle = () => setDeger(prev => !prev); // fonksiyonel form\n  return [deger, toggle];\n}\n\n// Multi-state: birden fazla ilişkili değer\ntype Modal = { acik: boolean; tip: \"bilgi\" | \"uyari\" | \"hata\"; mesaj: string };\n\nconst ModalOrnek: React.FC = () => {\n  const [modal, setModal] = useState<Modal>({\n    acik: false,\n    tip: \"bilgi\",\n    mesaj: \"\",\n  });\n  const [karanlik, toggleKaranlik] = useToggle(false);\n\n  const modalAc = (tip: Modal[\"tip\"], mesaj: string) =>\n    setModal({ acik: true, tip, mesaj });\n\n  const modalKapat = () =>\n    setModal(prev => ({ ...prev, acik: false }));\n\n  const renkler: Record<Modal[\"tip\"], string> = {\n    bilgi: \"bg-blue-50 text-blue-800\",\n    uyari: \"bg-yellow-50 text-yellow-800\",\n    hata: \"bg-red-50 text-red-800\",\n  };\n\n  return (\n    <div className={karanlik ? \"bg-slate-900 text-white p-4 rounded\" : \"p-4\"}>\n      <button onClick={toggleKaranlik} className=\"mr-2 px-3 py-1 border rounded\">\n        Tema Değiştir\n      </button>\n      <button onClick={() => modalAc(\"bilgi\", \"İşlem başarılı!\")}\n        className=\"mr-2 px-3 py-1 bg-blue-500 text-white rounded\">\n        Bilgi\n      </button>\n      {modal.acik && (\n        <div className={`mt-3 p-3 rounded ${renkler[modal.tip]}`}>\n          <p>{modal.mesaj}</p>\n          <button onClick={modalKapat} className=\"mt-2 text-sm underline\">\n            Kapat\n          </button>\n        </div>\n      )}\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "useState(() => hesapla()) ile useState(hesapla()) arasındaki fark nedir?",
            "answer": "Fonksiyon geçilince (lazy init) sadece ilk render'da çalışır. Doğrudan çağrılırsa her render'da çalışır. Pahalı işlemler için lazy init tercih edilmeli."
          },
          {
            "q": "useState'in dönüş değeri olan [deger, setDeger]'i TypeScript ile nasıl tiplersiniz?",
            "answer": "useState<number>(0) şeklinde generic tip verilir. TypeScript, deger'i number ve setDeger'i Dispatch<SetStateAction<number>> olarak çıkarım yapar."
          }
        ],
        "quiz": [
          {
            "q": "useState hangi değerleri döndürür?",
            "options": [
              "Sadece değeri",
              "Sadece setter fonksiyonu",
              "[mevcut değer, setter fonksiyonu]",
              "{value, setValue} nesnesi"
            ],
            "correct": 2,
            "explanation": "useState bir tuple döndürür: [mevcut değer, state güncelleyici fonksiyon]. Destructuring ile isimlendirilir."
          },
          {
            "q": "setDeger(5) ile setDeger(prev => prev + 1) arasındaki fark ne zaman önemlidir?",
            "options": [
              "Hiçbir zaman fark yoktur",
              "Batch güncelleme durumlarında fonksiyonel form daha güvenlidir",
              "Sadece async fonksiyonlarda fark var",
              "Nesne state'lerinde önemlidir"
            ],
            "correct": 1,
            "explanation": "React state güncellemelerini birleştirebilir. Fonksiyonel form (prev => ...) her zaman en güncel değeri garanti eder."
          },
          {
            "q": "useState ile yönetilen state, hangi bileşen yaşam döngüsüne bağlıdır?",
            "options": [
              "Uygulamanın tüm ömrüne",
              "Yalnızca bileşenin mount edildiği süreye",
              "Global state süresine",
              "Render sayısına"
            ],
            "correct": 1,
            "explanation": "useState state'i bileşen unmount edildiğinde sıfırlanır. Bileşen ağaçtan kaldırılıp yeniden eklenince başlangıç değerine döner."
          },
          {
            "q": "useState<User|null>(null) amacı?",
            "options": [
              "Performans",
              "Tip güvenli null başlangıç",
              "null zorunlu",
              "Hata önleme"
            ],
            "correct": 1,
            "explanation": "API verisi beklerken null, sonra nesne alacak state tanımlar."
          },
          {
            "q": "Yanlış useState kullanımı?",
            "options": [
              "useState('merhaba')",
              "useState(() => hesapla())",
              "useState(async () => fetch(...))",
              "useState(false)"
            ],
            "correct": 2,
            "explanation": "useState'e async fonksiyon geçilemez. Lazy initializer senkron olmalıdır."
          }
        ]
      },
      {
        "id": "useeffect",
        "title": "useEffect Hook",
        "group": "temel-hooks",
        "explanation": [
          "useEffect, render sonrası yan etkileri (API çağrısı, event listener, timer, DOM manipülasyonu) yönetmek için kullanılır. Bileşenin dışarıyla iletişim kapısıdır.",
          "Dependency array (bağımlılık dizisi) useEffect'in ne zaman çalışacağını belirler: boş [] yalnızca mount'ta, [deger] deger değiştiğinde, dizi yoksa her render'da çalışır.",
          "Cleanup fonksiyonu useEffect'ten döndürülür. Bileşen unmount olduğunda veya effect yeniden çalışmadan önce çağrılır. Memory leak'leri, dangling listener'ları önler."
        ],
        "tip": "useEffect'e async fonksiyon doğrudan verilmez: useEffect(async () => {}) yazmak yanlış. Bunun yerine effect içinde async bir iç fonksiyon tanımlayıp çağırın. React, effect'in cleanup için senkron fonksiyon dönmesini bekler.",
        "examples": [
          {
            "label": "useEffect Temelleri",
            "tip": "Race condition önlemek için 'let iptal = false' + cleanup pattern şarttır. AbortController da modern bir alternatiftir: fetch'i abort ederek ağ isteğini tamamen iptal eder.",
            "code": "import { useState, useEffect } from \"react\";\n\n// 1) Sadece mount'ta çalışır (boş bağımlılık)\nuseEffect(() => {\n  console.log(\"Bileşen mount edildi\");\n  return () => console.log(\"Unmount\"); // cleanup\n}, []);\n\n// 2) Bağımlılık değişince çalışır — debounce örneği\nconst [arama, setArama] = useState(\"\");\nuseEffect(() => {\n  if (!arama) return;\n  const timeout = setTimeout(() => {\n    console.log(\"API çağrısı:\", arama);\n  }, 500);\n  return () => clearTimeout(timeout); // cleanup: önceki timer'ı iptal et\n}, [arama]);\n\n// 3) API veri çekme — race condition korumalı\ntype Post = { id: number; title: string };\nconst [posts, setPosts] = useState<Post[]>([]);\n\nuseEffect(() => {\n  let iptal = false; // bileşen unmount olursa state güncelleme\n  fetch(\"https://jsonplaceholder.typicode.com/posts?_limit=3\")\n    .then(r => r.json())\n    .then(data => { if (!iptal) setPosts(data); });\n  return () => { iptal = true; }; // cleanup\n}, []);"
          },
          {
            "label": "Custom Hook ile useEffect",
            "tip": "useEffect mantığını custom hook'a çıkarmak hem test edilebilirliği artırır hem de aynı side effect'i birden fazla bileşende yeniden kullanmanızı sağlar. useDebounce, useLocalStorage gibi hook'lar en yaygın örneklerdir.",
            "code": "import { useState, useEffect } from \"react\";\n\n// Custom hook — debounce mantığı dışarı çıkarıldı\nfunction useDebounce<T>(deger: T, gecikme: number): T {\n  const [debounceDeger, setDebounceDeger] = useState(deger);\n\n  useEffect(() => {\n    // gecikme ms sonra güncelle\n    const timer = setTimeout(() => setDebounceDeger(deger), gecikme);\n    // deger değişirse önceki timer iptal edilir — cleanup\n    return () => clearTimeout(timer);\n  }, [deger, gecikme]);\n\n  return debounceDeger;\n}\n\n// Custom hook — pencere boyutunu takip et\nfunction usePencereBoyutu() {\n  const [boyut, setBoyut] = useState({\n    genislik: window.innerWidth,\n    yukseklik: window.innerHeight,\n  });\n\n  useEffect(() => {\n    const handler = () =>\n      setBoyut({ genislik: window.innerWidth, yukseklik: window.innerHeight });\n    window.addEventListener(\"resize\", handler);\n    return () => window.removeEventListener(\"resize\", handler); // cleanup\n  }, []); // boş bağımlılık: sadece mount/unmount'ta çalışır\n\n  return boyut;\n}\n\n// Kullanım\nconst Arama: React.FC = () => {\n  const [aramaMetni, setAramaMetni] = useState(\"\");\n  const debouncedArama = useDebounce(aramaMetni, 400); // 400ms bekle\n  const { genislik } = usePencereBoyutu();\n\n  useEffect(() => {\n    if (debouncedArama) console.log(\"API çağrısı:\", debouncedArama);\n  }, [debouncedArama]);\n\n  return (\n    <div>\n      <p className=\"text-xs text-slate-400 mb-2\">Ekran: {genislik}px</p>\n      <input\n        value={aramaMetni}\n        onChange={e => setAramaMetni(e.target.value)}\n        placeholder=\"Ara...\"\n        className=\"border rounded px-3 py-1.5\"\n      />\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "useEffect'in bağımlılık dizisi olmadan kullanılması ne sorun çıkarabilir?",
            "answer": "Her render'da tetiklenir. Sonsuz döngüye girebilir (effect içinde state güncelleniyorsa). ESLint exhaustive-deps kuralı bu durumu uyarır."
          },
          {
            "q": "API çağrısında 'let iptal = false' pattern'i neden kullanılır?",
            "answer": "Bileşen unmount olduğunda veya effect yeniden tetiklendiğinde tamamlanmamış asenkron işlemin sonucunun state'e yazılmasını engeller (stale closure / race condition)."
          }
        ],
        "quiz": [
          {
            "q": "useEffect'in dependency array'i [] (boş) olursa ne zaman çalışır?",
            "options": [
              "Her render'da",
              "Sadece ilk render'da (mount)",
              "Hiçbir zaman",
              "Sadece unmount'ta"
            ],
            "correct": 1,
            "explanation": "Boş bağımlılık dizisi useEffect'in yalnızca bileşen ilk kez render edildiğinde çalışmasını sağlar. componentDidMount eşdeğeridir."
          },
          {
            "q": "useEffect cleanup fonksiyonu ne zaman çağrılır?",
            "options": [
              "Sadece bileşen unmount olunca",
              "Bileşen mount olunca",
              "Bileşen unmount olunca ve effect yeniden çalışmadan önce",
              "Her render'dan önce"
            ],
            "correct": 2,
            "explanation": "Cleanup fonksiyonu iki durumda çalışır: bileşen unmount edildiğinde ve bağımlılık değiştiğinde yeni effect çalışmadan önce."
          },
          {
            "q": "Hangisi useEffect'in doğru kullanım amacıdır?",
            "options": [
              "Props hesaplamak",
              "Event handler tanımlamak",
              "API çağrısı yapmak",
              "JSX döndürmek"
            ],
            "correct": 2,
            "explanation": "useEffect side effect'ler içindir: API çağrısı, event listener, subscription, timer, DOM manipülasyonu gibi işlemler."
          },
          {
            "q": "useEffect'e async verilirse?",
            "options": [
              "Normal çalışır",
              "Promise döndürür, uyarı verir",
              "Derleme hatası",
              "Çöker"
            ],
            "correct": 1,
            "explanation": "Effect içinde async iç fonksiyon tanımlanmalıdır."
          },
          {
            "q": "Race condition nasıl önlenir?",
            "options": [
              "İki render",
              "Flag veya AbortController ile",
              "CSS",
              "Tip çakışması"
            ],
            "correct": 1,
            "explanation": "'let cancelled = false' flag'i eski yanıtları yoksayar."
          }
        ]
      },
      {
        "id": "usecontext",
        "title": "useContext Hook",
        "group": "temel-hooks",
        "explanation": [
          "Context API, bileşen ağacındaki her seviyeye manuel prop geçmeden (prop drilling) veri paylaşmayı sağlar. Theme, dil, auth bilgisi gibi global veriler için idealdir.",
          "createContext ile bir context oluşturulur. Provider ile değer ağaca enjekte edilir. useContext ile herhangi bir alt bileşenden değer okunur.",
          "TypeScript ile context kullanımında undefined guard gereklidir: context Provider dışında kullanılırsa hata fırlatılır. Custom hook pattern (useTheme gibi) bu kontrolü merkezleştirir."
        ],
        "tip": "Context'i çok geniş tutmaktan kaçının. Tüm uygulama state'ini tek bir context'e koymak gereksiz yeniden render'a yol açar. Tema için ayrı, auth için ayrı, kullanıcı ayarları için ayrı context'ler oluşturun.",
        "examples": [
          {
            "label": "useContext Temelleri",
            "tip": "Provider'ın value prop'u her render'da yeni nesne oluşturmamasına dikkat edin. useMemo ile value'yu memoize etmek, gereksiz re-render'ı önler.",
            "code": "import { createContext, useContext, useState } from \"react\";\n\n// 1) Context tipi ve oluşturma\ntype Tema = \"aydinlik\" | \"karanlik\";\ntype TemaCtx = { tema: Tema; temaDegistir: () => void };\n\nconst TemaContext = createContext<TemaCtx | undefined>(undefined);\n\n// 2) Custom hook (undefined guard ile)\nexport const useTema = () => {\n  const ctx = useContext(TemaContext);\n  if (!ctx) throw new Error(\"useTema, TemaProvider içinde kullanılmalı\");\n  return ctx;\n};\n\n// 3) Provider bileşeni\nexport const TemaProvider: React.FC<{ children: React.ReactNode }> = ({\n  children,\n}) => {\n  const [tema, setTema] = useState<Tema>(\"aydinlik\");\n  const temaDegistir = () =>\n    setTema(t => (t === \"aydinlik\" ? \"karanlik\" : \"aydinlik\"));\n\n  return (\n    <TemaContext.Provider value={{ tema, temaDegistir }}>\n      {children}\n    </TemaContext.Provider>\n  );\n};\n\n// 4) Herhangi bir alt bileşende kullanım\nconst TemaButon: React.FC = () => {\n  const { tema, temaDegistir } = useTema();\n  return (\n    <button onClick={temaDegistir}>\n      Mevcut tema: {tema}\n    </button>\n  );\n};"
          },
          {
            "label": "Auth Context Deseni",
            "tip": "Auth context deseninde Provider bileşeni localStorage kontrolü yaparak kullanıcıyı hatırlar. Bu pattern, login/logout'u uygulama genelinde tek noktadan yönetmenizi sağlar.",
            "code": "import { createContext, useContext, useState } from \"react\";\n\ntype Kullanici = { id: number; ad: string; rol: \"admin\" | \"kullanici\" };\ntype AuthCtx = {\n  kullanici: Kullanici | null;\n  girisYap: (kullanici: Kullanici) => void;\n  cikisYap: () => void;\n};\n\nconst AuthContext = createContext<AuthCtx | undefined>(undefined);\n\n// Custom hook — Provider dışı kullanımı önler\nexport const useAuth = () => {\n  const ctx = useContext(AuthContext);\n  if (!ctx) throw new Error(\"useAuth AuthProvider içinde kullanılmalı\");\n  return ctx;\n};\n\n// Provider — tüm auth mantığı burada\nexport const AuthProvider: React.FC<{ children: React.ReactNode }> = ({\n  children,\n}) => {\n  const [kullanici, setKullanici] = useState<Kullanici | null>(null);\n\n  const girisYap = (k: Kullanici) => setKullanici(k);\n  const cikisYap = () => setKullanici(null);\n\n  return (\n    <AuthContext.Provider value={{ kullanici, girisYap, cikisYap }}>\n      {children}\n    </AuthContext.Provider>\n  );\n};\n\n// Herhangi bir alt bileşende kullanım\nconst ProfilButonu: React.FC = () => {\n  const { kullanici, cikisYap } = useAuth();\n  if (!kullanici) return <button>Giriş Yap</button>;\n  return (\n    <div className=\"flex items-center gap-2\">\n      <span>{kullanici.ad} ({kullanici.rol})</span>\n      <button onClick={cikisYap}>Çıkış</button>\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "Prop drilling nedir ve ne zaman sorun olur?",
            "answer": "Props'u kullanmayan ara bileşenlerden geçirerek derine taşımak. 3+ seviye derinliğinde okunabilirliği bozar ve bakımı güçleştirir. Context bu problemi çözer."
          },
          {
            "q": "useContext içeren bileşeni optimize etmek için ne yapılabilir?",
            "answer": "Context'i küçük parçalara bölmek (tema contexti ayrı, auth contexti ayrı) yeniden render sayısını azaltır. React.memo ile context kullanan bileşenler wrap edilebilir."
          }
        ],
        "quiz": [
          {
            "q": "useContext hangi problemi çözer?",
            "options": [
              "State yönetimi",
              "Prop drilling",
              "API çağrısı",
              "Performans optimizasyonu"
            ],
            "correct": 1,
            "explanation": "Context API, prop drilling problemini çözer: ara bileşenlerden geçirmeden derin alt bileşenlere veri sağlar."
          },
          {
            "q": "createContext'e undefined başlangıç değeri verilmesinin sebebi nedir?",
            "options": [
              "Performans için",
              "Provider dışı kullanımı tespit etmek için",
              "TypeScript gerektiriyor",
              "Zorunlu değildir"
            ],
            "correct": 1,
            "explanation": "undefined başlangıç + useContext kontrolü ile Provider dışı kullanımda erken hata fırlatılır. Bu sayede hata kaynağı kolayca bulunur."
          },
          {
            "q": "Context Provider'ın value'su değişince ne olur?",
            "options": [
              "Yalnızca Provider yeniden render edilir",
              "useContext kullanan tüm bileşenler yeniden render edilir",
              "Hiçbir şey olmaz",
              "Uygulama sıfırlanır"
            ],
            "correct": 1,
            "explanation": "Context value değişince, o context'i useContext ile okuyan tüm bileşenler yeniden render edilir. Bu nedenle değerin gereksiz değişmemesi önemlidir."
          },
          {
            "q": "Context ne zaman kullanılMAmalı?",
            "options": [
              "Tema için",
              "Sık değişen veriler için",
              "Oturum için",
              "Routing için"
            ],
            "correct": 1,
            "explanation": "Tüm consumer'lar re-render olur. Sık değişen veriler uygun değildir."
          },
          {
            "q": "Custom hook + Context avantajı?",
            "options": [
              "Performans",
              "Provider kontrolünden kurtulur",
              "TS gerekmez",
              "Sadece class"
            ],
            "correct": 1,
            "explanation": "useTheme() gibi hook null kontrolünü kapsüller."
          }
        ]
      },
      {
        "id": "useref",
        "title": "useRef Hook",
        "group": "temel-hooks",
        "explanation": [
          "useRef, React'te iki temel amaçla kullanılır: DOM elementlerine doğrudan erişim ve render'lar arası kalıcı mutable değer saklama.",
          "DOM erişimi için useRef<HTMLInputElement>(null) şeklinde tip güvenli referans oluşturulur.",
          "Mutable değer saklama: önceki state değerlerini tutmak, setInterval ID'lerini saklamak gibi senaryolarda tercih edilir.",
          "useRef vs useState: State değişikliği UI'ı günceller, ref değişikliği güncellemez."
        ],
        "tip": "useRef'in .current değerini render çıktısında kullanmaktan kaçının.",
        "examples": [
          {
            "label": "DOM Erişimi",
            "tip": "useRef + ref prop'u birlikte DOM elementine erişim sağlar.",
            "code": "import { useRef } from \"react\";\nconst FocusInput: React.FC = () => {\n  const inputRef = useRef<HTMLInputElement>(null);\n  const focusla = () => inputRef.current?.focus();\n  return (\n    <div>\n      <input ref={inputRef} placeholder=\"Buraya yaz...\" />\n      <button onClick={focusla}>Focus</button>\n    </div>\n  );\n};"
          },
          {
            "label": "Kronometre",
            "tip": "setInterval ID'si useRef ile tutulmalıdır.",
            "code": "import { useRef, useState, useEffect } from \"react\";\nconst Kronometre: React.FC = () => {\n  const [saniye, setSaniye] = useState(0);\n  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);\n  const baslat = () => {\n    if (intervalRef.current) return;\n    intervalRef.current = setInterval(() => setSaniye(s => s + 1), 1000);\n  };\n  const durdur = () => {\n    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }\n  };\n  return (\n    <div>\n      <p>{saniye} saniye</p>\n      <button onClick={baslat}>Başlat</button>\n      <button onClick={durdur}>Durdur</button>\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "useRef ile useState farkı nedir?",
            "answer": "useState re-render tetikler, useRef tetiklemez."
          },
          {
            "q": "useRef neden render çıktısında kullanılmamalıdır?",
            "answer": "ref.current değiştiğinde UI güncellenmez."
          }
        ],
        "quiz": [
          {
            "q": "useRef değiştiğinde ne olur?",
            "options": [
              "Re-render olur",
              "Hiçbir şey — re-render tetiklenmez",
              "Hata fırlatılır",
              "useEffect çalışır"
            ],
            "correct": 1,
            "explanation": "useRef.current değiştirildiğinde React re-render tetiklemez."
          },
          {
            "q": "DOM erişimi için useRef nasıl kullanılır?",
            "options": [
              "useRef() + onClick",
              "useRef<HTMLElement>(null) + ref prop",
              "useRef() + id",
              "useRef() + className"
            ],
            "correct": 1,
            "explanation": "useRef<HTMLElement>(null) ile referans oluşturulur, ref={myRef} ile bağlanır."
          },
          {
            "q": "setInterval ID'si neden useRef ile tutulur?",
            "options": [
              "useState ile tutulamaz",
              "Daha hızlıdır",
              "ID değiştiğinde re-render gereksizdir",
              "useEffect'te kullanılamaz"
            ],
            "correct": 2,
            "explanation": "Interval ID UI'da gösterilmez. useState gereksiz re-render tetikler."
          },
          {
            "q": "forwardRef ne zaman kullanılır?",
            "options": [
              "Asla",
              "Parent child'ın DOM'una erişmesi gerektiğinde",
              "Sadece class'larda",
              "State için"
            ],
            "correct": 1,
            "explanation": "forwardRef child'ın ref'i kabul edip DOM elementine yönlendirmesini sağlar."
          },
          {
            "q": "useRef vs createElement farkı nedir?",
            "options": [
              "Aynıdır",
              "useRef React ref sistemi, createElement imperative DOM",
              "useRef yavaştır",
              "createElement güvenlidir"
            ],
            "correct": 1,
            "explanation": "useRef deklaratif referans, createElement imperative DOM manipülasyonudur."
          }
        ]
      }
    ]
  },
  {
    "id": "ileri-hooks",
    "title": "İleri Hooks",
    "color": "bg-amber-500",
    "bgColor": "bg-amber-50",
    "textColor": "text-amber-600",
    "activeBg": "bg-amber-100",
    "activeText": "text-amber-700",
    "topics": [
      {
        "id": "usereducer",
        "title": "useReducer Hook",
        "group": "ileri-hooks",
        "explanation": [
          "useReducer, karmaşık state mantığını yönetmek için useState'e alternatiftir. Redux'a benzer bir pattern kullanır: state + action → new state. Özellikle birbirine bağlı state alanları veya çok sayıda güncelleme tipi olduğunda tercih edilir.",
          "Reducer saf (pure) bir fonksiyondur: aynı girdilere her zaman aynı çıktıyı verir, yan etki içermez. TypeScript discriminated union ile action tipleri güvenli tanımlanır.",
          "useReducer, Context ile birleşince mini Redux gibi çalışır ve uygulama genelinde kompleks state yönetimi sağlar."
        ],
        "tip": "useReducer'ı tercih ettiğinizde reducer fonksiyonunu bileşen dışına çıkarın. Bu sayede bileşen her render'da yeni referans oluşturmaz ve reducer'ı kolayca birim test edebilirsiniz.",
        "examples": [
          {
            "label": "useReducer Temelleri",
            "tip": "Discriminated union ile action tipi tanımlamak TypeScript'e her case'in payload tipini kesin olarak bildirir. Bu sayede action.payload'a erişim type-safe olur.",
            "code": "import { useReducer } from \"react\";\n\ntype State = { sayi: number; adimlar: number[] };\ntype Action =\n  | { type: \"ARTIR\" }\n  | { type: \"AZALT\" }\n  | { type: \"SIFIRLA\" }\n  | { type: \"ADIM_EKLE\"; payload: number }; // payload sadece bu case'de\n\nconst baslangic: State = { sayi: 0, adimlar: [] };\n\n// Reducer — bileşen dışında, saf fonksiyon\nfunction reducer(state: State, action: Action): State {\n  switch (action.type) {\n    case \"ARTIR\":\n      return { ...state, sayi: state.sayi + 1, adimlar: [...state.adimlar, 1] };\n    case \"AZALT\":\n      return { ...state, sayi: state.sayi - 1, adimlar: [...state.adimlar, -1] };\n    case \"SIFIRLA\":\n      return baslangic; // başlangıç state'ine dön\n    case \"ADIM_EKLE\":\n      return { ...state, sayi: state.sayi + action.payload };\n    default:\n      return state;\n  }\n}\n\nconst Sayac: React.FC = () => {\n  const [state, dispatch] = useReducer(reducer, baslangic);\n  return (\n    <div>\n      <p>Sayı: {state.sayi}</p>\n      <button onClick={() => dispatch({ type: \"ARTIR\" })}>+</button>\n      <button onClick={() => dispatch({ type: \"AZALT\" })}>-</button>\n      <button onClick={() => dispatch({ type: \"SIFIRLA\" })}>Sıfırla</button>\n    </div>\n  );\n};"
          },
          {
            "label": "useReducer + Context",
            "tip": "useReducer + Context kombinasyonu mini Redux gibi çalışır. dispatch ve state'i ayrı context'lere koyarak sadece dispatch kullanan bileşenlerin state değişikliğinden etkilenmemesini sağlayabilirsiniz.",
            "code": "import { useReducer, createContext, useContext } from \"react\";\n\ntype Sepet = { urunId: number; adet: number };\ntype SepetState = { urunler: Sepet[]; toplam: number };\ntype SepetAction =\n  | { type: \"EKLE\"; payload: { urunId: number; fiyat: number } }\n  | { type: \"TEMIZLE\" };\n\nfunction sepetReducer(state: SepetState, action: SepetAction): SepetState {\n  switch (action.type) {\n    case \"EKLE\": {\n      const mevcut = state.urunler.find(u => u.urunId === action.payload.urunId);\n      const urunler = mevcut\n        ? state.urunler.map(u =>\n            u.urunId === action.payload.urunId\n              ? { ...u, adet: u.adet + 1 }\n              : u\n          )\n        : [...state.urunler, { urunId: action.payload.urunId, adet: 1 }];\n      return { urunler, toplam: state.toplam + action.payload.fiyat };\n    }\n    case \"TEMIZLE\":\n      return { urunler: [], toplam: 0 };\n    default:\n      return state;\n  }\n}\n\n// Context ile dağıtım\ntype SepetCtx = { state: SepetState; dispatch: React.Dispatch<SepetAction> };\nconst SepetContext = createContext<SepetCtx | undefined>(undefined);\n\nconst SepetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {\n  const [state, dispatch] = useReducer(sepetReducer, { urunler: [], toplam: 0 });\n  return (\n    <SepetContext.Provider value={{ state, dispatch }}>\n      {children}\n    </SepetContext.Provider>\n  );\n};\n\nconst useSepet = () => {\n  const ctx = useContext(SepetContext);\n  if (!ctx) throw new Error(\"SepetProvider içinde kullanılmalı\");\n  return ctx;\n};"
          }
        ],
        "practice": [
          {
            "q": "useReducer'ı useState'e göre ne zaman tercih etmelisiniz?",
            "answer": "State güncellemeleri birbirine bağlıysa, güncelleme tiplerinin sayısı fazlaysa (3+), veya reducer test edilebilirliği önemliyse useReducer tercih edilir."
          },
          {
            "q": "Reducer'ın 'pure function' olması neden önemlidir?",
            "answer": "Pure function aynı girdide hep aynı çıktıyı verir. Bu test edilebilirliği artırır, React'in state güncellemelerini güvenilir tahmin edebilmesini sağlar."
          }
        ],
        "quiz": [
          {
            "q": "useReducer dispatch fonksiyonu ne alır?",
            "options": [
              "Yeni state değerini",
              "Action nesnesini",
              "Reducer fonksiyonunu",
              "Bağımlılık dizisini"
            ],
            "correct": 1,
            "explanation": "dispatch, type alanı ve opsiyonel payload içeren bir action nesnesi alır. Reducer bu action'ı işleyerek yeni state üretir."
          },
          {
            "q": "Discriminated union ile action tipi tanımlamanın avantajı nedir?",
            "options": [
              "Daha kısa kod",
              "TypeScript her case'de payload tipini doğru çıkarır",
              "Daha hızlı çalışır",
              "Zorunludur"
            ],
            "correct": 1,
            "explanation": "case 'ADIM_EKLE' dalında TypeScript action.payload'ın var olduğunu ve number tipinde olduğunu otomatik anlar."
          },
          {
            "q": "useReducer'ın useState'e göre test edilebilirlik avantajı nedir?",
            "options": [
              "Yoktur",
              "Reducer saf fonksiyon olduğundan bileşen olmadan test edilebilir",
              "useReducer daha az kod üretir",
              "Test araçları useReducer'ı destekler"
            ],
            "correct": 1,
            "explanation": "Reducer bağımsız bir saf fonksiyon olduğundan React bileşeni olmadan birim testi yazılabilir: expect(reducer(state, action)).toEqual(beklenen)"
          },
          {
            "q": "useReducer ne zaman tercih edilir?",
            "options": [
              "Her zaman",
              "Karmaşık state mantığında",
              "Sadece sayılar",
              "TS yoksa"
            ],
            "correct": 1,
            "explanation": "İlişkili state güncellemelerinde daha sürdürülebilirdir."
          },
          {
            "q": "Discriminated union nasıl güvenlik sağlar?",
            "options": [
              "Performans",
              "Her action'a özel payload zorunlu kılar",
              "Sadece string",
              "Redux gerekir"
            ],
            "correct": 1,
            "explanation": "TypeScript switch/case'de otomatik tip daraltma yapar."
          }
        ]
      },
      {
        "id": "usememo",
        "title": "useMemo Hook",
        "group": "ileri-hooks",
        "explanation": [
          "useMemo, pahalı hesaplamaların sonucunu memoize (önbelleğe) eder. Bağımlılıklar değişmediği sürece hesaplama tekrarlanmaz ve önceki sonuç döndürülür.",
          "Her render'da çalıştırılması pahalı işlemler: büyük dizi filtreleme/sıralama, karmaşık matematiksel hesaplama, referans karşılaştırması gereken nesne oluşturma gibi durumlarda kullanılır.",
          "useMemo'yu her yerde kullanmak yanlıştır: memoization kendisi de bellek ve hesaplama maliyeti taşır. Profiler ile gerçekten yavaş olan kısımları hedefleyin."
        ],
        "tip": "useMemo'yu erken optimizasyon için kullanmayın. Önce React DevTools Profiler ile gerçekten yavaş olan kısımları tespit edin, sonra hedefli useMemo ekleyin. Yanlış kullanılan useMemo performansa zarar verebilir.",
        "examples": [
          {
            "label": "useMemo Temelleri",
            "tip": "useMemo referans stabilizasyonu için de kullanılır: nesne veya dizi bağımlılıklarda, her render'da yeni referans oluşmasını önleyerek alt bileşenlerin gereksiz render'ını engeller.",
            "code": "import { useState, useMemo } from \"react\";\n\ntype Urun = { id: number; ad: string; fiyat: number; kategori: string };\n\nconst urunler: Urun[] = [\n  { id: 1, ad: \"Laptop\", fiyat: 15000, kategori: \"Elektronik\" },\n  { id: 2, ad: \"Kitap\", fiyat: 120, kategori: \"Kültür\" },\n  { id: 3, ad: \"Telefon\", fiyat: 8000, kategori: \"Elektronik\" },\n];\n\nconst UrunListesi: React.FC = () => {\n  const [filtre, setFiltre] = useState(\"\");\n  const [sirala, setSirala] = useState<\"fiyat\" | \"ad\">(\"ad\");\n\n  // filtre veya sirala değişmedikçe yeniden hesaplanmaz\n  const filtrelenmis = useMemo(() => {\n    console.log(\"Filtreleniyor...\"); // kaç kez çalıştığını görmek için\n    return urunler\n      .filter(u => u.ad.toLowerCase().includes(filtre.toLowerCase()))\n      .sort((a, b) =>\n        sirala === \"fiyat\" ? a.fiyat - b.fiyat : a.ad.localeCompare(b.ad)\n      );\n  }, [filtre, sirala]);\n\n  return (\n    <div>\n      <input\n        value={filtre}\n        onChange={e => setFiltre(e.target.value)}\n        placeholder=\"Ara...\"\n      />\n      <button onClick={() => setSirala(s => s === \"ad\" ? \"fiyat\" : \"ad\")}>\n        Sırala: {sirala}\n      </button>\n      {filtrelenmis.map(u => (\n        <div key={u.id}>{u.ad} - {u.fiyat}₺</div>\n      ))}\n    </div>\n  );\n};"
          },
          {
            "label": "useMemo ile Hesaplamalı Tablo",
            "tip": "Sıralama ve filtreleme işlemlerini useMemo ile memoize ederek kullanıcı her tuşa bastığında tüm veriyi yeniden işlemenin önüne geçin. Sadece ilgili bağımlılıklar değişince hesaplama tetiklenir.",
            "code": "import { useState, useMemo } from \"react\";\n\ntype Ogrenci = { id: number; ad: string; not: number; sinif: string };\n\nconst ogrenciler: Ogrenci[] = [\n  { id: 1, ad: \"Ali\", not: 78, sinif: \"A\" },\n  { id: 2, ad: \"Ayşe\", not: 92, sinif: \"B\" },\n  { id: 3, ad: \"Mehmet\", not: 65, sinif: \"A\" },\n  { id: 4, ad: \"Fatma\", not: 88, sinif: \"B\" },\n];\n\nconst OgrenciTablosu: React.FC = () => {\n  const [filtre, setFiltre] = useState(\"\");\n  const [sinif, setSinif] = useState(\"Tümü\");\n  const [artanSirala, setArtanSirala] = useState(false);\n\n  // filtre, sinif veya sıralama değişince yeniden hesapla\n  const islenmis = useMemo(() => {\n    return ogrenciler\n      .filter(o => o.ad.toLowerCase().includes(filtre.toLowerCase()))\n      .filter(o => sinif === \"Tümü\" || o.sinif === sinif)\n      .sort((a, b) => artanSirala ? a.not - b.not : b.not - a.not);\n  }, [filtre, sinif, artanSirala]);\n\n  // ortalama da memoize — sadece islenmis değişince hesaplanır\n  const ortalama = useMemo(\n    () => islenmis.reduce((sum, o) => sum + o.not, 0) / (islenmis.length || 1),\n    [islenmis]\n  );\n\n  return (\n    <div>\n      <div className=\"flex gap-2 mb-3\">\n        <input value={filtre} onChange={e => setFiltre(e.target.value)} placeholder=\"İsim ara...\" />\n        <select value={sinif} onChange={e => setSinif(e.target.value)}>\n          {[\"Tümü\", \"A\", \"B\"].map(s => <option key={s}>{s}</option>)}\n        </select>\n        <button onClick={() => setArtanSirala(k => !k)}>\n          Not: {artanSirala ? \"Artan\" : \"Azalan\"}\n        </button>\n      </div>\n      <p className=\"text-sm text-slate-500 mb-2\">Ortalama: {ortalama.toFixed(1)}</p>\n      {islenmis.map(o => (\n        <div key={o.id} className=\"flex justify-between p-2 border-b\">\n          <span>{o.ad} ({o.sinif})</span>\n          <span className=\"font-semibold\">{o.not}</span>\n        </div>\n      ))}\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "useMemo kullanmak performansı her zaman iyileştirir mi? Açıklayın.",
            "answer": "Hayır. useMemo'nun kendisi overhead taşır (bellek + karşılaştırma). Basit hesaplamalar için gereksizdir. Sadece profillerle tespit edilen darboğazlarda kullanılmalı."
          },
          {
            "q": "useMemo ile useCallback arasındaki fark nedir?",
            "answer": "useMemo bir değeri (hesaplama sonucunu) memoize eder. useCallback bir fonksiyonu memoize eder. useCallback(fn, deps) aslında useMemo(() => fn, deps) ile eşdeğerdir."
          }
        ],
        "quiz": [
          {
            "q": "useMemo ne zaman yeniden hesaplar?",
            "options": [
              "Her render'da",
              "Bağımlılıklar değişince",
              "Her 5 saniyede",
              "Asla"
            ],
            "correct": 1,
            "explanation": "useMemo bağımlılık dizisindeki değerler değişince yeniden hesaplar. Değişmezse önbellekteki değeri döndürür."
          },
          {
            "q": "useMemo'nun dönüş değeri nedir?",
            "options": [
              "Bir fonksiyon",
              "Memoize edilmiş hesaplama sonucu",
              "[değer, setter] tuple",
              "Bir Promise"
            ],
            "correct": 1,
            "explanation": "useMemo, callback fonksiyonunun return değerini memoize eder ve doğrudan o değeri döndürür."
          },
          {
            "q": "Hangi durum useMemo kullanımını gerektirir?",
            "options": [
              "Her hesaplamada",
              "Küçük dizileri filtrelemede",
              "Binlerce elemanlı diziyi her render'da sıralamada",
              "String birleştirmede"
            ],
            "correct": 2,
            "explanation": "Büyük veri setlerinde pahalı filtreleme/sıralama işlemleri gereksiz yere tekrar çalışmamalıdır. Bu durum useMemo için gerçek bir kullanım senaryosudur."
          },
          {
            "q": "useMemo ne zaman kullanılMAmalı?",
            "options": [
              "Pahalı hesaplar",
              "Basit hesaplar — maliyet fazla olur",
              "Filtreleme",
              "Sıralama"
            ],
            "correct": 1,
            "explanation": "Basit işlemlerde memoization gereksiz karmaşıklık ekler."
          },
          {
            "q": "Dependency'ye nesne referansı konursa?",
            "options": [
              "Doğru çalışır",
              "Her render'da memo etkisiz",
              "Hata",
              "TypeScript uyarır"
            ],
            "correct": 1,
            "explanation": "{} !== {} dir, dependency değişmiş sayılır."
          }
        ]
      },
      {
        "id": "usecallback",
        "title": "useCallback Hook",
        "group": "ileri-hooks",
        "explanation": [
          "useCallback, fonksiyonları memoize eder. Her render'da yeni fonksiyon referansı oluşturmayı önler. Özellikle child bileşene prop olarak geçilen fonksiyonlar için önemlidir.",
          "React.memo ile birlikte kullanılır: React.memo prop referansı değişmediğinde child'ı yeniden render etmez. Fonksiyon prop'u her render'da yeniden oluşturulursa React.memo etkisiz kalır.",
          "TypeScript ile useCallback: generic tip genellikle çıkarım yapılır, ancak karmaşık overload'lar için explicit tip gerekebilir."
        ],
        "tip": "useCallback bağımlılık dizisi önemlidir. Bağımlılık olarak değişmeyen setter fonksiyonları (setDeger) ve dispatch'i güvenle kullanabilirsiniz — React bunların stabil referanslı olduğunu garanti eder.",
        "examples": [
          {
            "label": "useCallback Temelleri",
            "tip": "React.memo + useCallback kombinasyonu: memo prop karşılaştırması yapar, useCallback ise fonksiyon referansını sabit tutar. İkisi birlikte kullanılmadan biri anlamsız.",
            "code": "import { useState, useCallback, memo } from \"react\";\n\n// memo ile wrap edilmiş child bileşen\nconst TodoItem = memo(({ metin, onSil }: { metin: string; onSil: () => void }) => {\n  console.log(\"TodoItem render:\", metin); // kaç kez render olduğunu izle\n  return (\n    <li>\n      {metin}\n      <button onClick={onSil}>Sil</button>\n    </li>\n  );\n});\n\nconst TodoListesi: React.FC = () => {\n  const [todolar, setTodolar] = useState([\"Alışveriş\", \"Spor\", \"Kitap\"]);\n\n  // useCallback olmadan: her render'da yeni fonksiyon → TodoItem hep yeniden render\n  // useCallback ile: fonksiyon referansı korunur → TodoItem gereksiz render etmez\n  const silHandler = useCallback((index: number) => {\n    setTodolar(prev => prev.filter((_, i) => i !== index));\n  }, []); // setTodolar stabil referans, bağımlılık gerekmez\n\n  return (\n    <ul>\n      {todolar.map((todo, i) => (\n        <TodoItem key={todo} metin={todo} onSil={() => silHandler(i)} />\n      ))}\n    </ul>\n  );\n};"
          },
          {
            "label": "useCallback ile Form Handler",
            "tip": "Form'daki her input için ayrı state yerine tek nesne state kullanın. Değişiklik handler'ını useCallback + event.target.name ile genel tutun — her input için ayrı handler yazmak yerine tek 'handleChange' yeterli olur.",
            "code": "import { useState, useCallback, memo } from \"react\";\n\ntype Alan = { label: string; name: string; type: string };\nconst alanlar: Alan[] = [\n  { label: \"Ad\", name: \"ad\", type: \"text\" },\n  { label: \"E-posta\", name: \"email\", type: \"email\" },\n  { label: \"Şifre\", name: \"sifre\", type: \"password\" },\n];\n\n// memo ile optimize edilmiş input — sadece kendi değeri değişince render edilir\nconst FormInput = memo(({\n  label, name, type, deger, onChange,\n}: {\n  label: string; name: string; type: string;\n  deger: string; onChange: (name: string, deger: string) => void;\n}) => {\n  console.log(`${name} render edildi`);\n  return (\n    <div>\n      <label className=\"text-sm font-medium text-slate-700\">{label}</label>\n      <input\n        type={type}\n        value={deger}\n        onChange={e => onChange(name, e.target.value)}\n        className=\"mt-1 block w-full border rounded-lg px-3 py-2\"\n      />\n    </div>\n  );\n});\n\nconst KayitFormu: React.FC = () => {\n  const [form, setForm] = useState({ ad: \"\", email: \"\", sifre: \"\" });\n\n  // useCallback — her render'da yeni fonksiyon oluşturmaz\n  const handleChange = useCallback((name: string, deger: string) => {\n    setForm(prev => ({ ...prev, [name]: deger }));\n  }, []); // setForm stabil, bağımlılık gerekmez\n\n  return (\n    <form className=\"space-y-4\">\n      {alanlar.map(alan => (\n        <FormInput\n          key={alan.name}\n          {...alan}\n          deger={form[alan.name as keyof typeof form]}\n          onChange={handleChange}\n        />\n      ))}\n    </form>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "useCallback olmadan React.memo neden etkisiz olabilir?",
            "answer": "Her render'da fonksiyon yeniden oluşturulur, yeni referans alır. React.memo referans eşitliği kontrol eder: farklı referans → child yeniden render edilir."
          },
          {
            "q": "useCallback'i her fonksiyon için kullanmak gerekli midir?",
            "answer": "Hayır. Sadece React.memo'lu bileşenlere geçirilen veya useEffect/useMemo bağımlılığında yer alan fonksiyonlar için mantıklıdır. Gerekmiyorsa complexity artırır."
          }
        ],
        "quiz": [
          {
            "q": "useCallback ne döndürür?",
            "options": [
              "Fonksiyonun çalışma sonucu",
              "Memoize edilmiş fonksiyon referansı",
              "[fonksiyon, tetikleyici] tuple",
              "Bir Promise"
            ],
            "correct": 1,
            "explanation": "useCallback, bağımlılıklar değişmediği sürece aynı fonksiyon referansını döndürür. Yeni referans oluşturmaz."
          },
          {
            "q": "React.memo ne işe yarar?",
            "options": [
              "State'i memoize eder",
              "Props değişmediğinde bileşenin yeniden render edilmesini önler",
              "useCallback ile aynı şeydir",
              "Sadece class component'lerde çalışır"
            ],
            "correct": 1,
            "explanation": "React.memo bir Higher Order Component'tir. Önceki ve yeni props'ları karşılaştırır. Aynıysa render atlar."
          },
          {
            "q": "useCallback ile useMemo arasındaki temel fark nedir?",
            "options": [
              "Bağımlılık dizisi kullanımı farklı",
              "useCallback fonksiyon memoize eder, useMemo değer memoize eder",
              "useCallback daha hızlıdır",
              "Aralarında fark yoktur"
            ],
            "correct": 1,
            "explanation": "useCallback(fn, deps) → fn'yi memoize eder. useMemo(() => hesapla(), deps) → hesapla()'nın sonucunu memoize eder."
          },
          {
            "q": "useCallback vs useMemo farkı?",
            "options": [
              "Aynıdır",
              "useCallback fonksiyon, useMemo değer memoize",
              "Daha hızlı",
              "Sadece sayılar"
            ],
            "correct": 1,
            "explanation": "useCallback fonksiyonun kendisini memoize eder."
          },
          {
            "q": "useCallback + React.memo birlikte kullanılmazsa?",
            "options": [
              "Hata",
              "useCallback etkisiz, child re-render olur",
              "Performans artar",
              "TS hatası"
            ],
            "correct": 1,
            "explanation": "Child React.memo ile sarılmamışsa referans sabitleme etkisizdir."
          }
        ]
      },
      {
        "id": "useimperativehandle",
        "title": "useImperativeHandle Hook",
        "group": "ileri-hooks",
        "explanation": [
          "useImperativeHandle, ref ile parent bileşene child bileşenin belirli metodlarını veya değerlerini açmayı sağlar. forwardRef ile birlikte kullanılır.",
          "Normalde React'te parent child'ı doğrudan kontrol etmez (declarative). Ancak focus, scroll, video oynatma gibi imperative işlemler için ref ve useImperativeHandle kullanılır.",
          "TypeScript ile hem ref tipi hem de açılan interface tam olarak tiplenebilir. Bu, parent'ın yalnızca izin verilen metodlara erişmesini garanti eder."
        ],
        "tip": "useImperativeHandle'ı her zaman minimal tutun — sadece gerçekten dışarıya açılması gereken metodları ekleyin. Tüm iç state'i ve metodları expose etmek kapsüllemeyi bozar ve bileşenler arası sıkı bağımlılık yaratır.",
        "examples": [
          {
            "label": "useImperativeHandle Temelleri",
            "tip": "forwardRef + useImperativeHandle kombinasyonu, bileşen API'sini tam olarak kontrol etmenizi sağlar. Parent yalnızca tanımladığınız metodlara erişir, iç implementasyona değil.",
            "code": "import { useRef, useImperativeHandle, forwardRef } from \"react\";\n\n// Child'ın dışarı açacağı metodlar\ntype InputHandle = {\n  focus: () => void;\n  temizle: () => void;\n  degerAl: () => string;\n};\n\n// forwardRef + useImperativeHandle\nconst OzelInput = forwardRef<InputHandle, { placeholder?: string }>(\n  ({ placeholder }, ref) => {\n    const inputRef = useRef<HTMLInputElement>(null);\n\n    useImperativeHandle(ref, () => ({\n      focus: () => inputRef.current?.focus(),\n      temizle: () => {\n        if (inputRef.current) inputRef.current.value = \"\";\n      },\n      degerAl: () => inputRef.current?.value ?? \"\",\n    }));\n\n    return (\n      <input\n        ref={inputRef}\n        placeholder={placeholder}\n        className=\"border rounded p-2\"\n      />\n    );\n  }\n);\n\n// Parent bileşen\nconst Form: React.FC = () => {\n  const inputRef = useRef<InputHandle>(null);\n\n  return (\n    <div>\n      <OzelInput ref={inputRef} placeholder=\"Bir şey yazın\" />\n      <button onClick={() => inputRef.current?.focus()}>Odaklan</button>\n      <button onClick={() => inputRef.current?.temizle()}>Temizle</button>\n      <button onClick={() => alert(inputRef.current?.degerAl())}>\n        Değeri Al\n      </button>\n    </div>\n  );\n};"
          },
          {
            "label": "Modal ile useImperativeHandle",
            "tip": "Modal gibi bileşenlerde useImperativeHandle ile open/close metodlarını parent'a açmak, parent'ın modal state'ini taşımasını gerektirmez. Kapsülleme korunur, parent sadece 'aç' ve 'kapat' der.",
            "code": "import { forwardRef, useImperativeHandle, useState } from \"react\";\n\ntype ModalHandle = {\n  ac: (baslik: string, icerik: string) => void;\n  kapat: () => void;\n};\n\n// Modal — kendi state'ini yönetir, dışarıya ac/kapat açar\nconst Modal = forwardRef<ModalHandle>((_, ref) => {\n  const [acik, setAcik] = useState(false);\n  const [baslik, setBaslik] = useState(\"\");\n  const [icerik, setIcerik] = useState(\"\");\n\n  // Parent'a sadece bu iki metod açılır\n  useImperativeHandle(ref, () => ({\n    ac: (b, i) => { setBaslik(b); setIcerik(i); setAcik(true); },\n    kapat: () => setAcik(false),\n  }));\n\n  if (!acik) return null;\n  return (\n    <div className=\"fixed inset-0 bg-black/50 flex items-center justify-center z-50\">\n      <div className=\"bg-white rounded-xl p-6 max-w-md w-full shadow-xl\">\n        <h2 className=\"text-lg font-bold mb-2\">{baslik}</h2>\n        <p className=\"text-slate-600\">{icerik}</p>\n        <button\n          onClick={() => setAcik(false)}\n          className=\"mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg\"\n        >\n          Kapat\n        </button>\n      </div>\n    </div>\n  );\n});\n\n// Parent — modal state'i taşımaz\nconst Sayfa: React.FC = () => {\n  const modalRef = useRef<ModalHandle>(null);\n  return (\n    <div>\n      <Modal ref={modalRef} />\n      <button\n        onClick={() => modalRef.current?.ac(\"Başarılı!\", \"İşleminiz tamamlandı.\")}\n        className=\"px-4 py-2 bg-indigo-600 text-white rounded-lg\"\n      >\n        Modal Aç\n      </button>\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "useImperativeHandle'ı ne zaman kullanmalısınız? Alternatifi var mı?",
            "answer": "Input focus, scroll, animasyon tetikleme gibi doğrudan DOM/bileşen kontrolü gerektiğinde. Çoğu durum state ile (declarative) çözülebilir. Zorunlu değilse kullanmayın."
          },
          {
            "q": "forwardRef olmadan useImperativeHandle çalışır mı?",
            "answer": "Hayır. useImperativeHandle'ın çalışması için bileşenin forwardRef ile wrap edilmesi şarttır. forwardRef, parent'ın geçtiği ref'i child'a iletir."
          }
        ],
        "quiz": [
          {
            "q": "useImperativeHandle hangi hook ile birlikte kullanılır?",
            "options": [
              "useState",
              "useEffect",
              "forwardRef",
              "useContext"
            ],
            "correct": 2,
            "explanation": "useImperativeHandle, forwardRef ile birlikte çalışır. forwardRef parent'ın ref'ini child'a iletir, useImperativeHandle ise bu ref'e hangi metodların açılacağını belirler."
          },
          {
            "q": "useImperativeHandle ne zaman kullanılmalıdır?",
            "options": [
              "Her state güncellemesinde",
              "Zorunlu DOM/bileşen işlemleri gerektiğinde",
              "Her fonksiyon bileşeninde",
              "useRef yerine"
            ],
            "correct": 1,
            "explanation": "focus, scroll, oynatma/durdurma gibi imperative işlemler gerektiğinde kullanılır. Declarative yaklaşım mümkünse tercih edilmeli."
          },
          {
            "q": "forwardRef'in amacı nedir?",
            "options": [
              "State paylaşımı",
              "Parent'tan gelen ref'i child bileşene iletmek",
              "Context oluşturmak",
              "Lifecycle yönetmek"
            ],
            "correct": 1,
            "explanation": "forwardRef, parent'ın ref prop'u ile geçtiği ref'i child bileşenin render fonksiyonuna ikinci parametre olarak iletir."
          },
          {
            "q": "useImperativeHandle ne zaman kullanılır?",
            "options": [
              "Her bileşende",
              "Parent'a kontrollü API sunmak gerektiğinde",
              "State yönetimi",
              "Stil"
            ],
            "correct": 1,
            "explanation": "Tüm DOM yerine sadece gerekli metodları dışa açar."
          },
          {
            "q": "Ham DOM ref riski nedir?",
            "options": [
              "Performans",
              "Tight coupling — child değişirse parent bozulur",
              "TS izin vermez",
              "React hata"
            ],
            "correct": 1,
            "explanation": "useImperativeHandle bağımlılığı azaltır."
          }
        ]
      }
    ]
  },
  {
    "id": "form-routing",
    "title": "Form & Routing",
    "color": "bg-rose-500",
    "bgColor": "bg-rose-50",
    "textColor": "text-rose-600",
    "activeBg": "bg-rose-100",
    "activeText": "text-rose-700",
    "topics": [
      {
        "id": "dynamic-form",
        "title": "Dinamik Form",
        "group": "form-routing",
        "explanation": [
          "Dinamik formlar, alan sayısı ve içeriğinin çalışma zamanında belirlendiği formlardır. Kullanıcı alan ekleyip çıkarabilir. State olarak form alanlarının dizisi tutulur.",
          "Her alan için benzersiz ID yönetimi (crypto.randomUUID veya counter) ve controlled input pattern'i uygulanır. TypeScript ile alan tipi ve validasyonu güvenli tanımlanır.",
          "Form submit'te dizi map/filter ile işlenir. Boş alan temizleme, validasyon ve hata mesajları da state ile yönetilir."
        ],
        "tip": "Dinamik form verilerini submit etmeden önce validasyondan geçirin. Her alanın boş olmadığını ve etiketin benzersiz olduğunu kontrol edin. Hata mesajlarını her alanın yanında gösterin.",
        "examples": [
          {
            "label": "Dinamik Form Temelleri",
            "tip": "Date.now() benzersiz ID için hızlı çalışır ancak aynı milisaniyede iki alan eklenirse çakışır. Üretim kodunda crypto.randomUUID() veya bir counter kullanın.",
            "code": "import { useState } from \"react\";\n\ntype Alan = { id: string; etiket: string; deger: string };\n\nconst DinamikForm: React.FC = () => {\n  const [alanlar, setAlanlar] = useState<Alan[]>([\n    { id: \"1\", etiket: \"Ad\", deger: \"\" },\n  ]);\n\n  const alanEkle = () => {\n    setAlanlar(prev => [\n      ...prev,\n      { id: Date.now().toString(), etiket: \"\", deger: \"\" },\n    ]);\n  };\n\n  const alanSil = (id: string) => {\n    setAlanlar(prev => prev.filter(a => a.id !== id));\n  };\n\n  const guncelle = (\n    id: string,\n    alan: keyof Omit<Alan, \"id\">,\n    deger: string\n  ) => {\n    setAlanlar(prev =>\n      prev.map(a => (a.id === id ? { ...a, [alan]: deger } : a))\n    );\n  };\n\n  const gonder = (e: React.FormEvent) => {\n    e.preventDefault();\n    const veri = Object.fromEntries(alanlar.map(a => [a.etiket, a.deger]));\n    console.log(\"Form verisi:\", veri);\n  };\n\n  return (\n    <form onSubmit={gonder} className=\"space-y-3\">\n      {alanlar.map(alan => (\n        <div key={alan.id} className=\"flex gap-2\">\n          <input\n            value={alan.etiket}\n            onChange={e => guncelle(alan.id, \"etiket\", e.target.value)}\n            placeholder=\"Etiket\"\n            className=\"border rounded px-2 py-1\"\n          />\n          <input\n            value={alan.deger}\n            onChange={e => guncelle(alan.id, \"deger\", e.target.value)}\n            placeholder=\"Değer\"\n            className=\"border rounded px-2 py-1\"\n          />\n          <button type=\"button\" onClick={() => alanSil(alan.id)}>Sil</button>\n        </div>\n      ))}\n      <button type=\"button\" onClick={alanEkle}>+ Alan Ekle</button>\n      <button type=\"submit\">Gönder</button>\n    </form>\n  );\n};"
          },
          {
            "label": "Çok Adımlı Form",
            "tip": "Çok adımlı formlarda her adımın state'ini tek bir nesne state'te tutun. Adımlar arası geçişte validate() ile mevcut adımı doğrulayın, hata varsa ilerletmeyin.",
            "code": "import { useState } from \"react\";\n\ntype AdimVerisi = { ad: string; email: string; sifre: string };\nconst ADIM_BASLIKLAR = [\"Kişisel Bilgiler\", \"Hesap Bilgileri\", \"Onay\"];\n\nconst CokAdimliForm: React.FC = () => {\n  const [adim, setAdim] = useState(0);\n  const [veri, setVeri] = useState<AdimVerisi>({ ad: \"\", email: \"\", sifre: \"\" });\n  const [hatalar, setHatalar] = useState<Partial<AdimVerisi>>({});\n  const [tamamlandi, setTamamlandi] = useState(false);\n\n  const guncelle = (alan: keyof AdimVerisi, deger: string) =>\n    setVeri(prev => ({ ...prev, [alan]: deger }));\n\n  // Her adım için validasyon\n  const validate = (): boolean => {\n    const yeniHatalar: Partial<AdimVerisi> = {};\n    if (adim === 0 && !veri.ad.trim())\n      yeniHatalar.ad = \"Ad zorunludur\";\n    if (adim === 1) {\n      if (!veri.email.includes(\"@\"))\n        yeniHatalar.email = \"Geçerli e-posta girin\";\n      if (veri.sifre.length < 6)\n        yeniHatalar.sifre = \"En az 6 karakter\";\n    }\n    setHatalar(yeniHatalar);\n    return Object.keys(yeniHatalar).length === 0;\n  };\n\n  const ileri = () => { if (validate()) setAdim(a => Math.min(a + 1, 2)); };\n  const geri = () => { setHatalar({}); setAdim(a => Math.max(a - 1, 0)); };\n  const gonder = () => { if (validate()) setTamamlandi(true); };\n\n  if (tamamlandi)\n    return <p className=\"text-green-600 font-semibold\">Kayıt tamamlandı! Hoş geldiniz, {veri.ad}.</p>;\n\n  return (\n    <div className=\"max-w-md\">\n      {/* Adım göstergesi */}\n      <div className=\"flex gap-2 mb-6\">\n        {ADIM_BASLIKLAR.map((b, i) => (\n          <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= adim ? \"bg-indigo-500\" : \"bg-slate-200\"}`} />\n        ))}\n      </div>\n      <h3 className=\"font-semibold text-lg mb-4\">{ADIM_BASLIKLAR[adim]}</h3>\n      {adim === 0 && (\n        <div>\n          <input value={veri.ad} onChange={e => guncelle(\"ad\", e.target.value)}\n            placeholder=\"Adınız\" className=\"border rounded p-2 w-full\" />\n          {hatalar.ad && <p className=\"text-red-500 text-sm mt-1\">{hatalar.ad}</p>}\n        </div>\n      )}\n      {adim === 1 && (\n        <div className=\"space-y-3\">\n          <div>\n            <input value={veri.email} onChange={e => guncelle(\"email\", e.target.value)}\n              placeholder=\"E-posta\" className=\"border rounded p-2 w-full\" />\n            {hatalar.email && <p className=\"text-red-500 text-sm\">{hatalar.email}</p>}\n          </div>\n          <div>\n            <input type=\"password\" value={veri.sifre}\n              onChange={e => guncelle(\"sifre\", e.target.value)}\n              placeholder=\"Şifre\" className=\"border rounded p-2 w-full\" />\n            {hatalar.sifre && <p className=\"text-red-500 text-sm\">{hatalar.sifre}</p>}\n          </div>\n        </div>\n      )}\n      {adim === 2 && (\n        <div className=\"bg-slate-50 rounded-xl p-4 space-y-2 text-sm\">\n          <p><span className=\"font-medium\">Ad:</span> {veri.ad}</p>\n          <p><span className=\"font-medium\">E-posta:</span> {veri.email}</p>\n          <p><span className=\"font-medium\">Şifre:</span> {\"•\".repeat(veri.sifre.length)}</p>\n        </div>\n      )}\n      <div className=\"flex gap-2 mt-6\">\n        {adim > 0 && (\n          <button onClick={geri} className=\"px-4 py-2 border rounded-lg\">Geri</button>\n        )}\n        {adim < 2 ? (\n          <button onClick={ileri} className=\"px-4 py-2 bg-indigo-600 text-white rounded-lg\">İleri</button>\n        ) : (\n          <button onClick={gonder} className=\"px-4 py-2 bg-green-600 text-white rounded-lg\">Tamamla</button>\n        )}\n      </div>\n    </div>\n  );\n};"
          }
        ],
        "practice": [
          {
            "q": "Dinamik form alanlarına neden benzersiz ID verilmelidir?",
            "answer": "React key prop'u için benzersiz ID gereklidir. Dizi indeksi key olarak kullanılırsa eleman eklenip silinince karışıklık olur."
          },
          {
            "q": "Controlled input nedir? Uncontrolled input ile farkı nedir?",
            "answer": "Controlled: değer React state'inde tutulur, onChange ile güncellenir. Uncontrolled: değer DOM'da tutulur, ref ile okunur. Controlled daha öngörülüdür."
          }
        ],
        "quiz": [
          {
            "q": "Controlled input'ta onChange handler zorunlu mudur?",
            "options": [
              "Hayır",
              "Evet, yoksa input readonly olur",
              "Sadece text input'larda",
              "Sadece form submit'te"
            ],
            "correct": 1,
            "explanation": "value prop verilince React input'u kontrol eder. onChange olmadan kullanıcı yazamaz (read-only). value + onChange birlikte kullanılmalı."
          },
          {
            "q": "React.FormEvent<HTMLFormElement> tipi ne için kullanılır?",
            "options": [
              "Input değişim eventi",
              "Form submit eventi",
              "Buton tıklama eventi",
              "Klavye eventi"
            ],
            "correct": 1,
            "explanation": "Form submit handler'ının parametresi React.FormEvent<HTMLFormElement> tipindedir. e.preventDefault() ile sayfanın yenilenmesi engellenir."
          },
          {
            "q": "Dinamik listede key olarak dizi indeksi kullanmak neden sakıncalıdır?",
            "options": [
              "Performans düşer",
              "Eleman ekleme/silinmede key'ler kayar, yanlış bileşen güncellenir",
              "TypeScript hata verir",
              "Zorunlu kullanılmalıdır"
            ],
            "correct": 1,
            "explanation": "Eleman silinince sonraki elemanların indeksi değişir. React yanlış bileşeni günceller. Benzersiz stabil ID tercih edilmeli."
          },
          {
            "q": "Controlled component nedir?",
            "options": [
              "Redux bileşeni",
              "State kontrollü form bileşeni",
              "Okunabilir",
              "Otomatik validasyon"
            ],
            "correct": 1,
            "explanation": "value state'ten gelir ve onChange ile güncellenir."
          },
          {
            "q": "Multi-step formda hangi strateji?",
            "options": [
              "Ayrı useState",
              "Tek state + useReducer",
              "Global state",
              "State yok"
            ],
            "correct": 1,
            "explanation": "useReducer ile adım geçişleri ve veri tutarlılığı sağlanır."
          }
        ]
      },
      {
        "id": "hook-form",
        "title": "React Hook Form",
        "group": "form-routing",
        "explanation": [
          "React Hook Form, performanslı ve esnek form yönetimi kütüphanesidir. Uncontrolled input temeli üzerine kuruludur: her keystroke'ta re-render olmaz. Controlled input'a göre çok daha performanslıdır.",
          "register, handleSubmit, formState: { errors } üçlüsü temel kullanımdır. TypeScript ile form değerleri tam olarak tiplenebilir.",
          "Zod veya Yup ile schema validasyon entegrasyonu sağlanır. @hookform/resolvers/zod paketi ile Zod şeması direkt form validasyonuna bağlanır."
        ],
        "tip": "React Hook Form'da watch() her izlenen alan değiştiğinde bileşeni yeniden render eder. Sadece gerekli alanları izleyin. Büyük formlarda getValues() ile render tetiklemeden değere erişmek daha performanslıdır.",
        "examples": [
          {
            "label": "React Hook Form Temelleri",
            "tip": "RHF'de register() ile input'u kaydettiğinizde, uncontrolled input prensibine göre ref ile takip edilir. Bu nedenle her tuşta re-render olmaz — büyük formlarda ciddi performans avantajı sağlar.",
            "code": "import { useForm } from \"react-hook-form\";\n// NOT: Bu örnek konsept gösterimidir (kütüphane kurulu olmayabilir)\n\ntype KayitForm = {\n  ad: string;\n  email: string;\n  sifre: string;\n  yas: number;\n};\n\nconst KayitFormu: React.FC = () => {\n  const {\n    register,\n    handleSubmit,\n    formState: { errors },\n  } = useForm<KayitForm>();\n\n  const gonder = (data: KayitForm) => {\n    console.log(\"Form verisi:\", data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit(gonder)} className=\"space-y-4\">\n      <div>\n        <input\n          {...register(\"ad\", {\n            required: \"Ad zorunludur\",\n            minLength: { value: 2, message: \"En az 2 karakter\" },\n          })}\n          placeholder=\"Adınız\"\n          className=\"border rounded px-3 py-2 w-full\"\n        />\n        {errors.ad && (\n          <span className=\"text-red-500 text-sm\">{errors.ad.message}</span>\n        )}\n      </div>\n\n      <div>\n        <input\n          {...register(\"email\", {\n            required: \"E-posta zorunludur\",\n            pattern: { value: /^[^@]+@[^@]+$/, message: \"Geçerli e-posta girin\" },\n          })}\n          placeholder=\"E-posta\"\n          className=\"border rounded px-3 py-2 w-full\"\n        />\n        {errors.email && (\n          <span className=\"text-red-500 text-sm\">{errors.email.message}</span>\n        )}\n      </div>\n\n      <button\n        type=\"submit\"\n        className=\"bg-indigo-600 text-white px-4 py-2 rounded-lg\"\n      >\n        Kayıt Ol\n      </button>\n    </form>\n  );\n};"
          },
          {
            "label": "Zod ile Şema Validasyonu",
            "tip": "Zod şemasını formdan bağımsız olarak da kullanabilirsiniz: API yanıtlarını, URL parametrelerini veya localStorage verilerini Zod ile parse ederek tip güvenliğini runtime'a taşıyın.",
            "code": "// Bu örnek React Hook Form + Zod entegrasyonunun konseptini gösterir.\n// Gerçek kullanım: pnpm add react-hook-form zod @hookform/resolvers\n\n// 1) Zod şeması — validasyon kuralları\n// import { z } from \"zod\";\n// const kayitSemasi = z.object({\n//   ad: z.string().min(2, \"En az 2 karakter\"),\n//   email: z.string().email(\"Geçerli e-posta girin\"),\n//   yas: z.number().min(18, \"18 yaşından büyük olmalı\"),\n//   sifre: z.string().min(8).regex(/[A-Z]/, \"Büyük harf içermeli\"),\n//   sifreTekrar: z.string(),\n// }).refine(d => d.sifre === d.sifreTekrar, {\n//   message: \"Şifreler eşleşmiyor\",\n//   path: [\"sifreTekrar\"],\n// });\n\n// 2) Şemadan TypeScript tipi üretme\n// type KayitForm = z.infer<typeof kayitSemasi>;\n\n// 3) RHF + zodResolver ile form\n// const { register, handleSubmit, formState: { errors } } = useForm<KayitForm>({\n//   resolver: zodResolver(kayitSemasi),\n// });\n\n// 4) Submit handler — sadece validasyon geçince çağrılır\n// const gonder = (veri: KayitForm) => console.log(veri);\n\n// Avantajlar:\n// - Tek kaynak: validasyon hem frontend hem backend paylaşılır\n// - TypeScript tipi otomatik oluşur (z.infer)\n// - Karmaşık kurallar (refine, transform) sade sözdizimi ile yazılır\n\n// Manuel validasyon örneği (kütüphane olmadan):\nconst emailKontrol = (email: string): boolean =>\n  /^[^@]+@[^@]+.[^@]+$/.test(email);\n\nconst sifreKontrol = (sifre: string): string[] => {\n  const hatalar: string[] = [];\n  if (sifre.length < 8) hatalar.push(\"En az 8 karakter\");\n  if (!/[A-Z]/.test(sifre)) hatalar.push(\"Büyük harf içermeli\");\n  if (!/[0-9]/.test(sifre)) hatalar.push(\"Rakam içermeli\");\n  return hatalar;\n};"
          }
        ],
        "practice": [
          {
            "q": "React Hook Form neden controlled input yerine uncontrolled kullanır?",
            "answer": "Uncontrolled ile her tuş vuruşunda re-render olmaz. State yerine ref ile değer okunur. Büyük formlarda önemli performans avantajı sağlar."
          },
          {
            "q": "formState.errors nesnesi nasıl kullanılır?",
            "answer": "Her alan için hata mesajı içerir. errors.ad?.message ile güvenli erişilir. Register'daki validasyon kuralları tetiklenince otomatik dolar."
          }
        ],
        "quiz": [
          {
            "q": "React Hook Form'da register fonksiyonu ne döndürür?",
            "options": [
              "State değeri",
              "name, ref, onChange, onBlur prop'larını içeren nesne",
              "Sadece ref",
              "Validasyon sonucu"
            ],
            "correct": 1,
            "explanation": "register, input'a spread edilecek prop'ları döndürür: {...register('alan')}. Bu sayede RHF input'u takip edebilir."
          },
          {
            "q": "handleSubmit ne işe yarar?",
            "options": [
              "Form'u sıfırlar",
              "Validasyon yapar, başarılıysa callback'i data ile çağırır",
              "State günceller",
              "Hataları temizler"
            ],
            "correct": 1,
            "explanation": "handleSubmit validasyonu çalıştırır. Başarılıysa form verilerini typed nesne olarak submit callback'e iletir. Hatalıysa errors dolar, callback çağrılmaz."
          },
          {
            "q": "Zod resolver ne işe yarar?",
            "options": [
              "RHF'yi Zod'la değiştirir",
              "Zod şemasını RHF validasyonuna bağlar",
              "Type üretir",
              "Performans artırır"
            ],
            "correct": 1,
            "explanation": "@hookform/resolvers/zod ile Zod şeması RHF'ye resolver olarak bağlanır. Tüm validasyon Zod şemasında merkezi olarak yönetilir."
          },
          {
            "q": "register fonksiyonu ne yapar?",
            "options": [
              "Kullanıcı kaydı",
              "Input'u form state'ine bağlar",
              "DB kaydı",
              "Sadece validasyon"
            ],
            "correct": 1,
            "explanation": "register ref ve handler bağlayarak form state'inde takip sağlar."
          },
          {
            "q": "React Hook Form neden performanslı?",
            "options": [
              "Az kod",
              "Uncontrolled — gereksiz re-render yok",
              "Sadece TS",
              "Virtual DOM yok"
            ],
            "correct": 1,
            "explanation": "Ref tabanlı yaklaşım her tuş vuruşunda re-render tetiklemez."
          }
        ]
      },
      {
        "id": "react-router",
        "title": "React Router",
        "group": "form-routing",
        "explanation": [
          "React Router, React uygulamalarında client-side routing sağlayan kütüphanedir. URL değişince sayfa yenilemeden farklı bileşenler render edilir. v6 ile declarative routing yapısı kolaylaştı.",
          "BrowserRouter uygulamayı sarar. Routes içindeki Route bileşenleri path-component eşlemesini tanımlar. Link/NavLink ile programatik yönlendirme yerine tipli navigasyon sağlanır.",
          "useNavigate ile programatik yönlendirme, useParams ile URL parametresi okuma, useSearchParams ile query string yönetimi yapılır."
        ],
        "tip": "Nested layout route'larında <Outlet /> bileşenini layout içine yerleştirin. Outlet'siz bir layout route, alt route'ları render etmez. Bu React Router v6'nın en sık yapılan hatasıdır.",
        "examples": [
          {
            "label": "React Router Temelleri",
            "tip": "useParams() string döndürür. URL'den sayısal ID okurken parseInt veya Number() ile dönüştürmeyi unutmayın. TypeScript bu noktada yardımcı olmaz — id: string olarak gelir.",
            "code": "// NOT: react-router-dom kütüphanesi gerektirir\n// Bu örnek konsept ve sözdizimi gösterimidir\n\nimport {\n  BrowserRouter, Routes, Route,\n  Link, useNavigate, useParams,\n} from \"react-router-dom\";\n\nconst App: React.FC = () => (\n  <BrowserRouter>\n    <nav>\n      <Link to=\"/\">Ana Sayfa</Link>\n      <Link to=\"/hakkinda\">Hakkında</Link>\n      <Link to=\"/kullanici/1\">Profil</Link>\n    </nav>\n    <Routes>\n      <Route path=\"/\" element={<AnaSayfa />} />\n      <Route path=\"/hakkinda\" element={<Hakkinda />} />\n      {/* :id — dinamik URL parametresi */}\n      <Route path=\"/kullanici/:id\" element={<KullaniciProfili />} />\n      {/* * — hiçbir route eşleşmezse (404) */}\n      <Route path=\"*\" element={<BulunamadiSayfasi />} />\n    </Routes>\n  </BrowserRouter>\n);\n\n// URL parametresi okuma\nconst KullaniciProfili: React.FC = () => {\n  const { id } = useParams<{ id: string }>();\n  const kullaniciId = Number(id); // string → number dönüşümü\n  return <div>Kullanıcı ID: {kullaniciId}</div>;\n};\n\n// Programatik yönlendirme\nconst GirisFormu: React.FC = () => {\n  const navigate = useNavigate();\n  const girisYap = () => navigate(\"/panel\"); // yönlendir\n  return <button onClick={girisYap}>Giriş Yap</button>;\n};"
          },
          {
            "label": "Korumalı Route Deseni",
            "tip": "Protected Route deseni kimlik doğrulama gerektiren sayfaları auth olmayan kullanıcılardan korur. useAuth hook'u ile kullanıcı bilgisini okuyun ve giriş yapmamışsa /giris'e yönlendirin.",
            "code": "// Korumalı route bileşeni\n// const KorunalanRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {\n//   const { kullanici } = useAuth(); // context'ten kullanıcı bilgisi\n//   const konum = useLocation();    // mevcut URL\n//\n//   // Giriş yapılmamışsa, geri dönüş URL'ini state'e kaydederek login'e git\n//   if (!kullanici) {\n//     return <Navigate to=\"/giris\" state={{ from: konum }} replace />;\n//   }\n//   return <>{children}</>;\n// };\n\n// Route yapısına entegrasyon:\n// <Routes>\n//   <Route path=\"/giris\" element={<GirisSayfasi />} />\n//   <Route path=\"/panel\" element={\n//     <KorunalanRoute>\n//       <PanelLayout />\n//     </KorunalanRoute>\n//   }>\n//     <Route index element={<PanelAnaSayfa />} />\n//     <Route path=\"profil\" element={<Profil />} />\n//   </Route>\n// </Routes>\n\n// Login sonrası geri yönlendirme:\n// const GirisSayfasi: React.FC = () => {\n//   const navigate = useNavigate();\n//   const konum = useLocation();\n//   const { girisYap } = useAuth();\n//\n//   const gonder = (e: React.FormEvent) => {\n//     e.preventDefault();\n//     girisYap({ id: 1, ad: \"Emirhan\", rol: \"admin\" });\n//     // Gelmeden önceki sayfaya veya /panel'e dön\n//     const hedef = (konum.state as { from?: Location })?.from?.pathname || \"/panel\";\n//     navigate(hedef, { replace: true });\n//   };\n//   ...\n// };\n\n// Rol bazlı koruma:\n// const RolRoute: React.FC<{ gereken: \"admin\" | \"kullanici\"; children: React.ReactNode }> = ({\n//   gereken, children,\n// }) => {\n//   const { kullanici } = useAuth();\n//   if (kullanici?.rol !== gereken)\n//     return <Navigate to=\"/yetkisiz\" replace />;\n//   return <>{children}</>;\n// };"
          }
        ],
        "practice": [
          {
            "q": "Link ve NavLink bileşenlerinin farkı nedir? NavLink ne zaman tercih edilir?",
            "answer": "NavLink aktif route için otomatik aktif sınıf ekler (className prop'u ile özelleştirilebilir). Navigasyon menüsü için NavLink, diğer yönlendirmeler için Link tercih edilir."
          },
          {
            "q": "useNavigate() ile <Link to='...'> arasındaki farkı açıklayın.",
            "answer": "Link JSX içindedir, kullanıcı tıklayarak gider. useNavigate programatik yönlendirme içindir: form submit sonrası, koşullu yönlendirme gibi durumlarda kullanılır."
          }
        ],
        "quiz": [
          {
            "q": "React Router'da '*' path'i ne anlama gelir?",
            "options": [
              "Tüm route'ları eşleştirir",
              "Hiçbir route eşleşmediğinde (404 sayfası) gösterilir",
              "Nested route tanımlar",
              "Dinamik parametre tanımlar"
            ],
            "correct": 1,
            "explanation": "path='*' bir wildcard'dır. Önceki hiçbir Route eşleşmediğinde bu Route render edilir. 404 (Bulunamadı) sayfası için kullanılır."
          },
          {
            "q": "useParams() hook'u ne döndürür?",
            "options": [
              "Query string parametreleri",
              "URL'deki :parametre değerlerini nesne olarak",
              "Route listesini",
              "Navigate fonksiyonunu"
            ],
            "correct": 1,
            "explanation": "useParams(), Route path'indeki :parametre kısımlarının değerlerini nesne olarak döndürür. <Route path='/user/:id'> için useParams() → { id: '...' }"
          },
          {
            "q": "client-side routing ile server-side routing arasındaki fark nedir?",
            "options": [
              "Client-side daha yavaştır",
              "Client-side sayfa yenilemeden URL ve içeriği değiştirir",
              "Server-side daha moderndir",
              "Aralarında fark yoktur"
            ],
            "correct": 1,
            "explanation": "Client-side routing JavaScript ile gerçekleşir, sunucuya yeni HTML talebi gitmez. Daha hızlı geçiş sağlar. React Router bu yöntemi kullanır."
          },
          {
            "q": "useNavigate ne yapar?",
            "options": [
              "Sayfa başlığı",
              "Programatik route değişikliği",
              "URL params okur",
              "Sayfa yeniler"
            ],
            "correct": 1,
            "explanation": "navigate('/dashboard') ile yönlendirme yapar."
          },
          {
            "q": "useParams ne döndürür?",
            "options": [
              "Query string",
              "Dinamik route parametreleri (:id)",
              "HTTP header",
              "Scroll pozisyon"
            ],
            "correct": 1,
            "explanation": "Route path'indeki :id gibi segmentlerin değerlerini döndürür."
          }
        ]
      },
      {
        "id": "nested-routes",
        "title": "Nested Routes (İç İçe Route)",
        "group": "form-routing",
        "explanation": [
          "Nested routes, bir route içinde başka route'lar tanımlamayı sağlar. Ortak layout (header, sidebar) paylaşan sayfalar için idealdir. v6'da <Outlet /> bileşeni alt route'ların render yeri olarak kullanılır.",
          "Panel/admin gibi uygulamalarda layout route'u sidebar ve header'ı içerir. <Outlet /> ile aktif alt route'un içeriği oraya enjekte edilir.",
          "Index route (index prop), bir grubun varsayılan sayfasını tanımlar. Relative path ile nested route'lar kısa yazılır."
        ],
        "tip": "Nested route'larda göreli (relative) path kullanın — başında / olmadan. /panel/kullanicilar yerine sadece kullanicilar yazın. Bu sayede parent route path'i değiştiğinde alt route'ları güncellemeniz gerekmez.",
        "examples": [
          {
            "label": "Nested Routes Temelleri",
            "tip": "Outlet context API'sini kullanarak layout'tan alt route'lara veri iletebilirsiniz: <Outlet context={{ kullanici }} /> ve useOutletContext<{kullanici: Kullanici}>() ile okuyabilirsiniz.",
            "code": "// NOT: react-router-dom kütüphanesi gerektirir\nimport { Routes, Route, Outlet, Link } from \"react-router-dom\";\n\n// Layout bileşeni — Outlet ile alt route'lar buraya render edilir\nconst PanelLayout: React.FC = () => (\n  <div className=\"flex\">\n    <aside className=\"w-48 bg-slate-800 text-white p-4\">\n      <nav className=\"space-y-2\">\n        {/* Göreli path — başında / yok */}\n        <Link to=\"/panel\">Ana Panel</Link>\n        <Link to=\"/panel/kullanicilar\">Kullanıcılar</Link>\n        <Link to=\"/panel/ayarlar\">Ayarlar</Link>\n      </nav>\n    </aside>\n    <main className=\"flex-1 p-6\">\n      <Outlet /> {/* aktif alt route buraya render edilir */}\n    </main>\n  </div>\n);\n\n// Route yapısı\nconst App: React.FC = () => (\n  <Routes>\n    <Route path=\"/panel\" element={<PanelLayout />}>\n      {/* index: /panel adresinde gösterilir */}\n      <Route index element={<PanelAnaSayfa />} />\n      {/* /panel/kullanicilar */}\n      <Route path=\"kullanicilar\" element={<Kullanicilar />} />\n      {/* /panel/ayarlar */}\n      <Route path=\"ayarlar\" element={<Ayarlar />} />\n    </Route>\n  </Routes>\n);"
          },
          {
            "label": "İç İçe Veri Route'ları",
            "tip": "Derin nested route'larda her seviye kendi <Outlet />'ini render etmeli. 3 seviye: App → PanelLayout (Outlet) → KullaniciLayout (Outlet) → KullaniciDetay",
            "code": "// 3 seviye nesting örneği\n// <Routes>\n//   <Route path=\"/\" element={<AnaSayfa />} />\n//   <Route path=\"/panel\" element={<PanelLayout />}>\n//     <Route index element={<PanelAnaSayfa />} />       {/* /panel */}\n//     <Route path=\"kullanicilar\" element={<KullaniciLayout />}>\n//       <Route index element={<KullaniciListesi />} />  {/* /panel/kullanicilar */}\n//       <Route path=\":id\" element={<KullaniciDetay />} />{/* /panel/kullanicilar/42 */}\n//     </Route>\n//     <Route path=\"ayarlar\" element={<Ayarlar />} />\n//     {/* /panel altındaki bilinmeyen → /panel'e yönlendir */}\n//     <Route path=\"*\" element={<Navigate to=\"/panel\" replace />} />\n//   </Route>\n// </Routes>\n\n// KullaniciLayout — kendi Outlet'i var + context ile veri iletir\n// const KullaniciLayout: React.FC = () => {\n//   const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([]);\n//   useEffect(() => { /* API çağrısı */ }, []);\n//   return (\n//     <div>\n//       <h2>Kullanıcılar ({kullanicilar.length})</h2>\n//       {/* context ile alt route'lara veri ilet */}\n//       <Outlet context={{ kullanicilar, setKullanicilar }} />\n//     </div>\n//   );\n// };\n\n// KullaniciDetay — useParams + useOutletContext\n// const KullaniciDetay: React.FC = () => {\n//   const { id } = useParams<{ id: string }>();\n//   const { kullanicilar } = useOutletContext<{ kullanicilar: Kullanici[] }>();\n//   const kullanici = kullanicilar.find(k => k.id === Number(id));\n//   if (!kullanici)\n//     return <Navigate to=\"/panel/kullanicilar\" replace />;\n//   return <div><h3>{kullanici.ad}</h3></div>;\n// };\n\n// Programatik aktif link — NavLink ile\n// const PanelSidebar: React.FC = () => (\n//   <nav>\n//     {[\n//       { to: \"/panel\", label: \"Ana Panel\", end: true },\n//       { to: \"/panel/kullanicilar\", label: \"Kullanıcılar\", end: false },\n//     ].map(item => (\n//       <NavLink key={item.to} to={item.to} end={item.end}\n//         className={({ isActive }) => isActive ? \"font-bold text-white\" : \"text-slate-400\"}\n//       >\n//         {item.label}\n//       </NavLink>\n//     ))}\n//   </nav>\n// );"
          }
        ],
        "practice": [
          {
            "q": "<Outlet /> bileşeninin rolü nedir? Olmasa ne olur?",
            "answer": "Outlet, parent route'un layout'unda aktif child route'un render edileceği yeri işaretler. Olmasa child route'lar görüntülenemez."
          },
          {
            "q": "Index route nedir ve ne zaman kullanılır?",
            "answer": "index prop'lu Route, parent path'i tam eşleştiğinde (alt path olmadan) render edilen varsayılan alt route'dur. /panel gittiğinde <PanelAnaSayfa /> gösterilir."
          }
        ],
        "quiz": [
          {
            "q": "<Outlet /> ne işe yarar?",
            "options": [
              "Route listesi oluşturur",
              "Parent layout'ta child route'un render yeri",
              "Global state tutar",
              "Navigation sağlar"
            ],
            "correct": 1,
            "explanation": "Outlet, nested route yapısında parent layout bileşeni içinde child route'un render edileceği slot'u işaretler."
          },
          {
            "q": "index route hangi path'e karşılık gelir?",
            "options": [
              "/* path'ine",
              "/index path'ine",
              "Parent path'in tam kendisine",
              "Tanımsız path'e"
            ],
            "correct": 2,
            "explanation": "index Route, parent Route'un path'i tam olarak eşleştiğinde render edilir. <Route path='/panel'> içindeki index → /panel adresinde görünür."
          },
          {
            "q": "Nested routes'un en büyük avantajı nedir?",
            "options": [
              "Daha hızlı yükleme",
              "Layout'u paylaşan sayfalar için ortak UI tek yerde yönetilir",
              "Daha az kod",
              "SEO iyileştirmesi"
            ],
            "correct": 1,
            "explanation": "Sidebar, header gibi ortak UI elemanları layout route'ta tek seferinde tanımlanır. Tüm alt sayfalarda tekrarlanmaz."
          },
          {
            "q": "Outlet olmadan nested route?",
            "options": [
              "Otomatik render",
              "Child'lar görünmez kalır",
              "Hata fırlatılır",
              "Parent çalışmaz"
            ],
            "correct": 1,
            "explanation": "Outlet child route'un render yerini işaretler."
          },
          {
            "q": "Protected route nasıl uygulanır?",
            "options": [
              "CSS gizler",
              "Auth kontrol + yetkisizse yönlendirir",
              "Sadece backend",
              "URL şifreler"
            ],
            "correct": 1,
            "explanation": "Auth bileşeni yetkisizse Navigate ile login'e yönlendirir."
          }
        ]
      }
    ]
  },
  {
    "id": "api-baglantisi",
    "title": "API Bağlantısı",
    "color": "bg-red-500",
    "bgColor": "bg-red-50",
    "textColor": "text-red-600",
    "activeBg": "bg-red-100",
    "activeText": "text-red-700",
    "topics": [
      {
        "id": "fetch-api",
        "title": "Fetch API Kullanımı",
        "group": "api-baglantisi",
        "explanation": [
          "React uygulamalarında dış veri kaynaklarıyla (API) iletişim kurmak için tarayıcıların yerleşik Fetch API'si kullanılır.",
          "Veri çekme işlemleri genellikle bileşen yüklendiğinde bir kez çalışacak olan `useEffect` hook'u içerisinde yapılır."
        ],
        "tip": "Fetch API, hata durumlarında (örneğin 404) otomatik olarak catch bloğuna düşmez. Response'un `ok` özelliğini kontrol etmeniz gerekir.",
        "examples": [
          {
            "label": "Temel Fetch",
            "tip": "Asenkron işlemlerde veri gelene kadar kullanıcıya bir yükleniyor (loading) durumu göstermek en iyi pratiktir.",
            "code": "import { useState, useEffect } from 'react';\n\ntype User = { id: number; name: string };\n\nfunction UserList() {\n  const [users, setUsers] = useState<User[]>([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(res => res.json())\n      .then(data => {\n        setUsers(data);\n        setLoading(false);\n      });\n  }, []);\n\n  if (loading) return <p>Yükleniyor...</p>;\n\n  return (\n    <ul>\n      {users.map(u => <li key={u.id}>{u.name}</li>)}\n    </ul>\n  );\n}"
          }
        ],
        "practice": [
          {
            "q": "Fetch işleminde dönen yanıtı JSON objesine nasıl çeviririz?",
            "answer": "response.json() metodu ile promise döner, bu çözümlendiğinde JSON verisini alırız."
          }
        ],
        "quiz": [
          { "q": "Fetch işlemi nerede yapılır?", "options": ["useState içinde", "useEffect içinde", "Dışarıda", "Component dışında"], "correct": 1, "explanation": "Yan etkiler (side-effects) useEffect içinde ele alınır." },
          { "q": "Fetch ağ (network) hatası dışında (örn: 404) hata fırlatır mı?", "options": ["Her zaman", "Ağ bağlantısı koptuğunda", "404'te fırlatır", "Hiçbir zaman fırlatmaz"], "correct": 1, "explanation": "404 gibi HTTP hatalarında promise reject olmaz, sadece ağ hatasında reject olur. `res.ok` kontrolü gerekir." },
          { "q": "Asenkron işlemlerin tamamlanmasını beklemek için ne kullanılır?", "options": ["async/await", "if/else", "for loop", "while"], "correct": 0, "explanation": "JavaScript'te asenkron işlemleri beklemek için `async/await` veya `.then()` zinciri kullanılır." },
          { "q": "REST API'ye POST isteği atarken fetch() fonksiyonunun ikinci parametresi ne işe yarar?", "options": ["Hata fırlatır", "URL'i değiştirir", "Ayar objesi (method, headers, body) alır", "Gereksizdir"], "correct": 2, "explanation": "Fetch ile POST, PUT gibi işlemler yaparken ikinci parametre olarak method, headers ve body içeren bir obje gönderilir." },
          { "q": "React bileşeni API verisini beklerken genelde ne gösterilir?", "options": ["Boş sayfa", "Reklam", "Loading (Yükleniyor) mesajı", "404 hatası"], "correct": 2, "explanation": "Kullanıcı deneyimi (UX) için veri gelene kadar yükleniyor işareti veya metni gösterilir." }
        ]
      },
      {
        "id": "axios-kullanimi",
        "title": "Axios ile İleri Seviye",
        "group": "api-baglantisi",
        "explanation": [
          "Axios, promise tabanlı popüler bir HTTP istemcisidir. Fetch API'ye göre daha kolay kullanım, otomatik JSON dönüşümü ve daha iyi hata yakalama sunar.",
          "Ayrıca interceptors (araya giriciler) özelliği ile her isteğe otomatik olarak yetkilendirme (Token) eklemek gibi gelişmiş senaryoları destekler."
        ],
        "tip": "Axios kullanırken dönen veri `response.data` içerisinde bulunur. Fetch'teki gibi ayrıca `.json()` çağırmanıza gerek yoktur.",
        "examples": [
          {
            "label": "Axios Kullanımı",
            "tip": "axios.get() fonksiyonu direkt veriyi .data property'si ile getirir.",
            "code": "import { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nfunction PostList() {\n  const [posts, setPosts] = useState([]);\n\n  useEffect(() => {\n    axios.get('https://jsonplaceholder.typicode.com/posts')\n      .then(response => {\n        setPosts(response.data);\n      })\n      .catch(error => {\n        console.error('Hata oluştu:', error);\n      });\n  }, []);\n\n  return <div>{posts.length} gönderi yüklendi.</div>;\n}"
          }
        ],
        "practice": [
          {
            "q": "Axios ile veri çekerken ayrıca JSON dönüştürmeye gerek var mıdır?",
            "answer": "Hayır, Axios otomatik olarak JSON dönüşümü yapar ve sonucu response.data içinde sunar."
          }
        ],
        "quiz": [
          { "q": "Axios'un Fetch API'ye göre en büyük avantajı nedir?", "options": ["Daha yavaş olması", "Otomatik JSON dönüşümü", "Daha az yer kaplaması", "Tarayıcıya gömülü olması"], "correct": 1, "explanation": "Otomatik JSON dönüşümü ve daha kolay hata yönetimidir (HTTP hatalarında doğrudan catch bloğuna düşer)." },
          { "q": "Axios'ta veri nesnesine nereden ulaşılır?", "options": ["response.json", "response.body", "response.data", "response.text"], "correct": 2, "explanation": "API'den dönen yanıtın asıl verisi her zaman `response.data` içinde bulunur." },
          { "q": "Axios 404 hatasında ne yapar?", "options": ["Hiçbir şey", "Catch bloğuna düşer", "Programı çöker", "Sessizce yoksayar"], "correct": 1, "explanation": "Axios, 2xx (başarılı) dışındaki tüm HTTP durum kodlarında otomatik olarak Promise'i reject eder ve catch bloğunu çalıştırır." },
          { "q": "Tüm Axios isteklerine (request) otomatik olarak yetkilendirme (Token) eklemek için hangi özellik kullanılır?", "options": ["Axios Routers", "Axios Interceptors", "Axios Guards", "Axios Modals"], "correct": 1, "explanation": "Interceptors (araya giriciler) kullanılarak tüm isteklere ve yanıtlara merkezi olarak müdahale edilebilir." },
          { "q": "React projelerinde Axios kütüphanesini kullanmak için ne yapmak gerekir?", "options": ["Tarayıcıda hazır gelir", "NPM veya Yarn ile projeye yüklemek gerekir", "Sadece HTML dosyasına yazılır", "İşletim sistemine kurulur"], "correct": 1, "explanation": "Axios harici bir kütüphanedir, `npm install axios` komutu ile projeye dahil edilmelidir." }
        ]
      }
    ]
  },
  {
    "id": "ekstralar",
    "title": "Ekstralar & Oyunlar",
    "color": "bg-purple-500",
    "bgColor": "bg-purple-50",
    "textColor": "text-purple-600",
    "activeBg": "bg-purple-100",
    "activeText": "text-purple-700",
    "topics": [
      {
        "id": "sss",
        "title": "Sıkça Sorulan Sorular",
        "group": "ekstralar",
        "explanation": [
          "React öğrenirken sıkça karşılaşılan soruları ve cevaplarını burada bulabilirsiniz.",
          "Soru 1: Neden React kullanmalıyım? C: Çünkü bileşen tabanlıdır, Virtual DOM sayesinde hızlıdır ve devasa bir topluluğu vardır.",
          "Soru 2: Next.js nedir? C: React tabanlı bir framework'tür. Sunucu tarafı oluşturma (SSR) ve SEO dostu uygulamalar için sıkça tercih edilir.",
          "Soru 3: TypeScript kullanmak şart mı? C: Şart değildir ancak büyük projelerde hata yapma riskini çok büyük oranda düşürür."
        ],
        "tip": "Dokümantasyon okumak, bir framework'ü öğrenmenin en iyi yoludur. react.dev adresini sık sık ziyaret edin.",
        "examples": [
          {
            "label": "Tavsiyeler",
            "tip": "Basit bir başlangıç",
            "code": "// Yeni bir React projesi oluşturmak için:\nnpm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install\nnpm run dev"
          }
        ],
        "practice": [
          {
            "q": "React.js bir framework müdür yoksa kütüphane midir?",
            "answer": "React bir kullanıcı arayüzü kütüphanesidir."
          }
        ],
        "quiz": [
          { "q": "React nedir?", "options": ["Veritabanı", "Kütüphane", "İşletim Sistemi", "Tarayıcı"], "correct": 1, "explanation": "UI kütüphanesidir." },
          { "q": "TypeScript kim tarafından geliştirilmiştir?", "options": ["Google", "Facebook", "Microsoft", "Twitter"], "correct": 2, "explanation": "Microsoft." },
          { "q": "Virtual DOM ne işe yarar?", "options": ["Performansı artırır", "CSS yazar", "Veritabanı bağlar", "Sunucu kurar"], "correct": 0, "explanation": "Sadece değişen kısımları güncelleyerek performansı artırır." },
          { "q": "Bileşen isimleri nasıl başlamalıdır?", "options": ["küçük harf", "Büyük harf", "Sayı", "Özel karakter"], "correct": 1, "explanation": "PascalCase olmalıdır." },
          { "q": "React'i kim yapmıştır?", "options": ["Google", "Microsoft", "Meta", "Amazon"], "correct": 2, "explanation": "Facebook (Meta)." }
        ]
      },
      {
        "id": "oyun",
        "title": "React Hafıza Oyunu",
        "group": "ekstralar",
        "explanation": [
          "Öğrendiğiniz kavramları pekiştirmek için eğlenceli bir eşleştirme oyunu oynayabilirsiniz.",
          "Sağ taraftaki sekmeden 'Oyunu Oyna' seçeneğiyle doğrudan oynayabilirsiniz."
        ],
        "tip": "Hepsini doğru eşleştirene kadar deneyin!",
        "examples": [],
        "practice": [],
        "quiz": [
          { "q": "Oyunu oynamak eğlenceli mi?", "options": ["Evet", "Hayır", "Belki", "Fikrim yok"], "correct": 0, "explanation": "Tebrikler!" },
          { "q": "Oyun React ile mi yapıldı?", "options": ["Evet", "Hayır", "Belki", "Bilinmiyor"], "correct": 0, "explanation": "Evet." },
          { "q": "Kaç kart var?", "options": ["4", "8", "12", "16"], "correct": 2, "explanation": "12." },
          { "q": "Eşleştirme ne üzerine?", "options": ["Kavram ve Tanım", "Sayılar", "Renkler", "Hayvanlar"], "correct": 0, "explanation": "Kavram ve Tanım." },
          { "q": "Kazanmak için ne yapmalısınız?", "options": ["Zamanı beklemek", "Hepsini eşleştirmek", "Tıklamamak", "Sayfayı yenilemek"], "correct": 1, "explanation": "Tüm çiftleri bulmalısınız." }
        ]
      }
    ]
  }
];
