import { useState } from 'react';
import './App.css';

function App() {

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };

  const [data, setData] = useState('');
  const [errorWord, setErrorWord] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleInput = (e) => {
    const value = e.target.value;
    setData(value);

    const words = value.toLowerCase().split(' ');
    const firstErrorWord = words.find(word => customDictionary.hasOwnProperty(word));

    if (firstErrorWord) {
      setErrorWord(firstErrorWord);
      setSuggestion(customDictionary[firstErrorWord]);
    } else {
      setErrorWord('');
      setSuggestion('');
    }
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea 
        placeholder='Enter text...' 
        rows="5" 
        cols="50"
        onChange={handleInput}
        value={data}
      />
      <div>
        {errorWord && `Did you mean: ${suggestion}?`}
      </div>
    </div>
  );
}

export default App;
