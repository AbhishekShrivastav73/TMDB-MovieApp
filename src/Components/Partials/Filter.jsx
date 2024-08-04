import React from "react";

function Filter({title,options,func}) {
  return (
    
      <select onChange={func}
        className="bg-blue-600 w-fit z-10  text-white rounded-xl px-4 py-2"
        name="filter"
        id="filter"
        defaultValue='0'    >
        <option value="0" disabled>{title}</option>
        {options.map((opt,i)=>(
          <option value={opt}>{opt.toUpperCase()}</option>
        ))}
      </select>
    
  );
}

export default Filter;
