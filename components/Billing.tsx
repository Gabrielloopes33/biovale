import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        O que fazemos? <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Oferecemos coleta e descarte de lixo eletrônico de forma segura e eficiente, contribuindo para a redução de impactos ambientais.
      </p>
      <br>
      </br>

      <div className=" flex flex-row items-center py-[6px] px-6 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph} `}>

          <span className="text-white">Coleta gratuita de lixo eletrônico.</span> 
        </p>
      </div>

      <br>
      </br>

      <div className=" flex flex-row items-center py-[6px] px-6 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph} `}>

          <span className="text-white">Reciclagem de eletrônicos corporativos.</span> 
        </p>
      </div>

      <br>
      </br>

      <div className=" flex flex-row items-center py-[6px] px-6 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph} `}>

          <span className="text-white">Consultoria para empresas no
          gerenciamento de resíduos.</span> 
        </p>
      </div>
     
    </div>
  </section>
);

export default Billing;
