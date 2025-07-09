# 国际化工具函数

这个目录包含了项目中的国际化数据工具函数。

## 文件说明

### projectData.js

包含项目作品相关的数据和工具函数：

- `useProjectData()` - 获取项目数据列表
- `useProjectTypes()` - 获取项目类型列表（包含"全部"选项）

### experienceData.js

包含工作经历相关的数据和工具函数：

- `useExperienceData()` - 获取工作经历数据列表

### expertiseData.js

包含专业技能相关的数据和工具函数：

- `useExpertiseData()` - 获取专业技能数据列表

## 使用方法

```javascript
import { useProjectData, useProjectTypes } from "@/utils/projectData";
import { useExperienceData } from "@/utils/experienceData";
import { useExpertiseData } from "@/utils/expertiseData";

function MyComponent() {
  const projectData = useProjectData();
  const projectTypes = useProjectTypes();
  const experienceData = useExperienceData();
  const expertiseData = useExpertiseData();

  // 使用数据...
}
```

## 特点

- 所有数据都支持国际化
- 数据与组件分离，便于维护
- 可复用的函数设计
- 自动根据当前语言环境返回相应的文本内容

## 国际化消息

这些工具函数依赖于 `messages/en.json` 和 `messages/zh.json` 中的以下消息命名空间：

- `ProjectSection`
- `ExperienceSection`
- `ExpertiseSection`
