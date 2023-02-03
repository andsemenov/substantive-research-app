import { useState, useEffect } from 'react';
import InteractionList from './components/InteractionList';


function App() {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    setError("");
    setLoading(true);
    try {
      const response =
        await fetch("https://substantiveresearch.pythonanywhere.com/")
      if (!response.ok) {
        throw new Error("Sorry something went wrong");
      }
      const data = await response.json();
      setInteractions(data);
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  const countBy =
    (arr, prop) => arr.reduce((prev, curr) =>
      (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});
  const countByName = countBy(interactions, 'name');

  return (
    <div className="app">
      <h3>Interactions</h3>
      {error && <p className='error-message'>{error}</p>}
      {loading && <p className='loading-message'>Loading...</p>}
   
      {interactions.length > 0 && <InteractionList results={countByName} />}
    </div>
  );
}

export default App;
