# Reset Demystified

1. `git reset <옵션> <돌아가고싶은커밋>`
2. `git checkout <브랜치> <옵션>`

- `Git`은 서로 다른 **세 파일의 묶음**를 관리하는 콘텐츠 관리자이다.

## 세 개의 트리

![](https://user-images.githubusercontent.com/76730867/166095470-833ed40c-6f5d-4966-9010-b004ccf4e47a.png)

|            Tree            |                   Role                    |
| :------------------------: | :---------------------------------------: |
|     HEAD (Repository)      | 마지막 커밋 스냅샷, 다음 커밋의 부모 커밋 |
| Index, Stage, Staging Area |           다음에 커밋할 스냅샵            |
|     Working Directory      |                  Sandbox                  |

### 1. Head

- **pointer to the current branch reference**, which is **last commit**
- `HEAD` **will be the parent of the next commit** that is created.

#### `HEAD`가 가리키는 스냅샷 보기

```
$ git cat-file -p HEAD
tree cfda3bf379e4f8dba8717dee55aab78aef7f4daf
author Scott Chacon  1301511835 -0700
committer Scott Chacon  1301511835 -0700

initial commit

$ git ls-tree -r HEAD
100644 blob a906cb2a4a904a152...   README
100644 blob 8f94139338f9404f2...   Rakefile
040000 tree 99f1a6d12cb4b6f19...   lib
```

### 2. The Index

- The index is your **proposed next commit**.
- `Staging Area` as this is what Git looks at when you run `git commit`.
- `git commit`을 하면 `Index`는 새 커밋으로 변환된다.

### 3. The Working Directory

- The other two trees store their content in an efficient but inconvenient manner, inside the `.git` folder.
- The working directory unpacks them into **actual files**, which makes it much easier for you to edit them.
- Think of the working directory as a sandbox, where you can try changes out before committing them to your staging area (index) and then to history.

## The Workflow

Git’s typical workflow is to record **snapshots of your project** in successively better states, by manipulating these three trees.

![reset-workflow](https://user-images.githubusercontent.com/76730867/165687344-a8a1e99f-6961-4321-b85e-ddedfac6a471.png)

## The Role of Reset (1)

### 주어진 상황

![reset-start](https://user-images.githubusercontent.com/76730867/165687670-01e39076-44dd-4f8a-90bb-339602e093fe.png)

### Step 1: Move HEAD (`--soft`)

- `HEAD` 브랜치를 이동시킴
- `checkout` 처럼 HEAD가 가리키는 브랜치를 이동시키지는 않음
- `HEAD`는 계속 현재 브랜치를 가리키고 있고, 현재 브랜치가 가리키는 커밋을 바꿈
- `git reset 9e5e6a4` will start by making master point to `9e5e6a4`.

![reset-soft](https://user-images.githubusercontent.com/76730867/165688044-46e23f8f-a41a-4e30-9c9e-27148004b047.png)

- `git commit`의 역할
  - 새로운 커밋 생성
  - `HEAD`가 가리키는 브랜치가 새로운 커밋을 가리키도록 업데이트
- `git reset`
  - 가장 최근의 `git commit`을 되돌림
- `git reset HEAD~`
  - `HEAD~`: `HEAD`의 부모 커밋, 직전의 커밋으로 되돌림
- `git reset --soft HEAD~`
  - `Index`, `Working Directory`는 그대로 놔두고, 브랜치가 가리키는 커밋만 이전으로 되돌림

### Step 2: Updating the Index (`--mixed`)

![2](https://user-images.githubusercontent.com/76730867/165688586-2ad85f6f-eab7-4fe0-88f6-23c913ba6000.png)

- `git reset [--mixed] HEAD~`
  - `git reset HEAD~` 디폴트 값
  - `Index`를 현재 `HEAD`가 가리키는 스냅샷으로 업데이트
  - `git commit`과 `git add` 명령을 되돌리는 것과 같은 효과다.

### Step 3: Updating the Working Directory (`--hard`)

![reset-hard](https://user-images.githubusercontent.com/76730867/166129873-7836b5b5-10b7-436c-9dfb-b5da091190fd.png)

- `git reset --hard HEAD~`
  - `git add`, `git commit`, 워킹 디렉토리의 내용까지 되돌림
  - `Git`에는 데이터를 삭제하는 방법이 별로 없지만 그 중 하나의 명령어이니 유의한다.
  - 이 예제에서는 `v3`을 커밋했기 때문에, `reflog`를 이용해 복원할 수 있지만, 한 번도 커밋하지 않았다면 `Git`이 덮어쓴 데이터를 복원할 수 없다.

### 정리

- `--soft`: `HEAD`가 가리키는 브랜치를 옮긴다.
- `[--mixed]`: `Index`를 `HEAD`가 가리키는 상태로 만든다.
- `--hard` : 워킹 디렉터리를 `Index`의 상태로 만든다.

## The Role of Reset (2)

- 경로를 주고 `reset`하기
- 경로를 주면 `HEAD`의 브랜치를 옮기는 단계는 생략되어, 현재 `HEAD`가 가리키는 커밋에서 적용된다.
  - `HEAD`는 포인터이기 때문에 경로에 따라 파일별로 기준이 되는 **커밋을 부분적으로 적용하는 것이 불가능**하기 때문이다.
- `Index`, 워킹 디렉토리의 일부분 갱신할 수 있다.

![1](https://user-images.githubusercontent.com/76730867/166130187-75b27d11-3466-44d3-8bdc-f1060c9e8453.png)

- `git reset file.txt `
  - `file.txt`을 `HEAD`에서 `Index`로 복사
  - `file.txt`를 `Unstaged` 상태로 만듬

![2](https://user-images.githubusercontent.com/76730867/166130189-17616245-ac82-4243-b5d3-36d302f530da.png)

- `git add`와 정확히 반대의 역할

![3](https://user-images.githubusercontent.com/76730867/166130193-a922bae8-2362-417a-adde-07d220b4a176.png)

- 특정 커밋을 명시하면 `Git`은 `HEAD`에서 파일을 가져오는 것이 아니다.
- 그 커밋에서 파일을 가져온다.

## 합치기 (Squash)

- `reset` + `commit` 으로 커밋들을 하나로 합칠 수 있다.

### 주어진 상황

- 두번째 커밋의 `b파일`은 아직 작업중이기 때문에 세번째 커밋과 합치고 싶다.

![reset-squash-r1](https://user-images.githubusercontent.com/76730867/166130472-5c52ed17-6f07-4b27-a170-f1ce58c3bcea.png)

### `git reset --soft HEAD~2`

![reset-squash-r2](https://user-images.githubusercontent.com/76730867/166130491-d85e79ff-3db7-4574-b562-84f8bb1c8d31.png)

- `HEAD` 포인터를 이전 커밋으로 되돌리기

### `git commit`

![reset-squash-r3](https://user-images.githubusercontent.com/76730867/166130492-9751dab4-7447-4f12-8734-140231b4fe19.png)

- `a`파일이 있는 `v1`커밋이 하나 그대로 있고, 두번째 커밋에는 `v3`버전의 `a`파일과 추가된 `b`파일이 있다. `v2`에는 더는 히스토리가 없다.

## checkout

- `checkout`도 `reset`과 마찬가지로 세 트리를 조작한다.
- 명령어에 파일 경로의 작성 여부와 동작이 다르다.

- `git reset --hard`와는 달리 워킹 디렉토리를 안전하게 다룬다.
  - 저장하지 않는 것이 있으면 확인해서 날려버리지 않는다.
  - `git reset --hard`는 head를 업데이트 하지만, `checkout`은 `HEAD` 자체를 다른 브랜치로 옮긴다.
- `reset`은 `HEAD`가 가리키는 브랜치의 포인터를 옮기고, `checkout`은 `HEAD`자체를 옮긴다.
- ![reset-checkout](https://user-images.githubusercontent.com/76730867/166132729-00927187-75e5-4427-bf67-4a5e3ef642c0.png)

### 요약

![캡처](https://user-images.githubusercontent.com/76730867/166132733-2f1f51f2-2f1d-46ea-a65d-9a14d555892a.PNG)
