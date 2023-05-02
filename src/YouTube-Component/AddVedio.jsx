import React, { useEffect, useState } from "react";
import { useRef } from "react";
import useDispatch from "../hooks/useDispatch";
// VedioDispatch from "../Context/VedioDispatch";

const AddVedio = ({ EditableVedio }) => {
  const dispatch=useDispatch()
  const initialState = {
    Title: "",
    Channel: "",
    views: "",
    time: "",
    varified: false,
  };
  const [vedio, setVedio] = useState({ initialState });
  const inputRef=useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (EditableVedio) {
      // updateVedio(vedio);
      dispatch({ type: "UPDATE", payload: vedio });
    } else {
      // Addvedio(vedio);
      dispatch({ type: "ADD", payload: vedio });
    }

    setVedio(initialState);
  };
  const handleChange = (e) => {
    setVedio({ ...vedio, [e.target.name]: e.target.value });

    console.log(e.target.name, e.target.value);
  };
  useEffect(() => {
    if (EditableVedio) {
      setVedio(EditableVedio);
    }
    inputRef.current.placeholder=''

    inputRef.current.focus()
    'type here'.split('').forEach((char,i)=>{
      setTimeout(()=>{
inputRef.current.placeholder=inputRef.current.placeholder+char

      },800*i)
    })
  }, [EditableVedio]);

  return (
    <>
      <form>
        <div className="form-group">
          <input
          ref={inputRef}
            type="text"
            onChange={handleChange}
            className="form-control m-2 p-2"
            name="Title"
            placeholder="Title"
            value={vedio.Title}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control m-2 p-2"
            name="Channel"
            placeholder="Channel"
            value={vedio.Channel}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control m-2 p-2"
            name="views"
            placeholder="views"
            value={vedio.views}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control m-2 p-2"
            name="time"
            placeholder="time"
            value={vedio.time}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control m-2 p-2"
            name="varified"
            placeholder="varified"
            value={vedio.varified}
          />
        </div>
        <div className="text-center">
          <button onClick={handleSubmit} className='p-1'>
            {EditableVedio ? "Edit" : "Add"}Vedio
          </button>
          </div>
          {/* <button
            className="btn btn-light"
            onClick={() => {
              setVedio([
                ...vedio,
                {
                  id: vedio.length + 1,
                  Title: "express",
                  Channel: "flyCoding",
                  views: "100k",
                  time: "1 min ago",
                  varified: false,
                },
              ]);
            }}
          >
            Add Button
          </button> */}
       
      </form>
    </>
  );
};

export default AddVedio;
