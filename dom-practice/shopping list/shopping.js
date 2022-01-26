var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//1. `addItem(e) {}` 함수 내에  id="item" 에 입력된 input 값을 `<li> 태그`로 추가합니다.
//2. 이 때, li 를 생성해서 `appendChild()`와   `.createTextNode(`) 를 사용합니다.
//3. 아이템이 생성된 동시에 삭제 버튼도 `appendChild()`를 사용해서 li에 추가합니다. ( `itemList`에 생성된 li를 추가합니다.)
function addItem(e) {
  e.preventDefault();
  const newItem = document.createElement('li');
  const btnElem = document.createElement('button');
  btnElem.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right', 'delete');
  btnElem.textContent = '삭제';
  newItem.classList.add('list-group-item');
  newItem.textContent = form.firstChild.nextSibling.value;
  newItem.appendChild(btnElem);
  itemList.appendChild(newItem);
  form.firstChild.nextSibling.value = '';
}

//5. `removeItem(e) {}` 함수 내에 작성합니다.
//6. index.html에`btn btn-danger btn-sm float-right delete` 로 태그된 delete 버튼을 click 하게 될 경우  itemList에서 제거합니다. 이 때 removeChild()를 사용합니다.
function removeItem(e) {
  if (e.target.nodeName === 'BUTTON') {
    itemList.removeChild(e.target.parentNode);
  }
}

//아이템 진열하기
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName('li');
  //conver to an array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function getAllParaElems() {
  var num = 0;
  const body = document.body;
  for (let i = 0; i < body.childNodes.length; i++) {
    if (body.childNodes[i].nodeName.toLowerCase() === 'p') {
      num++;
    } else if (body.childNodes[i].nodeName.toLowerCase() === 'div') {
      const div = body.childNodes[i];
      for (let i = 0; i < div.childNodes.length; i++) {
        if (div.childNodes[i].nodeName.toLowerCase() === 'p') {
          num++;
        } else if (div.childNodes[i].nodeName.toLowerCase() === 'div') {
          const innerDiv = div.childNodes[i];
          for (let i = 0; i < innerDiv.childNodes.length; i++) {
            if (innerDiv.childNodes[i].nodeName.toLowerCase() === 'p') {
              num++;
            }
          }
        }
      }
    }
  }
  alert('전체 메뉴 종류는 ' + num + ' 개 입니다.');
}
