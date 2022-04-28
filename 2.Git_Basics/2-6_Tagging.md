# 2.6 Git Basics - Tagging

- tag 보기
- `git tag`

```
v1.0
v2.0
```

- `git tag -l "v1.8.5*"`

```
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
v1.8.5-rc3
v1.8.5.1
v1.8.5.2
v1.8.5.3
v1.8.5.4
v1.8.5.5
```

- `l`, `--list`: 특정 버전만 뽑아서 보기

## Creating Tags

Git supports two types of tags: lightweight and annotated.

- A lightweight tag is very much like a branch that doesn’t change — it’s just a pointer to a specific commit.

- Annotated tags, however, are stored as full objects in the Git database. They’re checksummed; contain the tagger name, email, and date; have a tagging message; and can be signed and verified with GNU Privacy Guard (GPG). It’s generally recommended that you create annotated tags so you can have all this information; but if you want a temporary tag or for some reason don’t want to keep the other information, lightweight tags are available too.
