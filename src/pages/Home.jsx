import wave from "../assets/Wave.svg";
import cil from "../assets/cil_badge.svg";
import advogado from "../assets/Advogado.svg";
import jovem from "../assets/jovem.png";
import vectorleft from "../assets/Vectorleft.svg";
import vector1 from "../assets/Vector1.svg";
import balanca from "../assets/balanca.svg";

function Home() {
  return (
    <div
      id="home"
      className="flex items-center justify-center relative w-full h-[816px] bg-gradient-to-r from-[#00222E] to-[#115F79] text-white mt-[80px] max-[1121px]:h-[950px]  max-[1121px]:mt-0 max-[564px]:h-[750px]"
    >
      <img
        src={wave}
        alt="Ondas"
        className="absolute left-0 w-full h-[570px] z-0 top-[380px] max-[1121px]:top-[460px] max-[564px]:top-[320px]"
      />
      <div className="flex items-center justify-center w-full h-full relative z-10 gap-9 max-[1121px]:flex-col ">
        <div className="flex flex-col items-center justify-center w-[497px] max-[564px]:w-[280px]">
          <div className="mr-15">
            <img
              src={balanca}
              alt="Advogado"
              className="w-[330px] h-[228px] max-[1121px]:hidden"
            />
            <img
              src={advogado}
              alt="Advogado"
              className="w-[330px] h-[62px] max-[1121px]:hidden"
            />
          </div>

          <div className="items-start space-x-4 relative">
            <img
              src={cil}
              alt="certificado"
              className="w-[46px] h-[46px] absolute max-[690px]:h-[36px] max-[564px]:hidden"
            />

            <span className="text-[#D4A94F] text-[35px] font-bold cinzel ml-13 max-[690px]:text-[25px] max-[564px]:text-[19px] max-[564px]:ml-0">
              15 Anos
            </span>
            <span className="cinzel text-[35px] max-w-[497px] max-[690px]:text-[25px] max-[564px]:text-[19px]">
              De Defesa Jurídica: Transformando Crises em Soluções
            </span>
          </div>

          <span className="cinzel max-[690px]:text-[14px] max-[564px]:text-[13px]">
            "Especialistas em Criminal | Sindical | Improbidade administrativa |
            Licitações. Seu advogado parceiro para proteger sua liberdade,
            direitos, carreira e negócios com estratégia."
          </span>
        </div>

        <div className="relative">
          <img
            className="absolute top-[-5px] left-[-5px]"
            src={vectorleft}
            alt="Borda"
          />
          <img
            className="absolute top-[-9px] left-[-9px]"
            src={vector1}
            alt="Borda"
          />
          <div className="w-[577px] h-[589px] bg-[#00222E40] flex items-center justify-center custom-blue max-[1300px]:w-[500px] max-[1121px]:h-[430px] max-[690px]:w-[350px] max-[564px]:w-[190px] max-[564px]:h-[290px]">
            <img
              className="h-[560px] max-[1121px]:h-[410px] max-[564px]:h-[280px]"
              src={jovem}
              alt="Jovem"
            />
          </div>
          <img
            className="absolute bottom-[-9px] right-[-9px] transform scale-[-1]"
            src={vector1}
            alt="Borda"
          />
          <img
            className="absolute bottom-[-5px] right-[-5px] transform scale-[-1]"
            src={vectorleft}
            alt="Borda"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
