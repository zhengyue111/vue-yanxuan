# vue163Project
vue项目---网易严选

##路由定义

一级路由:

| 路径                  | 组件名        |
| ----------------------|--------------|
| /                     | Home         |
| /category             | Category     |
| /topic                | Topic        |
| /cart                 | Cart         |
| /mine                 | Mine         |
| /login                | Login        |
| /404                  | NotFind      |


二级路由:

| 路径                  | 组件名        | 它的父级      |
| ----------------------|--------------|--------------|
| /search               | Search       | /            |
| /cate/:cate_id        | NavList      | /            |
| /detail/:goods_id     | Detail       | Category     |
