
### `mkdir`

```bash
mkdir -p /home/user/projects/logs
# -p: 부모 디렉토리까지 안전한게 모두 생성
```

### Path

- `/`는 **루트 디렉토리**, **시스템 전체**의 최상위 디렉토리
- `~`는 **현재 사용자의 홈 디렉토리**
    - `~/.ssh` 실제 경로 `/Users/username/.ssh`

### Process

```bash
ps -aux
# a: all users
# u: user oriendted format
# x: background process 포함
# 시스템의 모든 사용자와 관련된 모든 프로세스를 상세 정보와 함께 표시
```

```bash
kill -9 `pgrep -f gunicorn`
# kill 명령어는 특정 PID의 프로세스를 종료
# -9 옵션은 "SIGKILL" 신호를 보냄
# pgrep -f gunicorn에 의해 찾아진 모든 gunicorn 프로세스들을 강제 종료함
```

### Syntax

- `백틱(`)`
    - 명령어 치환에 사용
    - 백틱 사이에 있는 명령어가 먼저 실행되고, 그 출력이 외부 명령어의 인수로 사용

### grep

```bash
grep -P "/getOneGenderData\S*\s*\S*302\S*" /home/.forever/Tz1Y.log
grep -C 50 "LEO" /home/.forever/1X9e.log
grep -C 5 "check authentication" /home/.forever/1X9e.log

# P: perl 호환 정규 표현식 모드 사용하여 ANSI 색상 코드를 포함해 검색
# A: 이후의 라인 / B: 이전의 라인 / C: 라인 전후의 라인
```

```bash
tail -f out.log err.log
# -n 10              마지막 10줄 출력
# out.log err.log    모니터링할 파일

# 특정 uid 검색
grep -r 'exEiQ9wjEpO61TUeolVtFcUWOny1' *
grep -r 'exEiQ9wjEpO61TUeolVtFcUWOny1' './'
grep -i "찾고자 하는 문자열" example.txt
```

```bash
pgrep -f gunicorn
# pgrep: 특정 패턴과 일치하는 프로세스의 PID를 검색
# -f 옵션은 프로세스 전체 명령어를 기준으로 검색하는 옵션
# gunicorn이라는 문자열이 포함된 모든 실행 중인 PID를 찾음
```

```bash
# word count 텍스트 파일의 단어 수, 행 수, 문자 수 셀 수 있음

wc -l: 행 수
wc -w: 단어 수
wc -c: 바이트 수
wc -m: 문자 수
wc -l a.txt
```

## 셰뱅

- 스크립트 첫 줄에 위치한 `#!` 문자로 시작하는 지시문
    - `#`(She/Sharp) + `!`(Bang)의 합성
    - `!` (Bang)
        - 초기 컴퓨터 시대 타이핑 시 'Bang' 소리가 나서 붙여진 이름
    
    ```bash
    #!/bin/bash
    echo "Hello World!"
    ```
    
- 운영체제에 스크립트를 실행할 인터프리터를 지정
- 시스템 관리, 자동화 스크립트에서 필수적으로 사용
- 여러 종류의 셸이 존재하므로 명시적 지정 필요
- **파일 확장자와의 관계**
    1. **확장자 (`.sh`, `.py`, `.js` 등)**
        - 사용자와 IDE를 위한 파일 형식 식별
        - 문법 강조 등 편집기 기능 활성화
        - 관례적 표시
    2. **셰뱅**
        - 운영체제를 위한 실행 지시문
        - 스크립트 직접 실행에 필요
        - 확장자와는 독립적인 기능
    3. **현대 개발 환경에서는?**
        - Bash 스크립트 외에는 셰뱅 사용 빈도가 낮음
        - `python`, `node`, `ruby` 등의 명령어로 직접 실행
        - IDE와 개발 도구 사용으로 인한 실행 환경 명확화

### 파일 권한 변경

- `chmod +x depoy.sh`
    
    ```bash
    Error: Permission denied when running .sh scripts
    Error: EACCES: permission denied, uv_cwd
    ```
    
    - 파일의 실행 권한이 변경되면서 파일의 메타데이터(특히 권한 관련 정보)가 수정됩니다.
    - Git에서는 해당 파일이 변경된 것으로 인식하여 git status 명령어를 실행하면 modified 상태로 표시됩니다.
- Unix/Linux 신호(Signals) 정리
    - Unix 계열 운영체제에서 프로세스 제어를 위해 고유한 번호를 가진 신호를 사용한다.
    - `kill {pid}` : 디폴트 신호 `SIGTERM`을 보내어 프로세스가 정상적으로 종료될 수 있도록 힌다.
    - `SIGHUP -1`: 터미널 연결이 끊어졌을 때 발생하는 신호. 터미널을 사용하는 프로세스에 대해 연결이 끊어졌음을 알립니다.
    - `SIGINT -2`: 인터럽트 신호로, 일반적으로 사용자가 Ctrl+C를 입력할 때 발생합니다. 프로세스에 작업을 중단할 것을 요청합니다.
    - `SIGQUIT -3`: 종료 신호로, 사용자가 Ctrl+\를 입력할 때 발생합니다. 코어 덤프(Core Dump)를 생성하며 프로세스를 종료합니다.
    - `SIGKILL -9`: 프로세스를 즉시 강제 종료하는 신호. 프로세스가 이 신호를 무시할 수 없으며, 프로세스를 강제로 중지시킵니다.
    - `SIGTERM -15`: 프로세스에 종료 요청을 보냅니다. 프로세스가 정상적으로 종료할 수 있도록 시간을 주지만, 프로세스가 이 신호를 무시할 수도 있습니다.