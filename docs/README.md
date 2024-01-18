---
home: true
heroImage: null
heroText: 逆水行舟
tagline: 逆水行舟，不进则退
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2024-present moyusi
---

## 哈希表

1. [1.两数之和](problems/0001.两数之和.md)

# 排序算法

# 二分查找

## 外链

这是一个链接：[vuejs.org](https://vuejs.org/)
这是另一个链接：[vuepress](https://vuepress.vuejs.org/zh/)

Emoji表情 :tada: :100: 参考:[列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)。

## 表格

| Tables        |      Are      |  Cool |
|---------------|:-------------:|------:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
| zebra stripes |   are neat    |    $1 |

## 提示框

::: tip
这是一个提示
:::

::: warning 另一个
这是一个警告
:::

::: danger 不同
这是一个危险警告
:::

::: details 详情
这是一个详情块，在 IE / Edge 中不生效

```js
console.log('你好，VuePress！')
```

:::

## 代码块

```js {4,7-8}
export default {
    data() {
        return {
            msg: 'Highlighted!'
        }
    }
}
console.log('你好，VuePress！')
```

## Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

可以在标题中，使用这个组件来为某些 API 添加一些状态

```
### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>
```

# 图片

[//]: # (![/static下的静态资源]&#40;./static/img/404.png&#41;)
