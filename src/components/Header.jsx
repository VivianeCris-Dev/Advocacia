function Header({ wasClicked, setWasClicked, menuItems }) {
  return (
    <div className="flex items-center justify-center w-full h-[80px] bg-[#00222E] gap-[100px] fixed top-0 left-0 z-[9999] max-[975px]:gap-[50px] max-[845px]:gap-[25px] max-[502px]:gap-0">
      <div>
        <span className="text-[#D4A94F] dancing max-[1300px]:w-sm max-[1121px]:hidden ">
          Advocacia Criminalista
        </span>
      </div>

      <div className="flex items-center justify-center gap-7 max-[845px]:gap-3">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setWasClicked(item.href);
            }}
            className={`cinzel text-white m-2 hover:border-b hover:border-b-[#D4A94F] max-[1300px]:text-[14px] max-[564px]:text-[12px] max-[502px]:text-[10px] ${
              wasClicked === item.href
                ? "border-b border-b-[#D4A94F]"
                : "text-white "
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="max-[735px]:hidden">
        <button
          type="button"
          className="cinzel font-bold cursor-pointer w-[196px] h-[44px] border border-[#D4A94F] rounded-sm bg-[#115F79] text-white flex items-center justify-center hover:text-[#D4A94F] font-sans text-xs max-[1300px]:w-[120px] max-[1300px]:text-[12px]"
          onClick={(e) => {
            e.preventDefault();
            setWasClicked("#talk");
          }}
        >
          Agendar uma reunião
        </button>
      </div>
    </div>
  );
}

export default Header;
