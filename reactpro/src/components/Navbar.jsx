
const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex justify-center space-x-60 p-4  bg-black text-white">
      <h1 className="text-xl font-rig flex justify-center">ALPHA LIFE STYLE</h1>
      <button className="relative" onClick={onCartClick}>
        <span className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">{cartCount}</span>
        Cart
      </button>
    </nav>
  );
};

export default Navbar;
