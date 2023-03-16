import './App.css';
import Input from './components/element/Input/Input';
import Button from './components/element/Button/Button';
import Card from './components/element/Card/Card';

function App() {
  return (
    <div className="App">
      <Input />
      <Button text="정확도순" />
      <Button text="최신순" />
      <Card imageSrc="/images/default.png" text="test" />
    </div>
  );
}

export default App;
