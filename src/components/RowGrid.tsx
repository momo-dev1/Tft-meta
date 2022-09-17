import { DataList } from "../types/dataTypes";

const RowGrid = ({ champion, items }: any) => {
  return (
    <>
      <td className="py-4 pl-2 pr-3 text-sm font-medium text-gray-400  ">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="w-10 h-10 rounded-md overflow-hidden">
            <img src={champion.src} alt="" />
          </div>
          <span className="text-center text-xs">{champion.champion}</span>
        </div>
      </td>
      {items.map(({ item }: any) => (
        <td className="w-[16%] px-1 py-4 text-sm text-gray-400 ">
          <div className="flex sm:flex-row flex-col sm:items-center  sm:gap-3 mt-3 sm:mt-0">
            <div className="flex flex-col overflow-hidden flex-shrink-0">
              <img className="w-8 rounded-lg" src={item.src} alt="" />
              <div className="flex items-center text-left">
                <span className="w-3">
                  <img
                    className="rounded-lg"
                    src={item?.combination?.base1}
                    alt=""
                  />
                </span>
                <span className="font-bold ">+</span>
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
                {item.ratio}
              </span>
              <span className="hidden sm:block sm:text-xs font-semibold">
                {item.name}
              </span>
            </div>
          </div>
        </td>
      ))}
    </>
  );
};

export default RowGrid;

// {/* <div className="flex items-center gap-1 w-3 ">
//              <img className="w-full h-full" src={item1.combination1} alt="" />
//              <span>+</span>
//              <img className="w-full h-full" src={item1.combination2} alt="" />
//            </div> */}
