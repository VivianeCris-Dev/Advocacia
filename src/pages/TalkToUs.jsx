import line from "../assets/Line.svg";

function TalkToUs() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[1100px] bg-gradient-to-r from-[#00222E] to-[#115F79] text-white max-[564px]:h-[900px]"
      id="talk"
    >
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex gap-9 mb-3 max-[502px]:gap-4">
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
          <h1 className="cinzel text-[55px] font-normal max-[920px]:text-[35px] max-[735px]:text-[25px] max-[564px]:text-[20px]">
            Fale Conosco
          </h1>
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[496px] h-[688px] bg-[rgba(255,255,255,0.3)] rounded-md custom-black max-[735px]:w-[396px] max-[564px]:w-[290px] max-[564px]:h-[598px]">
        <h2 className="cinzel text-[35px] w-[374px] text-center mt-5 max-[735px]:text-[25px] max-[564px]:text-[20px] max-[395px]:w-[150px]">
          Agende sua reunião
        </h2>
        <span className="cinzel text-[20px] font-normal mb-5 max-[735px]:text-[15px] max-[564px]:text-[12px]">
          Preencha o formulário a baixo
        </span>
        <form className="flex flex-col items-center justify-center">
          <input
            className="cinzel text-[18px] w-[403px] h-[58px] bg-white rounded-md shadow-xl text-[#4D4D4D] mb-5 p-3 max-[735px]:w-[303px] max-[564px]:w-[203px] "
            type="name"
            placeholder="Nome"
            required
          />
          <input
            className="cinzel text-[18px] w-[403px] h-[58px] bg-white rounded-md shadow-xl text-[#4D4D4D] mb-5 p-3 max-[735px]:w-[303px] max-[564px]:w-[203px]"
            type="Email"
            placeholder="Endereço de e-mail"
            required
          />
          <input
            className="cinzel text-[18px] w-[403px] h-[58px] bg-white rounded-md shadow-xl text-[#4D4D4D] mb-5 p-3 max-[735px]:w-[303px] max-[564px]:w-[203px]"
            type="Number"
            placeholder="Telefone"
            required
          />
          <textarea
            className="cinzel text-[18px] w-[403px] h-[181px] bg-white rounded-md shadow-xl text-[#4D4D4D] mb-5 p-3 resize-none placeholder:text-[#4D4D4D]/60 max-[735px]:w-[303px] max-[564px]:w-[203px] max-[564px]:h-[141px]"
            placeholder="Mensagem"
            required
          />
          <div>
            <button
              type="button"
              className="cinzel font-bold cursor-pointer w-[133px] h-[41px] border border-[#D4A94F] rounded-sm bg-[#115F79] text-white flex items-center justify-center hover:text-[#D4A94F] font-sans text-xs"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TalkToUs;
