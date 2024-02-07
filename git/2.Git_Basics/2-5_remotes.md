# 2.5 Git Basics - Working with Remotes

- Remote repositories can be on your local machine.
  It is entirely possible that you can be working with a “remote” repository that is, in fact, on the same host you are. The word “remote” does not necessarily imply that the repository is somewhere else on the network or Internet, only that it is elsewhere. Working with such a remote repository would still involve all the standard pushing, pulling and fetching operations as with any other remote.

- `git remote` 원격 저장소 이름 출력
- `git remote -v` : shows you the URLs that Git has stored for the shortname to be used when reading and writing to that remote:
- `git remote add <shortname> <url>`

- `git fetch <remote>`: get data from your remote projects
- It’s important to note that the git fetch command only downloads the data to your local repository
- it doesn’t automatically merge it with any of your work or modify what you’re currently working on. You have to merge it manually into your work when you’re ready.
- Running git pull generally fetches data from the server you originally cloned from and automatically tries to merge it into the code you’re currently working on. easier and more comfortable
- `git push <remote> <branch>`
- `git remote show <remote>`: 원격 저장소 정보
- `git remote rename pb paul`: pb to paul
- `git remote remove or git remote rm:`
