import { useState } from "react";
import type { MouseEvent } from "react";

export default function InteractiveDemo() {
  const [count, setCount] = useState<number>(0);

  function handleIncrement(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCount((c) => c + 1);
  }

  function handleDecrement(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (count > 0) setCount((c) => c - 1);
  }

  function handleReset(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCount(0);
  }

  const [activeTab, setActiveTab] = useState<"Props" | "State" | "Hooks">("Props");

  const tabsContent = {
    Props: "Props are read-only inputs passed from parent to child components. TypeScript types ensure every prop is provided with the correct shape.",
    State: "State is local mutable data managed inside a component. With useState, TypeScript infers or explicitly types the state value.",
    Hooks: "Hooks are functions that let you use React features inside functional components. Common hooks: useState, useEffect, useContext, useMemo, useCallback."
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Try It Yourself</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Interactive Counter</h3>
            <span className="bg-slate-100 text-slate-600 text-xs font-mono px-3 py-1 rounded-full">
              useState&lt;number&gt;
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center mb-8">
            <span data-testid="text-count" className="text-6xl font-bold text-indigo-600 mb-8">
              {count}
            </span>
            <div className="flex gap-4">
              <button
                onClick={handleDecrement}
                disabled={count === 0}
                data-testid="button-decrement"
                className="px-5 py-2.5 rounded-lg font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Decrement
              </button>
              <button
                onClick={handleIncrement}
                data-testid="button-increment"
                className="px-5 py-2.5 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Increment
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-auto">
            <button
              onClick={handleReset}
              className="text-sm text-slate-500 hover:text-slate-700 underline underline-offset-4"
            >
              Reset Counter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Concept Explorer</h3>
            <span className="bg-slate-100 text-slate-600 text-xs font-mono px-3 py-1 rounded-full">
              useState&lt;string&gt;
            </span>
          </div>

          <div className="flex border-b border-slate-200 mb-6">
            {(Object.keys(tabsContent) as Array<keyof typeof tabsContent>).map((tab) => (
              <button
                key={tab}
                data-testid={`tab-${tab.toLowerCase()}`}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 pb-4 text-center font-medium text-sm transition-all duration-200 border-b-2 ${activeTab === tab
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            className="flex-1 p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center transition-opacity duration-300"
            data-testid="text-tab-content"
          >
            <p className="text-slate-700 leading-relaxed text-lg">
              {tabsContent[activeTab]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
