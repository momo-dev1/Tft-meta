const Item = ({ item }: any) => {
  return (
    <td className="w-[16%] px-1 py-4 text-sm text-gray-400 ">
      <div className="flex sm:flex-row flex-col sm:items-center  sm:gap-3 mt-3 sm:mt-0">
        <div className="flex flex-col overflow-hidden flex-shrink-0">
          <img className="w-8 rounded-lg" src={item?.src} alt="" />
          <div className="flex items-center text-left ">
            <span className="w-3">
              <img
                className="rounded-lg"
                src={item?.combination?.base1}
                alt=""
              />
            </span>
            <span className="font-bold text-[10px] sm:text-base mb-1">+</span>
            <span className="w-3">
              <img
                className="rounded-lg"
                src={item?.combination?.base2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col text-left ml-1 sm:ml-0">
          <span className="text-gray-500 text-[10px] sm:text-sm mb-1">
            {item?.ratio}
          </span>
          <span className="hidden sm:block sm:text-xs font-semibold">
            {item?.name}
          </span>
        </div>
      </div>
    </td>
  );
};

export default Item;
