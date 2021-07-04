import './App.css';

function App() {

  const title = 'Welcome to the new blog'
  const likes = 50
  const person = { name: 'yoshi', age: 30}
  const flag = true
  const link = 'http://www.google.com'


  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        {/* <p>{ person }</p> */}
        <p>{ JSON.stringify(person) }</p>
        <p>{ 10 } </p>
        <p>{ 'hello ninjas' }</p>
        <p>{ flag && 'isa' }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random(10) * 1 }</p>
        <a href={ link }>Google Site</a>
      </div>

    </div>
  );
}

export default App;
