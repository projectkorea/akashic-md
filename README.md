# akashic-md

Here, you can store and share programming languages, algorithms, data structures, project ideas, development tips, and other technology-related subjects.

## Migrating Repository

```bash
git remote add sub-repo https://github.com/username/sub-repo.git
git fetch sub-repo
git merge -s ours --allow-unrelated-histories sub-repo/main
# 독립적인 히스토리를 가진 sub-repo/main 브랜치를 현재 브랜치에 병합하되, 현재 브랜치의 변경 사항만을 유지
git read-tree --prefix=path/to/sub-repo/ -u sub-repo/main
# sub-repo/main 브랜치의 파일들을 현재 브랜치의 path/to/sub-repo/라는 하위 경로에 위치시키고, 워킹 디렉토리로 업데이트
```

## How to Use

1. Clone this repository to your local computer.

```shell
git clone https://github.com/projectkorea/akashic-md.git
```

2. Write new Markdown files for your desired topics or modify existing files.

3. Commit your changes and push to update the repository.

```shell
git add .
git commit -m "Add new content"
git push origin topic-name
```

## Example Topics

- JavaScript Basics
- Python Data Structures
- Migration Kotlin from Java
- Algorithm Problem Solving Strategies
- Development Project Ideas
- Development Tips and Tricks


## Contributing

If you'd like to contribute to this project, follow these steps:

- Fork this repository.
- Create a new branch for your work.
- Commit your changes and push.
- Create a pull request.

Thank you!


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/projectkorea/akashic-md/blob/main/LICENSE.md) file for details.
