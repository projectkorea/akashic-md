# gunicorn

- Python Web Server Gateway Interface HTTP Server for UNIX

```bash
ps aux | grep gunicorn | kill -9 ctrl+cv
kill -9 `pgrep -f gunicorn`
```

- 로그인 성공 후 사용자를 /admin 페이지로 이동시킴
    
    ```python
    from flask import redirect, url_for
    
    if user:
    	session['user_id'] = str(user['_id'])
    	return redirect(url_for('admin'))
    
    # url_for: 주어진 뷰 함수 이름에 해당하는 URL을 동적으로 생성
    ```
    
- 던더 변수
    - `__name__`
        - 파일이 직접 실행되면 `"__main__"`으로 설정됨
        - 파일이 import되면 파일명으로 설정됨
    - `__init__`
        - 클래스의 인스턴스를 생성할 때 호출되는 초기화 메서드
    
    ```python
    # main.py
    if __name__ == "__main__":
        print("이 파일은 직접 실행되었습니다.")
    
    # another_file.py
    print(f"이 파일의 모듈명은: {__name__}")
    # 이 파일의 모듈명은: another_file
    ```
    
    ```python
    class MyClass:
        def __init__(self, name):
            self.name = name
    
    obj = MyClass("example")
    print(obj.name)  # 출력: example
    ```
    
- 데코레이터
    - 함수를 감싸서, 실행 전에 **추가적인 기능**을 붙이는 도구
    
    ```python
    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            username = request.form['username']
            password = request.form['password']
            user = users_collection.find_one({'username': username, 'password': password})
            if user:
                session['user_id'] = str(user['_id'])
                return redirect(url_for('admin'))
            return 'Invalid username or password'
        return '''
            <form method="post">
                Username: <input type="text" name="username"><br>
                Password: <input type="password" name="password"><br>
                <input type="submit" value="Login">
            </form>
        '''
    ```
    
    - **`@app.route`의 역할**
        - 이 데코레이터는 특정 URL 경로와 함수를 매핑해, 해당 경로로 요청이 들어오면 그 함수를 실행함.
        - 함수 호출 전에 Flask에게 **특정 경로와 HTTP 메서드(GET/POST 등)**를 연결하는 역할을 함.
        - `@app.route('/login')`은 사용자가 `/login` 경로에 접근하면 `login()` 함수를 호출하도록 Flask에 알려줌.
    - 플라스크에서 `@app.route`로 매핑된 함수는 **“뷰 함수”**임.
        - 뷰 함수는 웹 요청을 받아 처리한 결과를 반환하는 역할을 함.
        - 반환값은 HTML, JSON, 문자열 등 다양한 형식이 될 수 있음.
        - 뷰 함수의 본질적인 역할은 요청을 처리하고, Response 객체나 그에 상응하는 데이터를 반환하는 것임