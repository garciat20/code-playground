import './App.css'
import WebPlayground from './components/frontend-editor/web-playground';
import Nav from './components/nav/nav';

function App() {
  // make a css file to align
  return (
    <>
      <div className='classContainer'>
        <Nav />
        <WebPlayground/>
      </div>
  
    </>
  );
}

export default App
