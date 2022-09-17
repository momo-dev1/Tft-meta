import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const navigation = [
    { name: "Items", path: "/" },
    { name: "Comps", path: "/comps" },
  ];
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="bg-[#363944] flex text-[#DBFFFF] px-4 pt-4">
      <ul className="max-w-6xl mx-auto w-full text-lg flex gap-4">
        {navigation.map((item) => (
          <Link to={item.path}>
            <li
              className={`${
                location.pathname.slice(1) === item.path
                  ? "border-b border-gray-600"
                  : ""
              } relative pb-3`}
            >
              {item.name}
              {location.pathname === item.path ? (
                <span className="h-1 w-full absolute bottom-0 left-0 bg-[#DBFFFF]"></span>
              ) : null}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
