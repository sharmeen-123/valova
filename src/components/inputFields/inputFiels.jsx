import React from "react";
 
export function InputDefault({setValue, inputRef, handleKeyDown, nextRef, Placeholder, bg, py}) {
  return (
    <>
    <input
    ref={inputRef}
      className={`border border-blue3 bg-${bg} focus:outline-none rounded-md ${py &&('h-16 placeholder-text-start')} p-1 sm:p-2 px-2 w-full font-Nunitoo placeholder-blue2 text-14 placeholder-text-14`}
      placeholder = {Placeholder}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e, nextRef)}
      style={{ resize: 'none', overflowY: 'auto', textAlign: 'left' }} // Align text to the left
  
    />
    </>
  );
}