# 电磁学和电动力学三维交互演示

🌐 **在线演示网站（GitHub Pages）**：[**https://shijunlj.github.io/physics-em-visualizer/**](https://shijunlj.github.io/physics-em-visualizer/)

本项目包含 13 个基于 **Three.js / HTML5 Canvas (WebGL)** 的独立单文件 HTML 交互式物理演示页面（及 `index.html` 极简导航主页），用于直观展示电磁学与电动力学（稳恒磁场与空间拓扑）的核心概念、实验现象与场分布规律。所有页面均可直接在浏览器中打开运行，支持 360° 自由旋转、缩放与实时参数调节。

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
| 8 | [`charged_particle_magnetic_field.html`](./charged_particle_magnetic_field.html) | **带电粒子在匀强磁场中的运动** | 3D 空间动态演示正/负电荷粒子在水平匀强磁场 $\vec{B}$ 中的轨迹演化，展示速度 $\vec{v}$、洛伦兹力 $\vec{F}$ 及分速度矢量（极简开叉箭头）；一键切换 $\vec{v}\perp\vec{B}$（圆周运动）、$\vec{v}\parallel\vec{B}$（匀速直线）及任意夹角螺旋运动，并绘制半透明回旋圆柱阴影包络面与等螺距截面标线，背景磁感线稀疏精致、自适应匹配阴影截面。 |
| 9 | [`magnetic_mirror.html`](./magnetic_mirror.html) | **磁镜原理与带电粒子全反射** | 严格对齐大学物理教材图 6-21：3D 动态展示非均匀汇聚磁场中的带电粒子回旋运动，精确分解合洛伦兹力 $\vec{F}$、圆周向心分力 $\vec{F}_r$ 与轴向磁镜阻碍力 $\vec{F}_x$（紧凑极简开叉箭头）；支持正负电荷 ($+q / -q$) 一键切换、自动导心轴向对齐与反向螺旋；真实展现大范围汇聚漏斗磁场（变化跨度达 6.7 倍）下回旋半径收缩、4 圈回旋深入减速与全反射全过程，漏斗阴影包络面完整覆盖瓶颈区域，支持暂停/继续、进度拖拽、速度调节与 3D/视角重置/沿轴正视切换。 |
| 10 | [`magnetic_focusing.html`](./magnetic_focusing.html) | **磁聚焦（轴向匀强磁场）** | 3D 交互演示电子束在轴向匀强磁场中的螺旋回旋运动与近轴磁聚焦现象：支持“轴向速度相同”与“总速率相同”两种发射模式对比，配备首次回轴位置 $L_f = v_\parallel T$ 横轴放大图表、发射角 $\alpha$ 与磁场 $B$ 实时调节，直观展现不同发散角电子周期性重新汇聚于焦点的物理规律。 |
| 11 | [`hall_effect.html`](./hall_effect.html) | **霍尔效应 · 载流子与横向平衡** | 3D 动态演示金属/半导体薄片在垂直磁场与纵向电流下的霍尔效应全过程：支持负电荷（电子）与正电荷一键切换，直观呈现载流子在洛伦兹磁场力 $\vec{F}_m = q\vec{v}\times\vec{B}$ 作用下的横向偏转与表面电荷积累、霍尔内建电场 $\vec{E}$ 与电场力 $\vec{F}_e$ 的建立过程，动态过渡至横向平衡（$\vec{F}_e = -\vec{F}_m$）；配备霍尔电压 $U_{ab}$ 实时正负极性读数、电场力与磁场力百分比动态量规条、正视/3D 自由旋转及无级变速控制。 |
| 12 | [`cylindrical_shell_magnetic_field.html`](./cylindrical_shell_magnetic_field.html) | **无限长载流圆柱壳 · 磁场矢量叠加** | 3D/截面交互演示无限长薄壁圆柱壳轴向电流的微观磁场叠加机理：将圆柱壳离散为 $N$ 根对称长直导线，以关于径向对称的镜像导线对为切入点，直观展示径向分量成对严格抵消、切向分量成对相加；生动揭示壳内（$r < R$）各对切向分量相互代数相消导致 $B \equiv 0$，以及壳外（$r > R$）所有切向分量同向累加趋近理论值 $\mu_0 I/(2\pi r)$ 的微观本质；支持 $N$ 档位调节、观察距离 $r/R$ 滑块、逐对叠加动画与理论极限实时对比。 |
| 13 | [`cylindrical_shell_current_comparison.html`](./cylindrical_shell_current_comparison.html) | **圆柱壳上的两种表面电流与磁场对偶性** | 左右双栏独立 3D 联动对比：直观呈现无限长圆柱薄壳“竖直圆柱·轴向电流 $j$”与“水平圆柱·环向电流 $j'$（理想螺线管）”所激发磁场的完美内外对偶性；直观展现轴向电流在壳内 $B \equiv 0$、壳外 $B \propto 1/r$ 环形分布，与环向电流在壳内 $B \equiv \mu_0 j'$ 匀强直线、壳外 $B \equiv 0$ 的互补规律；支持双栏独立 360° 拖拽缩放、探针 $P$ 在 $r/R \in [0, 2.40]$ 自由探测/一键进出壳，并动态显示壳面内外极限跳变。 |

---

## 🚀 使用方式

无需安装本地服务器或构建工具，直接在现代浏览器（Chrome / Edge / Safari / Firefox）中双击打开对应 `.html` 文件，或在终端中运行：

```bash
# 示例：打开圆柱壳两种表面电流对比演示
open cylindrical_shell_current_comparison.html

# 示例：打开无限长载流圆柱壳磁场矢量叠加演示
open cylindrical_shell_magnetic_field.html

# 示例：打开霍尔效应演示
open hall_effect.html

# 示例：打开磁镜原理与带电粒子全反射演示
open magnetic_mirror.html

# 示例：打开磁聚焦演示
open magnetic_focusing.html

# 示例：打开带电粒子在匀强磁场中运动演示
open charged_particle_magnetic_field.html

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
