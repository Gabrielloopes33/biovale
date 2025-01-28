import styles from '@/styles/style';
import { arrowUp } from '@/public/assets';
import Image from 'next/image';

const GetStarted: React.FC = () => (
  <div className="w-[140px] h-[140px] rounded-full border-2 border-white-400 flex items-center justify-center cursor-pointer hover:border-blue-300 transition-all hover:shadow-[0_0_20px_#fff] duration-300">
    <div className="flex flex-col items-center justify-center bg-transparent rounded-full">
      <div className="flex flex-row items-center">
        <p className="font-poppins font-medium text-[18px] leading-[23px] text-gray-50">
          Recicle!
        </p>
        <Image src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain ml-2" />
      </div>
    </div>
  </div>
);

export default GetStarted;