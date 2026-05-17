

module.exports = [
  {
    id: "temel",
    title: "Temel Bilgiler",
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    activeBg: "bg-emerald-100",
    activeText: "text-emerald-700",
    topics: [
      {
        id: "react-giris",
        title: "React & TypeScript'e Giriş",
        group: "temel",
        explanation: [
          "React, kullanıcı arayüzleri oluşturmak için Facebook tarafından geliştirilen açık kaynaklı bir JavaScript kütüphanesidir. Bileşen tabanlı yapısı sayesinde büyük uygulamaları küçük, yeniden kullanılabilir parçalara bölerek geliştirmenizi sağlar.",
          "TypeScript, JavaScript'in üzerine inşa edilmiş ve statik tip denetimi ekleyen bir dildir. Hataları derleme zamanında yakalar, kod tamamlama ve refactoring araçlarını güçlendirir.",
          "React ve TypeScript birlikte kullanıldığında bileşen props'ları ve state'leri tam olarak tip güvenli hale gelir. Bu da büyük ekiplerde ve uzun vadeli projelerde hata oranını önemli ölçüde azaltır."
        ],
        tip: "React bileşenleri PascalCase (büyük harfle başlayan) isimlendirilmeli. Küçük harfle başlayan bileşen adları React tarafından HTML etiketi olarak yorumlanır ve beklenmedik hatalar oluşur.",
        examples: [
          {
            label: "Temel Bileşen",
            tip: "React.FC<Props> generic tipi sayesinde hem bileşen tipi hem de props tipi tek satırda tanımlanır. version?: number yazımındaki ? işareti bu prop'un zorunlu olmadığını belirtir.",
            code: `// React + TypeScript ile ilk bileşen
type WelcomeProps = {
  name: string;
  version?: number;  // ? => zorunlu değil
};

const Welcome: React.FC<WelcomeProps> = ({ name, version = 18 }) => {
  return (
    <div>
      <h1>Merhaba, {name}!</h1>
      <p>React v{version} kullanıyorsunuz.</p>
    </div>
  );
};

// Kullanım
<Welcome name="Emirhan" version={18} />`
          },
          {
            label: "Fragment & Koşullu Render",
            tip: "Fragment (<> </>) DOM'a ekstra element eklemeden birden fazla element döndürmenizi sağlar. Listelerde wrapper div eklemek istemediğinizde kullanın.",
            code: `// Fragment — gereksiz wrapper div olmadan çoklu element
const KullaniciBilgi: React.FC<{ ad: string; premium: boolean }> = ({
  ad,
  premium,
}) => {
  return (
    <>
      <h2>{ad}</h2>
      {/* Koşullu render: premium ise rozet göster */}
      {premium && (
        <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">
          Premium Üye
        </span>
      )}
      {/* Üçlü operatör ile farklı içerik */}
      <p>
        {premium
          ? "Tüm içeriklere erişiminiz var."
          : "Ücretsiz plan kullanıyorsunuz."}
      </p>
    </>
  );
};`
          }
        ],
        practice: [
          { q: "React'ın bileşen tabanlı mimarisinin avantajları nelerdir?", answer: "Bileşenler yeniden kullanılabilir, bağımsız olarak test edilebilir ve büyük uygulamaları yönetmeyi kolaylaştırır." },
          { q: "TypeScript, saf JavaScript'e göre ne gibi avantajlar sunar?", answer: "Statik tip denetimi sayesinde hatalar derleme zamanında yakalanır, IDE desteği gelişir ve kod okunabilirliği artar." },
          { q: "React.FC generic tipinin anlamı nedir?", answer: "React.FC (FunctionComponent), bileşenin bir fonksiyon bileşeni olduğunu belirtir ve generic parametreyle props tipini alır." }
        ],
        quiz: [
          { q: "React hangi şirkete tarafından geliştirilmiştir?", options: ["Google","Microsoft","Facebook (Meta)","Apple"], correct: 2, explanation: "React, Facebook (şimdiki adıyla Meta) tarafından 2013 yılında açık kaynak olarak yayımlanmıştır." },
          { q: "TypeScript hangi şirkete tarafından geliştirilmiştir?", options: ["Google","Microsoft","Facebook","JetBrains"], correct: 1, explanation: "TypeScript, Microsoft tarafından 2012 yılında geliştirilmiş ve açık kaynak olarak yayımlanmıştır." },
          { q: "React.FC<Props> yazımında <Props> ne anlama gelir?", options: ["Bileşenin adı","Props'un tipini belirtir","State tipini belirtir","Return tipini belirtir"], correct: 1, explanation: "Generic parametre <Props>, bileşenin kabul edeceği props'ların TypeScript tipini tanımlar." }
        ]
      },
      {
        id: "degiskenler",
        title: "Değişkenler & TypeScript Tipleri",
        group: "temel",
        explanation: [
          "JavaScript'te değişken tanımlamak için const, let ve var anahtar kelimeleri kullanılır. Modern kodda var kullanımından kaçınılır; const değişmez referanslar, let ise değişebilir değerler için tercih edilir.",
          "TypeScript'te her değişkene bir tip atanabilir: string, number, boolean, null, undefined, ve daha karmaşık tipler. Tip çıkarımı (type inference) sayesinde TypeScript çoğu zaman tipi otomatik algılar.",
          "Union tipler (|) bir değişkenin birden fazla tip alabilmesini, literal tipler ise yalnızca belirli değerleri kabul etmesini sağlar. Bu özellikler React state yönetiminde sıkça kullanılır."
        ],
        tip: "TypeScript'te 'type assertion' (as) kullanımından kaçının; mümkün olduğunda tip çıkarımına güvenin veya doğru tiplerle tanımlayın. as any kullanmak TypeScript'in tüm güvenlik avantajlarını ortadan kaldırır.",
        examples: [
          {
            label: "Temel Tipler",
            tip: "TypeScript değişkenlerin tipini çoğu zaman otomatik algılar (tip çıkarımı). Açık tip yazmak zorunlu değildir ancak okunabilirliği artırır.",
            code: `// Temel tipler
const ad: string = "Emirhan";
let yas: number = 20;
let aktif: boolean = true;

// Union tipler
let durum: "aktif" | "pasif" | "beklemede" = "aktif";

// Tip çıkarımı (TypeScript otomatik algılar)
const pi = 3.14; // number olarak çıkarım yapılır

// Array tipleri
const sayilar: number[] = [1, 2, 3];
const isimler: Array<string> = ["Ali", "Veli"];

// Optional chaining
const kullanici = { profil: { yas: 25 } };
const kullaniciYas = kullanici?.profil?.yas; // güvenli erişim`
          },
          {
            label: "Interface & Generics",
            tip: "Generic tipler <T> kod tekrarını önler. Aynı mantığı farklı tip verilere uygulamak için idealdir. API yanıtlarını sarmak için ApiResponse<T> gibi generic wrapper'lar yaygın bir pratiktir.",
            code: `// Interface tanımı (type alias'a alternatif)
interface Kullanici {
  readonly id: number;  // readonly: sonradan değiştirilemez
  ad: string;
  yas: number;
  email?: string;       // opsiyonel alan
}

// Generic tip — T herhangi bir tip olabilir
type ApiYanit<T> = {
  veri: T;
  durum: "basarili" | "hata";
  mesaj: string;
};

// Kullanım — T yerine Kullanici geçirildi
const yanit: ApiYanit<Kullanici> = {
  veri: { id: 1, ad: "Emirhan", yas: 20 },
  durum: "basarili",
  mesaj: "Kullanıcı bulundu",
};

// Tuple tipi — sabit uzunluk + sıralı tipler
const koordinat: [number, number] = [41.015, 28.979];

// Record tipi — key-value eşleşmesi
const puanlar: Record<string, number> = {
  matematik: 85,
  fizik: 92,
};`
          }
        ],
        practice: [
          { q: "const ile let arasındaki fark nedir? Ne zaman hangisini kullanmalısınız?", answer: "const yeniden atanamaz (nesne içeriği değiştirilebilir), let ise yeniden atanabilir. Mümkün olduğunca const tercih edilmeli, sadece değişecekse let kullanılmalıdır." },
          { q: "'aktif' | 'pasif' gibi literal union tip ne zaman kullanılır?", answer: "Bir değişkenin yalnızca belirli string/number değerlerini alabilmesi gerektiğinde kullanılır. React'te status, theme, role gibi alanlarda yaygındır." }
        ],
        quiz: [
          { q: "Hangisi doğru TypeScript tip tanımıdır?", options: ["let x = string","let x: string = 'merhaba'","let x: String = 'merhaba'","string x = 'merhaba'"], correct: 1, explanation: "TypeScript'te tip anotasyonu değişken adından sonra : ile yazılır: let x: string = 'merhaba'" },
          { q: "const ile tanımlanan bir nesnenin özelliği değiştirilebilir mi?", options: ["Hayır, const tamamen değişmezdir","Evet, nesne içeriği değiştirilebilir","Sadece number özellikleri değiştirilebilir","Hayır, hata verir"], correct: 1, explanation: "const yeniden atamayı engeller ama nesne/dizi içeriğini değiştirmeye izin verir. Nesne'nin referansı sabittir, içeriği değil." },
          { q: "TypeScript'te number | string ne anlama gelir?", options: ["number ve string aynı anda olabilir","number veya string olabilir","number ile string çarpımı","number'ı string'e çevirir"], correct: 1, explanation: "| (pipe) ile oluşturulan union tipler, değişkenin belirtilen tiplerden biri olabileceğini gösterir." }
        ]
      },
      {
        id: "kontrol-donguler",
        title: "Kontrol Deyimleri & Döngüler",
        group: "temel",
        explanation: [
          "if/else, switch deyimleri ile koşullu mantık yazılır. TypeScript'te koşul ifadelerinde boolean olmayan değerler tip güvenli şekilde kontrol edilir.",
          "for, while döngüleri ve dizi metodları (map, filter, reduce, forEach) iterasyon için kullanılır. React'te liste render etmek için map() en yaygın yöntemdir.",
          "React JSX içinde koşullu render için && operatörü, üçlü operatör (? :) veya erken return kullanılır. Bu pattern'ler TypeScript ile birleşince tip güvenli koşullu UI elde edilir."
        ],
        tip: "React'te her map() çağrısında mutlaka key prop ekleyin. key, React'in Virtual DOM diffing algoritmasının doğru çalışması için şarttır. key için dizi indeksi yerine benzersiz ve stabil bir ID kullanın.",
        examples: [
          {
            label: "Koşullu Render & Map",
            tip: "filter().map() zinciri React'te en yaygın veri dönüşüm kalıbıdır. filter gereksiz elemanları eler, map geri kalanları JSX'e dönüştürür.",
            code: `// Koşullu render
const Durum: React.FC<{ puan: number }> = ({ puan }) => {
  if (puan >= 90) return <span className="text-green-600">Mükemmel</span>;
  if (puan >= 70) return <span className="text-blue-600">İyi</span>;
  return <span className="text-red-600">Geliştirilmeli</span>;
};

// Map ile liste render
type Ogrenci = { id: number; ad: string; puan: number };
const ogr: Ogrenci[] = [
  { id: 1, ad: "Ali", puan: 85 },
  { id: 2, ad: "Ayşe", puan: 92 },
];

const OgrenciListesi: React.FC = () => (
  <ul>
    {ogr.map((o) => (
      <li key={o.id}>{o.ad} — {o.puan}</li>
    ))}
  </ul>
);

// Filter + map kombinasyonu
const basarilar = ogr.filter(o => o.puan >= 70).map(o => o.ad);`
          },
          {
            label: "Object Map Deseni",
            tip: "Switch yerine Object map deseni (nesne literal ile tip eşleştirme) daha kısa ve okunabilirdir. Record<K, V> tipiyle anahtar-değer eşlemesi tip güvenli tanımlanır.",
            code: `// Switch yerine Object map deseni
type Seviye = "basit" | "orta" | "ileri";

// Her seviye için stil sınıfı — Record ile tip güvenli
const seviyeStilleri: Record<Seviye, string> = {
  basit:  "bg-green-100 text-green-800",
  orta:   "bg-yellow-100 text-yellow-800",
  ileri:  "bg-red-100 text-red-800",
};

const SeviyeRozeti: React.FC<{ seviye: Seviye }> = ({ seviye }) => (
  <span className={\`px-2 py-1 rounded text-sm \${seviyeStilleri[seviye]}\`}>
    {seviye.toUpperCase()}
  </span>
);

// Object.entries ile key-value render
const istatistikler = {
  "Toplam Soru": 17,
  "Tamamlanan": 5,
  "Başarı Oranı": "85%",
};

const Istatistik: React.FC = () => (
  <dl className="grid grid-cols-3 gap-4">
    {Object.entries(istatistikler).map(([etiket, deger]) => (
      <div key={etiket}>
        <dt className="text-slate-500 text-sm">{etiket}</dt>
        <dd className="font-bold text-xl">{deger}</dd>
      </div>
    ))}
  </dl>
);`
          }
        ],
        practice: [
          { q: "React'te liste render ederken neden key prop'u zorunludur?", answer: "React, key prop'u kullanarak liste elemanlarını tanımlar ve DOM güncellemelerini optimize eder. key olmazsa konsol uyarısı alınır ve performans düşer." },
          { q: "JSX içinde if/else kullanılamaz, bunun yerine ne kullanılır?", answer: "Üçlü operatör (koşul ? a : b), kısa devre değerlendirme (koşul && element) veya erken return kullanılır." }
        ],
        quiz: [
          { q: "React'te list render ederken her elemana verilmesi gereken prop hangisidir?", options: ["id","name","key","index"], correct: 2, explanation: "key prop'u React'in her liste elemanını benzersiz olarak tanımasını sağlar. Mümkünse dizi indeksi yerine gerçek ID kullanılmalıdır." },
          { q: "JSX içinde {koşul && <Component />} ifadesi ne anlama gelir?", options: ["Her zaman Component'i render eder","koşul true ise Component render edilir","koşul false ise Component render edilir","Hata verir"], correct: 1, explanation: "&& (kısa devre) değerlendirmesi: sol taraf true ise sağ taraf evaluate edilir ve render edilir. false ise hiçbir şey render edilmez." },
          { q: "Array.map() ile Array.forEach() arasındaki temel fark nedir?", options: ["map daha hızlıdır","map yeni dizi döndürür, forEach döndürmez","forEach daha güvenlidir","Aralarında fark yoktur"], correct: 1, explanation: "map() dönüşüm yaparak yeni bir dizi döndürür. forEach() ise yan etki için kullanılır, yeni dizi döndürmez. React'te render için map() kullanılır." }
        ]
      }
    ]
  },
  {
    id: "props",
    title: "Props & Bileşenler",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    activeBg: "bg-blue-100",
    activeText: "text-blue-700",
    topics: [
      {
        id: "props-temel",
        title: "Props — Temel Kullanım",
        group: "props",
        explanation: [
          "Props (properties), React bileşenlerine dışarıdan veri aktarmanın temel yoludur. Ebeveyn bileşenden çocuk bileşene tek yönlü akar ve çocuk bileşen tarafından değiştirilemez (read-only).",
          "TypeScript ile props tanımlamak için type alias veya interface kullanılır. ? ile opsiyonel, = ile default değer belirtilir.",
          "Props destructuring ile okunabilir kod yazılır. React.FC<Props> generic tipini kullanmak veya fonksiyon parametresinde doğrudan tip vermek iki geçerli yöntemdir."
        ],
        tip: "Props'u tanımlarken önce zorunlu alanları (? işaretsiz), sonra opsiyonel alanları (?) yazın. Bu alışkanlık, bileşeni kullananlar için hangi alanların zorunlu olduğunu açıkça gösterir.",
        examples: [
          {
            label: "Temel Props",
            tip: "Renk gibi union literal tipler, IDE'nin otomatik tamamlamasını devreye sokar. Yanlış değer girilirse TypeScript derleme hatası verir — bu, runtime hataların önüne geçer.",
            code: `// Type alias ile props tanımı
type KartProps = {
  baslik: string;
  aciklama: string;
  renk?: "mavi" | "yesil" | "kirmizi"; // opsiyonel
  tiklandi: () => void;
};

const Kart: React.FC<KartProps> = ({
  baslik,
  aciklama,
  renk = "mavi", // default değer
  tiklandi,
}) => {
  const renkMap = {
    mavi: "bg-blue-100 border-blue-300",
    yesil: "bg-green-100 border-green-300",
    kirmizi: "bg-red-100 border-red-300",
  };

  return (
    <div className={\`border rounded-xl p-4 \${renkMap[renk]}\`}>
      <h3 className="font-bold">{baslik}</h3>
      <p>{aciklama}</p>
      <button onClick={tiklandi}>Detay</button>
    </div>
  );
};

// Kullanım
<Kart
  baslik="React Nedir?"
  aciklama="UI kütüphanesi"
  renk="yesil"
  tiklandi={() => console.log("tıklandı")}
/>`
          },
          {
            label: "Destructuring & Defaults",
            tip: "Karmaşık prop yapılarında nested destructuring kullanabilirsiniz. urun: { id, ad, fiyat } doğrudan nesnenin içini açar. Okunabilirlik artar ve ayrı değişken tanımlamanıza gerek kalmaz.",
            code: `// Karmaşık prop yapısı — nested destructuring
type UrunKartProps = {
  urun: {
    id: number;
    ad: string;
    fiyat: number;
    stok: number;
  };
  onSatinAl: (id: number) => void;
  vurgula?: boolean;
  para?: string;
};

const UrunKart: React.FC<UrunKartProps> = ({
  urun: { id, ad, fiyat, stok }, // nested destructuring
  onSatinAl,
  vurgula = false,
  para = "₺",
}) => {
  // Derived: state'e gerek yok, render sırasında hesapla
  const stokDurumu =
    stok === 0 ? "Tükendi" : stok < 5 ? "Az kaldı" : "Mevcut";

  return (
    <div
      className={\`border rounded-xl p-4 \${
        vurgula ? "border-indigo-400 bg-indigo-50" : "border-slate-200"
      }\`}
    >
      <h3 className="font-bold">{ad}</h3>
      <p className="text-slate-500 text-sm">{stokDurumu}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="text-lg font-bold">
          {para}{fiyat}
        </span>
        <button
          onClick={() => onSatinAl(id)}
          disabled={stok === 0}
          className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm disabled:opacity-50"
        >
          Satın Al
        </button>
      </div>
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "Props neden read-only (salt okunur) olarak tasarlanmıştır?", answer: "Props tek yönlü veri akışını sağlar. Çocuk bileşenin props'u değiştirememesi, uygulamanın durumunun öngörülebilir ve izlenebilir kalmasını sağlar." },
          { q: "Opsiyonel prop ile default değerli prop arasındaki fark nedir? Örnek verin.", answer: "? ile işaretlenen prop tanımlanmadan geçilebilir (undefined olur). Default değer ise tanımlanmazsa fallback değeri kullanır: renk = 'mavi' gibi." }
        ],
        quiz: [
          { q: "Props'un yönü nasıldır?", options: ["Çocuktan ebeveyne","Ebeveynden çocuğa","Her iki yönde","Rastgele"], correct: 1, explanation: "React'te veri akışı tek yönlüdür: ebeveynden çocuğa. Bu 'unidirectional data flow' olarak bilinir." },
          { q: "TypeScript'te opsiyonel prop nasıl tanımlanır?", options: ["prop: string | undefined","prop?: string","optional prop: string","prop = string"], correct: 1, explanation: "? operatörü prop'u opsiyonel yapar. Bu, prop'un string | undefined tipinde olduğunu belirtir." },
          { q: "Aşağıdakilerden hangisi geçerli bir props destructuring örneğidir?", options: ["const C = (props) => props.name","const C = ({ name }: { name: string }) => name","const C = [name] => name","const C = <name> => name"], correct: 1, explanation: "Destructuring ile props nesnesinden doğrudan değerler alınır, aynı anda tip de belirtilebilir." }
        ]
      },
      {
        id: "props-ornekler",
        title: "Props — İleri Örnekler",
        group: "props",
        explanation: [
          "Children prop'u bileşenin etiketleri arasına yazılan içeriği temsil eder. React.ReactNode tipiyle tanımlanır ve bileşeni wrapper olarak kullanmayı mümkün kılar.",
          "Fonksiyon prop'ları (callback props) ile çocuk bileşenler olayları ebeveyne iletebilir. Bu pattern lifting state up olarak bilinir.",
          "Props spreading (...props) tüm prop'ları alt bileşene iletmenin kısa yoludur. Ancak dikkatli kullanılmazsa gereksiz prop'ların geçmesine yol açabilir."
        ],
        tip: "Callback prop'larını daraltın (narrow): onSave: (id: number) => void yerine genel onSave: () => void yazmayın. Daraltılmış tipler, hangi verinin iletildiğini açıkça belirtir ve kullanım hatalarını önler.",
        examples: [
          {
            label: "Children & Callback Props",
            tip: "'Lifting state up' React'in temel veri akışı desenidir. State'i iki kardeş bileşenden en yakın ortak ebeveyne taşıyın ve callback prop ile aşağıya iletin.",
            code: `// Children prop
type KartProps = {
  baslik: string;
  children: React.ReactNode;
};

const Kart: React.FC<KartProps> = ({ baslik, children }) => (
  <div className="border rounded-xl p-4">
    <h3 className="font-bold mb-2">{baslik}</h3>
    {children}
  </div>
);

// Callback prop ile state lifting
type SayacProps = {
  deger: number;
  onArtir: () => void;
  onAzalt: () => void;
};

const Sayac: React.FC<SayacProps> = ({ deger, onArtir, onAzalt }) => (
  <div>
    <button onClick={onAzalt}>-</button>
    <span>{deger}</span>
    <button onClick={onArtir}>+</button>
  </div>
);

// State ebeveyinde tutulur
const Uygulama: React.FC = () => {
  const [sayi, setSayi] = useState(0);
  return (
    <Kart baslik="Sayac Örneği">
      <Sayac
        deger={sayi}
        onArtir={() => setSayi(s => s + 1)}
        onAzalt={() => setSayi(s => s - 1)}
      />
    </Kart>
  );
};`
          },
          {
            label: "Render Props Deseni",
            tip: "Render props, bileşen mantığını paylaşmanın güçlü bir yoludur. children prop'u fonksiyon olarak kullanılır. Mantık → render ayrımı sağlanır. Custom hook'lar bu desenin modern alternatifidir.",
            code: `// Render Props deseni — mantık bileşeni, render dışarıya bırakılır
type VeriListesiProps<T> = {
  veri: T[];
  bos: React.ReactNode;
  render: (item: T, index: number) => React.ReactNode;
};

// Generic bileşen — T herhangi bir tip olabilir
function VeriListesi<T>({ veri, bos, render }: VeriListesiProps<T>) {
  if (veri.length === 0) return <>{bos}</>;
  return (
    <ul className="space-y-2">
      {veri.map((item, i) => render(item, i))}
    </ul>
  );
}

// Kullanım — render prop ile farklı görünüm
type Urun = { id: number; ad: string; fiyat: number };
const urunler: Urun[] = [
  { id: 1, ad: "Kitap", fiyat: 120 },
  { id: 2, ad: "Kalem", fiyat: 15 },
];

const App: React.FC = () => (
  <VeriListesi
    veri={urunler}
    bos={<p className="text-slate-400">Ürün bulunamadı.</p>}
    render={(urun, i) => (
      <li
        key={urun.id}
        className="flex justify-between p-3 bg-slate-50 rounded-lg"
      >
        <span>{urun.ad}</span>
        <span className="font-semibold">{urun.fiyat}₺</span>
      </li>
    )}
  />
);`
          }
        ],
        practice: [
          { q: "children prop'u hangi durumlarda kullanışlıdır? Örnek verin.", answer: "Modal, Card, Layout gibi wrapper bileşenler için kullanışlıdır. İçerik esnek tutulur: <Modal><FormComponent /></Modal> gibi." },
          { q: "'Lifting state up' ne demektir? Neden gereklidir?", answer: "İki kardeş bileşenin aynı state'e ihtiyacı olduğunda, state ortak ebeveyne taşınır ve callback prop'larla aşağıya iletilir." }
        ],
        quiz: [
          { q: "React.ReactNode ile React.ReactElement arasındaki fark nedir?", options: ["Aynı şeydir","ReactNode daha dar kapsamlıdır","ReactNode string/null/array dahil her şeyi içerir","ReactElement daha geniştir"], correct: 2, explanation: "ReactNode; ReactElement, string, number, null, undefined ve bunların dizilerini içerir. ReactElement yalnızca JSX elementleridir." },
          { q: "Aşağıdakilerden hangisi callback prop örneğidir?", options: ["title: string","onSave: () => void","children: ReactNode","style: CSSProperties"], correct: 1, explanation: "onSave: () => void bir fonksiyon prop'udur. Çocuk bileşen bu fonksiyonu çağırarak ebeveyne event bildirir." },
          { q: "Props spreading {...props} ne işe yarar?", options: ["Prop'ları siler","Tüm prop'ları alt bileşene iletir","Prop'ları klonlar","State oluşturur"], correct: 1, explanation: "Spread operatörü nesnenin tüm özelliklerini ayrı ayrı iletir. <Button {...buttonProps} /> ifadesi buttonProps nesnesindeki tüm prop'ları Button'a verir." }
        ]
      },
      {
        id: "state-yonetimi",
        title: "State Yönetimi",
        group: "props",
        explanation: [
          "State, bileşenin zaman içinde değişebilen iç verisidir. State değiştiğinde React bileşeni yeniden render eder. Props'tan farkı: state bileşenin kendisine aittir ve değiştirilebilir.",
          "React'te state yönetimi birkaç seviyede ele alınır: local state (useState), ortak state (lifting up / Context), ve global state (Context API, Redux, Zustand).",
          "State güncellemesi asenkrondur. Önceki state'e bağlı güncellemelerde fonksiyonel form (setState(prev => prev + 1)) kullanmak güvenlidir ve yarış koşullarını önler."
        ],
        tip: "State'i olabildiğince küçük tutun — sadece minimum gerekli veriyi saklayın. Hesaplanabilen değerleri (toplam, filtre sonucu vs.) state'e koymak yerine render sırasında hesaplayın. Buna 'derived state' denir.",
        examples: [
          {
            label: "State Temelleri",
            tip: "Nesne state güncellemesinde spread (...önceki) şarttır. React nesneyi klonlamaz, yeni referansla değiştirir. Spread olmadan diğer alanlar kaybolur.",
            code: `import { useState } from "react";

// Tek değer state
const [sayi, setSayi] = useState<number>(0);

// Nesne state
type Form = { ad: string; soyad: string };
const [form, setForm] = useState<Form>({ ad: "", soyad: "" });

// Nesne state güncellemesi (spread ile birleştirme)
const adGuncelle = (yeniAd: string) => {
  setForm(onceki => ({ ...onceki, ad: yeniAd }));
};

// Dizi state
const [liste, setListe] = useState<string[]>([]);

const ekle = (item: string) => {
  setListe(onceki => [...onceki, item]);
};

const sil = (index: number) => {
  setListe(onceki => onceki.filter((_, i) => i !== index));
};`
          },
          {
            label: "CRUD State Yönetimi",
            tip: "Dizi state'inde mutasyon (push, splice, sort) yapmayın — her zaman yeni dizi döndürün. React shallow comparison ile değişikliği algılar; mutasyon referansı korur, re-render tetiklenmez.",
            code: `import { useState } from "react";

type Gorev = { id: number; metin: string; tamamlandi: boolean };

const GorevListesi: React.FC = () => {
  const [gorevler, setGorevler] = useState<Gorev[]>([]);
  const [yeniGorev, setYeniGorev] = useState("");

  // Ekle — spread ile yeni dizi
  const ekle = () => {
    if (!yeniGorev.trim()) return;
    setGorevler(prev => [
      ...prev,
      { id: Date.now(), metin: yeniGorev, tamamlandi: false },
    ]);
    setYeniGorev("");
  };

  // Toggle — map ile güncelleme (yeni dizi döndürür)
  const toggle = (id: number) =>
    setGorevler(prev =>
      prev.map(g => g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g)
    );

  // Sil — filter ile çıkarma
  const sil = (id: number) =>
    setGorevler(prev => prev.filter(g => g.id !== id));

  // Derived state — state'ten hesaplanan değer
  const tamamlananSayisi = gorevler.filter(g => g.tamamlandi).length;

  return (
    <div>
      <p className="text-sm text-slate-500 mb-2">
        {tamamlananSayisi}/{gorevler.length} tamamlandı
      </p>
      <div className="flex gap-2 mb-3">
        <input
          value={yeniGorev}
          onChange={e => setYeniGorev(e.target.value)}
          placeholder="Yeni görev"
          className="border rounded px-2 py-1"
        />
        <button onClick={ekle} className="bg-blue-500 text-white px-3 py-1 rounded">
          Ekle
        </button>
      </div>
      {gorevler.map(g => (
        <div key={g.id} className="flex items-center gap-2 py-1">
          <input
            type="checkbox"
            checked={g.tamamlandi}
            onChange={() => toggle(g.id)}
          />
          <span className={g.tamamlandi ? "line-through text-slate-400" : ""}>
            {g.metin}
          </span>
          <button onClick={() => sil(g.id)} className="text-red-400 ml-auto text-sm">
            Sil
          </button>
        </div>
      ))}
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "Neden state güncellemesinde setState(prev => prev + 1) kullanmak, setState(state + 1) yerine daha güvenlidir?", answer: "React, state güncellemelerini birleştirebilir (batch). Fonksiyonel form her zaman en güncel prev değerini garanti eder. Closure problemi olmaz." },
          { q: "Nesne state güncellemesinde neden spread (...) kullanılır?", answer: "React nesneyi tamamen değiştirir, merge etmez. Spread ile mevcut alanlar korunur, sadece değişen alan güncellenir: {...onceki, ad: yeniAd}" }
        ],
        quiz: [
          { q: "State değiştiğinde ne olur?", options: ["Sayfa tamamen yenilenir","Bileşen yeniden render edilir","Uygulama sıfırlanır","Hiçbir şey olmaz"], correct: 1, explanation: "State değişikliği React'e bileşenin güncellenmesi gerektiğini bildirir. React, Virtual DOM farkını hesaplayarak minimum DOM güncellemesi yapar." },
          { q: "useState<string[]>([]) ile ne tanımlanmış olur?", options: ["Boş nesne","String tipinde tek değer","Başlangıçta boş bir string dizisi","Undefined değeri"], correct: 2, explanation: "useState'e generic tip olarak string[] verilmiş ve başlangıç değeri olarak boş dizi ([]) atanmıştır." },
          { q: "Local state ile global state arasındaki temel fark nedir?", options: ["Local state daha hızlıdır","Local state sadece o bileşene aittir, global state uygulama genelinde paylaşılır","Global state sadece hooks ile kullanılır","Aralarında fark yoktur"], correct: 1, explanation: "Local state useState ile yönetilir ve yalnızca o bileşen ile alt bileşenleri etkiler. Global state (Context, Redux) tüm uygulamaya açıktır." }
        ]
      }
    ]
  },
  {
    id: "temel-hooks",
    title: "Temel Hooks",
    color: "bg-violet-500",
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
    activeBg: "bg-violet-100",
    activeText: "text-violet-700",
    topics: [
      {
        id: "usestate",
        title: "useState Hook",
        group: "temel-hooks",
        explanation: [
          "useState, fonksiyonel bileşenlere state eklemenin temel yoludur. [deger, setDeger] = useState(baslangic) şeklinde kullanılır. TypeScript ile generic tip eklenebilir.",
          "State başlangıç değeri sadece ilk render'da kullanılır. Başlangıç hesaplaması pahalıysa lazy initialization (fonksiyon geçme) kullanılır: useState(() => hesapla())",
          "Union tip state'ler React'te çok yaygındır: useState<'idle' | 'loading' | 'error'> gibi. Bu tip belirli string değerleriyle kısıtlama sağlar ve switch/if dallarını kapsamlı kılar."
        ],
        tip: "useState'i birden fazla ilişkili state için kullanıyorsanız, bunları tek bir nesne state'e birleştirmeyi düşünün. Ancak bağımsız parçalar (farklı hızda güncellenenler) ayrı useState'te kalmalı — bu re-render optimizasyonunu kolaylaştırır.",
        examples: [
          {
            label: "useState Temelleri",
            tip: "useState'e generic tip vermek zorunlu değildir — TypeScript başlangıç değerinden tipi çıkarır. Ancak complex tipler ve null başlangıç için explicit generic gerekir: useState<Kullanici | null>(null)",
            code: `import { useState } from "react";

// Temel kullanım
const [sayi, setSayi] = useState<number>(0);
const [metin, setMetin] = useState<string>("");
const [acik, setAcik] = useState<boolean>(false);

// Union type state (API durumu için idealdir)
type Durum = "bekliyor" | "yukleniyor" | "basarili" | "hata";
const [durum, setDurum] = useState<Durum>("bekliyor");

// Lazy initialization (pahalı hesaplama — sadece bir kez çalışır)
const [liste, setListe] = useState<number[]>(() => {
  return Array.from({ length: 10 }, (_, i) => i * i);
});

// Nesne state + parçalı güncelleme
type Kullanici = { ad: string; yas: number; aktif: boolean };
const [kullanici, setKullanici] = useState<Kullanici>({
  ad: "Emirhan",
  yas: 20,
  aktif: true,
});

// Sadece 'ad' değiştirilir, diğerleri korunur
const adGuncelle = (yeniAd: string) =>
  setKullanici(onceki => ({ ...onceki, ad: yeniAd }));`
          },
          {
            label: "Toggle & Multi-state",
            tip: "Boolean state geçişlerinde setter'ı fonksiyonel formda kullanın: setAcik(prev => !prev). Doğrudan !acik yerine bu form, batch güncelleme sırasında en güncel değeri garanti eder.",
            code: `import { useState } from "react";

// Yeniden kullanılabilir toggle hook
function useToggle(baslangic = false): [boolean, () => void] {
  const [deger, setDeger] = useState(baslangic);
  const toggle = () => setDeger(prev => !prev); // fonksiyonel form
  return [deger, toggle];
}

// Multi-state: birden fazla ilişkili değer
type Modal = { acik: boolean; tip: "bilgi" | "uyari" | "hata"; mesaj: string };

const ModalOrnek: React.FC = () => {
  const [modal, setModal] = useState<Modal>({
    acik: false,
    tip: "bilgi",
    mesaj: "",
  });
  const [karanlik, toggleKaranlik] = useToggle(false);

  const modalAc = (tip: Modal["tip"], mesaj: string) =>
    setModal({ acik: true, tip, mesaj });

  const modalKapat = () =>
    setModal(prev => ({ ...prev, acik: false }));

  const renkler: Record<Modal["tip"], string> = {
    bilgi: "bg-blue-50 text-blue-800",
    uyari: "bg-yellow-50 text-yellow-800",
    hata: "bg-red-50 text-red-800",
  };

  return (
    <div className={karanlik ? "bg-slate-900 text-white p-4 rounded" : "p-4"}>
      <button onClick={toggleKaranlik} className="mr-2 px-3 py-1 border rounded">
        Tema Değiştir
      </button>
      <button onClick={() => modalAc("bilgi", "İşlem başarılı!")}
        className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">
        Bilgi
      </button>
      {modal.acik && (
        <div className={\`mt-3 p-3 rounded \${renkler[modal.tip]}\`}>
          <p>{modal.mesaj}</p>
          <button onClick={modalKapat} className="mt-2 text-sm underline">
            Kapat
          </button>
        </div>
      )}
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "useState(() => hesapla()) ile useState(hesapla()) arasındaki fark nedir?", answer: "Fonksiyon geçilince (lazy init) sadece ilk render'da çalışır. Doğrudan çağrılırsa her render'da çalışır. Pahalı işlemler için lazy init tercih edilmeli." },
          { q: "useState'in dönüş değeri olan [deger, setDeger]'i TypeScript ile nasıl tiplersiniz?", answer: "useState<number>(0) şeklinde generic tip verilir. TypeScript, deger'i number ve setDeger'i Dispatch<SetStateAction<number>> olarak çıkarım yapar." }
        ],
        quiz: [
          { q: "useState hangi değerleri döndürür?", options: ["Sadece değeri","Sadece setter fonksiyonu","[mevcut değer, setter fonksiyonu]","{value, setValue} nesnesi"], correct: 2, explanation: "useState bir tuple döndürür: [mevcut değer, state güncelleyici fonksiyon]. Destructuring ile isimlendirilir." },
          { q: "setDeger(5) ile setDeger(prev => prev + 1) arasındaki fark ne zaman önemlidir?", options: ["Hiçbir zaman fark yoktur","Batch güncelleme durumlarında fonksiyonel form daha güvenlidir","Sadece async fonksiyonlarda fark var","Nesne state'lerinde önemlidir"], correct: 1, explanation: "React state güncellemelerini birleştirebilir. Fonksiyonel form (prev => ...) her zaman en güncel değeri garanti eder." },
          { q: "useState ile yönetilen state, hangi bileşen yaşam döngüsüne bağlıdır?", options: ["Uygulamanın tüm ömrüne","Yalnızca bileşenin mount edildiği süreye","Global state süresine","Render sayısına"], correct: 1, explanation: "useState state'i bileşen unmount edildiğinde sıfırlanır. Bileşen ağaçtan kaldırılıp yeniden eklenince başlangıç değerine döner." }
        ]
      },
      {
        id: "useeffect",
        title: "useEffect Hook",
        group: "temel-hooks",
        explanation: [
          "useEffect, render sonrası yan etkileri (API çağrısı, event listener, timer, DOM manipülasyonu) yönetmek için kullanılır. Bileşenin dışarıyla iletişim kapısıdır.",
          "Dependency array (bağımlılık dizisi) useEffect'in ne zaman çalışacağını belirler: boş [] yalnızca mount'ta, [deger] deger değiştiğinde, dizi yoksa her render'da çalışır.",
          "Cleanup fonksiyonu useEffect'ten döndürülür. Bileşen unmount olduğunda veya effect yeniden çalışmadan önce çağrılır. Memory leak'leri, dangling listener'ları önler."
        ],
        tip: "useEffect'e async fonksiyon doğrudan verilmez: useEffect(async () => {}) yazmak yanlış. Bunun yerine effect içinde async bir iç fonksiyon tanımlayıp çağırın. React, effect'in cleanup için senkron fonksiyon dönmesini bekler.",
        examples: [
          {
            label: "useEffect Temelleri",
            tip: "Race condition önlemek için 'let iptal = false' + cleanup pattern şarttır. AbortController da modern bir alternatiftir: fetch'i abort ederek ağ isteğini tamamen iptal eder.",
            code: `import { useState, useEffect } from "react";

// 1) Sadece mount'ta çalışır (boş bağımlılık)
useEffect(() => {
  console.log("Bileşen mount edildi");
  return () => console.log("Unmount"); // cleanup
}, []);

// 2) Bağımlılık değişince çalışır — debounce örneği
const [arama, setArama] = useState("");
useEffect(() => {
  if (!arama) return;
  const timeout = setTimeout(() => {
    console.log("API çağrısı:", arama);
  }, 500);
  return () => clearTimeout(timeout); // cleanup: önceki timer'ı iptal et
}, [arama]);

// 3) API veri çekme — race condition korumalı
type Post = { id: number; title: string };
const [posts, setPosts] = useState<Post[]>([]);

useEffect(() => {
  let iptal = false; // bileşen unmount olursa state güncelleme
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
    .then(r => r.json())
    .then(data => { if (!iptal) setPosts(data); });
  return () => { iptal = true; }; // cleanup
}, []);`
          },
          {
            label: "Custom Hook ile useEffect",
            tip: "useEffect mantığını custom hook'a çıkarmak hem test edilebilirliği artırır hem de aynı side effect'i birden fazla bileşende yeniden kullanmanızı sağlar. useDebounce, useLocalStorage gibi hook'lar en yaygın örneklerdir.",
            code: `import { useState, useEffect } from "react";

// Custom hook — debounce mantığı dışarı çıkarıldı
function useDebounce<T>(deger: T, gecikme: number): T {
  const [debounceDeger, setDebounceDeger] = useState(deger);

  useEffect(() => {
    // gecikme ms sonra güncelle
    const timer = setTimeout(() => setDebounceDeger(deger), gecikme);
    // deger değişirse önceki timer iptal edilir — cleanup
    return () => clearTimeout(timer);
  }, [deger, gecikme]);

  return debounceDeger;
}

// Custom hook — pencere boyutunu takip et
function usePencereBoyutu() {
  const [boyut, setBoyut] = useState({
    genislik: window.innerWidth,
    yukseklik: window.innerHeight,
  });

  useEffect(() => {
    const handler = () =>
      setBoyut({ genislik: window.innerWidth, yukseklik: window.innerHeight });
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler); // cleanup
  }, []); // boş bağımlılık: sadece mount/unmount'ta çalışır

  return boyut;
}

// Kullanım
const Arama: React.FC = () => {
  const [aramaMetni, setAramaMetni] = useState("");
  const debouncedArama = useDebounce(aramaMetni, 400); // 400ms bekle
  const { genislik } = usePencereBoyutu();

  useEffect(() => {
    if (debouncedArama) console.log("API çağrısı:", debouncedArama);
  }, [debouncedArama]);

  return (
    <div>
      <p className="text-xs text-slate-400 mb-2">Ekran: {genislik}px</p>
      <input
        value={aramaMetni}
        onChange={e => setAramaMetni(e.target.value)}
        placeholder="Ara..."
        className="border rounded px-3 py-1.5"
      />
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "useEffect'in bağımlılık dizisi olmadan kullanılması ne sorun çıkarabilir?", answer: "Her render'da tetiklenir. Sonsuz döngüye girebilir (effect içinde state güncelleniyorsa). ESLint exhaustive-deps kuralı bu durumu uyarır." },
          { q: "API çağrısında 'let iptal = false' pattern'i neden kullanılır?", answer: "Bileşen unmount olduğunda veya effect yeniden tetiklendiğinde tamamlanmamış asenkron işlemin sonucunun state'e yazılmasını engeller (stale closure / race condition)." }
        ],
        quiz: [
          { q: "useEffect'in dependency array'i [] (boş) olursa ne zaman çalışır?", options: ["Her render'da","Sadece ilk render'da (mount)","Hiçbir zaman","Sadece unmount'ta"], correct: 1, explanation: "Boş bağımlılık dizisi useEffect'in yalnızca bileşen ilk kez render edildiğinde çalışmasını sağlar. componentDidMount eşdeğeridir." },
          { q: "useEffect cleanup fonksiyonu ne zaman çağrılır?", options: ["Sadece bileşen unmount olunca","Bileşen mount olunca","Bileşen unmount olunca ve effect yeniden çalışmadan önce","Her render'dan önce"], correct: 2, explanation: "Cleanup fonksiyonu iki durumda çalışır: bileşen unmount edildiğinde ve bağımlılık değiştiğinde yeni effect çalışmadan önce." },
          { q: "Hangisi useEffect'in doğru kullanım amacıdır?", options: ["Props hesaplamak","Event handler tanımlamak","API çağrısı yapmak","JSX döndürmek"], correct: 2, explanation: "useEffect side effect'ler içindir: API çağrısı, event listener, subscription, timer, DOM manipülasyonu gibi işlemler." }
        ]
      },
      {
        id: "usecontext",
        title: "useContext Hook",
        group: "temel-hooks",
        explanation: [
          "Context API, bileşen ağacındaki her seviyeye manuel prop geçmeden (prop drilling) veri paylaşmayı sağlar. Theme, dil, auth bilgisi gibi global veriler için idealdir.",
          "createContext ile bir context oluşturulur. Provider ile değer ağaca enjekte edilir. useContext ile herhangi bir alt bileşenden değer okunur.",
          "TypeScript ile context kullanımında undefined guard gereklidir: context Provider dışında kullanılırsa hata fırlatılır. Custom hook pattern (useTheme gibi) bu kontrolü merkezleştirir."
        ],
        tip: "Context'i çok geniş tutmaktan kaçının. Tüm uygulama state'ini tek bir context'e koymak gereksiz yeniden render'a yol açar. Tema için ayrı, auth için ayrı, kullanıcı ayarları için ayrı context'ler oluşturun.",
        examples: [
          {
            label: "useContext Temelleri",
            tip: "Provider'ın value prop'u her render'da yeni nesne oluşturmamasına dikkat edin. useMemo ile value'yu memoize etmek, gereksiz re-render'ı önler.",
            code: `import { createContext, useContext, useState } from "react";

// 1) Context tipi ve oluşturma
type Tema = "aydinlik" | "karanlik";
type TemaCtx = { tema: Tema; temaDegistir: () => void };

const TemaContext = createContext<TemaCtx | undefined>(undefined);

// 2) Custom hook (undefined guard ile)
export const useTema = () => {
  const ctx = useContext(TemaContext);
  if (!ctx) throw new Error("useTema, TemaProvider içinde kullanılmalı");
  return ctx;
};

// 3) Provider bileşeni
export const TemaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tema, setTema] = useState<Tema>("aydinlik");
  const temaDegistir = () =>
    setTema(t => (t === "aydinlik" ? "karanlik" : "aydinlik"));

  return (
    <TemaContext.Provider value={{ tema, temaDegistir }}>
      {children}
    </TemaContext.Provider>
  );
};

// 4) Herhangi bir alt bileşende kullanım
const TemaButon: React.FC = () => {
  const { tema, temaDegistir } = useTema();
  return (
    <button onClick={temaDegistir}>
      Mevcut tema: {tema}
    </button>
  );
};`
          },
          {
            label: "Auth Context Deseni",
            tip: "Auth context deseninde Provider bileşeni localStorage kontrolü yaparak kullanıcıyı hatırlar. Bu pattern, login/logout'u uygulama genelinde tek noktadan yönetmenizi sağlar.",
            code: `import { createContext, useContext, useState } from "react";

type Kullanici = { id: number; ad: string; rol: "admin" | "kullanici" };
type AuthCtx = {
  kullanici: Kullanici | null;
  girisYap: (kullanici: Kullanici) => void;
  cikisYap: () => void;
};

const AuthContext = createContext<AuthCtx | undefined>(undefined);

// Custom hook — Provider dışı kullanımı önler
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth AuthProvider içinde kullanılmalı");
  return ctx;
};

// Provider — tüm auth mantığı burada
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [kullanici, setKullanici] = useState<Kullanici | null>(null);

  const girisYap = (k: Kullanici) => setKullanici(k);
  const cikisYap = () => setKullanici(null);

  return (
    <AuthContext.Provider value={{ kullanici, girisYap, cikisYap }}>
      {children}
    </AuthContext.Provider>
  );
};

// Herhangi bir alt bileşende kullanım
const ProfilButonu: React.FC = () => {
  const { kullanici, cikisYap } = useAuth();
  if (!kullanici) return <button>Giriş Yap</button>;
  return (
    <div className="flex items-center gap-2">
      <span>{kullanici.ad} ({kullanici.rol})</span>
      <button onClick={cikisYap}>Çıkış</button>
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "Prop drilling nedir ve ne zaman sorun olur?", answer: "Props'u kullanmayan ara bileşenlerden geçirerek derine taşımak. 3+ seviye derinliğinde okunabilirliği bozar ve bakımı güçleştirir. Context bu problemi çözer." },
          { q: "useContext içeren bileşeni optimize etmek için ne yapılabilir?", answer: "Context'i küçük parçalara bölmek (tema contexti ayrı, auth contexti ayrı) yeniden render sayısını azaltır. React.memo ile context kullanan bileşenler wrap edilebilir." }
        ],
        quiz: [
          { q: "useContext hangi problemi çözer?", options: ["State yönetimi","Prop drilling","API çağrısı","Performans optimizasyonu"], correct: 1, explanation: "Context API, prop drilling problemini çözer: ara bileşenlerden geçirmeden derin alt bileşenlere veri sağlar." },
          { q: "createContext'e undefined başlangıç değeri verilmesinin sebebi nedir?", options: ["Performans için","Provider dışı kullanımı tespit etmek için","TypeScript gerektiriyor","Zorunlu değildir"], correct: 1, explanation: "undefined başlangıç + useContext kontrolü ile Provider dışı kullanımda erken hata fırlatılır. Bu sayede hata kaynağı kolayca bulunur." },
          { q: "Context Provider'ın value'su değişince ne olur?", options: ["Yalnızca Provider yeniden render edilir","useContext kullanan tüm bileşenler yeniden render edilir","Hiçbir şey olmaz","Uygulama sıfırlanır"], correct: 1, explanation: "Context value değişince, o context'i useContext ile okuyan tüm bileşenler yeniden render edilir. Bu nedenle değerin gereksiz değişmemesi önemlidir." }
        ]
      }
    ]
  },
  {
    id: "ileri-hooks",
    title: "İleri Hooks",
    color: "bg-amber-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    activeBg: "bg-amber-100",
    activeText: "text-amber-700",
    topics: [
      {
        id: "usereducer",
        title: "useReducer Hook",
        group: "ileri-hooks",
        explanation: [
          "useReducer, karmaşık state mantığını yönetmek için useState'e alternatiftir. Redux'a benzer bir pattern kullanır: state + action → new state. Özellikle birbirine bağlı state alanları veya çok sayıda güncelleme tipi olduğunda tercih edilir.",
          "Reducer saf (pure) bir fonksiyondur: aynı girdilere her zaman aynı çıktıyı verir, yan etki içermez. TypeScript discriminated union ile action tipleri güvenli tanımlanır.",
          "useReducer, Context ile birleşince mini Redux gibi çalışır ve uygulama genelinde kompleks state yönetimi sağlar."
        ],
        tip: "useReducer'ı tercih ettiğinizde reducer fonksiyonunu bileşen dışına çıkarın. Bu sayede bileşen her render'da yeni referans oluşturmaz ve reducer'ı kolayca birim test edebilirsiniz.",
        examples: [
          {
            label: "useReducer Temelleri",
            tip: "Discriminated union ile action tipi tanımlamak TypeScript'e her case'in payload tipini kesin olarak bildirir. Bu sayede action.payload'a erişim type-safe olur.",
            code: `import { useReducer } from "react";

type State = { sayi: number; adimlar: number[] };
type Action =
  | { type: "ARTIR" }
  | { type: "AZALT" }
  | { type: "SIFIRLA" }
  | { type: "ADIM_EKLE"; payload: number }; // payload sadece bu case'de

const baslangic: State = { sayi: 0, adimlar: [] };

// Reducer — bileşen dışında, saf fonksiyon
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ARTIR":
      return { ...state, sayi: state.sayi + 1, adimlar: [...state.adimlar, 1] };
    case "AZALT":
      return { ...state, sayi: state.sayi - 1, adimlar: [...state.adimlar, -1] };
    case "SIFIRLA":
      return baslangic; // başlangıç state'ine dön
    case "ADIM_EKLE":
      return { ...state, sayi: state.sayi + action.payload };
    default:
      return state;
  }
}

const Sayac: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, baslangic);
  return (
    <div>
      <p>Sayı: {state.sayi}</p>
      <button onClick={() => dispatch({ type: "ARTIR" })}>+</button>
      <button onClick={() => dispatch({ type: "AZALT" })}>-</button>
      <button onClick={() => dispatch({ type: "SIFIRLA" })}>Sıfırla</button>
    </div>
  );
};`
          },
          {
            label: "useReducer + Context",
            tip: "useReducer + Context kombinasyonu mini Redux gibi çalışır. dispatch ve state'i ayrı context'lere koyarak sadece dispatch kullanan bileşenlerin state değişikliğinden etkilenmemesini sağlayabilirsiniz.",
            code: `import { useReducer, createContext, useContext } from "react";

type Sepet = { urunId: number; adet: number };
type SepetState = { urunler: Sepet[]; toplam: number };
type SepetAction =
  | { type: "EKLE"; payload: { urunId: number; fiyat: number } }
  | { type: "TEMIZLE" };

function sepetReducer(state: SepetState, action: SepetAction): SepetState {
  switch (action.type) {
    case "EKLE": {
      const mevcut = state.urunler.find(u => u.urunId === action.payload.urunId);
      const urunler = mevcut
        ? state.urunler.map(u =>
            u.urunId === action.payload.urunId
              ? { ...u, adet: u.adet + 1 }
              : u
          )
        : [...state.urunler, { urunId: action.payload.urunId, adet: 1 }];
      return { urunler, toplam: state.toplam + action.payload.fiyat };
    }
    case "TEMIZLE":
      return { urunler: [], toplam: 0 };
    default:
      return state;
  }
}

// Context ile dağıtım
type SepetCtx = { state: SepetState; dispatch: React.Dispatch<SepetAction> };
const SepetContext = createContext<SepetCtx | undefined>(undefined);

const SepetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(sepetReducer, { urunler: [], toplam: 0 });
  return (
    <SepetContext.Provider value={{ state, dispatch }}>
      {children}
    </SepetContext.Provider>
  );
};

const useSepet = () => {
  const ctx = useContext(SepetContext);
  if (!ctx) throw new Error("SepetProvider içinde kullanılmalı");
  return ctx;
};`
          }
        ],
        practice: [
          { q: "useReducer'ı useState'e göre ne zaman tercih etmelisiniz?", answer: "State güncellemeleri birbirine bağlıysa, güncelleme tiplerinin sayısı fazlaysa (3+), veya reducer test edilebilirliği önemliyse useReducer tercih edilir." },
          { q: "Reducer'ın 'pure function' olması neden önemlidir?", answer: "Pure function aynı girdide hep aynı çıktıyı verir. Bu test edilebilirliği artırır, React'in state güncellemelerini güvenilir tahmin edebilmesini sağlar." }
        ],
        quiz: [
          { q: "useReducer dispatch fonksiyonu ne alır?", options: ["Yeni state değerini","Action nesnesini","Reducer fonksiyonunu","Bağımlılık dizisini"], correct: 1, explanation: "dispatch, type alanı ve opsiyonel payload içeren bir action nesnesi alır. Reducer bu action'ı işleyerek yeni state üretir." },
          { q: "Discriminated union ile action tipi tanımlamanın avantajı nedir?", options: ["Daha kısa kod","TypeScript her case'de payload tipini doğru çıkarır","Daha hızlı çalışır","Zorunludur"], correct: 1, explanation: "case 'ADIM_EKLE' dalında TypeScript action.payload'ın var olduğunu ve number tipinde olduğunu otomatik anlar." },
          { q: "useReducer'ın useState'e göre test edilebilirlik avantajı nedir?", options: ["Yoktur","Reducer saf fonksiyon olduğundan bileşen olmadan test edilebilir","useReducer daha az kod üretir","Test araçları useReducer'ı destekler"], correct: 1, explanation: "Reducer bağımsız bir saf fonksiyon olduğundan React bileşeni olmadan birim testi yazılabilir: expect(reducer(state, action)).toEqual(beklenen)" }
        ]
      },
      {
        id: "usememo",
        title: "useMemo Hook",
        group: "ileri-hooks",
        explanation: [
          "useMemo, pahalı hesaplamaların sonucunu memoize (önbelleğe) eder. Bağımlılıklar değişmediği sürece hesaplama tekrarlanmaz ve önceki sonuç döndürülür.",
          "Her render'da çalıştırılması pahalı işlemler: büyük dizi filtreleme/sıralama, karmaşık matematiksel hesaplama, referans karşılaştırması gereken nesne oluşturma gibi durumlarda kullanılır.",
          "useMemo'yu her yerde kullanmak yanlıştır: memoization kendisi de bellek ve hesaplama maliyeti taşır. Profiler ile gerçekten yavaş olan kısımları hedefleyin."
        ],
        tip: "useMemo'yu erken optimizasyon için kullanmayın. Önce React DevTools Profiler ile gerçekten yavaş olan kısımları tespit edin, sonra hedefli useMemo ekleyin. Yanlış kullanılan useMemo performansa zarar verebilir.",
        examples: [
          {
            label: "useMemo Temelleri",
            tip: "useMemo referans stabilizasyonu için de kullanılır: nesne veya dizi bağımlılıklarda, her render'da yeni referans oluşmasını önleyerek alt bileşenlerin gereksiz render'ını engeller.",
            code: `import { useState, useMemo } from "react";

type Urun = { id: number; ad: string; fiyat: number; kategori: string };

const urunler: Urun[] = [
  { id: 1, ad: "Laptop", fiyat: 15000, kategori: "Elektronik" },
  { id: 2, ad: "Kitap", fiyat: 120, kategori: "Kültür" },
  { id: 3, ad: "Telefon", fiyat: 8000, kategori: "Elektronik" },
];

const UrunListesi: React.FC = () => {
  const [filtre, setFiltre] = useState("");
  const [sirala, setSirala] = useState<"fiyat" | "ad">("ad");

  // filtre veya sirala değişmedikçe yeniden hesaplanmaz
  const filtrelenmis = useMemo(() => {
    console.log("Filtreleniyor..."); // kaç kez çalıştığını görmek için
    return urunler
      .filter(u => u.ad.toLowerCase().includes(filtre.toLowerCase()))
      .sort((a, b) =>
        sirala === "fiyat" ? a.fiyat - b.fiyat : a.ad.localeCompare(b.ad)
      );
  }, [filtre, sirala]);

  return (
    <div>
      <input
        value={filtre}
        onChange={e => setFiltre(e.target.value)}
        placeholder="Ara..."
      />
      <button onClick={() => setSirala(s => s === "ad" ? "fiyat" : "ad")}>
        Sırala: {sirala}
      </button>
      {filtrelenmis.map(u => (
        <div key={u.id}>{u.ad} - {u.fiyat}₺</div>
      ))}
    </div>
  );
};`
          },
          {
            label: "useMemo ile Hesaplamalı Tablo",
            tip: "Sıralama ve filtreleme işlemlerini useMemo ile memoize ederek kullanıcı her tuşa bastığında tüm veriyi yeniden işlemenin önüne geçin. Sadece ilgili bağımlılıklar değişince hesaplama tetiklenir.",
            code: `import { useState, useMemo } from "react";

type Ogrenci = { id: number; ad: string; not: number; sinif: string };

const ogrenciler: Ogrenci[] = [
  { id: 1, ad: "Ali", not: 78, sinif: "A" },
  { id: 2, ad: "Ayşe", not: 92, sinif: "B" },
  { id: 3, ad: "Mehmet", not: 65, sinif: "A" },
  { id: 4, ad: "Fatma", not: 88, sinif: "B" },
];

const OgrenciTablosu: React.FC = () => {
  const [filtre, setFiltre] = useState("");
  const [sinif, setSinif] = useState("Tümü");
  const [artanSirala, setArtanSirala] = useState(false);

  // filtre, sinif veya sıralama değişince yeniden hesapla
  const islenmis = useMemo(() => {
    return ogrenciler
      .filter(o => o.ad.toLowerCase().includes(filtre.toLowerCase()))
      .filter(o => sinif === "Tümü" || o.sinif === sinif)
      .sort((a, b) => artanSirala ? a.not - b.not : b.not - a.not);
  }, [filtre, sinif, artanSirala]);

  // ortalama da memoize — sadece islenmis değişince hesaplanır
  const ortalama = useMemo(
    () => islenmis.reduce((sum, o) => sum + o.not, 0) / (islenmis.length || 1),
    [islenmis]
  );

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <input value={filtre} onChange={e => setFiltre(e.target.value)} placeholder="İsim ara..." />
        <select value={sinif} onChange={e => setSinif(e.target.value)}>
          {["Tümü", "A", "B"].map(s => <option key={s}>{s}</option>)}
        </select>
        <button onClick={() => setArtanSirala(k => !k)}>
          Not: {artanSirala ? "Artan" : "Azalan"}
        </button>
      </div>
      <p className="text-sm text-slate-500 mb-2">Ortalama: {ortalama.toFixed(1)}</p>
      {islenmis.map(o => (
        <div key={o.id} className="flex justify-between p-2 border-b">
          <span>{o.ad} ({o.sinif})</span>
          <span className="font-semibold">{o.not}</span>
        </div>
      ))}
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "useMemo kullanmak performansı her zaman iyileştirir mi? Açıklayın.", answer: "Hayır. useMemo'nun kendisi overhead taşır (bellek + karşılaştırma). Basit hesaplamalar için gereksizdir. Sadece profillerle tespit edilen darboğazlarda kullanılmalı." },
          { q: "useMemo ile useCallback arasındaki fark nedir?", answer: "useMemo bir değeri (hesaplama sonucunu) memoize eder. useCallback bir fonksiyonu memoize eder. useCallback(fn, deps) aslında useMemo(() => fn, deps) ile eşdeğerdir." }
        ],
        quiz: [
          { q: "useMemo ne zaman yeniden hesaplar?", options: ["Her render'da","Bağımlılıklar değişince","Her 5 saniyede","Asla"], correct: 1, explanation: "useMemo bağımlılık dizisindeki değerler değişince yeniden hesaplar. Değişmezse önbellekteki değeri döndürür." },
          { q: "useMemo'nun dönüş değeri nedir?", options: ["Bir fonksiyon","Memoize edilmiş hesaplama sonucu","[değer, setter] tuple","Bir Promise"], correct: 1, explanation: "useMemo, callback fonksiyonunun return değerini memoize eder ve doğrudan o değeri döndürür." },
          { q: "Hangi durum useMemo kullanımını gerektirir?", options: ["Her hesaplamada","Küçük dizileri filtrelemede","Binlerce elemanlı diziyi her render'da sıralamada","String birleştirmede"], correct: 2, explanation: "Büyük veri setlerinde pahalı filtreleme/sıralama işlemleri gereksiz yere tekrar çalışmamalıdır. Bu durum useMemo için gerçek bir kullanım senaryosudur." }
        ]
      },
      {
        id: "usecallback",
        title: "useCallback Hook",
        group: "ileri-hooks",
        explanation: [
          "useCallback, fonksiyonları memoize eder. Her render'da yeni fonksiyon referansı oluşturmayı önler. Özellikle child bileşene prop olarak geçilen fonksiyonlar için önemlidir.",
          "React.memo ile birlikte kullanılır: React.memo prop referansı değişmediğinde child'ı yeniden render etmez. Fonksiyon prop'u her render'da yeniden oluşturulursa React.memo etkisiz kalır.",
          "TypeScript ile useCallback: generic tip genellikle çıkarım yapılır, ancak karmaşık overload'lar için explicit tip gerekebilir."
        ],
        tip: "useCallback bağımlılık dizisi önemlidir. Bağımlılık olarak değişmeyen setter fonksiyonları (setDeger) ve dispatch'i güvenle kullanabilirsiniz — React bunların stabil referanslı olduğunu garanti eder.",
        examples: [
          {
            label: "useCallback Temelleri",
            tip: "React.memo + useCallback kombinasyonu: memo prop karşılaştırması yapar, useCallback ise fonksiyon referansını sabit tutar. İkisi birlikte kullanılmadan biri anlamsız.",
            code: `import { useState, useCallback, memo } from "react";

// memo ile wrap edilmiş child bileşen
const TodoItem = memo(({ metin, onSil }: { metin: string; onSil: () => void }) => {
  console.log("TodoItem render:", metin); // kaç kez render olduğunu izle
  return (
    <li>
      {metin}
      <button onClick={onSil}>Sil</button>
    </li>
  );
});

const TodoListesi: React.FC = () => {
  const [todolar, setTodolar] = useState(["Alışveriş", "Spor", "Kitap"]);

  // useCallback olmadan: her render'da yeni fonksiyon → TodoItem hep yeniden render
  // useCallback ile: fonksiyon referansı korunur → TodoItem gereksiz render etmez
  const silHandler = useCallback((index: number) => {
    setTodolar(prev => prev.filter((_, i) => i !== index));
  }, []); // setTodolar stabil referans, bağımlılık gerekmez

  return (
    <ul>
      {todolar.map((todo, i) => (
        <TodoItem key={todo} metin={todo} onSil={() => silHandler(i)} />
      ))}
    </ul>
  );
};`
          },
          {
            label: "useCallback ile Form Handler",
            tip: "Form'daki her input için ayrı state yerine tek nesne state kullanın. Değişiklik handler'ını useCallback + event.target.name ile genel tutun — her input için ayrı handler yazmak yerine tek 'handleChange' yeterli olur.",
            code: `import { useState, useCallback, memo } from "react";

type Alan = { label: string; name: string; type: string };
const alanlar: Alan[] = [
  { label: "Ad", name: "ad", type: "text" },
  { label: "E-posta", name: "email", type: "email" },
  { label: "Şifre", name: "sifre", type: "password" },
];

// memo ile optimize edilmiş input — sadece kendi değeri değişince render edilir
const FormInput = memo(({
  label, name, type, deger, onChange,
}: {
  label: string; name: string; type: string;
  deger: string; onChange: (name: string, deger: string) => void;
}) => {
  console.log(\`\${name} render edildi\`);
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        value={deger}
        onChange={e => onChange(name, e.target.value)}
        className="mt-1 block w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
});

const KayitFormu: React.FC = () => {
  const [form, setForm] = useState({ ad: "", email: "", sifre: "" });

  // useCallback — her render'da yeni fonksiyon oluşturmaz
  const handleChange = useCallback((name: string, deger: string) => {
    setForm(prev => ({ ...prev, [name]: deger }));
  }, []); // setForm stabil, bağımlılık gerekmez

  return (
    <form className="space-y-4">
      {alanlar.map(alan => (
        <FormInput
          key={alan.name}
          {...alan}
          deger={form[alan.name as keyof typeof form]}
          onChange={handleChange}
        />
      ))}
    </form>
  );
};`
          }
        ],
        practice: [
          { q: "useCallback olmadan React.memo neden etkisiz olabilir?", answer: "Her render'da fonksiyon yeniden oluşturulur, yeni referans alır. React.memo referans eşitliği kontrol eder: farklı referans → child yeniden render edilir." },
          { q: "useCallback'i her fonksiyon için kullanmak gerekli midir?", answer: "Hayır. Sadece React.memo'lu bileşenlere geçirilen veya useEffect/useMemo bağımlılığında yer alan fonksiyonlar için mantıklıdır. Gerekmiyorsa complexity artırır." }
        ],
        quiz: [
          { q: "useCallback ne döndürür?", options: ["Fonksiyonun çalışma sonucu","Memoize edilmiş fonksiyon referansı","[fonksiyon, tetikleyici] tuple","Bir Promise"], correct: 1, explanation: "useCallback, bağımlılıklar değişmediği sürece aynı fonksiyon referansını döndürür. Yeni referans oluşturmaz." },
          { q: "React.memo ne işe yarar?", options: ["State'i memoize eder","Props değişmediğinde bileşenin yeniden render edilmesini önler","useCallback ile aynı şeydir","Sadece class component'lerde çalışır"], correct: 1, explanation: "React.memo bir Higher Order Component'tir. Önceki ve yeni props'ları karşılaştırır. Aynıysa render atlar." },
          { q: "useCallback ile useMemo arasındaki temel fark nedir?", options: ["Bağımlılık dizisi kullanımı farklı","useCallback fonksiyon memoize eder, useMemo değer memoize eder","useCallback daha hızlıdır","Aralarında fark yoktur"], correct: 1, explanation: "useCallback(fn, deps) → fn'yi memoize eder. useMemo(() => hesapla(), deps) → hesapla()'nın sonucunu memoize eder." }
        ]
      },
      {
        id: "useimperativehandle",
        title: "useImperativeHandle Hook",
        group: "ileri-hooks",
        explanation: [
          "useImperativeHandle, ref ile parent bileşene child bileşenin belirli metodlarını veya değerlerini açmayı sağlar. forwardRef ile birlikte kullanılır.",
          "Normalde React'te parent child'ı doğrudan kontrol etmez (declarative). Ancak focus, scroll, video oynatma gibi imperative işlemler için ref ve useImperativeHandle kullanılır.",
          "TypeScript ile hem ref tipi hem de açılan interface tam olarak tiplenebilir. Bu, parent'ın yalnızca izin verilen metodlara erişmesini garanti eder."
        ],
        tip: "useImperativeHandle'ı her zaman minimal tutun — sadece gerçekten dışarıya açılması gereken metodları ekleyin. Tüm iç state'i ve metodları expose etmek kapsüllemeyi bozar ve bileşenler arası sıkı bağımlılık yaratır.",
        examples: [
          {
            label: "useImperativeHandle Temelleri",
            tip: "forwardRef + useImperativeHandle kombinasyonu, bileşen API'sini tam olarak kontrol etmenizi sağlar. Parent yalnızca tanımladığınız metodlara erişir, iç implementasyona değil.",
            code: `import { useRef, useImperativeHandle, forwardRef } from "react";

// Child'ın dışarı açacağı metodlar
type InputHandle = {
  focus: () => void;
  temizle: () => void;
  degerAl: () => string;
};

// forwardRef + useImperativeHandle
const OzelInput = forwardRef<InputHandle, { placeholder?: string }>(
  ({ placeholder }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      temizle: () => {
        if (inputRef.current) inputRef.current.value = "";
      },
      degerAl: () => inputRef.current?.value ?? "",
    }));

    return (
      <input
        ref={inputRef}
        placeholder={placeholder}
        className="border rounded p-2"
      />
    );
  }
);

// Parent bileşen
const Form: React.FC = () => {
  const inputRef = useRef<InputHandle>(null);

  return (
    <div>
      <OzelInput ref={inputRef} placeholder="Bir şey yazın" />
      <button onClick={() => inputRef.current?.focus()}>Odaklan</button>
      <button onClick={() => inputRef.current?.temizle()}>Temizle</button>
      <button onClick={() => alert(inputRef.current?.degerAl())}>
        Değeri Al
      </button>
    </div>
  );
};`
          },
          {
            label: "Modal ile useImperativeHandle",
            tip: "Modal gibi bileşenlerde useImperativeHandle ile open/close metodlarını parent'a açmak, parent'ın modal state'ini taşımasını gerektirmez. Kapsülleme korunur, parent sadece 'aç' ve 'kapat' der.",
            code: `import { forwardRef, useImperativeHandle, useState } from "react";

type ModalHandle = {
  ac: (baslik: string, icerik: string) => void;
  kapat: () => void;
};

// Modal — kendi state'ini yönetir, dışarıya ac/kapat açar
const Modal = forwardRef<ModalHandle>((_, ref) => {
  const [acik, setAcik] = useState(false);
  const [baslik, setBaslik] = useState("");
  const [icerik, setIcerik] = useState("");

  // Parent'a sadece bu iki metod açılır
  useImperativeHandle(ref, () => ({
    ac: (b, i) => { setBaslik(b); setIcerik(i); setAcik(true); },
    kapat: () => setAcik(false),
  }));

  if (!acik) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
        <h2 className="text-lg font-bold mb-2">{baslik}</h2>
        <p className="text-slate-600">{icerik}</p>
        <button
          onClick={() => setAcik(false)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Kapat
        </button>
      </div>
    </div>
  );
});

// Parent — modal state'i taşımaz
const Sayfa: React.FC = () => {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <div>
      <Modal ref={modalRef} />
      <button
        onClick={() => modalRef.current?.ac("Başarılı!", "İşleminiz tamamlandı.")}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Modal Aç
      </button>
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "useImperativeHandle'ı ne zaman kullanmalısınız? Alternatifi var mı?", answer: "Input focus, scroll, animasyon tetikleme gibi doğrudan DOM/bileşen kontrolü gerektiğinde. Çoğu durum state ile (declarative) çözülebilir. Zorunlu değilse kullanmayın." },
          { q: "forwardRef olmadan useImperativeHandle çalışır mı?", answer: "Hayır. useImperativeHandle'ın çalışması için bileşenin forwardRef ile wrap edilmesi şarttır. forwardRef, parent'ın geçtiği ref'i child'a iletir." }
        ],
        quiz: [
          { q: "useImperativeHandle hangi hook ile birlikte kullanılır?", options: ["useState","useEffect","forwardRef","useContext"], correct: 2, explanation: "useImperativeHandle, forwardRef ile birlikte çalışır. forwardRef parent'ın ref'ini child'a iletir, useImperativeHandle ise bu ref'e hangi metodların açılacağını belirler." },
          { q: "useImperativeHandle ne zaman kullanılmalıdır?", options: ["Her state güncellemesinde","Zorunlu DOM/bileşen işlemleri gerektiğinde","Her fonksiyon bileşeninde","useRef yerine"], correct: 1, explanation: "focus, scroll, oynatma/durdurma gibi imperative işlemler gerektiğinde kullanılır. Declarative yaklaşım mümkünse tercih edilmeli." },
          { q: "forwardRef'in amacı nedir?", options: ["State paylaşımı","Parent'tan gelen ref'i child bileşene iletmek","Context oluşturmak","Lifecycle yönetmek"], correct: 1, explanation: "forwardRef, parent'ın ref prop'u ile geçtiği ref'i child bileşenin render fonksiyonuna ikinci parametre olarak iletir." }
        ]
      }
    ]
  },
  {
    id: "form-routing",
    title: "Form & Routing",
    color: "bg-rose-500",
    bgColor: "bg-rose-50",
    textColor: "text-rose-600",
    activeBg: "bg-rose-100",
    activeText: "text-rose-700",
    topics: [
      {
        id: "dynamic-form",
        title: "Dinamik Form",
        group: "form-routing",
        explanation: [
          "Dinamik formlar, alan sayısı ve içeriğinin çalışma zamanında belirlendiği formlardır. Kullanıcı alan ekleyip çıkarabilir. State olarak form alanlarının dizisi tutulur.",
          "Her alan için benzersiz ID yönetimi (crypto.randomUUID veya counter) ve controlled input pattern'i uygulanır. TypeScript ile alan tipi ve validasyonu güvenli tanımlanır.",
          "Form submit'te dizi map/filter ile işlenir. Boş alan temizleme, validasyon ve hata mesajları da state ile yönetilir."
        ],
        tip: "Dinamik form verilerini submit etmeden önce validasyondan geçirin. Her alanın boş olmadığını ve etiketin benzersiz olduğunu kontrol edin. Hata mesajlarını her alanın yanında gösterin.",
        examples: [
          {
            label: "Dinamik Form Temelleri",
            tip: "Date.now() benzersiz ID için hızlı çalışır ancak aynı milisaniyede iki alan eklenirse çakışır. Üretim kodunda crypto.randomUUID() veya bir counter kullanın.",
            code: `import { useState } from "react";

type Alan = { id: string; etiket: string; deger: string };

const DinamikForm: React.FC = () => {
  const [alanlar, setAlanlar] = useState<Alan[]>([
    { id: "1", etiket: "Ad", deger: "" },
  ]);

  const alanEkle = () => {
    setAlanlar(prev => [
      ...prev,
      { id: Date.now().toString(), etiket: "", deger: "" },
    ]);
  };

  const alanSil = (id: string) => {
    setAlanlar(prev => prev.filter(a => a.id !== id));
  };

  const guncelle = (
    id: string,
    alan: keyof Omit<Alan, "id">,
    deger: string
  ) => {
    setAlanlar(prev =>
      prev.map(a => (a.id === id ? { ...a, [alan]: deger } : a))
    );
  };

  const gonder = (e: React.FormEvent) => {
    e.preventDefault();
    const veri = Object.fromEntries(alanlar.map(a => [a.etiket, a.deger]));
    console.log("Form verisi:", veri);
  };

  return (
    <form onSubmit={gonder} className="space-y-3">
      {alanlar.map(alan => (
        <div key={alan.id} className="flex gap-2">
          <input
            value={alan.etiket}
            onChange={e => guncelle(alan.id, "etiket", e.target.value)}
            placeholder="Etiket"
            className="border rounded px-2 py-1"
          />
          <input
            value={alan.deger}
            onChange={e => guncelle(alan.id, "deger", e.target.value)}
            placeholder="Değer"
            className="border rounded px-2 py-1"
          />
          <button type="button" onClick={() => alanSil(alan.id)}>Sil</button>
        </div>
      ))}
      <button type="button" onClick={alanEkle}>+ Alan Ekle</button>
      <button type="submit">Gönder</button>
    </form>
  );
};`
          },
          {
            label: "Çok Adımlı Form",
            tip: "Çok adımlı formlarda her adımın state'ini tek bir nesne state'te tutun. Adımlar arası geçişte validate() ile mevcut adımı doğrulayın, hata varsa ilerletmeyin.",
            code: `import { useState } from "react";

type AdimVerisi = { ad: string; email: string; sifre: string };
const ADIM_BASLIKLAR = ["Kişisel Bilgiler", "Hesap Bilgileri", "Onay"];

const CokAdimliForm: React.FC = () => {
  const [adim, setAdim] = useState(0);
  const [veri, setVeri] = useState<AdimVerisi>({ ad: "", email: "", sifre: "" });
  const [hatalar, setHatalar] = useState<Partial<AdimVerisi>>({});
  const [tamamlandi, setTamamlandi] = useState(false);

  const guncelle = (alan: keyof AdimVerisi, deger: string) =>
    setVeri(prev => ({ ...prev, [alan]: deger }));

  // Her adım için validasyon
  const validate = (): boolean => {
    const yeniHatalar: Partial<AdimVerisi> = {};
    if (adim === 0 && !veri.ad.trim())
      yeniHatalar.ad = "Ad zorunludur";
    if (adim === 1) {
      if (!veri.email.includes("@"))
        yeniHatalar.email = "Geçerli e-posta girin";
      if (veri.sifre.length < 6)
        yeniHatalar.sifre = "En az 6 karakter";
    }
    setHatalar(yeniHatalar);
    return Object.keys(yeniHatalar).length === 0;
  };

  const ileri = () => { if (validate()) setAdim(a => Math.min(a + 1, 2)); };
  const geri = () => { setHatalar({}); setAdim(a => Math.max(a - 1, 0)); };
  const gonder = () => { if (validate()) setTamamlandi(true); };

  if (tamamlandi)
    return <p className="text-green-600 font-semibold">Kayıt tamamlandı! Hoş geldiniz, {veri.ad}.</p>;

  return (
    <div className="max-w-md">
      {/* Adım göstergesi */}
      <div className="flex gap-2 mb-6">
        {ADIM_BASLIKLAR.map((b, i) => (
          <div key={i} className={\`flex-1 h-1.5 rounded-full \${i <= adim ? "bg-indigo-500" : "bg-slate-200"}\`} />
        ))}
      </div>
      <h3 className="font-semibold text-lg mb-4">{ADIM_BASLIKLAR[adim]}</h3>
      {adim === 0 && (
        <div>
          <input value={veri.ad} onChange={e => guncelle("ad", e.target.value)}
            placeholder="Adınız" className="border rounded p-2 w-full" />
          {hatalar.ad && <p className="text-red-500 text-sm mt-1">{hatalar.ad}</p>}
        </div>
      )}
      {adim === 1 && (
        <div className="space-y-3">
          <div>
            <input value={veri.email} onChange={e => guncelle("email", e.target.value)}
              placeholder="E-posta" className="border rounded p-2 w-full" />
            {hatalar.email && <p className="text-red-500 text-sm">{hatalar.email}</p>}
          </div>
          <div>
            <input type="password" value={veri.sifre}
              onChange={e => guncelle("sifre", e.target.value)}
              placeholder="Şifre" className="border rounded p-2 w-full" />
            {hatalar.sifre && <p className="text-red-500 text-sm">{hatalar.sifre}</p>}
          </div>
        </div>
      )}
      {adim === 2 && (
        <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-sm">
          <p><span className="font-medium">Ad:</span> {veri.ad}</p>
          <p><span className="font-medium">E-posta:</span> {veri.email}</p>
          <p><span className="font-medium">Şifre:</span> {"•".repeat(veri.sifre.length)}</p>
        </div>
      )}
      <div className="flex gap-2 mt-6">
        {adim > 0 && (
          <button onClick={geri} className="px-4 py-2 border rounded-lg">Geri</button>
        )}
        {adim < 2 ? (
          <button onClick={ileri} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">İleri</button>
        ) : (
          <button onClick={gonder} className="px-4 py-2 bg-green-600 text-white rounded-lg">Tamamla</button>
        )}
      </div>
    </div>
  );
};`
          }
        ],
        practice: [
          { q: "Dinamik form alanlarına neden benzersiz ID verilmelidir?", answer: "React key prop'u için benzersiz ID gereklidir. Dizi indeksi key olarak kullanılırsa eleman eklenip silinince karışıklık olur." },
          { q: "Controlled input nedir? Uncontrolled input ile farkı nedir?", answer: "Controlled: değer React state'inde tutulur, onChange ile güncellenir. Uncontrolled: değer DOM'da tutulur, ref ile okunur. Controlled daha öngörülüdür." }
        ],
        quiz: [
          { q: "Controlled input'ta onChange handler zorunlu mudur?", options: ["Hayır","Evet, yoksa input readonly olur","Sadece text input'larda","Sadece form submit'te"], correct: 1, explanation: "value prop verilince React input'u kontrol eder. onChange olmadan kullanıcı yazamaz (read-only). value + onChange birlikte kullanılmalı." },
          { q: "React.FormEvent<HTMLFormElement> tipi ne için kullanılır?", options: ["Input değişim eventi","Form submit eventi","Buton tıklama eventi","Klavye eventi"], correct: 1, explanation: "Form submit handler'ının parametresi React.FormEvent<HTMLFormElement> tipindedir. e.preventDefault() ile sayfanın yenilenmesi engellenir." },
          { q: "Dinamik listede key olarak dizi indeksi kullanmak neden sakıncalıdır?", options: ["Performans düşer","Eleman ekleme/silinmede key'ler kayar, yanlış bileşen güncellenir","TypeScript hata verir","Zorunlu kullanılmalıdır"], correct: 1, explanation: "Eleman silinince sonraki elemanların indeksi değişir. React yanlış bileşeni günceller. Benzersiz stabil ID tercih edilmeli." }
        ]
      },
      {
        id: "hook-form",
        title: "React Hook Form",
        group: "form-routing",
        explanation: [
          "React Hook Form, performanslı ve esnek form yönetimi kütüphanesidir. Uncontrolled input temeli üzerine kuruludur: her keystroke'ta re-render olmaz. Controlled input'a göre çok daha performanslıdır.",
          "register, handleSubmit, formState: { errors } üçlüsü temel kullanımdır. TypeScript ile form değerleri tam olarak tiplenebilir.",
          "Zod veya Yup ile schema validasyon entegrasyonu sağlanır. @hookform/resolvers/zod paketi ile Zod şeması direkt form validasyonuna bağlanır."
        ],
        tip: "React Hook Form'da watch() her izlenen alan değiştiğinde bileşeni yeniden render eder. Sadece gerekli alanları izleyin. Büyük formlarda getValues() ile render tetiklemeden değere erişmek daha performanslıdır.",
        examples: [
          {
            label: "React Hook Form Temelleri",
            tip: "RHF'de register() ile input'u kaydettiğinizde, uncontrolled input prensibine göre ref ile takip edilir. Bu nedenle her tuşta re-render olmaz — büyük formlarda ciddi performans avantajı sağlar.",
            code: `import { useForm } from "react-hook-form";
// NOT: Bu örnek konsept gösterimidir (kütüphane kurulu olmayabilir)

type KayitForm = {
  ad: string;
  email: string;
  sifre: string;
  yas: number;
};

const KayitFormu: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<KayitForm>();

  const gonder = (data: KayitForm) => {
    console.log("Form verisi:", data);
  };

  return (
    <form onSubmit={handleSubmit(gonder)} className="space-y-4">
      <div>
        <input
          {...register("ad", {
            required: "Ad zorunludur",
            minLength: { value: 2, message: "En az 2 karakter" },
          })}
          placeholder="Adınız"
          className="border rounded px-3 py-2 w-full"
        />
        {errors.ad && (
          <span className="text-red-500 text-sm">{errors.ad.message}</span>
        )}
      </div>

      <div>
        <input
          {...register("email", {
            required: "E-posta zorunludur",
            pattern: { value: /^[^@]+@[^@]+$/, message: "Geçerli e-posta girin" },
          })}
          placeholder="E-posta"
          className="border rounded px-3 py-2 w-full"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Kayıt Ol
      </button>
    </form>
  );
};`
          },
          {
            label: "Zod ile Şema Validasyonu",
            tip: "Zod şemasını formdan bağımsız olarak da kullanabilirsiniz: API yanıtlarını, URL parametrelerini veya localStorage verilerini Zod ile parse ederek tip güvenliğini runtime'a taşıyın.",
            code: `// Bu örnek React Hook Form + Zod entegrasyonunun konseptini gösterir.
// Gerçek kullanım: pnpm add react-hook-form zod @hookform/resolvers

// 1) Zod şeması — validasyon kuralları
// import { z } from "zod";
// const kayitSemasi = z.object({
//   ad: z.string().min(2, "En az 2 karakter"),
//   email: z.string().email("Geçerli e-posta girin"),
//   yas: z.number().min(18, "18 yaşından büyük olmalı"),
//   sifre: z.string().min(8).regex(/[A-Z]/, "Büyük harf içermeli"),
//   sifreTekrar: z.string(),
// }).refine(d => d.sifre === d.sifreTekrar, {
//   message: "Şifreler eşleşmiyor",
//   path: ["sifreTekrar"],
// });

// 2) Şemadan TypeScript tipi üretme
// type KayitForm = z.infer<typeof kayitSemasi>;

// 3) RHF + zodResolver ile form
// const { register, handleSubmit, formState: { errors } } = useForm<KayitForm>({
//   resolver: zodResolver(kayitSemasi),
// });

// 4) Submit handler — sadece validasyon geçince çağrılır
// const gonder = (veri: KayitForm) => console.log(veri);

// Avantajlar:
// - Tek kaynak: validasyon hem frontend hem backend paylaşılır
// - TypeScript tipi otomatik oluşur (z.infer)
// - Karmaşık kurallar (refine, transform) sade sözdizimi ile yazılır

// Manuel validasyon örneği (kütüphane olmadan):
const emailKontrol = (email: string): boolean =>
  /^[^@]+@[^@]+\.[^@]+$/.test(email);

const sifreKontrol = (sifre: string): string[] => {
  const hatalar: string[] = [];
  if (sifre.length < 8) hatalar.push("En az 8 karakter");
  if (!/[A-Z]/.test(sifre)) hatalar.push("Büyük harf içermeli");
  if (!/[0-9]/.test(sifre)) hatalar.push("Rakam içermeli");
  return hatalar;
};`
          }
        ],
        practice: [
          { q: "React Hook Form neden controlled input yerine uncontrolled kullanır?", answer: "Uncontrolled ile her tuş vuruşunda re-render olmaz. State yerine ref ile değer okunur. Büyük formlarda önemli performans avantajı sağlar." },
          { q: "formState.errors nesnesi nasıl kullanılır?", answer: "Her alan için hata mesajı içerir. errors.ad?.message ile güvenli erişilir. Register'daki validasyon kuralları tetiklenince otomatik dolar." }
        ],
        quiz: [
          { q: "React Hook Form'da register fonksiyonu ne döndürür?", options: ["State değeri","name, ref, onChange, onBlur prop'larını içeren nesne","Sadece ref","Validasyon sonucu"], correct: 1, explanation: "register, input'a spread edilecek prop'ları döndürür: {...register('alan')}. Bu sayede RHF input'u takip edebilir." },
          { q: "handleSubmit ne işe yarar?", options: ["Form'u sıfırlar","Validasyon yapar, başarılıysa callback'i data ile çağırır","State günceller","Hataları temizler"], correct: 1, explanation: "handleSubmit validasyonu çalıştırır. Başarılıysa form verilerini typed nesne olarak submit callback'e iletir. Hatalıysa errors dolar, callback çağrılmaz." },
          { q: "Zod resolver ne işe yarar?", options: ["RHF'yi Zod'la değiştirir","Zod şemasını RHF validasyonuna bağlar","Type üretir","Performans artırır"], correct: 1, explanation: "@hookform/resolvers/zod ile Zod şeması RHF'ye resolver olarak bağlanır. Tüm validasyon Zod şemasında merkezi olarak yönetilir." }
        ]
      },
      {
        id: "react-router",
        title: "React Router",
        group: "form-routing",
        explanation: [
          "React Router, React uygulamalarında client-side routing sağlayan kütüphanedir. URL değişince sayfa yenilemeden farklı bileşenler render edilir. v6 ile declarative routing yapısı kolaylaştı.",
          "BrowserRouter uygulamayı sarar. Routes içindeki Route bileşenleri path-component eşlemesini tanımlar. Link/NavLink ile programatik yönlendirme yerine tipli navigasyon sağlanır.",
          "useNavigate ile programatik yönlendirme, useParams ile URL parametresi okuma, useSearchParams ile query string yönetimi yapılır."
        ],
        tip: "Nested layout route'larında <Outlet /> bileşenini layout içine yerleştirin. Outlet'siz bir layout route, alt route'ları render etmez. Bu React Router v6'nın en sık yapılan hatasıdır.",
        examples: [
          {
            label: "React Router Temelleri",
            tip: "useParams() string döndürür. URL'den sayısal ID okurken parseInt veya Number() ile dönüştürmeyi unutmayın. TypeScript bu noktada yardımcı olmaz — id: string olarak gelir.",
            code: `// NOT: react-router-dom kütüphanesi gerektirir
// Bu örnek konsept ve sözdizimi gösterimidir

import {
  BrowserRouter, Routes, Route,
  Link, useNavigate, useParams,
} from "react-router-dom";

const App: React.FC = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Ana Sayfa</Link>
      <Link to="/hakkinda">Hakkında</Link>
      <Link to="/kullanici/1">Profil</Link>
    </nav>
    <Routes>
      <Route path="/" element={<AnaSayfa />} />
      <Route path="/hakkinda" element={<Hakkinda />} />
      {/* :id — dinamik URL parametresi */}
      <Route path="/kullanici/:id" element={<KullaniciProfili />} />
      {/* * — hiçbir route eşleşmezse (404) */}
      <Route path="*" element={<BulunamadiSayfasi />} />
    </Routes>
  </BrowserRouter>
);

// URL parametresi okuma
const KullaniciProfili: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const kullaniciId = Number(id); // string → number dönüşümü
  return <div>Kullanıcı ID: {kullaniciId}</div>;
};

// Programatik yönlendirme
const GirisFormu: React.FC = () => {
  const navigate = useNavigate();
  const girisYap = () => navigate("/panel"); // yönlendir
  return <button onClick={girisYap}>Giriş Yap</button>;
};`
          },
          {
            label: "Korumalı Route Deseni",
            tip: "Protected Route deseni kimlik doğrulama gerektiren sayfaları auth olmayan kullanıcılardan korur. useAuth hook'u ile kullanıcı bilgisini okuyun ve giriş yapmamışsa /giris'e yönlendirin.",
            code: `// Korumalı route bileşeni
// const KorunalanRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { kullanici } = useAuth(); // context'ten kullanıcı bilgisi
//   const konum = useLocation();    // mevcut URL
//
//   // Giriş yapılmamışsa, geri dönüş URL'ini state'e kaydederek login'e git
//   if (!kullanici) {
//     return <Navigate to="/giris" state={{ from: konum }} replace />;
//   }
//   return <>{children}</>;
// };

// Route yapısına entegrasyon:
// <Routes>
//   <Route path="/giris" element={<GirisSayfasi />} />
//   <Route path="/panel" element={
//     <KorunalanRoute>
//       <PanelLayout />
//     </KorunalanRoute>
//   }>
//     <Route index element={<PanelAnaSayfa />} />
//     <Route path="profil" element={<Profil />} />
//   </Route>
// </Routes>

// Login sonrası geri yönlendirme:
// const GirisSayfasi: React.FC = () => {
//   const navigate = useNavigate();
//   const konum = useLocation();
//   const { girisYap } = useAuth();
//
//   const gonder = (e: React.FormEvent) => {
//     e.preventDefault();
//     girisYap({ id: 1, ad: "Emirhan", rol: "admin" });
//     // Gelmeden önceki sayfaya veya /panel'e dön
//     const hedef = (konum.state as { from?: Location })?.from?.pathname || "/panel";
//     navigate(hedef, { replace: true });
//   };
//   ...
// };

// Rol bazlı koruma:
// const RolRoute: React.FC<{ gereken: "admin" | "kullanici"; children: React.ReactNode }> = ({
//   gereken, children,
// }) => {
//   const { kullanici } = useAuth();
//   if (kullanici?.rol !== gereken)
//     return <Navigate to="/yetkisiz" replace />;
//   return <>{children}</>;
// };`
          }
        ],
        practice: [
          { q: "Link ve NavLink bileşenlerinin farkı nedir? NavLink ne zaman tercih edilir?", answer: "NavLink aktif route için otomatik aktif sınıf ekler (className prop'u ile özelleştirilebilir). Navigasyon menüsü için NavLink, diğer yönlendirmeler için Link tercih edilir." },
          { q: "useNavigate() ile <Link to='...'> arasındaki farkı açıklayın.", answer: "Link JSX içindedir, kullanıcı tıklayarak gider. useNavigate programatik yönlendirme içindir: form submit sonrası, koşullu yönlendirme gibi durumlarda kullanılır." }
        ],
        quiz: [
          { q: "React Router'da '*' path'i ne anlama gelir?", options: ["Tüm route'ları eşleştirir","Hiçbir route eşleşmediğinde (404 sayfası) gösterilir","Nested route tanımlar","Dinamik parametre tanımlar"], correct: 1, explanation: "path='*' bir wildcard'dır. Önceki hiçbir Route eşleşmediğinde bu Route render edilir. 404 (Bulunamadı) sayfası için kullanılır." },
          { q: "useParams() hook'u ne döndürür?", options: ["Query string parametreleri","URL'deki :parametre değerlerini nesne olarak","Route listesini","Navigate fonksiyonunu"], correct: 1, explanation: "useParams(), Route path'indeki :parametre kısımlarının değerlerini nesne olarak döndürür. <Route path='/user/:id'> için useParams() → { id: '...' }" },
          { q: "client-side routing ile server-side routing arasındaki fark nedir?", options: ["Client-side daha yavaştır","Client-side sayfa yenilemeden URL ve içeriği değiştirir","Server-side daha moderndir","Aralarında fark yoktur"], correct: 1, explanation: "Client-side routing JavaScript ile gerçekleşir, sunucuya yeni HTML talebi gitmez. Daha hızlı geçiş sağlar. React Router bu yöntemi kullanır." }
        ]
      },
      {
        id: "nested-routes",
        title: "Nested Routes (İç İçe Route)",
        group: "form-routing",
        explanation: [
          "Nested routes, bir route içinde başka route'lar tanımlamayı sağlar. Ortak layout (header, sidebar) paylaşan sayfalar için idealdir. v6'da <Outlet /> bileşeni alt route'ların render yeri olarak kullanılır.",
          "Panel/admin gibi uygulamalarda layout route'u sidebar ve header'ı içerir. <Outlet /> ile aktif alt route'un içeriği oraya enjekte edilir.",
          "Index route (index prop), bir grubun varsayılan sayfasını tanımlar. Relative path ile nested route'lar kısa yazılır."
        ],
        tip: "Nested route'larda göreli (relative) path kullanın — başında / olmadan. /panel/kullanicilar yerine sadece kullanicilar yazın. Bu sayede parent route path'i değiştiğinde alt route'ları güncellemeniz gerekmez.",
        examples: [
          {
            label: "Nested Routes Temelleri",
            tip: "Outlet context API'sini kullanarak layout'tan alt route'lara veri iletebilirsiniz: <Outlet context={{ kullanici }} /> ve useOutletContext<{kullanici: Kullanici}>() ile okuyabilirsiniz.",
            code: `// NOT: react-router-dom kütüphanesi gerektirir
import { Routes, Route, Outlet, Link } from "react-router-dom";

// Layout bileşeni — Outlet ile alt route'lar buraya render edilir
const PanelLayout: React.FC = () => (
  <div className="flex">
    <aside className="w-48 bg-slate-800 text-white p-4">
      <nav className="space-y-2">
        {/* Göreli path — başında / yok */}
        <Link to="/panel">Ana Panel</Link>
        <Link to="/panel/kullanicilar">Kullanıcılar</Link>
        <Link to="/panel/ayarlar">Ayarlar</Link>
      </nav>
    </aside>
    <main className="flex-1 p-6">
      <Outlet /> {/* aktif alt route buraya render edilir */}
    </main>
  </div>
);

// Route yapısı
const App: React.FC = () => (
  <Routes>
    <Route path="/panel" element={<PanelLayout />}>
      {/* index: /panel adresinde gösterilir */}
      <Route index element={<PanelAnaSayfa />} />
      {/* /panel/kullanicilar */}
      <Route path="kullanicilar" element={<Kullanicilar />} />
      {/* /panel/ayarlar */}
      <Route path="ayarlar" element={<Ayarlar />} />
    </Route>
  </Routes>
);`
          },
          {
            label: "İç İçe Veri Route'ları",
            tip: "Derin nested route'larda her seviye kendi <Outlet />'ini render etmeli. 3 seviye: App → PanelLayout (Outlet) → KullaniciLayout (Outlet) → KullaniciDetay",
            code: `// 3 seviye nesting örneği
// <Routes>
//   <Route path="/" element={<AnaSayfa />} />
//   <Route path="/panel" element={<PanelLayout />}>
//     <Route index element={<PanelAnaSayfa />} />       {/* /panel */}
//     <Route path="kullanicilar" element={<KullaniciLayout />}>
//       <Route index element={<KullaniciListesi />} />  {/* /panel/kullanicilar */}
//       <Route path=":id" element={<KullaniciDetay />} />{/* /panel/kullanicilar/42 */}
//     </Route>
//     <Route path="ayarlar" element={<Ayarlar />} />
//     {/* /panel altındaki bilinmeyen → /panel'e yönlendir */}
//     <Route path="*" element={<Navigate to="/panel" replace />} />
//   </Route>
// </Routes>

// KullaniciLayout — kendi Outlet'i var + context ile veri iletir
// const KullaniciLayout: React.FC = () => {
//   const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([]);
//   useEffect(() => { /* API çağrısı */ }, []);
//   return (
//     <div>
//       <h2>Kullanıcılar ({kullanicilar.length})</h2>
//       {/* context ile alt route'lara veri ilet */}
//       <Outlet context={{ kullanicilar, setKullanicilar }} />
//     </div>
//   );
// };

// KullaniciDetay — useParams + useOutletContext
// const KullaniciDetay: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const { kullanicilar } = useOutletContext<{ kullanicilar: Kullanici[] }>();
//   const kullanici = kullanicilar.find(k => k.id === Number(id));
//   if (!kullanici)
//     return <Navigate to="/panel/kullanicilar" replace />;
//   return <div><h3>{kullanici.ad}</h3></div>;
// };

// Programatik aktif link — NavLink ile
// const PanelSidebar: React.FC = () => (
//   <nav>
//     {[
//       { to: "/panel", label: "Ana Panel", end: true },
//       { to: "/panel/kullanicilar", label: "Kullanıcılar", end: false },
//     ].map(item => (
//       <NavLink key={item.to} to={item.to} end={item.end}
//         className={({ isActive }) => isActive ? "font-bold text-white" : "text-slate-400"}
//       >
//         {item.label}
//       </NavLink>
//     ))}
//   </nav>
// );`
          }
        ],
        practice: [
          { q: "<Outlet /> bileşeninin rolü nedir? Olmasa ne olur?", answer: "Outlet, parent route'un layout'unda aktif child route'un render edileceği yeri işaretler. Olmasa child route'lar görüntülenemez." },
          { q: "Index route nedir ve ne zaman kullanılır?", answer: "index prop'lu Route, parent path'i tam eşleştiğinde (alt path olmadan) render edilen varsayılan alt route'dur. /panel gittiğinde <PanelAnaSayfa /> gösterilir." }
        ],
        quiz: [
          { q: "<Outlet /> ne işe yarar?", options: ["Route listesi oluşturur","Parent layout'ta child route'un render yeri","Global state tutar","Navigation sağlar"], correct: 1, explanation: "Outlet, nested route yapısında parent layout bileşeni içinde child route'un render edileceği slot'u işaretler." },
          { q: "index route hangi path'e karşılık gelir?", options: ["/* path'ine","/index path'ine","Parent path'in tam kendisine","Tanımsız path'e"], correct: 2, explanation: "index Route, parent Route'un path'i tam olarak eşleştiğinde render edilir. <Route path='/panel'> içindeki index → /panel adresinde görünür." },
          { q: "Nested routes'un en büyük avantajı nedir?", options: ["Daha hızlı yükleme","Layout'u paylaşan sayfalar için ortak UI tek yerde yönetilir","Daha az kod","SEO iyileştirmesi"], correct: 1, explanation: "Sidebar, header gibi ortak UI elemanları layout route'ta tek seferinde tanımlanır. Tüm alt sayfalarda tekrarlanmaz." }
        ]
      }
    ]
  }
];