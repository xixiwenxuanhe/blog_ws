import { AbstractShapeBg } from '../jsm/AbstractShapeBg.module.js';
import { WavyWavesBg } from '../jsm/WavyWavesBg.module.js';
import { RandomCubesBg } from '../jsm/RandomCubesBg.module.js';

// 左侧区域：梦幻紫色系渐变
new AbstractShapeBg({
  dom: 'bg-left',
  loop: true,
  seed: 102,
  colors: [
    "#E6E6FA",  // 淡薰衣草色
    "#D8BFD8",  // 蓟色
    "#B19CD9",  // 淡紫水晶
    "#9F84BD",  // 中紫色
    "#8B72BE",  // 深紫水晶
    "#9370DB",  // 中紫罗兰色
    "#A388EE",  // 亮紫色
    "#C5B3E6"   // 浅紫罗兰
  ]
});

// 右上区域：柔和粉色系渐变
new WavyWavesBg({
  dom: 'bg-top-right',
  loop: true,
  seed: 1000,
  colors: [
    "#FFE4E1",  // 薄雾玫瑰
    "#FFD1DC",  // 粉红色
    "#FFB7C5",  // 樱花粉
    "#FFC4D6",  // 浅粉红
    "#FFB6C1",  // 浅粉色
    "#FFD7E6",  // 淡粉色
    "#FFC9DE",  // 浅玫瑰
    "#FFE1E6"   // 浅贝壳粉
  ]
});

// 右下区域：渐变蓝色系
new RandomCubesBg({
  dom: 'bg-bottom-right',
  loop: true,
  seed: 1000,
  colors: [
    "#B5D1E2",  // 浅天蓝
    "#A4C8E1",  // 粉蓝色
    "#92B4D2",  // 淡钴蓝
    "#8CBBE3",  // 浅蔚蓝
    "#9BC1E5",  // 淡青蓝
    "#B5D8EB",  // 浅湖蓝
    "#A6CCE3",  // 粉蓝灰
    "#C1E3F2"   // 天蓝白
  ]
});
