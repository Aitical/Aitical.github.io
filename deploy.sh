#!/bin/bash
set -ev
export TZ='Asia/Shanghai'

git config --global user.name "Aitical"
git config --global user.email "965813422@qq.com"

# 获取以前的 commit 记录
git clone -b master https://github.com/Aitical/Aitical.github.io.git .deploy
# 这么移动是为了确保不受之前文件的影响
mv .deploy/.git/ public/
cd public
git checkout master

git add .
git commit -m "Site updated: `date +"%Y-%m-%d %H:%M:%S"`"

# 我也不知道 token 怎么用。。抄大佬的代码
git push "https://${token}@github.com/Aitical/Aitical.github.io.git" master:master --quiet

