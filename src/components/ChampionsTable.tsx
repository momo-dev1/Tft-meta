import { useState } from "react";
import { DataList } from "../types/dataTypes";
import { champion } from "../utils/data";
import RowGrid from "./RowGrid";
import Search from "./Search";

const ChampionsTable = () => {
  const [searchChampion, setSearchChampion] = useState<string>("");

  const search = () => {
    const filterChampions = champion.filter((value: any) => {
      return value[0]?.champion
        ?.toLowerCase()
        .includes(searchChampion?.toLowerCase());
    });
    return filterChampions;
  };
  const filteredChampions: any[] | [] = searchChampion ? search() : champion;

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-[#222222] min-h-screen py-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-y-3">
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-[#DBFFFF]">
            v12.17 Item Trends
          </h1>
          <p className="mt-2 text-sm text-[#999999]">
            Based on use of TOP 4 players above Platinum Tier
          </p>
        </div>
        <Search
          searchChampion={searchChampion}
          setSearchChampion={setSearchChampion}
        />
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="w-full ">
                <thead className="bg-[#363944]">
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-sm font-semibold text-[#DBFFFF] "
                    >
                      Champion
                    </th>
                    <th
                      scope="col"
                      colSpan={5}
                      className="px-2 py-3 text-left text-sm font-semibold text-[#DBFFFF] "
                    >
                      Items
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#27282d]">
                  {filteredChampions.map((item) => {
                    return (
                      <tr className="odd:bg-[#2a2c33]">
                        <RowGrid
                          // key={item[0].champion}
                          champion={item[0]}
                          items={item[1]}
                        />
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsTable;
