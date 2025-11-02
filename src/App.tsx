import { useState } from "react";
import "./App.css";
import { useTodo } from "./store/useTodo";
import { log } from "console";

function App() {
  const { todo, setTodo } = useTodo();
  const { titleTodo, setTitleTodo } = useState("");
  console.log(titleTodo);
  return (
    <div className="flex flex-col justify-center   ">
      <div className="flex flex-col justify-center bg-white gap-3 p-8  shadow-md w-[560px]">
        <h1 className="text-[#063251] font-bold self-center">Grocery Bud</h1>

        <form onSubmit={() => {}} className="flex self-stretch" action="">
          <input
            value={titleTodo}
            onChange={(e) => {
              setTitleTodo(e.target.value);
            }}
            className="border-2 border-[#617d98]  rounded-l-md p-0.5 "
            type="text"
            placeholder="e.g. bread"
          />
          <button type="submit" className="bg-[#a5d5f8] rounded-r-md p-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
