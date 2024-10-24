import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import NewComponent from './NewComponent';
import CurrentTime from './CurrentTime';
import EvenCard from './EvenCard';

function App() {
  return (
    <div className="App">
      <h1>изучаем React!</h1>
      <Greeting />
      <NewComponent />
      <CurrentTime />
     <div>
       <EvenCard title="Крутая группа" date = "22 октября 2024 года, 19:00" location = "Москва"  />
       <EvenCard title="Большая группа" date = "24 октября 2024 года, 19:00" location = "Лондон"  />
       <EvenCard title="Самая большая группа" date = "26 октября 2024 года, 19:00" location = "Ваш город"  
       propsBoolean = "false" />
       
     </div>
    </div>
  );
}

export default App;
