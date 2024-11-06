import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { LevelContext } from "../Grandpa/Grandpa";

const Anty = () => {
    const auntysCon = useContext(LevelContext)
    console.log(auntysCon)

  return (
    <div className="border-2 border-amber-500 rounded-md p-3">
     <div>
     Anty
     {auntysCon}
     </div>
      <div className="flex gap-1">
        <Cousin name={"ariyan"}></Cousin>
        <Cousin name={"ariyan"}></Cousin>
      </div>
    </div>
  );
};

export default Anty;
