import Special from "../../Special/Special";

const Myself = ({gold}) => {
  return (
    <div>
      <p className="">Myself</p>
      <div className="border-2 border-amber-500 rounded-md">
        <Special gold={gold}></Special>
      </div>
    </div>
  );
};

export default Myself;
