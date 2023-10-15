export const Footer = () => {
  return (
    <footer className="flex flex-col w-full gap-2 p-2 text-white bg-black">
      <p className="px-2 text-2xl italic font-bold">SoleCrafters</p>
      <div className="grid items-end grid-cols-1 gap-4 font-semibold md:grid-cols-3 md:gap-0">
        <div className="flex flex-col px-2">
          <a href="/">About Us</a>
          <a href="/">Collections</a>
          <a href="/">Blog</a>
          <a href="/">FAQ</a>
        </div>
        <div className="flex flex-col px-2">
          <a href="/">Terms and Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Newsletter</a>
        </div>
        <div className="flex flex-col px-2 md:text-end">
          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">YouTube</a>
          <a href="/">Twitter</a>
        </div>
      </div>
      <p className="text-xs italic text-center">SoleCrafters © 2023</p>
    </footer>
  );
};
