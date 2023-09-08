import PropTypes from "prop-types";

import styles from "./winesGrid.module.css";

export default function WinesGrid({ wines }) {
  return (
    <>
      <div className={styles}>Soy el WinesGrid</div>;
      {wines.map((wine) => (
        <div key={wine.id}>
          <img src={wine.imagen} />
        </div>
      ))}
    </>
  );
}

WinesGrid.propTypes = {
  wines: PropTypes.array,
};
