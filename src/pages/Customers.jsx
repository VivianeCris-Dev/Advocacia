import line from "../assets/Line.svg";
import CardComments from "../components/CardComments";

function Customers() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[573px] bg-gradient-to-r from-[#00222E] to-[#115F79] text-white max-[1037px]:h-[750px]"
      id="customers"
    >
      <div className="flex flex-col items-center justify-center mb-20">
        <div className="flex gap-9 mb-3 max-[502px]:gap-4">
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
          <h1 className="cinzel text-[55px] font-normal max-[920px]:text-[35px] max-[735px]:text-[25px] max-[564px]:text-[20px]  max-[385px]:text-[18px]">
            Nossos clientes
          </h1>
          <img
            src={line}
            alt="linha"
            className="w-[110px] max-[735px]:w-[80px] max-[502px]:w-[60px]"
          />
        </div>
        <div className="w-[817px] hy-[48px] text-center max-[920px]:w-[700px]  max-[735px]:w-[350px] max-[385px]:w-[300px]">
          <span className="cinzel font-normal text-[20px]  max-[735px]:text-[15px] max-[385px]:text-[13px] ">
            A confiança e a satisfação dos nossos clientes refletem a seriedade
            e o comprometimento da nossa atuação jurídica.
          </span>
        </div>
      </div>
      <div>
        <CardComments />
      </div>
    </div>
  );
}

export default Customers;
