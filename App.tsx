import React, { Suspense, useState, useEffect } from 'react';
import { Experience } from './components/Experience';
import { UI } from './components/UI';
import { Loader } from '@react-three/drei';

const App: React.FC = () => {
  const [audioAllowed, setAudioAllowed] = useState(false);

  // In a real scenario, we might handle audio context here on user interaction
  
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Canvas Layer */}
      <Suspense fallback={null}>
        <Experience />
      </Suspense>

      {/* HTML UI Layer */}
      <UI />
      
      {/* Loading Overlay from Drei */}
      <Loader 
        containerStyles={{ background: '#020202' }}
        innerStyles={{ width: '40vw', height: '2px', background: '#333' }}
        barStyles={{ height: '2px', background: '#D4AF37' }}
        dataStyles={{ display: 'none' }} // Hide percentage number for cleaner look
      />
    </div>
  );
};

export default App;