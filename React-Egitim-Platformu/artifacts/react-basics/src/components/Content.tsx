import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, BookOpen, Code, Pencil, CheckSquare, CheckCircle, XCircle, Trophy, Menu, X } from "lucide-react";
import type { Group, Topic } from "../data/contentTypes";
import { DATA } from "../data/contentData";
import MemoryGame from "./MemoryGame";
import { useProgress } from "../hooks/useProgress";

// Veri ve tipler → src/data/ klasöründe

export default function Content() {
  const {
    completedTopics,
    quizScores,
    lastVisited,
    recordQuizScore,
    setLastVisited,
    resetProgress: resetProgressData,
  } = useProgress();

  const [activeGroup, setActiveGroup] = useState<string>(lastVisited?.groupId ?? "temel");
  const [activeTopic, setActiveTopic] = useState<string>(lastVisited?.topicId ?? "react-giris");
  const [activeTab, setActiveTab] = useState<"anlatim" | "ornekler" | "sorular" | "test">("anlatim");
  const [activeExample, setActiveExample] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showPracticeAnswers, setShowPracticeAnswers] = useState<Record<number, boolean>>({});

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFinalTest, setShowFinalTest] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState<Record<number, number>>({});
  const [finalResults, setFinalResults] = useState(false);

  const allTopics = DATA.flatMap((g) => g.topics);
  const coreTopics = DATA.filter((g) => g.id !== "ekstralar").flatMap((g) => g.topics);
  const completedCoreCount = Array.from(completedTopics).filter((id) => coreTopics.some((t) => t.id === id)).length;
  const progressPercent = Math.round((completedCoreCount / coreTopics.length) * 100);

  const group = DATA.find((g) => g.id === activeGroup) || DATA[0];
  const topic = allTopics.find((t) => t.id === activeTopic) || allTopics[0];
  const topicGroup = DATA.find((g) => g.id === topic.group) || DATA[0];

  const handleTopicChange = (topicId: string, groupId: string) => {
    setActiveTopic(topicId);
    setActiveGroup(groupId);
    setActiveTab("anlatim");
    setSelectedAnswers({});
    setShowResults(false);
    setShowPracticeAnswers({});
    setActiveExample(0);
    setShowFinalTest(false);
    setLastVisited(topicId, groupId);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const { topicId, groupId } = (e as CustomEvent<{ topicId: string; groupId: string }>).detail;
      handleTopicChange(topicId, groupId);
    };
    window.addEventListener("navigate-topic", handler);
    return () => window.removeEventListener("navigate-topic", handler);
  }, []);

  const handleTabChange = (tab: "anlatim" | "ornekler" | "sorular" | "test") => {
    setActiveTab(tab);
  };

  const handleTestSubmit = () => {
    const score = topic.quiz.reduce(
      (acc, _, i) => acc + (selectedAnswers[i] === topic.quiz[i].correct ? 1 : 0),
      0
    );
    recordQuizScore(activeTopic, score, topic.quiz.length);
    setShowResults(true);
  };

  const handleFinalTestSubmit = () => {
    setFinalResults(true);
  };

  const resetProgress = () => {
    if (window.confirm("Tüm ilerlemenizi sıfırlamak istediğinize emin misiniz? Bu işlem geri alınamaz.")) {
      resetProgressData();
      setFinalAnswers({});
      setFinalResults(false);
      setShowFinalTest(false);
      setSelectedAnswers({});
      setShowResults(false);
      setShowPracticeAnswers({});
      setActiveExample(0);
      setActiveTopic("react-giris");
      setActiveGroup("temel");
      setActiveTab("anlatim");
    }
  };

  const finalScore = coreTopics.reduce(
    (acc, t, i) => acc + (finalAnswers[i] === t.quiz[0].correct ? 1 : 0),
    0
  );

  const finalGrade = () => {
    if (finalScore >= 15) return { text: "Mükemmel! React uzmanısınız. 🎉", color: "text-emerald-600" };
    if (finalScore >= 11) return { text: "Çok İyi! Birkaç konuyu tekrar gözden geçirebilirsiniz.", color: "text-blue-600" };
    if (finalScore >= 7) return { text: "İyi! Temel konuları pekiştirmeye devam edin.", color: "text-amber-600" };
    return { text: "Konuları tekrar çalışmanızı öneririz.", color: "text-rose-600" };
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "anlatim":
        return (
          <div className="animate-in fade-in duration-300">
            <div className="space-y-4">
              {topic.explanation.map((p, i) => (
                <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">{p}</p>
              ))}
            </div>
            {topic.tip && (
              <div className="mt-6 flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <span className="text-blue-500 text-lg shrink-0">💡</span>
                <div>
                  <p className="text-blue-800 font-semibold text-sm mb-1">İpucu</p>
                  <p className="text-blue-700 text-sm leading-relaxed">{topic.tip}</p>
                </div>
              </div>
            )}
          </div>
        );

      case "ornekler":
        return (
          <div className="animate-in fade-in duration-300">
            {topic.examples.length > 1 && (
              <div className="flex gap-2 mb-4">
                {topic.examples.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveExample(i)}
                    className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-colors ${
                      activeExample === i
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            )}
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="bg-slate-800 px-4 py-2.5 border-b border-slate-700 flex items-center justify-between">
                <span className="text-slate-300 text-xs font-mono font-medium">
                  {topic.examples[activeExample]?.label}
                </span>
                <span className="text-slate-500 text-xs">TypeScript + React</span>
              </div>
              <pre className="bg-slate-950 p-6 overflow-x-auto text-sm leading-relaxed text-green-300 font-mono whitespace-pre">
                {topic.examples[activeExample]?.code}
              </pre>
            </div>
            {topic.examples[activeExample]?.tip && (
              <div className="mt-4 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <span className="text-amber-500 text-lg shrink-0">💡</span>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {topic.examples[activeExample].tip}
                </p>
              </div>
            )}
          </div>
        );

      case "sorular":
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            {topic.practice.map((p, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <p className="font-medium text-slate-800 mb-3 flex gap-2">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {p.q}
                </p>
                {showPracticeAnswers[i] ? (
                  <div className="bg-white rounded-lg p-4 border border-emerald-200">
                    <p className="text-emerald-700 text-sm leading-relaxed">{p.answer}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowPracticeAnswers(prev => ({ ...prev, [i]: true }))}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    Cevabı Göster →
                  </button>
                )}
              </div>
            ))}
          </div>
        );

      case "test":
        return (
          <div className="animate-in fade-in duration-300">
            {!showResults ? (
              <div className="space-y-6">
                <p className="text-slate-500 text-sm">
                  {Object.keys(selectedAnswers).length}/{topic.quiz.length} soru yanıtlandı
                </p>
                {topic.quiz.map((q, qi) => (
                  <div key={qi} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <p className="font-semibold text-slate-800 mb-4 flex gap-2">
                      <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {qi + 1}
                      </span>
                      {q.q}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => (
                        <button
                          key={oi}
                          onClick={() => setSelectedAnswers(prev => ({ ...prev, [qi]: oi }))}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all border ${
                            selectedAnswers[qi] === oi
                              ? "bg-indigo-600 text-white border-indigo-600"
                              : "bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleTestSubmit}
                  disabled={Object.keys(selectedAnswers).length < topic.quiz.length}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold rounded-xl transition-colors"
                >
                  Testi Tamamla
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {(() => {
                  const score = topic.quiz.reduce(
                    (acc, _, i) => acc + (selectedAnswers[i] === topic.quiz[i].correct ? 1 : 0),
                    0
                  );
                  const passThreshold = Math.ceil(topic.quiz.length * 0.6);
                  const passed = score >= passThreshold;
                  return (
                    <>
                      <div className={`rounded-xl p-5 text-center ${passed ? "bg-emerald-50 border border-emerald-200" : "bg-rose-50 border border-rose-200"}`}>
                        <p className={`text-3xl font-extrabold mb-1 ${passed ? "text-emerald-600" : "text-rose-600"}`}>
                          {score}/{topic.quiz.length}
                        </p>
                        <p className={`font-medium ${passed ? "text-emerald-700" : "text-rose-700"}`}>
                          {passed ? "Tebrikler! Konu tamamlandı! ✓" : `Geçmek için en az ${passThreshold}/${topic.quiz.length} doğru gerekli (%60). Tekrar deneyin.`}
                        </p>
                        {passed && completedTopics.has(activeTopic) && (
                          <p className="text-emerald-600 text-sm mt-1">Bu konu ilerlemenize kaydedildi.</p>
                        )}
                        {quizScores[activeTopic] && quizScores[activeTopic].attempts > 1 && (
                          <p className="text-slate-400 text-xs mt-2">
                            En iyi skor: <span className="font-semibold text-slate-500">%{quizScores[activeTopic].bestScore}</span>
                            {" · "}
                            {quizScores[activeTopic].attempts} deneme
                          </p>
                        )}
                      </div>
                      {topic.quiz.map((q, qi) => (
                        <div key={qi} className="rounded-xl border p-4 bg-white">
                          <p className="font-medium text-slate-800 mb-3 text-sm">{q.q}</p>
                          <div className="space-y-1.5">
                            {q.options.map((opt, oi) => {
                              const isCorrect = oi === q.correct;
                              const isSelected = selectedAnswers[qi] === oi;
                              return (
                                <div
                                  key={oi}
                                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                                    isCorrect
                                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                      : isSelected
                                      ? "bg-rose-50 text-rose-800 border border-rose-200"
                                      : "bg-slate-50 text-slate-600"
                                  }`}
                                >
                                  {isCorrect ? (
                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                  ) : isSelected ? (
                                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                                  ) : (
                                    <span className="w-4 h-4 shrink-0" />
                                  )}
                                  {opt}
                                </div>
                              );
                            })}
                          </div>
                          <p className="mt-3 text-xs text-slate-500 bg-slate-50 rounded-lg p-2.5 leading-relaxed">
                            {q.explanation}
                          </p>
                        </div>
                      ))}
                      <button
                        onClick={() => { setSelectedAnswers({}); setShowResults(false); }}
                        className="w-full py-2.5 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium"
                      >
                        Testi Tekrar Çöz
                      </button>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const renderFinalTest = () => (
    <div className="animate-in fade-in duration-300">
      <div className="flex items-center gap-3 mb-2">
        <Trophy className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Genel Sınav</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Tüm konulardan {coreTopics.length} soru</p>
        </div>
      </div>

      <div className="h-px bg-slate-200 my-6" />

      {!finalResults ? (
        <div className="space-y-6">
          <p className="text-slate-500 text-sm">
            {Object.keys(finalAnswers).length}/{coreTopics.length} soru yanıtlandı
          </p>
          {coreTopics.map((t, ti) => {
            const q = t.quiz[0];
            return (
              <div key={t.id} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wide">{t.title}</p>
                <p className="font-semibold text-slate-800 mb-4 flex gap-2">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {ti + 1}
                  </span>
                  {q.q}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => (
                    <button
                      key={oi}
                      onClick={() => setFinalAnswers(prev => ({ ...prev, [ti]: oi }))}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all border ${
                        finalAnswers[ti] === oi
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
          <button
            onClick={handleFinalTestSubmit}
            disabled={Object.keys(finalAnswers).length < coreTopics.length}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-white font-semibold rounded-xl transition-colors"
          >
            Sonuçları Gör
          </button>
          <button
            onClick={() => setShowFinalTest(false)}
            className="w-full py-2.5 border border-slate-200 text-slate-500 rounded-xl hover:bg-slate-50 transition-colors text-sm"
          >
            Geri Dön
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-2xl p-6 text-center bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200">
            <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <p className="text-5xl font-extrabold text-slate-900 dark:text-white mb-1">
              {finalScore}<span className="text-2xl text-slate-400">/{coreTopics.length}</span>
            </p>
            <p className={`text-lg font-semibold mt-2 ${finalGrade().color}`}>
              {finalGrade().text}
            </p>
          </div>
          {coreTopics.map((t, ti) => {
            const q = t.quiz[0];
            const isCorrect = finalAnswers[ti] === q.correct;
            return (
              <div key={t.id} className={`rounded-xl border p-4 ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`}>
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{t.title}</p>
                    <p className="text-sm text-slate-700 font-medium mt-0.5">{q.q}</p>
                    {!isCorrect && (
                      <p className="text-xs text-slate-500 mt-1">
                        Doğru: {q.options[q.correct]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex gap-3">
            <button
              onClick={() => { setFinalAnswers({}); setFinalResults(false); }}
              className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-colors text-sm"
            >
              Tekrar Gir
            </button>
            <button
              onClick={() => setShowFinalTest(false)}
              className="flex-1 py-2.5 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium"
            >
              Geri Dön
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-[calc(100vh-64px)] relative overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:relative top-0 left-0 z-50 md:z-auto
        w-72 h-full md:h-auto
        bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800
        overflow-y-auto flex-shrink-0 transition-all duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Müfredat</p>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4 bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-100 dark:border-slate-800 transition-colors">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Genel İlerleme</span>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{progressPercent}%</span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-1.5">
              {completedCoreCount} / {coreTopics.length} konu tamamlandı
            </p>
            {(() => {
              const attempted = coreTopics.filter((t) => quizScores[t.id]);
              if (attempted.length === 0) return null;
              const avg = Math.round(
                attempted.reduce((sum, t) => sum + quizScores[t.id].bestScore, 0) / attempted.length
              );
              return (
                <p className="text-xs text-slate-400 mt-0.5">
                  Ortalama skor:{" "}
                  <span className="font-semibold text-indigo-500">%{avg}</span>
                  {" "}({attempted.length} konu denendi)
                </p>
              );
            })()}
          </div>

          {/* Groups */}
          <div className="space-y-1">
            {DATA.map((g) => {
              const isOpen = activeGroup === g.id;
              return (
                <div key={g.id}>
                  <button
                    onClick={() => setActiveGroup(isOpen ? g.id : g.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-colors ${
                      isOpen ? `${g.bgColor} ${g.textColor} dark:opacity-90` : "hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${g.color}`} />
                    <span className="text-sm font-semibold flex-1">{g.title}</span>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  <div className={`overflow-hidden transition-all ${isOpen ? "max-h-96" : "max-h-0"}`}>
                    <div className="ml-4 mt-1 space-y-0.5 pb-1">
                      {g.topics.map((t) => {
                        const isActive = activeTopic === t.id;
                        const isDone = completedTopics.has(t.id);
                        return (
                          <button
                            key={t.id}
                            onClick={() => handleTopicChange(t.id, g.id)}
                            className={[
                              "w-full text-left text-sm px-3 py-2 rounded-lg flex items-center gap-2 transition-colors",
                              isActive
                                ? g.activeBg + " " + g.activeText + " font-medium dark:opacity-90"
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900",
                            ].join(" ")}
                          >
                            <span className="flex-1 leading-snug">{t.title}</span>
                            {quizScores[t.id] && !isDone && (
                              <span className="text-xs font-bold text-amber-500 shrink-0">
                                %{quizScores[t.id].bestScore}
                              </span>
                            )}
                            {isDone && (
                              <span className="flex items-center gap-1 shrink-0">
                                <span className="text-xs font-bold text-emerald-500">
                                  %{quizScores[t.id]?.bestScore ?? ""}
                                </span>
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Genel Sınav Button */}
          {progressPercent === 100 && (
            <button
              onClick={() => {
                setShowFinalTest(true);
                setFinalAnswers({});
                setFinalResults(false);
              }}
              className="w-full mt-4 py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Genel Sınav
            </button>
          )}

          {/* İlerlemeyi Sıfırla Button */}
          <button
            onClick={resetProgress}
            className="w-full mt-4 py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:hover:bg-rose-900/50 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50 text-sm font-semibold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            İlerlemeyi Sıfırla
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 transition-colors">
        {/* Mobile top bar */}
        <div className="md:hidden sticky top-0 z-30 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-2.5 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Menu className="w-4 h-4" />
            Müfredat
          </button>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
          <span className="text-sm text-slate-500 dark:text-slate-400 truncate">{topic.title}</span>
          <span className="ml-auto text-xs font-bold text-indigo-600 dark:text-indigo-400">{progressPercent}%</span>
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
          {showFinalTest ? (
            renderFinalTest()
          ) : (
            <>
              {/* Topic Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${topicGroup.color}`} />
                  <span className={`text-sm font-medium ${topicGroup.textColor}`}>
                    {topicGroup.title}
                  </span>
                  {completedTopics.has(activeTopic) && (
                    <span className="ml-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Tamamlandı
                    </span>
                  )}
                </div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
                  {topic.title}
                </h1>
              </div>

              {/* Tabs */}
              {activeTopic !== "oyun" && (
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto pb-px hide-scrollbar transition-colors">
                  {[
                    { id: "anlatim", label: "Konu Anlatımı", icon: BookOpen },
                    { id: "ornekler", label: "Örnekler", icon: Code },
                    { id: "sorular", label: "Çalışma Soruları", icon: Pencil },
                    { id: "test", label: "Test", icon: CheckSquare },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                          isActive
                            ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                            : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTopic === "oyun" ? <MemoryGame /> : renderTabContent()}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}