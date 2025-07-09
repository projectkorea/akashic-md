# Stashing and Cleaning

## `git stash`

- 사용 이유
  - 작업 하다가 분위기 전환하고 싶을 때, working directory를 잠시 비워두고 싶은데 그렇다해도 절반만 완료된 작업을 커밋하기 원치않는 경우, stash로 따로 저장해둔다.
  - Stashing takes the dirty **state of your working directory**  (modified tracked files and staged changes) **and saves it on a stack of unfinished changes** that you can reapply at any time (even on a different branch).

### 사용 예시

- `git status`

```
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   index.html

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   lib/simplegit.rb
```

- Now you want to switch branches, but you don’t want to commit what you’ve been working on yet, so you’ll stash the changes. To push a new stash onto your stack, run git stash or git stash push:

- `git stash`, `git stash push`

```
Saved working directory and index state \
  "WIP on master: 049d078 Create index file"
HEAD is now at 049d078 Create index file
(To restore them type "git stash apply")
```

You can now see that your working directory is clean:

```
$ git status
# On branch master
nothing to commit, working directory clean
```

### stash 목록보기

`$ git stash list`

```
stash@{0}: WIP on master: 049d078 Create index file
stash@{1}: WIP on master: c264051 Revert "Add file_size"
stash@{2}: WIP on master: 21d80a5 Add number to log
```

`git stash apply`, `git stash apply stash@{n}`
If you want to apply one of the older stashes, you can specify it by naming it, like this: `git stash apply stash@{2}`. If you don’t specify a stash, Git assumes the most recent stash and tries to apply it

```
$ git stash apply
On branch master
Changes not staged for commit:
 (use "git add <file>..." to update what will be committed)
 (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html
	modified:   lib/simplegit.rb

no changes added to commit (use "git add" and/or "git commit -a")
```

`git stash apply --index`

The changes to your files were reapplied, but the file you staged before wasn’t restaged. To do that, you must run the git stash apply command with a --index option to tell the command to try to reapply the staged changes. If you had run that instead, you’d have gotten back to your original position:

## `git clean`

- You’ll want to be pretty careful with this command, since it’s designed to **remove files from your working directory that are not tracked**.
- If you change your mind, there is often no retrieving the content of those files. A safer option is to run `git stash --all` to remove everything but save it in a stash.

To remove all the untracked files in your working directory, you can run git clean -f -d, which removes any files and also any subdirectories that become empty as a result. The -f means 'force' or “really do this,” and is required if the Git configuration variable clean.requireForce is not explicitly set to false.

If you ever want to see what it would do, you can run the command with the `--dry-run (or -n)` option, which means “do a dry run and tell me what you would have removed”.

` $ git clean -d -n`

```
Would remove test.o
Would remove tmp/
```

`git clean` command will only remove untracked files that are not ignored.
Any file that matches a pattern in your .gitignore or other ignore files will not be removed. If you want to remove those files too, such as to remove all .o files generated from a build so you can do a fully clean build, you can add a -x to the clean command.

```
$ git status -s
 M lib/simplegit.rb
?? build.TMP
?? tmp/

$ git clean -n -d
Would remove build.TMP
Would remove tmp/

$ git clean -n -d -x
Would remove build.TMP
Would remove test.o
Would remove tmp/
```
