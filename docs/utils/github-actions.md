
1. 获取打包的id，用作 docker tag

`$GITHUB_RUN_NUMBER`

2. 模糊匹配分支名
```yaml
branch
  - feature**
```

3. 打印相关参数
```yaml
echo ${{ toJson(github) }}
```

4. 条件判断
用于不同分支进行打包
```yaml
if: contains(github.ref, 'master')
if: ${{ startsWith(github.ref, 'feature') || endsWith(github.event.head_commit.message, 'build') }}
```

5. 动态写入环境变量
```yaml
echo "BUILD_ENV=test" >> $GITHUB_ENV
echo "$( echo ${GITHUB_REF##*/} )" >> $GITHUB_ENV
```

6. 仓库包含子模块，需要设置token
```yaml
 - uses: actions/checkout@v2
   with:
      submodules: true
      token: ${{ secrets.REPO_TOKEN }}
```
7. 匹配tag
```yaml
on:
  push:
tags: 
  - '*'
```

8. github参数中有用的信息

```yaml
github.ref: #当前 分支信息，如果为标签，则为具体标签数字
github.event.head_commit: #当前提交信息
github.event_name: #当前提交事件，如push, pull_request
```

9. 提交不进行打包

1. 默认每次提交都会进行打包，可以在 commit msg中的body添加 `[skip ci]`来过滤这次打包
2. 或者在触发条件下设置模糊匹配分支
3. 设置TAG，根据 TAG 触发进行打包

10. 写入环境变量

第一种，全局，所有 step 均可访问到
```yaml
jobs:
    build:
        env:
            NODE_ENV: "production"
            CI: true
            BASE_URL: "/prod"
            ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN  }}

```
第二种，特定 steps
```yaml
- name: "Build test env"
- run: yarn build:test
- env:
    NODE_ENV: "production"
    BASE_URL: "/dev"
```
