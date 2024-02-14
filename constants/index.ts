// 상수값
export const MAX_INT = 21;



export interface activityDetail {
  startPeriod: string;
  endPeriod?: string;
  title: string;
  casting: string;
}
export interface actorInfo {
  name: string;
  imagePath: string;
  contents: string;
  activities: Array<activityDetail>;
}