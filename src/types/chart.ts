type TChart = {
  id: number;
  title: string;
  period_start: string;
  period_end: string;
  sub?: Array<TChart>;
};

type TProject = {
  project: string;
  period: string;
  chart: TChart;
};

export type { TChart, TProject };
