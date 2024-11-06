import { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";

export const LevelContext = createContext(1);
export const Level2Context = createContext(0);

const Grandpa = () => {
  const gold = "Most priceless";
  const [money, setMoney] = useState(1000);

  return (
    <div className="border-2 border-amber-500 rounded-md p-4">
      <h1 className="text-2xl">Grandpa</h1>
      <Level2Context.Provider value={[money, setMoney]}>
        <LevelContext.Provider value={gold + 1}>
          <section className="flex gap-3">
            <Dad gold={gold}></Dad>
            <Anty></Anty>
          </section>
        </LevelContext.Provider>
      </Level2Context.Provider>
    </div>
  );
};

export default Grandpa;
