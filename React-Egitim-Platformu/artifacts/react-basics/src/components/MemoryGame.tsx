import React, { useState, useEffect } from "react";
import { CheckCircle, RotateCcw } from "lucide-react";

type Card = {
  id: number;
  text: string;
  matchId: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const PAIRS = [
  { concept: "useState", definition: "Bileşen içinde durum (state) tutmamızı sağlar." },
  { concept: "useEffect", definition: "Yan etkileri (API isteği, abonelik) yönetir." },
  { concept: "JSX", definition: "JavaScript içinde HTML yazmamızı sağlayan sözdizimi." },
  { concept: "Virtual DOM", definition: "Gerçek DOM'un bellekteki hafif bir kopyasıdır." },
  { concept: "Props", definition: "Bileşenler arası veri aktarımını sağlayan parametreler." },
  { concept: "Component", definition: "Tekrar kullanılabilir bağımsız UI parçacıkları." },
];

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  const initializeGame = () => {
    const newCards: Card[] = [];
    let idCounter = 0;
    
    PAIRS.forEach((pair, index) => {
      newCards.push({ id: idCounter++, text: pair.concept, matchId: `pair-${index}`, isFlipped: false, isMatched: false });
      newCards.push({ id: idCounter++, text: pair.definition, matchId: `pair-${index}`, isFlipped: false, isMatched: false });
    });

    // Shuffle
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }

    setCards(newCards);
    setFlippedIndices([]);
    setMatchedPairs(0);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) {
      return;
    }

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (cards[firstIndex].matchId === cards[secondIndex].matchId) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setMatchedPairs(matchedPairs + 1);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in duration-300 w-full max-w-2xl mx-auto py-4">
      <div className="w-full flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">React Hafıza Oyunu</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Kavramları açıklamalarıyla eşleştirin!</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-right">
            <p className="text-xs text-slate-400 font-medium uppercase">Hamle</p>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">{moves}</p>
          </div>
          <button 
            onClick={initializeGame}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg transition-colors"
            title="Yeniden Başlat"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {matchedPairs === PAIRS.length && (
        <div className="w-full mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-xl flex items-center justify-center gap-3 text-emerald-700 dark:text-emerald-400">
          <CheckCircle className="w-6 h-6" />
          <span className="font-semibold text-lg">Tebrikler! Oyunu {moves} hamlede bitirdiniz.</span>
        </div>
      )}

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {cards.map((card, index) => (
          <div 
            key={card.id} 
            onClick={() => handleCardClick(index)}
            className="relative w-full aspect-[4/3] cursor-pointer"
          >
            <div 
              className={`absolute inset-0 w-full h-full transition-all duration-300 ${card.isFlipped || card.isMatched ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
            >
              <div className="w-full h-full bg-indigo-500 dark:bg-indigo-600 rounded-xl shadow-sm flex items-center justify-center border-2 border-indigo-400 dark:border-indigo-500 hover:bg-indigo-400 dark:hover:bg-indigo-500 transition-colors">
                <span className="text-white text-3xl opacity-50 font-bold">?</span>
              </div>
            </div>

            <div 
              className={`absolute inset-0 w-full h-full transition-all duration-300 ${!(card.isFlipped || card.isMatched) ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
            >
              <div className={`w-full h-full rounded-xl shadow-md border-2 flex items-center justify-center p-3 text-center ${
                card.isMatched 
                  ? "border-emerald-400 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" 
                  : "border-indigo-200 dark:border-slate-600 bg-white dark:bg-slate-800"
              }`}>
                <span className={`text-sm md:text-base font-medium select-none ${
                  card.isMatched ? "text-emerald-700 dark:text-emerald-400" : "text-slate-700 dark:text-slate-200"
                }`}>
                  {card.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
