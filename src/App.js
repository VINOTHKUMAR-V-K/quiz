import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {ProSidebarProvider}  from 'react-pro-sidebar'
function App() {
  return (
    <div className="App">
    <ProSidebarProvider>
     <Home/>
     </ProSidebarProvider>
    </div>
  );
}

export default App;
