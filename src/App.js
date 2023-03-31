import './styles/App.css';
import TasksContextProvider from './context/TasksContext';
import Main from './pages/Main';



function App() {
  return (
    <TasksContextProvider>
      <Main/>
    </TasksContextProvider>
  );
}

export default App;
