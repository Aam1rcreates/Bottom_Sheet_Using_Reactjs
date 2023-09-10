import React, { useState } from 'react';
import './App.css';
import BottomSheet from './components/BottomSheet';

function App() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  };

  return (
    <div className="container-fluid text-center">
      <h1 className="text-dark pt-5">Flamspark</h1>
      <button className='btn btn-lg btn-info' onClick={toggleBottomSheet}>
        {bottomSheetOpen ? 'Close About' : 'Open About'}
      </button>
      <BottomSheet isOpen={bottomSheetOpen} toggleSheet={toggleBottomSheet} />
    </div>
  );
}

export default App;
