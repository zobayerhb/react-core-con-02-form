import { useContext } from "react";
import { Level2Context } from "../Grandpa/Grandpa";

const Cousin = ({ name }) => {
    const [money, setMoney] = useContext(Level2Context);

  return <div className="border-2 border-amber-500 rounded-md p-3">{name}
    <p>Money: {money}</p>
    <button onClick={() => setMoney(money + 1000)}>Increase Money</button>
  </div>;
};

export default Cousin;
