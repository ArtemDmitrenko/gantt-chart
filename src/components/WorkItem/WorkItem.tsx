import { FC, useEffect, useState } from "react";
import icon1 from "./images/icon-level-1.svg";
import icon2 from "./images/icon-level-2.svg";
import icon3 from "./images/icon-level-3.svg";
import icon4 from "./images/icon-level-4.svg";
import icon5 from "./images/icon-level-5.svg";
import { TChart } from "../../types/chart";

import styles from "./work-item.module.scss";

const icons = [icon1, icon2, icon3, icon4, icon5];

type WorkItemProps = {
  chart: TChart;
  level: number;
  setLevel: (curLevel: number, isOpened: boolean) => void;
};

const WorkItem: FC<WorkItemProps> = ({ chart, level, setLevel }) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState<boolean>(false);
  const [hasInnerWorks, setHasInnerWorks] = useState<boolean>(false);

  const stylesTitle = () =>
    `${styles.title} ${isActiveAccordion ? styles.titleOpened : ""}`;

  const handleItemClick = (level: number) => {
    setIsActiveAccordion(!isActiveAccordion);
    setLevel(level, !isActiveAccordion);
  };

  useEffect(() => {
    if (chart.sub) setHasInnerWorks(true);
  }, []);

  return hasInnerWorks ? (
    <div className={styles.accordion}>
      <div
        style={{ paddingLeft: level * 20 }}
        className={stylesTitle()}
        onClick={(e) => handleItemClick(level)}
      >
        <img className={styles.icon} src={icons[level - 1]} alt="icon" />
        <span className={styles.quantity}>
          {chart.sub ? chart.sub.length : 0}
        </span>
        <p>{chart.title}</p>
      </div>
      {isActiveAccordion && (
        <ul>
          {chart.sub?.map((item) => (
            <li key={item.id}>
              <WorkItem chart={item} level={level + 1} setLevel={setLevel} />
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <>
      <div className={styles.simpleItem} style={{ paddingLeft: level * 20 }}>
        <img className={styles.icon} src={icons[level - 1]} alt="icon" />
        <span className={styles.quantity}>
          {chart.sub ? chart.sub.length : "0"}
        </span>
        <p>{chart.title}</p>
      </div>
    </>
  );
};

export default WorkItem;
