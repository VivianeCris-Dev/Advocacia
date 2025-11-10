import line from "../assets/Line.svg";
import pessoas from "../assets/pessoas.png";
import vectorleft from "../assets/Vectorleft.svg";
import vector1 from "../assets/Vector1.svg";

function About() {
  return (
    <div
      className="flex items-center justify-center w-full h-[648px] bg-gradient-to-r from-[#00222E] to-[#115F79] text-white max-[1121px]:h-[900px] max-[735px]:h-[700px] max-[564px]:h-[530px] max-[502px]:h-[570px]"
      id="abaut"
    >
      <div className="flex gap-13 max-[1121px]:flex-col max-[1121px]:gap-0 max-[735px]:items-center">
        <div className="flex flex-col items-center justify-center w-[668px] max-[1300px]:w-[560px] max-[564px]:w-full">
          <div className="flex gap-9 mb-9 max-[502px]:gap-4">
            <img
              src={line}
              alt="linha"
              className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
            />
            <h1 className="cinzel text-[55px] font-normal max-[1300px]:text-[35px]  max-[735px]:text-[25px] max-[564px]:text-[20px]">
              O Escritório
            </h1>
            <img
              src={line}
              alt="linha"
              className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
            />
          </div>
          <div className="w-[494px] h-[287px] ml-15 max-[564px]:w-[300px] max-[564px]:ml-0 max-[528px]:w-[230px] max-[502px]:mb-2">
            <p className="cinzel max-[735px]:text-[14px] max-[564px]:text-[12px]">
              <span className="cinzel font-bold text-[17px] mr-2 max-[735px]:text-[16px] max-[564px]:text-[14px]">
                Estamos com você.
              </span>
              Na Advogados Associados, somos mais do que advogados; somos
              parceiros na sua busca por justiça e soluções legais eficazes.".
              Com experiência em diversas áreas do Direito, oferecemos
              orientação jurídica de qualidade, com ética, transparência e
              dedicação. Valorizamos o atendimento personalizado e enfrentamos
              desafios jurídicos com competência e compromisso, sempre focados
              em resultados concretos.
            </p>
          </div>
        </div>
        <div className="relative max-[735px]:w-[435px] max-[564px]:w-[300px] max-[502px]:w-[220px]">
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
          <div className="max-[735px]:w-[435px] max-[564px]:w-[300px] max-[385px]:w-[220px]">
            <img
              className="h-[409px] w-[581px] max-[1300px]:w-[450px] max-[1121px]:w-[581px] max-[735px]:w-[435px] max-[735px]:h-[279px] max-[564px]:w-[300px] max-[564px]:h-[160px] max-[502px]:w-[220px]"
              src={pessoas}
              alt="Jovem"
            />
          </div>
          <img
            className="absolute bottom-[-9px] right-[-9px] transform scale-[-1] ]"
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

export default About;
