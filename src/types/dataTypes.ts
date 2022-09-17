export interface IProps {
	searchChampion: string;
	setSearchChampion: React.Dispatch<React.SetStateAction<string>>;
}

export enum item{
	bfSword = "https://cdn.lolchess.gg/upload/images/items/BFSword_1658364277-1038.png",
	Vest = "https://cdn.lolchess.gg/upload/images/items/ChainVest_1640058945.png",
	Belt = "https://cdn.lolchess.gg/upload/images/items/GiantsBelt_1658368751-1011.png",
	Rod = "https://cdn.lolchess.gg/upload/images/items/NeedlesslyLargeRod_1640059008.png",
	Gloves = "https://cdn.lolchess.gg/upload/images/items/SparringGloves_1640059055.png",
	Cloak = "https://cdn.lolchess.gg/upload/images/items/NegatronCloak_1640059073.png",
	Bow = "https://cdn.lolchess.gg/upload/images/items/RecurveBow_1640058784.png",
	Tear = "https://cdn.lolchess.gg/upload/images/items/Tearofthegoddess_1640059037.png",
}


export interface DataList {
	champion: {
		title: string,
		img: string
	};
  }