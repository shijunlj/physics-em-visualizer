# 电磁学和电动力学三维交互演示

🌐 **在线演示网站（GitHub Pages）**：[**https://shijunlj.github.io/physics-em-visualizer/**](https://shijunlj.github.io/physics-em-visualizer/)

本项目包含 7 个基于 **Three.js (WebGL)** 的独立单文件 HTML 交互式物理演示页面（及 `index.html` 极简导航主页），用于直观展示电磁学与电动力学（稳恒磁场与空间拓扑）的核心概念、实验现象与场分布规律。所有页面均可直接在浏览器中打开运行，支持 360° 自由旋转、缩放与实时参数调节。

---

## 📂 演示列表

| 序号 | 文件名 | 演示主题 | 核心功能与物理要点 |
| :---: | :--- | :--- | :--- |
| 1 | [`vector_potential_loop_symmetry_v2.html`](./vector_potential_loop_symmetry_v2.html) | **环形导线电流的矢势 A 与对称抵消** | 左侧 3D 空间交互展示载流圆线圈、空间任一点 $P$ 与电流元 $I\mathrm{d}\vec{l}_1$ 激发的元矢势 $\mathrm{d}\vec{A}_1$；右侧 2D 投影图对比关于子午面对称的电流元对 $I\mathrm{d}\vec{l}_1$ 与 $I\mathrm{d}\vec{l}_2$，直观揭示其径向分量 $\mathrm{d}A_r$ 大小相等、方向相反成对完全抵消，总矢势 $\vec{A}$ 仅保留切向分量 $A_\varphi$。 |
| 2 | [`biot_savart_loop.html`](./biot_savart_loop.html) | **载流圆线圈轴线上的磁场** | 展示圆电流轴线上一点的磁场合成：对称电流元 $\mathrm{d}\vec{B}$ 的垂直分量成对抵消，轴向分量 $\mathrm{d}B_x$ 同向叠加。 |
| 3 | [`solenoid_magnetic_field.html`](./solenoid_magnetic_field.html) | **载流长直螺线管的截面与空间磁场** | 支持匝数 $N$ 从有限长向无限长平滑过渡、2D 截面与 3D 空间磁感线切换，并提供上下两排相邻导线磁场的微观矢量分解（间隙垂直抵消、管内水平同向增强）。 |
| 4 | [`magnetic_gauss_law.html`](./magnetic_gauss_law.html) | **磁场高斯定理与任意闭合曲面** | 验证 $\oint_S \vec{B}\cdot\mathrm{d}\vec{A} \equiv 0$：支持**导线外闭合曲面**与**包围部分电流闭合曲面**一键切换、任意随机形状畸变、磁感线分层显示及穿入/穿出交点实时统计。 |
| 5 | [`parallel_currents_interaction.html`](./parallel_currents_interaction.html) | **平行载流直导线间的相互作用** | 演示两根平行通电导线的安培力作用机理（同向相吸、反向相斥），直观展现导线1激发磁场 $\vec{B}_1$ 对导线2施力 $\vec{F}_{12}$ 的完整过程。 |
| 6 | [`current_loop_torus.html`](./current_loop_torus.html) | **环形电流与相套环面（不能定义单值磁标势的多连通区域）** | 展示浅亮银色环形导线电流穿过半透明环面（甜甜圈）的中心孔心，环面内部嵌入穿过各截面圆心的中心圆线，直观呈现不能定义单值磁标势的多连通空间区域拓扑。 |
| 7 | [`toroid_solenoid_magnetic_field.html`](./toroid_solenoid_magnetic_field.html) | **载流螺绕环的磁场与空间分布** | 3D 空间展示 360° 均匀密绕线圈、半透明骨架及环内非均匀磁感线（内密外疏，渐变明暗强弱），红虚线标示截面几何中心轴；右侧 2D 联动图将管道截面连续色影、强度色标尺（Colorbar）与理论曲线 $B(r) \propto 1/r$ 进行 1:1 空间几何投影对齐，直观揭示中心孔腔与环外 $B \equiv 0$ 以及环内 $B$ 随半径 $r$ 的衰减特性。 |

---

## 🚀 使用方式

无需安装本地服务器或构建工具，直接在现代浏览器（Chrome / Edge / Safari / Firefox）中双击打开对应 `.html` 文件，或在终端中运行：

```bash
# 示例：打开载流螺绕环磁场与空间分布演示
open toroid_solenoid_magnetic_field.html

# 示例：打开圆线圈磁矢势对称抵消演示
open vector_potential_loop_symmetry_v2.html

# 示例：打开环形电流与相套环面演示
open current_loop_torus.html

# 示例：打开磁场高斯定理演示
open magnetic_gauss_law.html
```

> **提示**：页面通过 CDN 加载 `Three.js (r128)`、`OrbitControls` 与 `KaTeX`，首次打开需保持网络连接。
