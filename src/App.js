import './index.css';
import Main from './Components/Main';
import DataProvider from './Context API/DataProvider';
function App() {
  return (
    <DataProvider>
      <Main/>
    </DataProvider>
  );
}

export default App;
