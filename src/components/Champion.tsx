const Champion = ({ champion }: any) => {
  return (
    <td className="py-4 pl-2 pr-3 text-sm font-medium text-gray-400  ">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src={champion.src} alt="" />
        </div>
        <span className="text-center text-xs">{champion.champion}</span>
      </div>
    </td>
  );
};

export default Champion;
