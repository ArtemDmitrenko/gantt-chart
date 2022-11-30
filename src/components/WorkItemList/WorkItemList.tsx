import { FC } from "react";

import WorkItem from "../WorkItem/WorkItem";
import { TChart } from "../../types/chart";
import { useAppDispatch } from "../../hooks";
import { changeLevel } from "../../redux/level/levelSlice";
import styles from "./work-item-list.module.scss";

type WorkItemListProps = {
  chart: TChart;
};

const WorkItemList: FC<WorkItemListProps> = ({ chart }) => {
  const dispatch = useAppDispatch();

  const handleItemClick = (curLevel: number, isOpened: boolean) => {
    dispatch(changeLevel(isOpened ? curLevel + 1 : curLevel));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Work item</p>
      </div>
      <WorkItem chart={chart} level={1} setLevel={handleItemClick} />
      <ul className={styles.rows}>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
        <li className={styles.row}></li>
      </ul>
    </div>
  );
};

export default WorkItemList;
