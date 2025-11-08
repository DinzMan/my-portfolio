import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [openParen, setOpenParen] = useState(false);

  const appendToDisplay = (text) => {
    setDisplay(prev => prev + text);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const deleteLastChar = () => {
    setDisplay(prev => prev.slice(0, -1));
  };

  const toggleParentheses = () => {
    setDisplay(prev => prev + (openParen ? ')' : '('));
    setOpenParen(prev => !prev);
  };

  const evaluate = () => {
    const expr = display
      .replace(/÷/g, '/')
      .replace(/×/g, '*')
      .replace(/−/g, '-');

    try {
      // Validation: allow only digits, operators, parentheses, dot and spaces
      if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
        throw new Error('Invalid characters');
      }
      // Using Function constructor as a safer alternative to eval
      const result = Function('"use strict"; return (' + expr + ')')();
      setDisplay(String(result));
    } catch (err) {
      setDisplay('Error');
      setTimeout(() => setDisplay(''), 1000);
    }
  };

  const handleKeyDown = (e) => {
    const allowed = '0123456789+-*/().';
    if (allowed.includes(e.key)) {
      appendToDisplay(e.key);
      e.preventDefault();
    } else if (e.key === 'Enter' || e.key === '=') {
      evaluate();
      e.preventDefault();
    } else if (e.key === 'Backspace') {
      deleteLastChar();
      e.preventDefault();
    } else if (e.key.toLowerCase() === 'c') {
      clearDisplay();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div 
        className="w-[340px] bg-[#334663] text-[#f5f5dc] p-[18px] rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        aria-label="Calculator"
      >
        <input
          className="w-full px-[14px] py-3 text-2xl rounded-lg border-none mb-3 text-right bg-[#f5f5dc] text-[#334663] outline-none"
          type="text"
          inputMode="decimal"
          autoComplete="off"
          readOnly
          value={display}
          aria-label="Display"
        />
        
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-[#c74b4b] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={clearDisplay}
          >
            AC
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={deleteLastChar}
          >
            Del
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={toggleParentheses}
          >
            ()
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.12] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('/')}
          >
            ÷
          </button>

          {/* Row 2 */}
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('7')}
          >
            7
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('8')}
          >
            8
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('9')}
          >
            9
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.12] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('*')}
          >
            ×
          </button>

          {/* Row 3 */}
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('4')}
          >
            4
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('5')}
          >
            5
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('6')}
          >
            6
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.12] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('+')}
          >
            +
          </button>

          {/* Row 4 */}
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('1')}
          >
            1
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('2')}
          >
            2
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('3')}
          >
            3
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.12] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('-')}
          >
            −
          </button>

          {/* Row 5 */}
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('.')}
          >
            .
          </button>
          <button
            className="text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-white/[0.06] text-[#f5f5dc] transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={() => appendToDisplay('0')}
          >
            0
          </button>
          <button
            className="col-span-2 text-lg px-3 py-3 rounded-lg border-none cursor-pointer bg-[#f5f5dc] text-[#334663] font-semibold transition-all duration-75 ease-in-out active:translate-y-[1px] hover:opacity-90"
            onClick={evaluate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;