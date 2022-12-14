import { IProps } from "../types/dataTypes";

const Search = ({ searchChampion, setSearchChampion }: IProps) => {
  return (
    <form
      className="flex flex-col text-lightCyan"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="search">Search </label>
      <input
        className="rounded-md outline-none bg-ironGrey px-2 py-1 mt-1 border border-emerald-400/30"
        id="search"
        value={searchChampion}
        onChange={(event) => setSearchChampion(event.target.value)}
      />
    </form>
  );
};

export default Search;
