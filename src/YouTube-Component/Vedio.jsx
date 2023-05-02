//import React, { useContext } from "react";
//import VedioDispatch from "../Context/VedioDispatch";
import { useContext, useEffect } from "react";
import ThemeContext from "../Context/ThemeContext";
import useDispatch from "../hooks/useDispatch";
import "./Vedio.css";
const Vedio = ({
  Title,
  Channel,
  views,
  time,
  varified,
  id,
  children,
  EditVedio,
}) => {
  const dispatch = useDispatch();
  const mode=useContext(ThemeContext)

  useEffect(() => {
    const idx = setInterval(() => {
      console.log("playing_______________", id);
    }, 3000);
    return () => {
      clearInterval(idx);
    };
  }, [id]);
  return (
    <div className={`col-sm-3  text-center ${mode}`}>
      <div className=" position-relative position-relative">
        <button
          className=" btn btn-light position-absolute end-0 "
          onClick={() => {
            dispatch({ type: "DELETE", payload: id });
          }}
        >
          X
        </button>
        <button
          className=" btn btn-dark position-absolute   "
          onClick={() => {
            EditVedio(id);
          }}
        >
          edit
        </button>
        <img
          src={` https://picsum.photos/id/${id}/200/300`}
          className="w-100"
          alt="picsum"
        />

        <h3>{Title}</h3>
        <h4>
          {Channel}
          {varified ? "✅" : null}{" "}
        </h4>
        <h6>
          {views} views
          <small>.</small>
          {time}
        </h6>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Vedio;
