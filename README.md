# 大学物理 · 电磁学三维交互演示合集

本项目包含 7 个基于 **Three.js (WebGL)** 的独立单文件 HTML 交互式物理演示页面，用于直观展示大学物理电磁学（稳恒磁场）的核心概念、实验现象与场分布规律。所有页面均可直接在浏览器中打开运行，支持 360° 自由旋转、缩放与实时参数调节。

---

## 📂 演示列表

| 序号 | 文件名 | 演示主题 | 核心功能与物理要点 |
| :---: | :--- | :--- | :--- |
| 1 | [`oersted_experiment.html`](./oersted_experiment.html) | **奥斯特实验** | 通电直导线周围产生环形磁场，下方小磁针受磁力矩偏转并带阻尼摆动；支持切换电流方向与通断电。 |
| 2 | [`biot_savart_wire.html`](./biot_savart_wire.html) | **毕奥-萨伐尔定律（载流直导线）** | 展示电流元 $I\mathrm{d}\vec{l}$、位矢 $\vec{r}$ 与元磁场 $\mathrm{d}\vec{B}$ 的叉乘方向关系，以及沿有限长/无限长直导线的积分叠加过程。 |
| 3 | [`biot_savart_loop.html`](./biot_savart_loop.html) | **毕奥-萨伐尔定律（载流圆线圈）** | 展示圆电流轴线上一点的磁场合成：对称电流元 $\mathrm{d}\vec{B}$ 的垂直分量成对抵消，轴向分量 $\mathrm{d}B_x$ 同向叠加。 |
| 4 | [`solenoid_magnetic_field.html`](./solenoid_magnetic_field.html) | **载流长直螺线管的磁场** | 支持匝数 $N$ 从有限长向无限长平滑过渡、2D 截面与 3D 空间磁感线切换，并提供上下两排相邻导线磁场的微观矢量分解（间隙垂直抵消、管内水平同向增强）。 |
| 5 | [`magnetic_gauss_law.html`](./magnetic_gauss_law.html) | **磁场高斯定理** | 验证 $\oint_S \vec{B}\cdot\mathrm{d}\vec{A} \equiv 0$：支持**导线外闭合曲面**与**包围部分电流闭合曲面**一键切换、任意随机形状畸变、磁感线分层显示及穿入/穿出交点实时统计。 |
| 6 | [`ampere_force_experiment.html`](./ampere_force_experiment.html) | **安培力实验** | 蹄形磁铁磁场中通电导体棒受安培力 $\vec{F} = I\vec{L}\times\vec{B}$ 摆动，结合三维左手定则手势模型与实时力学阻尼仿真。 |
| 7 | [`parallel_currents_interaction.html`](./parallel_currents_interaction.html) | **平行载流导线间的相互作用** | 演示两根平行通电导线的安培力作用机理（同向相吸、反向相斥），直观展现导线1激发磁场 $\vec{B}_1$ 对导线2施力 $\vec{F}_{12}$ 的完整过程。 |

---

## 🚀 使用方式

无需安装本地服务器或构建工具，直接在现代浏览器（Chrome / Edge / Safari / Firefox）中双击打开对应 `.html` 文件，或在终端中运行：

```bash
# 示例：打开磁场高斯定理演示
open magnetic_gauss_law.html

# 示例：打开载流螺线管磁场演示
open solenoid_magnetic_field.html
```

> **提示**：页面通过 CDN 加载 `Three.js (r128)` 与 `OrbitControls`，首次打开需保持网络连接。
