import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A better card deal with <br className='sm:block hidden' /> few easy
        steps.
      </h2>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='billing' className='w-[100%] h-[100%]' />
    </div>
  </section>
);

export default CardDeal;
