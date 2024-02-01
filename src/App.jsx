import "./App.css";
import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("myData");

    if (storedData) {
      setList(JSON.parse(storedData));
    }
  }, []);
  // onpress  function
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchTerm.trim() !== "") {
      // Add the current search term to the list
      setList([...list, searchTerm.trim()]);
      localStorage.setItem(
        "myData",
        JSON.stringify([...list, searchTerm.trim()])
      );
      // Clear the search bar
      setSearchTerm("");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className=" mt-5 m-5 w-5/6 transition-all duration-1000 ease-in-out  xs: w-5/6  sm:w-4/6  md:w-4/6 lg:w-3/6 ">
        {/* product input field */}
        <input
          type="text"
          placeholder="Product Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="bg-gray-200 p-5 w-full text-black outline-none focus:outline-none placeholder-black-500"
        />
        <List list={list} setList={setList}></List>
      </div>
    </div>
  );
}

export default App;
