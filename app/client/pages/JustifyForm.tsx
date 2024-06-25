// Import necessary modules
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/justify.scss';

const JustificationPage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [length, setLength] = useState('');
  const [justifiedText, setJustifiedText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const handleJustify = async () => {
    try {
      const response = await axios.post(`${process.env.API}/justify`, {
        line: inputText,
        length: length,
      });

      setJustifiedText(response.data);
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Failed to justify text. Please try again.');
      } else {
        setError('An unexpected error occurred.');
      }
      console.error('Failed to justify text:', error);
    }
  };

  return (
    <div className="justification-page">
      <h2>Text Justification</h2>
      <textarea
        placeholder="Enter text to justify..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <button onClick={handleJustify}>Justify</button>
      {error && <p className="error-message">{error}</p>}
      {justifiedText && !error && (
        <div className="justified-text">
          <h3>Justified Text:</h3>
          <p>{justifiedText}</p>
        </div>
      )}
    </div>
  );
};

export default JustificationPage;
