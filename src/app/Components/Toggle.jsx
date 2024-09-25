import React from "react";

export const Toggle = () => {

  return (
    <div className="p-8">
      <label htmlFor="check" className="flex bg-gray-700 cursor-pointer relative w-20 h-10 rounded-full">
        <input type="checkbox" className="sr-only peer " id="check" />
        <span className="w-2/5 h-4/5 bg-red-600 absolute rounded-full left-1 top-1 peer-checked:bg-yellow-400 peer-checked:left-11 transition-all duration-500"></span>
      </label>
    </div>
  );
};

export default Toggle;
