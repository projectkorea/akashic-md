# 2.3 Git Basics - Viewing the Commit History

## git log

- 테스트 링크: `git clone https://github.com/schacon/simplegit-progit`

### 옵션

- `git log -p || --patch`: with a diff directly following each entry
  - 코드 리뷰시 유리
- `git log -2`: 보여질 커밋수
- `git log --stat`: 각 커밋마다 파일 수정상태 요약
- `git log --pretty=`: 로그 출력 상태 다양하게
  - `oneline`
  - `short`
  - `full`
  - `fuller`
  - `format` : [format의 다양한 쓰임]("https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History#pretty_format")
- `git log --graph`: ASCII graph showing your branch and merge history

`-p`: Show the patch introduced with each commit.

`--stat`: Show statistics for files modified in each commit.

`--shortstat`: Display only the changed/insertions/deletions line from the --stat command.

`--name-only`: Show the list of files modified after the commit information.

`--name-status`: Show the list of files affected with added/modified/deleted information as well.

`--abbrev-commit`: Show only the first few characters of the SHA-1 checksum instead of all 40.

`--relative-date`: Display the date in a relative format (for example, “2 weeks ago”) instead of using the full date format.

`--graph`: Display an ASCII graph of the branch and merge history beside the log output.

`--pretty`: Show commits in an alternate format. Option values include oneline, short, full, fuller, and format (where you specify your own format).

`--oneline`: Shorthand for --pretty=oneline --abbrev-commit used together.

### Limiting Log Output

--since
--until

- --author
- --grep: commit 키워드로 찾기
- `git log --since=2.weeks`

- git log -S function_name : function_name에 해당하는 최신 커밋찾기
- --path
- `git log -- path/to/file`

`-<n>`: Show only the last n commits

`--since`, `--after`: Limit the commits to those made after the specified date.

`--until`, `--before`: Limit the commits to those made before the specified date.

`--author`: Only show commits in which the author entry matches the specified string.

`--committer`: Only show commits in which the committer entry matches the specified string.

`--grep` : Only show commits with a commit message containing the string

`-S` : Only show commits adding or removing code matching the string

### 사용 예시

- For example, if you want to see which commits modifying test files in the Git source code history were committed by Junio Hamano in the month of October 2008 and are not merge commits, you can run something like this:

`$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \`

```
 --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold*lock_file_for*{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch
```

- Of the nearly 40,000 commits in the Git source code history, this command shows the 6 that match those criteria.

### Preventing the display of merge commits

- Depending on the workflow used in your repository, it’s possible that a sizable percentage of the commits in your log history are just merge commits, which typically aren’t very informative. **To prevent the display of merge commits** cluttering up your log history, simply add the log option `--no-merges`.
