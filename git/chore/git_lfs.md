# git lfs

1. 목적
    - 큰 파일(이미지, 비디오, 데이터셋 등)을 효율적으로 관리하기 위한 Git 확장 기능
    - 일반 Git처럼 큰 파일을 통째로 저장하지 않고, 포인터만 저장
2. 작동방식
    - 실제 큰 파일 → LFS 전용 서버에 저장
    - 텍스트 포인터 → Git 저장소에 저장
    - GitHub, GitLab 등이 LFS 저장소 제공 (보통 용량 제한 있음)
3. 장점
    - 저장소 크기 감소
    - clone/pull 속도 향상
    - 대용량 파일 버전 관리 용이
4. Git LFS설치 확인

```bash
# 1. LFS 설치 및 버전 확인
git lfs version  
git lfs install  # 저장소에 LFS 설정
brew install git-lfs

# 2. 저장소에 LFS 설정
git lfs install

# 3. 다시 pull 시도
git lfs pull

# 4. 상태 확인
git lfs status
```

1. 추적 상태 확인

```bash
git lfs status    # 현재 LFS 파일들의 상태
git lfs ls-files  # LFS로 관리되는 파일 목록
```

1. 설치 및 초기 설정

```bash
git lfs install  # Git LFS 초기화

# 특정 파일 형식을 LFS로 추적
git lfs track "*.psd"    # Photoshop 파일
git lfs track "*.zip"    # ZIP 파일
git lfs track "*.pdf"    # PDF 파일
```

1. 상태 확인

```bash
git lfs status           # LFS 파일들의 상태 확인
git lfs ls-files        # 현재 추적 중인 LFS 파일들 목록
```

1. 파일 관리

```bash
# .gitattributes 파일에 추적 패턴이 저장됨
git add .gitattributes  # 추적 설정 저장

# LFS 파일 가져오기/내보내기
git lfs pull            # LFS 파일들 다운로드
git lfs fetch           # LFS 파일들 다운로드 (작업 디렉토리에 반영 X)
git lfs push            # LFS 파일들 서버로 업로드
```

1. 정보 확인

```bash
git lfs track           # 현재 추적 중인 패턴 확인
git lfs logs           # LFS 관련 로그 확인
```

1. 설정 관리

```bash
git lfs untrack "*.psd"  # 특정 패턴 추적 해제
git lfs migrate          # 기존 git 저장소를 LFS로 변환
```

일반적인 워크플로우

```bash
git lfs install          # 1. LFS 초기화
git lfs track "*.psd"    # 2. 추적할 파일 형식 지정
git add .gitattributes   # 3. 추적 설정 저장
git add file.psd         # 4. 파일 추가
git commit -m "Add file" # 5. 커밋
git push                 # 6. 푸시
```