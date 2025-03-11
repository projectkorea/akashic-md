# ssh

```bash
# ~/.ssh/config
Host *
    PubkeyAcceptedKeyTypes=+ssh-rsa
    HostKeyAlgorithms=+ssh-rsa

Host admin
    HostName xxx
    User xxx
    IdentityFile ~/.ssh/xxx.gcloud.pem
```


## SSH 접속 구조와 관련 요소

1. SSH 키 구성
- 프라이빗 키: 클라이언트가 보관 (~/.ssh/id_ed25519, custom.pem 등)
- 퍼블릭 키: 서버의 authorized_keys에 등록 (~/.ssh/id_ed25519.pub)
- 키 쌍은 서로 암호학적으로 연관되어 인증에 사용
1. 서버 신원 확인 (Host Verification)
- 서버의 핑거프린트가 ~/.ssh/known_hosts에 저장
- 최초 접속 시 "Are you sure you want to continue connecting?" 메시지 표시
- 이후 접속 시 저장된 핑거프린트와 비교하여 서버 신원 확인
- 중간자 공격(MITM) 방지 목적

## 클라이언트 설정 (~/.ssh/config)

```
Host myserver
    HostName 실제IP주소
    User 접속계정
    IdentityFile 프라이빗키경로

```

- 위 설정은 단순 편의기능 (별칭, 기본값 설정)
- User나 키 주석(user@host)은 실제 인증과 무관

1. 인증 과정
    1. 클라이언트가 서버에 접속 시도
    2. 서버의 신원을 known_hosts로 확인
    3. 클라이언트가 프라이빗 키로 인증 요청
    4. 서버는 authorized_keys의 퍼블릭 키로 검증
    5. 검증 성공 시 접속 허용
2. 주요 파일들의 역할
- ~/.ssh/id_ed25519 (프라이빗 키): 클라이언트 인증용
- ~/.ssh/id_ed25519.pub (퍼블릭 키): 서버에 등록하여 인증 검증용
- ~/.ssh/known_hosts: 접속한 서버들의 핑거프린트 저장
- ~/.ssh/authorized_keys: 허용된 퍼블릭 키들의 목록 (서버 측)
- ~/.ssh/config: 클라이언트의 접속 설정
