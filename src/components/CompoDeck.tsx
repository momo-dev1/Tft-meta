import { compoList } from "../utils/data";

const CompoDeck = () => {
  return (
    <div>
      {compoList.map((compo) => {
        return (
          <figure className="text-lightCyan ">
            <h1 className="text-xl font-semibold mb-8">v12.17 Meta Comps</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <h3 className="text-2xl capitalize">{compo.title}</h3>
                <div className="my-5">
                  <h5 className="mb-2">Early Game Plan</h5>
                  <div className="flex items-center gap-4 w-full h-10 md:h-15 lg:h-20 flex-wrap">
                    {compo.early.map((item) => (
                      <img
                        className="object-contain w-10 h-10 md:w-15 md:h-15 lg:w-16 lg:h-16 rounded-3xl"
                        src={item}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="mb-2">Mid Game Plan</h5>
                  <div className="flex items-center gap-4 w-full h-10 md:h-15 lg:h-20 flex-wrap ">
                    {compo.mid.map((item) => (
                      <img
                        className="object-cover w-10 h-10 md:w-15 md:h-15  lg:w-16 lg:h-16 rounded-3xl"
                        src={item}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full md:mt-0 md:max-h-[500px]">
                <img
                  className="object-contain h-full w-full"
                  src={compo.final}
                  alt="ss"
                />
              </div>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default CompoDeck;