import searchIcon from "../assets/searchIcon.svg";

export function Header({ links }: { links: { name: string; href: string }[] }) {
  return (
    <div>
      <header className="bg-gray-900 flex pt-4 pb-4 ">
        <div className="text-gray-100 flex">
          <h1 className="text-4xl font-black font-logo italic pr-16 px-4">
            STAR MOVIES
          </h1>
          <div>
            <h3 className="font-header flex gap-20 text-3xl font-bold">
              {links.map((link) => {
                return <h3>{link.name}</h3>;
              })}
            </h3>
          </div>
        </div>

        <div className="flex ml-16 bg-white/50 rounded-2xl p-1">
          <input
            type="text"
            className="h-10  rounded-2xl bg-white/0 focus:outline-none text-xl"
          />
          <img src={searchIcon} alt="" />
        </div>
      </header>
    </div>
  );
}
