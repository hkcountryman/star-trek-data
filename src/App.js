import './App.css';
import useFetch from 'use-http';

function App() {
  const {loading, error, data = []} = useFetch('https://naughty-dubinsky-1c07af.netlify.app/.netlify/functions/trek', {}, []);

  return (
    <>
      <h2>Star Trek Characters</h2>
      {error && 'Error'}
      {loading && 'Loading...'}
      {data.map((x) => (
        <p>{x.show}</p>
      ))}
    </>
  );
}

export default App;
