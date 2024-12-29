import { FunctionComponent } from "react";
import styles from "./UserReference.module.css";

export type UserReferenceType = {
  className?: string;
};

const UserReference: FunctionComponent<UserReferenceType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.userReference, className].join(" ")}>
      <div className={styles.userComparison}>
        <div className={styles.unionParent}>
          <img
            className={styles.unionIcon}
            loading="lazy"
            alt=""
            src="/union.svg"
          />
          <div className={styles.userName}>
            <div className={styles.you}>You</div>
          </div>
          <div className={styles.separator}>6.25%</div>
        </div>
      </div>
      <div className={styles.referenceLevels}>
        <div className={styles.levelsComparison}>
          <img
            className={styles.levelsComparisonChild}
            loading="lazy"
            alt=""
            src="/group-1707480806@2x.png"
          />
          <div className={styles.diabeticLevel} />
          <div className={styles.normalPrediabeticLevel}>
            <a className={styles.normal}>Normal</a>
          </div>
          <div className={styles.referenceLevel}>Reference Level</div>
        </div>
        <img
          className={styles.levelsComparisonIcon}
          loading="lazy"
          alt=""
          src="/vector-734.svg"
        />
        <div className={styles.levelsComparison1}>
          <div className={styles.levelsComparisonItem} />
          <div className={styles.levelsComparisonInner} />
          <div className={styles.preDiabeticWrapper}>
            <div className={styles.preDiabetic}>Pre-diabetic</div>
          </div>
        </div>
        <img
          className={styles.levelsComparisonIcon1}
          loading="lazy"
          alt=""
          src="/vector-733.svg"
        />
        <div className={styles.levelsComparison2}>
          <div className={styles.rectangleDiv} />
          <div className={styles.diabeticWrapper}>
            <a className={styles.diabetic}>Diabetic</a>
          </div>
        </div>
        <div className={styles.levelsComparison3}>5.7%</div>
        <div className={styles.levelsComparison4}>6.5%</div>
      </div>
    </div>
  );
};

export default UserReference;
