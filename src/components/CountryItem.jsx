import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img src={country.emoji}></img>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
