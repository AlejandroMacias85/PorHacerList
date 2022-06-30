import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  

  return (
    <div className="container-fluid " id="background">
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div className="container">
      <div className="" id="header"><i class="fa-solid fa-clipboard-list"><h3>To Do:</h3></i></div>
      <div>
        <ul>
          <div className="" id="list">
            <li>
              <input
                id="placeholder"
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setTodos(todos.concat(inputValue));
                    setInputValue("");
                  }
                }}
                placeholder="Add to do...."
              ></input>
            </li>
          </div>
          <div className="" id="dropdown">
            {todos.map((item, index) =>
              <li id="icon">
                {item}&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-trash-can" onClick={() =>
                  setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
              </li>)}
          </div>

        </ul>
      </div>
      <div className="" id="footer">Remaining Tasks  <strong id="number">_0{todos.length}</strong></div>
      <div>&nbsp;</div>
    </div>
  </div>
  );
};

export default List;
