## nest-admin

![](https://img.shields.io/github/commit-activity/m/buqiyuan/nest-admin) ![](https://img.shields.io/github/license/buqiyuan/nest-admin) ![](https://img.shields.io/github/repo-size/buqiyuan/nest-admin) ![](https://img.shields.io/github/languages/top/buqiyuan/nest-admin)

**基于 NestJs + TypeScript + TypeORM + Redis + MySql + Vue3 + Ant Design Vue 编写的一款简单高效的前后端分离的权限管理系统。希望这个项目在全栈的路上能够帮助到你。**

- 前端项目地址：[传送门](https://github.com/HarleenDance/vue3-vite3-AntAdmin)

### 演示地址

- [Swagger Api 文档](https://nest-api.buqiyuan.site/api/swagger-api/static/index.html#/)

### 项目启动前的准备工作

- sql 文件：[/sql/init.sql](https://github.com/HarleenDance/nest-admin/tree/main/sql) 用于数据库初始化
- 项目相关配置，如：配置 mysql 和 redis 连接
  - 公共配置: [.env](https://github.com/HarleenDance/nest-admin/blob/main/.env)
  - 开发环境: [.env.development](https://github.com/HarleenDance/nest-admin/blob/main/.env.development)
  - 生产环境: [.env.production](https://github.com/HarleenDance/nest-admin/blob/main/.env.production)

演示环境账号密码：

|   账号    |  密码  |    权限    |
| :-------: | :----: | :--------: |
| rootadmin | 123456 | 超级管理员 |

> 所有新建的用户初始密码都为 123456

本地部署账号密码：

|   账号    |  密码  |    权限    |
| :-------: | :----: | :--------: |
| rootadmin | 123456 | 超级管理员 |

## 快速体验

启动成功后，通过 http://localhost:7001/swagger-api/ 访问。

```bash
yarn docker:prod
# or
docker compose --env-file .env.production up --build -d
```

停止并删除所有容器

```bash
yarn docker:down
# or
docker compose --env-file .env.production down
```

查看实时日志输出

```bash
docker compose logs -f

```

## 本地开发

- 获取项目代码

```bash
git clone https://github.com/HarleenDance/nest-admin
```

- 【可选】如果你是新手，还不太会搭建`mysql/redis`，你可以使用 `Docker` 启动指定服务供本地开发时使用, 例如：

```bash
# 启动MySql服务
docker compose  --env-file .env.development run -d --service-ports mysql
# 启动Redis服务
docker compose  --env-file .env.development run -d --service-ports redis
```

- 安装依赖

```bash
cd nest-admin

yarn install

```

- 运行
  启动成功后，通过 http://localhost:7001/swagger-api/ 访问。

```bash
yarn dev
```

- 打包

```bash
yarn build
```

### 欢迎 Star && PR

**如果项目有帮助到你可以点个 Star 支持下。有更好的实现欢迎 PR。**

### 致谢

- [sf-nest-admin](https://github.com/hackycy/sf-nest-admin)
- [nest-admin](https://github.com/buqiyuan/nest-admin)

### LICENSE

[MIT](LICENSE)
