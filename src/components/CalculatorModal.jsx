import React, { useState, useEffect } from 'react';
import { X, Delete, RotateCcw, Calculator as CalcIcon, History } from 'lucide-react';

const safeEvalMath = (expr) => {
  const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/');
  if (!/^[0-9+\-*/.\s()]+$/.test(sanitized)) return 'Error';
  try {
    const val = Function(`"use strict"; return (${sanitized})`)();
    if (!isFinite(val)) return 'Error';
    return String(Number(val.toFixed(6)));
  } catch (e) {
    return 'Error';
  }
};

export default function CalculatorModal({ isOpen, onClose }) {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      const key = e.key;
      if (/^[0-9.]$/.test(key)) {
        handleDigit(key);
      } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key);
      } else if (key === 'Enter' || key === '=') {
        handleCalculate();
      } else if (key === 'Backspace') {
        handleBackspace();
      } else if (key === 'Escape') {
        if (showHistory) setShowHistory(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, display, equation, showHistory]);

  if (!isOpen) return null;

  const handleDigit = (digit) => {
    if (display === '0' && digit !== '.') {
      setDisplay(digit);
    } else if (digit === '.' && display.includes('.')) {
      return;
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperator = (op) => {
    setEquation(`${display} ${op} `);
    setDisplay('0');
  };

  const handleCalculate = () => {
    if (!equation) return;
    const fullExpr = equation + display;
    const formattedRes = safeEvalMath(fullExpr);
    
    if (formattedRes !== 'Error') {
      setHistory([{ expr: fullExpr, result: formattedRes }, ...history.slice(0, 9)]);
    }
    setDisplay(formattedRes);
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm rounded-3xl p-6 bg-slate-900/90 border border-slate-700/80 shadow-2xl shadow-blue-500/20 text-slate-100 backdrop-blur-xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-200">
            <CalcIcon className="w-4 h-4 text-blue-400" />
            <span>3D Glassmorphism Calculator</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className={`p-1.5 rounded-lg transition-colors ${showHistory ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
              title="Calculation History"
            >
              <History className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* History Drawer Overlay */}
        {showHistory ? (
          <div className="py-4 space-y-2 h-72 overflow-y-auto font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 font-semibold mb-2">
              <span>Recent History</span>
              <button onClick={() => setHistory([])} className="text-red-400 hover:underline">Clear</button>
            </div>
            {history.length === 0 ? (
              <p className="text-slate-500 text-center pt-8">No history yet</p>
            ) : (
              history.map((item, i) => (
                <div key={i} className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 flex justify-between items-center">
                  <span className="text-slate-400">{item.expr} =</span>
                  <span className="font-bold text-blue-400">{item.result}</span>
                </div>
              ))
            )}
          </div>
        ) : (
          /* Calculator Display & Controls */
          <div className="space-y-4 pt-4">
            
            {/* Display Box with 3D Glass Depth */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-inner text-right space-y-1">
              <div className="text-xs text-slate-400 h-4 font-mono">{equation}</div>
              <div className="text-3xl font-mono font-bold tracking-tight text-white overflow-x-auto">
                {display}
              </div>
            </div>

            {/* Keypad Grid */}
            <div className="grid grid-cols-4 gap-2.5 text-sm font-semibold font-mono">
              <button onClick={handleClear} className="p-3.5 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30 transition-all active:scale-95">AC</button>
              <button onClick={handleBackspace} className="p-3.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 transition-all active:scale-95 flex items-center justify-center"><Delete className="w-4 h-4" /></button>
              <button onClick={() => handleOperator('/')} className="p-3.5 rounded-xl bg-blue-600/30 text-blue-400 hover:bg-blue-600/40 border border-blue-500/40 transition-all active:scale-95">÷</button>
              <button onClick={() => handleOperator('*')} className="p-3.5 rounded-xl bg-blue-600/30 text-blue-400 hover:bg-blue-600/40 border border-blue-500/40 transition-all active:scale-95">×</button>

              <button onClick={() => handleDigit('7')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">7</button>
              <button onClick={() => handleDigit('8')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">8</button>
              <button onClick={() => handleDigit('9')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">9</button>
              <button onClick={() => handleOperator('-')} className="p-3.5 rounded-xl bg-blue-600/30 text-blue-400 hover:bg-blue-600/40 border border-blue-500/40 transition-all active:scale-95">-</button>

              <button onClick={() => handleDigit('4')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">4</button>
              <button onClick={() => handleDigit('5')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">5</button>
              <button onClick={() => handleDigit('6')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">6</button>
              <button onClick={() => handleOperator('+')} className="p-3.5 rounded-xl bg-blue-600/30 text-blue-400 hover:bg-blue-600/40 border border-blue-500/40 transition-all active:scale-95">+</button>

              <button onClick={() => handleDigit('1')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">1</button>
              <button onClick={() => handleDigit('2')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">2</button>
              <button onClick={() => handleDigit('3')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">3</button>
              <button onClick={handleCalculate} className="row-span-2 p-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center font-bold text-xl">=</button>

              <button onClick={() => handleDigit('0')} className="col-span-2 p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">0</button>
              <button onClick={() => handleDigit('.')} className="p-3.5 rounded-xl bg-slate-800/80 text-slate-100 hover:bg-slate-700 border border-slate-700/60 transition-all active:scale-95">.</button>
            </div>
          </div>
        )}

        <div className="pt-4 text-center text-[11px] text-slate-400 font-sans border-t border-slate-800 mt-4">
          Interactive Demo — Created by Katkojwal Krishna
        </div>
      </div>
    </div>
  );
}
