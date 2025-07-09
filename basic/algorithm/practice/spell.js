const mapNumber = {
    zero: '0',
    one: '1',
    two: '2',
    ...
}

let token = '';
    
function solution(s) {
    var answer = '';
    const words = Object.keys(mapNumber);
    const numbers = Object.values(mapNumber);
    let token = '';
    
    for (_s of s) {
        if (_s in numbers) {
            answer += _s
        } else {
            tokenize(_s) && clearToken(); 
        }
    }
    
    return answer;
}

function tokenize(string) {  
    token += string;
    if (token in words) {
        return true;
    }
}

function addAnswer() {
    answer += mapNumber[token];
}

function clearToken() {
    token = '';
}
