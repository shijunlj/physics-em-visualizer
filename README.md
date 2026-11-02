# 大学物理 · 电磁学三维交互演示合集

🌐 **在线演示网站（GitHub Pages）**：[**https://shijunlj.github.io/physics-em-visualizer/**](https://shijunlj.github.io/physics-em-visualizer/)

本项目包含 6 个基于 **Three.js (WebGL)** 的独立单文件 HTML 交互式物理演示页面（及 `index.html` 导航主页），用于直观展示大学物理电磁学（稳恒磁场）的核心概念、实验现象与场分布规律。所有页面均可直接在浏览器中打开运行，支持 360° 自由旋转、缩放与实时参数调节。

---

## 📂 演示列表

| 序号 | 文件名 | 演示主题 | 核心功能与物理要点 |
| :---: | :--- | :--- | :--- |
| 1 | [`vector_potential_loop_symmetry_v2.html`](./vector_potential_loop_symmetry_v2.html) | **载流圆线圈的磁矢势 $\vec{A}$ 与对称抵消** | 左侧 3D 空间交互展示载流圆线圈、空间任一点 $P$ 与电流元 $I\mathrm{d}\vec{l}_1$ 激发的元矢势 $\mathrm{d}\vec{A}_1$；右侧 2D 投影图对比关于子午面对称的电流元对 $I\mathrm{d}\vec{l}_1$ 与 $I\mathrm{d}\vec{l}_2$，直观揭示其径向分量 $\mathrm{d}A_r$ 大小相等、方向相反成对完全抵消，总矢势 $\vec{A}$ 仅保留切向分量 $A_\varphi$。 |
| 2 | [`biot_savart_wire.html`](./biot_savart_wire.html) | **毕奥-萨伐尔定律（载流直导线）** | 展示电流元 $I\mathrm{d}\vec{l}$、位矢 $\vec{r}$ 与元磁场 $\mathrm{d}\vec{B}$ 的叉乘方向关系，以及沿有限长/无限长直导线的积分叠加过程。 |
| 3 | [`biot_savart_loop.html`](./biot_savart_loop.html) | **毕奥-萨伐尔定律（载流圆线圈）** | 展示圆电流轴线上一点的磁场合成：对称电流元 $\mathrm{d}\vec{B}$ 的垂直分量成对抵消，轴向分量 $\mathrm{d}B_x$ 同向叠加。 |
| 4 | [`solenoid_magnetic_field.html`](./solenoid_magnetic_field.html) | **载流长直螺线管的磁场** | 支持匝数 $N$ 从有限长向无限长平滑过渡、2D 截面与 3D 空间磁感线切换，并提供上下两排相邻导线磁场的微观矢量分解（间隙垂直抵消、管内水平同向增强）。 |
| 5 | [`magnetic_gauss_law.html`](./magnetic_gauss_law.html) | **磁场高斯定理** | 验证 $\oint_S \vec{B}\cdot\mathrm{d}\vec{A} \equiv 0$：支持**导线外闭合曲面**与**包围部分电流闭合曲面**一键切换、任意随机形状畸变、磁感线分层显示及穿入/穿出交点实时统计。 |
| 6 | [`parallel_currents_interaction.html`](./parallel_currents_interaction.html) | **平行载流导线间的相互作用** | 演示两根平行通电导线的安培力作用机理（同向相吸、反向相斥），直观展现导线1激发磁场 $\vec{B}_1$ 对导线2施力 $\vec{F}_{12}$ 的完整过程。 |

---

## 🚀 使用方式

无需安装本地服务器或构建工具，直接在现代浏览器（Chrome / Edge / Safari / Firefox）中双击打开对应 `.html` 文件，或在终端中运行：

```bash
# 示例：打开圆线圈磁矢势对称抵消演示
open vector_potential_loop_symmetry_v2.html

# 示例：打开磁场高斯定理演示
open magnetic_gauss_law.html

# 示例：打开载流螺线管磁场演示
open solenoid_magnetic_field.html
```

> **提示**：页面通过 CDN 加载 `Three.js (r128)`、`OrbitControls` 与 `KaTeX`，首次打开需保持网络连接。
