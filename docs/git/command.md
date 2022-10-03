# git command

## basic

```sh
git status -s

git diff --cached
git diff --staged

git log -p -2
git log -cc -p -2
git log --pretty=oneline|short|full|fuler
git log --pretty=format:"%h %s"
git log --oneline
git log --graph
git log --stat
git log --left-right --merge
# alias
git log -1 HEAD

git commit --amend


git reset HEAD xxx.md
```


```sh
git remote -v

git remote show origin
```

```sh
git tag -a v1.2 -m "add tag"

git tag v1.2
```

## branch


```bash

```

## diff


```bash
git diff --ours

git diff --theirs -b

git diff --base

git checkout --conflict=diff3 xxx.file
```
