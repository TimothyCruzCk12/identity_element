import React, { useState } from 'react';
import { Slider } from '../components/ui/slider';

const IdentityPropertiesInteractive = () => {
  const [number, setNumber] = useState(5);

  return (
    <div className="w-full max-w-md mx-auto mt-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg overflow-hidden">
      <div className="p-3 space-y-3">
        <div className="space-y-2">
          <div className="flex flex-col space-y-1">
            <label htmlFor="number-slider" className="block text-sm font-medium text-[#5750E3] opacity-100">
              Move the slider to explore the identity property:
            </label>
            <Slider
              id="number-slider"
              min={-25}
              max={25}
              step={1}
              value={[number]}
              onValueChange={(value) => setNumber(value[0])}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 rounded-b-lg space-y-4">
        <div className="w-full p-4 bg-white border border-[#008545]/30 rounded-md">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#008545]">
              {number} + 0 = {number}
            </p>
          </div>
        </div>

        <div className="w-full p-4 bg-white border border-[#FF7B00]/30 rounded-md">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#FF7B00]">
              {number} × 1 = {number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityPropertiesInteractive;