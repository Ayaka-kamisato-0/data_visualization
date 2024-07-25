本项目仅限用于2024年浙江大学暑期学校课程项目模板。

## 如何启动本项目

1. 使用git命令，将本项目同步到本地：

   `git clone https://github.com/susicaliu/ZJU_SummerSchool_ProjectTemplate.git`
   
2. 在项目文件夹内，使用npm运行项目：

   安装所有依赖库：`npm install`
   
   运行项目：`npm start`
   
   如果能正常运行，你应该可以看到浏览器中出现数个区域, 分别为: 
   - 页面最顶部对于Overview,Detailview,Assistview,Cluster Diagram,Scores over time这五张图的介绍。
   - 页面左上方的Overview，右上方的Detailview,左下的Assistview, 中下的Cluster Diagram与右下的Scores over time。这几张图均支持选中图例与光标高亮。
   - 左侧侧边栏的control panel, 其可以选择：
   #### 1.Search by University 
   可以从排名为1-200的大学中选择一个，此时Overview,Detailview都会高亮选中的大学数据。
   #### 2.Search by state/region 
   可以选择排名1-200的大学所在的地区，此时Overview中会高亮选中国家/地区全部大学数据，Assistview中会高亮选中国家/地区。
   #### 3.Group Analysis
   可以控制Cluster Diagram显示不同的评分维度。
   
## 小组分工
- 王垠凯：数据处理，数据格式对接
- 梁轩玮：可视化系统页面交互代码，部分设计代码，数据格式对接
- 黄沁心：可视化系统页面设计代码，部分交互代码，demo，发言稿，PPT
- 共同参与：选择数据处理方法，insight分析解读

## 文件结构 
全部组件都位于'./src./components'
当前目录下可以看到report.pdf，此为本小组利用此可视化分析系统做的数据分析样例与一部分原始数据。
