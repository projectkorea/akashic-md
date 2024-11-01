### cloud run build

```
gcloud builds submit . --config=cloudbuild.yaml 
      --substitutions=COMMIT_SHA=$(git rev-parse --short HEAD) --timeout=1h
```

- **`gcloud builds submit .`**: 현재 디렉토리의 소스 코드를 Google Cloud Build에 제출하여 빌드.
- **`-config=cloudbuild.yaml`**: 빌드 설정 파일로 `cloudbuild.yaml`을 참고해 빌드를 진행한다.
- **`-substitutions=COMMIT_SHA=$(git rev-parse --short HEAD)`**: 현재 커밋의 해시 값을 `COMMIT_SHA` 변수로 대채하여 빌드 과정에 사용
- **`-timeout=1h`**: 빌드 작업의 최대 실행 시간을 1시간으로 제한.