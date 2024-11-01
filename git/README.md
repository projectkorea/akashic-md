# 자주쓰는 명령어

```markdown
git remote add sub-repo https://github.com/username/sub-repo.git
git fetch sub-repo
git merge -s ours --allow-unrelated-histories sub-repo/main
# 독립적인 히스토리를 가진 sub-repo/main 브랜치를 현재 브랜치에 병합하되, 현재 브랜치의 변경 사항만을 유지
git read-tree --prefix=path/to/sub-repo/ -u sub-repo/main
# sub-repo/main 브랜치의 파일들을 현재 브랜치의 path/to/sub-repo/라는 하위 경로에 위치시키고, 워킹 디렉토리로 업데이트
```

- Merge Request 생성 후에도 최근 커밋으로 머지된다.

```bash
# 해당 문자열이 바뀐 커밋 로그를 보여줌
git log -p -S "문자열" roomui.js
git log -p -S "문자열" -- roomui/
git log -p -S "popup_title_pic_upload" -- ./

# -p (patch) 커밋별 변경사항 파일 단위로 보여줌
# -S "문자열"` 특정 "문자열"을 추가하거나 삭제한 커밋을 검색함
```

```bash
git show <commitLog>
git blame roomui.js -L 5200,5300
```

```bash
git reset HEAD~1
# 마지막 커밋을 되돌리고, 변경된 파일은 스테이징 상태로 유지

git reset --hard HEAD
# 워킹 디렉토리와 스테이징 영역의 모든 변경 사항을 현재 커밋 상태로 강제로 되돌립니다.
```