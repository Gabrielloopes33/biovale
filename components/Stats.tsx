import styles from "@/styles/style";
import { stats } from "@/constants";
import { motion } from "framer-motion";

const Stats: React.FC = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-10 mb-4`}>
    {stats.map((stat) => (
      <motion.div
        key={stat.id}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </section>
);

export default Stats;
