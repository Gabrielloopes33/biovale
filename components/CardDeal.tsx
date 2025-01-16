import { card } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} >
      Descarte sem custo para qualquer pessoa ou empresa.
      </h2>
     
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image 
      src="/assets/card.png" 
      alt="card" 
      className="w-[150%] h-[100%] animate-bounce animate-infinite animate-duration-[2000ms] animate-delay-500 animate-ease-in-out" 
      width='100' 
      height='100' 
      />
    </div>
  </section>
);

export default CardDeal;
