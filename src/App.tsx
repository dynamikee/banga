import React from 'react';
import './index.css';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-500">Välkommen till din webbsida!</h1>
      <Button variant="default" className="mt-4">Klicka här</Button>
      <Button variant="default" className="bg-red-500 text-white mt-4">
  Klicka här
</Button>
      <div className="bg-red-500 text-white p-4">Fungerar Tailwind här?</div>
      <div className="bg-blue-500 text-white p-4">
  Detta är en test av Tailwind
</div>

    </div>
  );
}

export default App;