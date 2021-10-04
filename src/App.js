import './App.css';
import STCard from './STCard';
import useFetch from 'use-http';

function App() {
  //const {loading, error, data = []} = useFetch('https://star-trek-cors-and-lambda-example.netlify.app/.netlify/functions/trek', {}, []);
  const data = require('./data.json');
  return (
    <>
      <h2>Star Trek Characters</h2>
      {error && 'Error'}
      {loading && 'Loading...'}
      {data.map((x) => (
        <>
          <STCard
            src={x.image}
            series={x.show}
            captain={x.crew.Captain}
            xo={x.crew.XO}
            cmo={x.crew.CMO}
            crew={x.crew.Officers}
            link={x.link}
          />
          <br/>
        </>
      ))}
    </>
  );
}

export default App;
