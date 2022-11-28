import './App.css';
import MainPage from './Components/MainPage';



function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <MainPage />
        <footer>
          <p>Copyright {year}</p>
        </footer>
    </div>
  );
}

export default App;
