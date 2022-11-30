import { FC } from "react";

import { TSausage } from "../../types/sausage";
import Sausage from "../Sausage/Sausage";
import { useAppSelector } from "../../hooks";

const filterSausageDataByLevel = (
  dataArr: Array<TSausage>,
  level: number
): Array<TSausage> => {
  return dataArr.filter((el) => el.level <= level);
};

type Props = {
  startDay: Date;
  dataArr: Array<TSausage>;
};

const SausageList: FC<Props> = ({ startDay, dataArr }) => {
  const level = useAppSelector((state) => state.level.currentLevel);
  const filteredByLevelData = filterSausageDataByLevel(dataArr, level);

  return (
    <ul>
      {filteredByLevelData.map((el, i) => (
        <li key={el.id}>
          <Sausage
            index={i}
            level={el.level}
            periodStart={el.period_start}
            periodFinish={el.period_end}
            title={el.title}
            startDay={startDay}
          />
        </li>
      ))}
    </ul>
  );
};

export default SausageList;
