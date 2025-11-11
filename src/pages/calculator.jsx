import React, { useState, useEffect, useCallback } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = useCallback((digit) => {
    setDisplay(prev => {
      setWaitingForOperand(waiting => {
        if (waiting) {
          setWaitingForOperand(false);
          return String(digit);
        }
        return prev === "0" ? String(digit) : prev + digit;
      });
      return prev;
    });
    setWaitingForOperand(waiting => {
      if (waiting) {
        setDisplay(String(digit));
        return false;
      }
      setDisplay(prev => prev === "0" ? String(digit) : prev + digit);
      return waiting;
    });
  }, []);

  const inputDecimal = useCallback(() => {
    setWaitingForOperand(waiting => {
      if (waiting) {
        setDisplay("0.");
        return false;
      }
      setDisplay(prev => prev.indexOf(".") === -1 ? prev + "." : prev);
      return waiting;
    });
  }, []);

  const clear = useCallback(() => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  }, []);

  const performOperation = useCallback((nextOperation) => {
    setDisplay(currentDisplay => {
      const inputValue = parseFloat(currentDisplay);
      
      setPreviousValue(prev => {
        setOperation(currentOp => {
          if (prev === null) {
            setPreviousValue(inputValue);
          } else if (currentOp) {
            const currentValue = prev || 0;
            let newValue = currentValue;

            switch (currentOp) {
              case "+":
                newValue = currentValue + inputValue;
                break;
              case "-":
                newValue = currentValue - inputValue;
                break;
              case "*":
                newValue = currentValue * inputValue;
                break;
              case "/":
                newValue = currentValue / inputValue;
                break;
              default:
                newValue = inputValue;
            }

            setDisplay(String(newValue));
            setPreviousValue(newValue);
          }
          
          setWaitingForOperand(true);
          return nextOperation;
        });
        return prev;
      });
      
      return currentDisplay;
    });
  }, []);

  const handleKeyDown = useCallback((event) => {
    const key = event.key;

    if (key >= "0" && key <= "9") {
      inputDigit(parseInt(key));
    } else if (key === ".") {
      inputDecimal();
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      performOperation(key);
    } else if (key === "Enter" || key === "=") {
      performOperation("=");
    } else if (key === "Escape" || key === "c" || key === "C") {
      clear();
    }
  }, [inputDigit, inputDecimal, performOperation, clear]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 w-full max-w-md">
        <div className="bg-gray-900 rounded-2xl p-6 mb-6 text-right">
          <div className="text-gray-400 text-sm mb-1 h-6">
            {previousValue !== null && operation ? `${previousValue} ${operation}` : ""}
          </div>
          <div className="text-white text-5xl font-light overflow-hidden">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clear}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            AC
          </button>
          <button
            onClick={() => performOperation("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            ÷
          </button>
          <button
            onClick={() => performOperation("*")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            ×
          </button>

          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => inputDigit(num)}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => performOperation("-")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            −
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => inputDigit(num)}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => performOperation("+")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            +
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => inputDigit(num)}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => performOperation("=")}
            className="row-span-2 bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            =
          </button>

          <button
            onClick={() => inputDigit(0)}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-gray-700 hover:bg-gray-600 text-white rounded-xl p-4 text-xl font-semibold transition-all"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;