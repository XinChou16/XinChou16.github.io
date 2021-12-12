# ssh-key

## 单个 ssh key 的生成

```sh
# rsa
ssh-keygen -t rsa -C "email"

# ed25519
ssh-keygen -t ed25519 -C "email"
```

生成：
- 私钥：`~/.ssh/id_rsa`
- 公钥：`~/.ssh/id_rsa.pub`

## 连接测试

```sh
ssh -T git@github.com
```