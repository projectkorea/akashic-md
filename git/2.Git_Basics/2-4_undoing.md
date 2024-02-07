# 2.4 Git Basics - Undoing Things

$ git commit --amend

As an example, if you commit and then realize you forgot to stage the changes in a file you wanted to add to this commit, you can do something like this:

$ git commit -m 'Initial commit'
$ git add forgotten_file
$ git commit --amend

- Only amend commits that are still local and have not been pushed somewhere
- for instance, you run this command immediately after your previous commit

## Unstaging a Staged File

`$ git reset HEAD <file>`

- 커밋 내역 중 파일 하나만 unstage하고 싶은 경우 사용

It’s true that git reset can be a dangerous command, especially if you provide the --hard flag. However, in the scenario described above, the file in your working directory is not touched, so it’s relatively safe.

## Unmodifying a Modified File

- `git checkout -- <file>`
- Git just replaced that file with the last staged or committed version. Don’t ever use this command unless you absolutely know that you don’t want those unsaved local changes.
- Remember, anything that is committed in Git can almost always be recovered. Even commits that were on branches that were deleted or commits that were overwritten with an --amend commit can be recovered (see Data Recovery for data recovery). However, anything you lose that was never committed is likely never to be seen again.
- 한 번이라도 커밋한 건 복구가 되지만, 커밋하지 않은 채로 local 파일을 지우면 복구할 수 없다.

## git restore

- git version 2.23.0 부터 `git reset`을 대체하기 위해 사용된다.
- unstage하는 방법: ` git restore --staged <file>`
- The CONTRIBUTING.md file is modified but once again unstaged.

```
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified: CONTRIBUTING.md
```

It tells you pretty explicitly how to discard the changes you’ve made. Let’s do what it says:

```
$ git restore CONTRIBUTING.md
$ git status
On branch master
Changes to be committed:
(use "git restore --staged <file>..." to unstage)
renamed: README.md -> README
```

- git restore <file> is a dangerous command. Any local changes you made to that file are gone — Git just replaced that file with the last staged or committed version. Don’t ever use this command unless you absolutely know that you don’t want those unsaved local changes.
