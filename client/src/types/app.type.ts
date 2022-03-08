export interface IApp {
  // app名称
  name: string;

  // 图标
  icon: string;

  /**
   * 1 => 本项目内组件
   * 2 => iframe
   * 3 => qiankun
   * 4 => target="_blank"
   */
  openType: 1 | 2 | 3 | 4;

  /**
   * 1 => 正常app
   * 2 => 卡片组件
   */
  type: 1 | 2;

  /**
   * 占据位置
   * [宽， 高]
   */
  size?: [number, number];
}