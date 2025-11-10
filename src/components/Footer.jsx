import whatsapp from "../assets/Whatsapp.svg";
import instagram from "../assets/instagram.svg";

function Footer({ wasClicked, setWasClicked, menuItems }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[328px] bg-[#00222E] gap-10 max-[845px]:h-[600px]">
      <div className="flex items-center justify-between w-[1200px] max-[1300px]:w-[1000px] max-[1037px]:w-[800px] max-[845px]:flex-col max-[845px]:items-start max-[845px]:gap-10 max-[845px]:w-[300px]">
        <div className="flex flex-col items-center justify-center max-[845px]:hidden">
          <span className="text-[#D4A94F] dancing max-[1300px]:text-sm">
            Advocacia Criminalista
          </span>
          <div className="flex mt-5 gap-4 max-[1037px]:flex-col">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="w-[35px] h-[35px]"
                src={whatsapp}
                alt="icon whatsapp"
              />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="w-[35px] h-[35px]"
                src={instagram}
                alt="icon instagram"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-1">
          <span className=" cinzel text-[#D4A94F] text-[25px] font-bold mb-5 max-[1300px]:text-[16px]">
            Institucional
          </span>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setWasClicked(item.href);
              }}
              className={`cinzel text-white hover:border-b hover:border-b-[#D4A94F] max-[1300px]:text-[14px] ${
                wasClicked === item.href
                  ? "border-b border-b-[#D4A94F]"
                  : "text-white "
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <span className=" cinzel text-[#D4A94F] text-[25px] font-bold mb-5 max-[1300px]:text-[16px]">
            Contato
          </span>
          <span className="cinzel text-white border-b-0 hover:border-b hover:border-[#D4A94F] max-[1300px]:text-[14px]">
            (11) 0000-7210
          </span>
          <span className="cinzel text-white border-b-0 hover:border-b hover:border-[#D4A94F] max-[1300px]:text-[14px]">
            @contatoadvogados
          </span>
          <span className="cinzel text-white border-b-0 hover:border-b hover:border-[#D4A94F] max-[1300px]:text-[14px]">
            contato@daniel.com.br
          </span>
          <span className="cinzel text-white border-b-0 hover:border-b hover:border-[#D4A94F] max-[1300px]:text-[14px]">
            Av. Governador José Malcher, <br /> n° 168, sala 408, Centro
            Empresarial <br /> Bolonha, Nazaré, Belém,PA
          </span>
        </div>
      </div>

      <div>
        <span className="cinzel text-[14px] text-white max-[502px]:text-[10px]">
          © 2025 Portfólio profissional • Desenvolvido para testes
        </span>
      </div>
    </div>
  );
}

export default Footer;
