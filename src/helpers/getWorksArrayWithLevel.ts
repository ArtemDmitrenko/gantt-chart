import { TChart } from "../types/chart";
import { TSausage } from "../types/sausage";

const getWorksArrayWithLevel: any = (
  chart: TChart,
  level = 1,
  result: Array<TSausage> = []
) => {
  if (result.length === 0) {
    result = [{ ...chart, level }];
  }
  if (!chart.sub) return result;
  for (let i = 0; i < chart.sub.length; i++) {
    const el = chart.sub[i];
    result.push({
      id: el.id,
      period_start: el.period_start,
      period_end: el.period_end,
      title: el.title,
      level: level + 1,
    });
    if (!el.sub) {
      continue;
    } else {
      return getWorksArrayWithLevel(el, level + 1, result);
    }
  }
  return result;
};

export { getWorksArrayWithLevel };
