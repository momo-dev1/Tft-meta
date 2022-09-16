import { DataList } from "../types/repositoryTypes";

const RowGrid = ({ champion, items }: any) => {
  return (
    <>
      <td className="py-4 pl-2 pr-3 text-sm font-medium text-gray-400  ">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="w-9 h-9 rounded-md overflow-hidden">
            <img src={champion.src} alt="" />
          </div>
          <span className="text-center text-xs">{champion.champion}</span>
        </div>
      </td>
      {items.map((item: any) => (
        <td className="w-[16%] px-1 py-4 text-sm text-gray-400 ">
          <div className="flex sm:flex-row flex-col sm:items-center gap-2">
            <div className=" rounded-md overflow-hidden inline-block  mr-3  flex-shrink-0">
              <img className="w-6" src={item.item.src} alt="" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-500 text-[10px] ">
                {item.item.ratio}
              </span>
              <span className="hidden sm:block sm:text-xs ">
                {item.item.name}
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
