import styles from "@/styles/style";
import { discount, robot } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";


const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4 animate-fade-right animate-duration-1000 animate-delay-500">
          <Image src={discount} alt="discount" className="w-[42px] h-[42px]" />
          <p className={`${styles.paragraph} ml-4`}>
            <span className="text-white"></span> Descarte{" "}
            <span className="text-white">Gratuito!</span> 
          </p>
        </div>
        
        <div className="flex flex-row justify-between items-center w-full animate-fade-up animate-duration-700 animate-delay-500">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[75px] animate-fade-up animate-duration-700 animate-delay-500">
            Transformando <br className="sm:block hidden animate-fade-up animate-duration-700 animate-delay-500" />{" "}
            <span className="text-gradient">lixo Eletrônico</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[75px] animate-fade-up animate-duration-700 animate-delay-500">
          em Sustentabilidade.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 animate-fade-up animate-duration-1000 animate-delay-500`}>
          Descarte seu lixo eletrônico de forma fácil e gratuita com a BIO VALE. Juntos, preservamos o meio ambiente e construímos um futuro mais verde.
        </p>
    </div>

      <Image
        src="/assets/robot.png"
        alt="billings"
        className="w-[70%] h-[70%] objective-contain relative z-[8] ml-auto animate-fade-left animate-duration-1000 animate-delay-500"
        width='50'
        height='50'
      />
      
  </section>
);

export default Hero;
