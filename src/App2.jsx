import "./App.css";
import React, { useContext, useState } from "react";
import { useReducer } from "react";
import ThemeContext from "./Context/ThemeContext";
import dataDb from "./Data/dataDb";
import AddVedio from "./YouTube-Component/AddVedio";
import VedioList from "./YouTube-Component/VedioList";
import VediosContext from "./Context/VediosContext";
import VedioDispatch from "./Context/VedioDispatch";
const App2 = () => {
  //const [vedios, setVedios] = useState(dataDb);
  const [EditableVedio, setEditableVedio] = useState(null);
  function vedioReducer(vedios, action) {
    switch (action.type) {
      case "ADD":
        return [...vedios, { ...action.payload, id: vedios.length + 1 }];
      case "DELETE":
        return vedios.filter((vedio) => vedio.id !== action.payload);
      // case "EDIT":
      //   return vedios.find((vedio) => vedio.id === action.payload);
      case "UPDATE":
        const index = vedios.findIndex((v) => v.id === action.payload.id);
        const newVedio = [...vedios];
        newVedio.splice(index, 1, action.payload);
        setEditableVedio(null);
        return newVedio;
      default:
        return vedios;
    }
  }

  const [vedios, dispatch] = useReducer(vedioReducer, dataDb);
  // const [EditableVedio, setEditableVedio] = useState(null);
  // const Addvedio = (vedio) => {
  //   dispatch({ type: "ADD", payload: vedio });
  //   //setVedios([...vedios, { ...vedio, id: vedios.length + 1 }]);
  // };
  // const DelVedio = (id) => {
  //   dispatch({ type: "DELETE", payload: id });
  //   //setVedios(vedios.filter((vedio) => vedio.id !== id));
  // };
  const EditVedio = (id) => {
    //dispatch({ type: "EDIT", payload: id });
    setEditableVedio(vedios.find((vedio) => vedio.id === id));
  };
  // const updateVedio = (vedio) => {
  //   **dispatch({ type: "UPDATE", payload: vedio });
  //   // const index = vedios.findIndex((v) => v.id === vedio.id);
  //   // const newVedio = [...vedios];
  //   // newVedio.splice(index, 1, vedio);
  //   // setVedios(newVedio);
  // };
  const themeContext = useContext(ThemeContext);
  const [mode, setmode] = useState("darkMode");
  console.log({ themeContext });
  return (
    <ThemeContext.Provider value={mode}>
      <VediosContext.Provider value={vedios}>
        <VedioDispatch.Provider value={dispatch}>
          <div className={`container-fluid ${mode}`}>
            <div className="text-left">
              <button
                className="btn  "
                onClick={() =>
                  setmode(mode == "darkMode" ? "lightMode" : "darkMode")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-toggle-on"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </button>
            </div>

            <VedioList
              // vedios={vedios}

              // DelVedio={DelVedio}
              EditVedio={EditVedio}
            ></VedioList>
            <AddVedio
              // Addvedio={Addvedio}

              EditableVedio={EditableVedio}
            />
          </div>
        </VedioDispatch.Provider>
      </VediosContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App2;
