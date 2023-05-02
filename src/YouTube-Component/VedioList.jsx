//import React, { useContext } from "react";
import Vedio from "./Vedio";
import Play from "./Play";
//import VediosContext from "../Context/VediosContext";
import useDispatch from "../hooks/useDispatch";
import useVedio from "../hooks/useVedio";
// import VedioDispatch from "../Context/VedioDispatch";
const VedioList = ({ EditVedio }) => {
  const vedios = useVedio()
  const dispatch=useDispatch()
  return (
    <div className="row">
      {vedios.map((vedio, id) => (
        <Vedio
          key={id}
          img={vedio.img}
          Title={vedio.Title}
          Channel={vedio.Channel}
          views={vedio.views}
          time={vedio.time}
          varified={vedio.varified}
          id={ vedio.id }
          // DelVedio={ DelVedio }
          dispatch={dispatch}
          EditVedio={EditVedio}
        >
          <Play
            onPlay={() => {
              console.log("vedio can play");
            }}
            onPause={() => {
              console.log("vedio can pause");
            }}
          >
            {vedio.Title}
          </Play>
        </Vedio>
      ))}
    </div>
  );
};

export default VedioList;
