import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState("");
  const [to, toSet] = useState("INR");
  const [from, setFrom] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    toSet(from);
    setFrom(to);
  };

  const convert = () => {
    if (currencyInfo[from] && currencyInfo[to]) {
      const fromRate = currencyInfo[from];
      const toRate = currencyInfo[to];
  
      // Convert amount based on the rates
      const conversionRate = toRate / fromRate;
      setConvertedAmount(amount * conversionRate);
    } else {
      // If no rate is found, set converted amount to 0
      setConvertedAmount(0);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.istockphoto.com/photo/businesswoman-using-digital-tablet-with-holding-bar-graph-gm1225058659-360453706?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftrading&utm_medium=affiliate&utm_source=unsplash&utm_term=trading%3A%3Aaffiliate-collections%3Aa')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onAmountChange={(value) => setAmount(value)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => toSet(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
