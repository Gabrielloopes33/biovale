import styles from "@/styles/style";
import { discount, robot } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";
import { motion } from "framer-motion"; // Importação correta

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4">
          <Image src={discount} alt="discount" className="w-[42px] h-[42px]" />
          <p className={`${styles.paragraph} ml-4`}>
            <span className="text-white"></span> Descarte{" "}
            <span className="text-white">Gratuito!</span> 
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[75px]">
            Transformando <br className="sm:block hidden" />{" "}
            <span className="text-gradient">lixo Eletrônico</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[75px]">
          em Sustentabilidade.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Descarte seu lixo eletrônico de forma fácil e gratuita com a BIO VALE. Juntos, preservamos o meio ambiente e construímos um futuro mais verde.
        </p>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}
    >
      <Image
        src="/assets/robot.png"
        alt="billings"
        className="w-[100%] h-[100%] relative z-[5]"
        width='100'
        height='100'
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-..."> {/* Complete a posição desejada */}
        <Image src={robot} alt="robot" layout="fill" objectFit="contain" />
      </div>
    </motion.div>
  </section>
);

export default Hero;
