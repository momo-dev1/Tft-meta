import { useState } from "react";
import { championList } from "../utils/data";
import { ChampionListType } from "../types/dataTypes";
import { Container, RowGrid, Search } from "./index";

const ChampionsTable = () => {
  const [searchChampion, setSearchChampion] = useState<string>("");

  const search = () => {
    const filterChampions = championList.filter((value: any) => {
      return value[0]?.champion
        ?.toLowerCase()
        .includes(searchChampion?.toLowerCase());
    });
    return filterChampions;
  };

  const filteredChampions: any[] | [] = searchChampion
    ? search()
    : championList;

  return (
    <Container>
      <div className="flex flex-col sm:flex-row sm:items-center  gap-y-3">
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-semibold text-lightCyan">
            v12.18 Meta Items
          </h1>
          <p className="mt-2 text-sm text-lightGrey">
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
              <table className="w-full">
                <thead className="bg-ironGrey">
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-sm font-semibold text-lightCyan "
                    >
                      Champion
                    </th>
                    <th
                      scope="col"
                      colSpan={5}
                      className="px-2 py-3 text-left text-sm font-semibold text-lightCyan "
                    >
                      Items
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-blackRussian">
                  {filteredChampions.map((item: ChampionListType) => {
                    return (
                      <tr
                        key={item[0].champion}
                        className="odd:bg-midNightExpress"
                      >
                        <RowGrid champion={item[0]} items={item[1]} />
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChampionsTable;
