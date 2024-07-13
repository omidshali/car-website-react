import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        alt=""
        src="https://e1.pxfuel.com/desktop-wallpaper/170/492/desktop-wallpaper-403-suv-suv-cars.jpg"
        className={styles.hero_img}
      />
      <form>
        <div className={styles.where}>
          <label>Where</label>
          <input type="text" placeholder="Search Location" />
        </div>

        <div className={styles.from}>
          <label>From</label>
          <input type="date" placeholder="Search Location" />
        </div>

        <div className={styles.until}>
          <label>Until</label>
          <input type="date" placeholder="Search Location" />
        </div>

        <div className={styles.search}>
          <AiOutlineSearch className={styles.search_icon} />
          <button className={styles.search_btn}>Search for cars</button>
        </div>
      </form>
    </div>
  );
};
