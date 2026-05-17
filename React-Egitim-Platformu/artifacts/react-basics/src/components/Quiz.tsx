import { useState } from "react";

type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "useState hook'u ile number tipinde bir state tanımlamanın doğru yolu hangisidir?",
    options: [
      "useState(0)",
      "useState<number>(0)",
      "useState<Number>(0)",
      "useState:number(0)"
    ],
    correctIndex: 1,
    explanation: "useState<number>(0) ifadesi state'in tipini açıkça number olarak belirtir. TypeScript başlangıç değerinden tipi çıkarabilir ancak karmaşık tiplerde açık generic kullanmak önerilir."
  },
  {
    id: 2,
    question: "Fonksiyonel bileşenlerde yan etkileri (side effects) yönetmek için hangi hook kullanılır?",
    options: ["useState", "useRef", "useEffect", "useMemo"],
    correctIndex: 2,
    explanation: "useEffect, render sonrasında çalışır ve API çağrıları, event listener'lar, DOM manipülasyonu gibi yan etkiler için kullanılır."
  },
  {
    id: 3,
    question: "TypeScript'te 'age?: number' ifadesindeki ? sembolü ne anlama gelir?",
    options: [
      "age zorunlu bir alandır",
      "age null olabilir",
      "age opsiyoneldir (isteğe bağlı)",
      "age bir soru tipidir"
    ],
    correctIndex: 2,
    explanation: "? operatörü bir prop'u opsiyonel yapar — parent bileşen tarafından verilmezse undefined olur."
  },
  {
    id: 4,
    question: "React'te Props hakkında hangisi doğrudur?",
    options: [
      "Bileşen içinde değiştirilebilen değerlerdir",
      "Ebeveynden çocuğa aktarılan salt okunur (read-only) girişlerdir",
      "Tüm bileşenler arasında paylaşılan global değişkenlerdir",
      "State güncellemek için kullanılan fonksiyonlardır"
    ],
    correctIndex: 1,
    explanation: "Props tek yönlü olarak ebeveynden çocuğa akar ve salt okunurdur. Çocuk bileşen props'ları doğrudan değiştiremez."
  },
  {
    id: 5,
    question: "TypeScript'te interface ile type arasındaki temel fark nedir?",
    options: [
      "Tamamen aynıdırlar, fark yoktur",
      "interface union tipler destekler, type desteklemez",
      "type union ve intersection destekler; interface declaration merging destekler",
      "type sadece nesneler için, interface sadece fonksiyonlar içindir"
    ],
    correctIndex: 2,
    explanation: "type alias'ları union, intersection ve primitive tipler tanımlayabilir. interface ise declaration merging destekler ve public API'ler ile sınıf yapıları için tercih edilir."
  },
  {
    id: 6,
    question: "React bileşenlerinde hangi isimlendirme kuralı zorunludur?",
    options: [
      "camelCase (küçük harfle başlayan)",
      "PascalCase (büyük harfle başlayan)",
      "snake_case (alt çizgi ile)",
      "kebab-case (tire ile)"
    ],
    correctIndex: 1,
    explanation: "React bileşenleri PascalCase ile isimlendirilmelidir. Küçük harfle başlayan isimler React tarafından HTML etiketi olarak yorumlanır ve beklenen bileşen render edilmez."
  },
  {
    id: 7,
    question: "React hangi şirket tarafından geliştirilmiştir?",
    options: ["Google", "Microsoft", "Meta (Facebook)", "Apple"],
    correctIndex: 2,
    explanation: "React, Facebook (şimdiki adıyla Meta) tarafından 2013 yılında açık kaynak olarak yayımlanmıştır."
  },
  {
    id: 8,
    question: "useEffect'in dependency array'i boş ([]) verildiğinde ne olur?",
    options: [
      "Her render'da çalışır",
      "Hiç çalışmaz",
      "Sadece ilk mount'ta çalışır",
      "Sadece unmount'ta çalışır"
    ],
    correctIndex: 2,
    explanation: "Boş dependency array ([]) useEffect'in yalnızca bileşen ilk kez DOM'a eklendiğinde (mount) çalışmasını sağlar. Cleanup fonksiyonu ise unmount'ta çalışır."
  },
  {
    id: 9,
    question: "setState(prev => prev + 1) yerine setState(state + 1) kullanmanın riski nedir?",
    options: [
      "Hiçbir riski yoktur",
      "Batch güncellemelerde eski state değeri kullanılabilir",
      "Sadece class component'lerde sorun çıkarır",
      "TypeScript hata verir"
    ],
    correctIndex: 1,
    explanation: "React state güncellemelerini birleştirebilir (batch). Fonksiyonel form (prev => ...) her zaman en güncel değeri garanti eder, closure problemi yaşanmaz."
  },
  {
    id: 10,
    question: "React'te liste render ederken her elemana verilmesi gereken prop hangisidir?",
    options: ["id", "name", "key", "index"],
    correctIndex: 2,
    explanation: "key prop'u React'in her liste elemanını benzersiz olarak tanımasını sağlar. Dizi indeksi yerine gerçek bir benzersiz ID kullanmak performans ve doğruluk açısından önemlidir."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestion].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(q => q + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    let message = "";
    let emoji = "";
    if (score >= 9) {
      message = "Mükemmel! React ve TypeScript konusunda güçlü bir hakimiyetiniz var.";
      emoji = "🎉";
    } else if (score >= 7) {
      message = "Çok iyi! Birkaç konuyu tekrar gözden geçirerek pekiştirebilirsiniz.";
      emoji = "👏";
    } else if (score >= 5) {
      message = "İyi bir başlangıç! Eksik kalan konuları tekrar çalışmanızı öneririz.";
      emoji = "📚";
    } else {
      message = "Konuları tekrar çalışmanız gerekiyor. Yukarıdaki bölümleri incelemeye devam edin.";
      emoji = "💪";
    }

    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Bilgi Sınavı</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Sınav Sonuçları {emoji}</h3>
          <div data-testid="quiz-score" className="text-5xl font-bold text-indigo-600 mb-6">
            {score} / {questions.length}
          </div>
          <p className="text-slate-600 text-lg mb-8">{message}</p>
          <button
            onClick={handleRetake}
            data-testid="quiz-retake"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Sınavı Tekrar Çöz
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Bilgi Sınavı</h2>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
            <span>Soru {currentQuestion + 1} / {questions.length}</span>
            <span className="text-indigo-600 font-semibold">{score} doğru</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              data-testid="quiz-progress"
              className="h-full bg-indigo-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <h3 data-testid="quiz-question" className="text-xl font-semibold text-slate-900 mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonClass = "border-slate-200 bg-white hover:bg-slate-50 text-slate-700";
            
            if (isAnswered) {
              if (index === question.correctIndex) {
                buttonClass = "border-green-500 bg-green-50 text-green-800 font-semibold";
              } else if (index === selectedAnswer) {
                buttonClass = "border-red-400 bg-red-50 text-red-800 font-semibold";
              } else {
                buttonClass = "border-slate-200 bg-white opacity-50 cursor-not-allowed";
              }
            }

            return (
              <button
                key={index}
                data-testid={`quiz-option-${index}`}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={`w-full text-left rounded-xl border py-3 px-5 transition-colors ${buttonClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-800 text-sm leading-relaxed">
            <strong>Açıklama:</strong> {question.explanation}
          </div>
        )}

        {isAnswered && (
          <button
            onClick={handleNext}
            data-testid="quiz-next"
            className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? "Sonraki Soru →" : "Sınavı Bitir"}
          </button>
        )}
      </div>
    </div>
  );
}
