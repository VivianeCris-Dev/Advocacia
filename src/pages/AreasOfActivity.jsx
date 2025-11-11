import line from "../assets/Line.svg";
import Card from "../components/Card";

function AreasOfActivity({ setWasClicked }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[1106px] bg-gradient-to-r from-[#00222E] to-[#115F79] text-white max-[1037px]:h-[1500px] max-[564px]:h-[1300px]  max-[502px]:h-[2600px]"
      id="areas"
    >
      <div className="flex flex-col items-center justify-center mb-20">
        <div className="flex gap-9 mb-3 max-[502px]:gap-4 max-[502px]:gap-4 max-[385px]:gap-2">
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
          <h1 className="cinzel text-[55px] font-normal max-[920px]:text-[35px] max-[735px]:text-[25px] max-[564px]:text-[20px] max-[502px]:text-[14px]">
            ÁREAS DE ATUAÇÃO
          </h1>
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
        </div>
        <div className="w-[817px] hy-[48px] text-center max-[920px]:w-[700px] max-[735px]:w-[350px] max-[385px]:w-[300px]">
          <span className="cinzel font-normal text-[20px] max-[735px]:text-[15px] max-[385px]:text-[13px]">
            Excelência jurídica com atuação estratégica, ética e personalizada
            em diversas áreas do Direito.
          </span>
        </div>
      </div>

      <Card />

      <div>
        <button
          type="button"
          className="cinzel font-bold cursor-pointer w-[196px] h-[44px] border border-[#D4A94F] rounded-sm bg-[#115F79] text-white flex items-center justify-center hover:text-[#D4A94F] font-sans text-xs"
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

export default AreasOfActivity;
