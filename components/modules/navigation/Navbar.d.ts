export interface MenuInfos {
  mainMenuNames: Array<string>;
  mainMenuLinks: Array<any>;
  subMenuInfo: Array<any>;
  subMenuLinks: Array<any>;
}

export interface MenuInfo {
  menuName: string;
  subMenus: Array<string>;
  menuLinks: Array<string>;
}