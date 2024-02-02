import './App.css';
import Home from './component/Home';

import { ProSidebarProvider } from 'react-pro-sidebar'
import { Router } from './component/Router';
function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <Router />
      </ProSidebarProvider>
    </div>
  );
}

export default App;
