import { Item, Champion } from "./index";

const RowGrid = ({ champion, items }: any) => {
  return (
    <>
      <Champion champion={champion} />
      {items.map(({ item }: any) => (
        <Item key={item.name} item={item} />
      ))}
    </>
  );
};

export default RowGrid;
