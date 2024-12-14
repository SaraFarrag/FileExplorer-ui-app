import React from 'react';
import './App.css';
import FileExplorerComponent from './components/FileExplorer/FileExplorerComponent';
import { FileExplorerProvider } from './context/FileExplorerContext';

function App() {

  return (
    <FileExplorerProvider>
      <FileExplorerComponent/>
    </FileExplorerProvider>
  )
}

export default App;
