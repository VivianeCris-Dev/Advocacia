import cards from "../cards.js";
function Card() {
  return (
    <div className="flex gap-9 grid grid-cols-1 grid-cols-3 gap-15 mb-20 max-[1037px]:grid-cols-2 max-[564px]:gap-8 max-[502px]:grid-cols-1">
      {cards.map((card) => (
        <div
          className="flex flex-col items-center justify-center w-[250px] h-[310px] bg-gradient-to-b from-[#00222E] to-[#115F79] text-white border border-[#D4A94F] text-center max-[735px]:w-[199px] max-[564px]:w-[190px] max-[564px]:h-[250px] max-[502px]:w-[250px] max-[502px]:h-[310px]  "
          key={card.id}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-[76px] h-[76px] mb-4 max-[735px]:w-[66px] max-[735px]:h-[66px] max-[564px]:w-[40px] max-[564px]:mb-0  max-[502px]:w-[76px] max-[502px]:mb-4"
              src={card.svg}
              alt="balança"
            />
            <h1 className="cinzel text-[20px] w-[120px] h-[48px] mb-4 max-[735px]:text-[17px] max-[564px]:text-[14px] max-[564px]:mb-0  max-[502px]:text-[20px] max-[502px]:mb-5">
              {card.title}
            </h1>
            <p className="cinzel text-[12px] w-[175px] h-[112px] max-[735px]:text-[12px] max-[564px]:text-[11px] max-[564px]:mb-0  max-[502px]:text-[12px]  max-[502px]:mb-4">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
