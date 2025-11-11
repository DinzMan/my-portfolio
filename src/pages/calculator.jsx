import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const navigate = useNavigate();

  const inputDigit = useCallback(
    (digit) => {
      if (waitingForOperand) {
        setDisplay(String(digit));
        setWaitingForOperand(false);
      } else {
        setDisplay(display === "0" ? String(digit) : display + digit);
      }
    },
    [display, waitingForOperand]
  );

  const inputDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  }, [display, waitingForOperand]);

  const clear = useCallback(() => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  }, []);

  const performOperation = useCallback(
    (nextOperation) => {
      const inputValue = parseFloat(display);

      if (previousValue === null) {
        setPreviousValue(inputValue);
      } else if (operation) {
        const currentValue = previousValue || 0;
        let newValue = currentValue;

        switch (operation) {
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
      setOperation(nextOperation);
    },
    [display, previousValue, operation]
  );

  const handleKeyDown = useCallback(
    (event) => {
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
    },
    [inputDigit, inputDecimal, performOperation, clear]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]/40 flex items-center justify-center p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-4 sm:left-6 flex items-center gap-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 z-10"
      >
        <FaArrowLeft className="text-sm" />
        <span className="hidden sm:inline">Back</span>
      </button>

      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 w-full max-w-md">
        <div className="bg-gray-900 rounded-2xl p-6 mb-6 text-right">
          <div className="text-gray-400 text-sm mb-1 h-6">
            {previousValue !== null && operation
              ? `${previousValue} ${operation}`
              : ""}
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
