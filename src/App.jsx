import{BrowserRouter, Routes, Route} from "react-router-dom"
import React, {useState} from 'react'
import Main from "./views/Main";
import './App.css';

function App() {
          //STATE FOR KEEPING TRACK OF REFRESH
          const [refreshState, setRefreshState] = useState(false)
    
          //FUNCTION FOR KEEPING TRACK OF REFRESH
          const refresh = () => {
            setRefreshState(!refreshState)
          }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/portfolio" element={<Main refresh={refresh} refreshState={refreshState}/> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
