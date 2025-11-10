function CardComments() {
  return (
    <div className="flex items-center justify-center w-full gap-10 max-[1037px]:flex-col max-[1037px]:h-[350px]">
      <div className="flex flex-col  items-center justify-center w-[300px] h-[161px] bg-white rounded-xs shadow-2xs text-black">
        <div className="flex flex-col">
          <p className="mont w-[272px] text-[12px] mb-5">
            “O Dr. Daniel conduziu meu caso com uma precisão impressionante. Sua
            clareza na comunicação e domínio técnico me passaram segurança do
            início ao fim.”
          </p>
          <div className="flex">
            <div className=" w-[40px] h-[40px] bg-[#939393] mr-1"></div>
            <div className="flex flex-col justify-end">
              <span className="cinzel text-[10px]">– Bernard R.,</span>
              <span className="cinzel text-[8px] text-end">Empresário</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center w-[300px] h-[161px] bg-white rounded-xs shadow-2xs text-black">
        <div className="flex flex-col">
          <p className="mont w-[272px] text-[12px] mb-5">
            “Atendimento impecável. O Dr. Daniel foi transparente, atencioso e
            extremamente eficaz. Recomendo a qualquer pessoa que precise de um
            advogado confiável.”
          </p>
          <div className="flex">
            <div className=" w-[40px] h-[40px] bg-[#939393] mr-1"></div>
            <div className="flex flex-col justify-end">
              <span className="cinzel text-[10px]">– Natali A.,</span>
              <span className="cinzel text-[8px] text-end">
                Servidora Pública
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center w-[300px] h-[161px] bg-white rounded-xs shadow-2xs text-black">
        <div className="flex flex-col">
          <p className="mont w-[272px] text-[12px] mb-5">
            “Tive meu nome envolvido injustamente em um processo, e o Dr. Daniel
            foi incansável na defesa dos meus direitos. Hoje sou grato por ter
            tido sua representação.”
          </p>
          <div className="flex">
            <div className=" w-[40px] h-[40px] bg-[#939393] mr-1"></div>
            <div className="flex flex-col justify-end">
              <span className="cinzel text-[10px]">– Pedro G.,</span>
              <span className="cinzel text-[8px] text-end">Gestor Público</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComments;
