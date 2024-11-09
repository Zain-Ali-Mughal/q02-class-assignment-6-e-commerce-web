import type { NextPage } from "next";
import Image from "next/image";
import styles from "./icon-smart-watches.module.css";

export type IconSmartWatchesType = {
  className?: string;
};

const IconSmartWatches: NextPage<IconSmartWatchesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.iconsmartWatches, className].join(" ")}>
      <div className={styles.phoneIcon} width={48} height={48} alt="" />
      <div
        className={styles.watchesIcon}
        width={12}
        height={6}
        alt=""
        src="/vector-1.svg"
      />
      <div className={styles.cameraIconWrapper}>
        <div className={styles.cameraIconContainer}>
          <div
            className={styles.cameraIcon}
            width={24}
            height={24}
            alt=""
            src="/vector-2.svg"
          />
          <div className={styles.headphonesIconParent}>
            <div className={styles.headphonesIconParentChild} />
            <div className={styles.headphonesIconParentItem} />
            <div className={styles.headphonesIconParentInner} />
          </div>
        </div>
      </div>
      <div
        className={styles.headphonesIcon}
        width={12}
        height={6}
        alt=""
        src="/vector-3.svg"
      />
    </div>
  );
};

export default IconSmartWatches;
