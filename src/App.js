import { useReducer } from 'react';
import './App.css';
import { MainContext } from './context/context';
import reducer, { initialState } from './context/reducer';
import Calendar from './components/Calendar';


function App() {
  const data = useReducer(reducer, initialState)
  return (
    <MainContext.Provider value = {data}>
        <Calendar></Calendar>
    </MainContext.Provider>
  );
}

export default App;
