export const Header = () => {
  return (
    <header className="p-2 inline-flex items-center justify-between shadow-md fixed z-50 bg-white w-full">
      <div>
        <h1 className="text-2xl font-bold px-2">SoleCrafters</h1>
      </div>
      <nav>
        <ul className="inline-flex gap-2 text-xl px-2">
          <li>
            <a className="hover:font-semibold" href="/">
              Explore
            </a>
          </li>
          <li>
            <a className="hover:font-semibold" href="/">
              Shop
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
