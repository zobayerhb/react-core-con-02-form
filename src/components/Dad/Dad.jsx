import Myself from "./Myself/Myself";
import { useContext } from "react";
import { LevelContext } from "../Grandpa/Grandpa";


const Dad = ({gold}) => {
    const level = useContext(LevelContext);
    // console.log(level);

  return (
    <div className="border-2 border-amber-500 rounded-md p-3">
      Dad
      <div className="border-2 border-amber-500 p-3 rounded-md">
        <Myself gold={gold}></Myself>
      </div>
    </div>
  );
};

export default Dad;
