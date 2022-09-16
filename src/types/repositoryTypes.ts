export interface IProps {
	searchChampion: string;
	setSearchChampion: React.Dispatch<React.SetStateAction<string>>;
}

interface Item {
	title: string;
	ration: string;
	mainImg: string;
	combination1: string;
	combination2: string;
  }
export interface DataList {
	champion: {
		title: string,
		img: string
	};
	item1:Item;
	item2:Item;
	item3:Item;
	item4:Item;
	item5:Item;
  }