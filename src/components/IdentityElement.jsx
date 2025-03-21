import React, { useState } from 'react';
import { Slider } from '../components/ui/slider';

const IdentityPropertiesInteractive = () => {
  const [number, setNumber] = useState(5);

  return (
    <div className="w-full max-w-md mx-auto shadow-md bg-white rounded-lg overflow-hidden">
      <div className="p-3 space-y-3">
        <div className="space-y-2">
          <div className="flex flex-col space-y-1">
            <label htmlFor="number-slider" className="block text-sm font-medium text-gray-700">
              Adjust the number:
            </label>
            <Slider
              id="number-slider"
              min={-100}
              max={100}
              step={1}
              value={[number]}
              onValueChange={(value) => setNumber(value[0])}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 rounded-b-lg space-y-4">
        <div className="w-full p-4 bg-white border border-blue-200 rounded-md">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-700">
              {number} + 0 = {number}
            </p>
          </div>
        </div>

        <div className="w-full p-4 bg-white border border-green-200 rounded-md">
          <div className="text-center">
            <p className="text-4xl font-bold text-green-700">
              {number} × 1 = {number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityPropertiesInteractive;