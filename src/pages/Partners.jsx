import line from "../assets/Line.svg";
import vectorleft from "../assets/Vectorleft.svg";
import vector1 from "../assets/Vector1.svg";
import homem from "../assets/homem.png";
import mulher from "../assets/mulher.png";

function Partners() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[912px] bg-gradient-to-r from-[#00222E] to-[#115F79] text-white max-[845px]:h-[1500px] max-[564px]:h-[1300px]"
      id="partners"
    >
      <div className="flex flex-col items-center justify-center mb-35">
        <div className="flex gap-9 mb-3 max-[502px]:gap-4">
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
          <h1 className="cinzel text-[55px] font-normal max-[920px]:text-[35px] max-[735px]:text-[25px] max-[564px]:text-[20px]">
            Nossos Sócios
          </h1>
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
        </div>
      </div>
      <div className="flex gap-35 max-[845px]:flex-col max-[845px]:gap-[300px] max-[735px]:w-[200px] max-[735px]:gap-[150px] max-[735px]:w-[200px] max-[735px]:items-center">
        <div className="flex flex-col items-center justify-center w-[300px] h-[430px]">
          <div className="relative mb-5">
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
            <div className="w-[300px] h-[430px] bg-[#00222E40] flex items-center justify-center custom-blue max-[735px]:w-[210px] max-[735px]:h-[310px]">
              <img
                className="w-[290px] h-[420px] max-[735px]:w-[200px] max-[735px]:h-[300px]"
                src={mulher}
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
          <div className=" flex flex-col text-center gap-3">
            <span className="cinzel text-[24px]">Dra. Mira Kano</span>
            <p className="cinzel text-[14px]">
              Graduada pelo CESUPA. Mestre e Doutoranda em Direito Público pela
              FDUC. Professora em nível de graduação e pós-graduação na FINAMA,
              ESTÁCIO-FAP, UNAMA e CESUPA/ESA.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[300px] h-[430px]">
          <div className="relative mb-5">
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
            <div className="w-[300px] h-[430px] bg-[#00222E40] flex items-center justify-center custom-blue max-[735px]:w-[210px] max-[735px]:h-[310px]">
              <img
                className="w-[290px] h-[420px] max-[735px]:w-[200px] max-[735px]:h-[300px]"
                src={homem}
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
          <div className=" flex flex-col text-center gap-3">
            <span className="cinzel text-[24px]">Dr. Daniel Freitas</span>
            <p className="cinzel text-[14px]">
              Graduado pela UFSM. Mestre e Doutorando em Direito pela FDUC.
              Advogado e professor em nível de graduação e pós na FINAMA, UNIFOR
              e ESTÁCIO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
