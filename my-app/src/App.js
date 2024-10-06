import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='cards-services'>
        <Card imageSrc="images/image2.png" title="Design e tecnologia" />
        <Card imageSrc="images/image1.png" title="Moda e beleza" />
        <Card imageSrc="images/image3.png" title="Reparos e reformas" />
        <Card imageSrc="images/image4.png" title="Artes" />
        </div>
      </header>
    </div>
  );
}

export default App;
