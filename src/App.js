//should start with function keywords/ arrow functions
//component name should start with capital
//you should have component body (jsx) + component logic
//export that component o use outside

import React, { createContext, useCallback, useState } from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import ThemeButton from "./components/theme-button";

//create the context
//provide the context
//consume the context

export const ThemeContext = createContext(null);

//jsx
//createelement
//element -> div ,p ,h1, h2 , span
//properties-> classname , id, click
//children ,body

function App() {
  // return React.createElement('div' , {className : 'customclass' , id : '123' }, 'This is our first component')

  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className="App" style={theme ? {backgroundColor : "#feb300"} :{}}>
        <ThemeButton />
        <Homepage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
