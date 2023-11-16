import { useState } from "react";
import Input from "./Input";

function SearchBar(locationHome) {
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <Input
        value={inputValue}
        onChange={handleOnchange}
        placeholder="Search...."
        locationHome={locationHome}
      />
    </div>
  );
}
export default SearchBar;
