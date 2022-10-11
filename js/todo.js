const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"; // local storageのキー値変数

let toDos = []; // 入力データをarrayタイプにするための変数

// Function Name：saveToDos
// 機能：local storageに入力したタスクのテキストデータを追加する
// JSON .stringifyで値をStringタイプで追加する
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

// Function Name：deleteToDo
// 機能：HTMLで表示されるliタグを削除し、削除するliタグのid値と一致するlocal storageのデータを削除する
function deleteToDo(e) {
  const li = e.target.parentElement; // 選択したliタグを取得する変数
  li.remove(); // liタグをHTMLから削除
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // セットしたtoDosのid値とliに付与したid値を比較し、falseの値のみ切り捨てる
  saveToDos(); // local storageのデータを再度、セット
}
// Function Name：paintToDo
// 機能：HTMLに表示するタグ生成
function paintToDo(newToDo) {
  const li = document.createElement("li"); // liタグ生成
  li.id = newToDo.id; // todosのid値をliに付与
  const span = document.createElement("span"); // spanタグ生成
  span.innerText = `・${newToDo.text}`; // todosのtext値をspanに付与
  const button = document.createElement("button"); // buttonタグ生成
  button.innerText = "✖️"; // ボタン表示テキスト
  button.addEventListener("click", deleteToDo); // ボタンクリック時のイベント
  li.appendChild(span); // liタグ内にspanを入れる
  li.appendChild(button); // liタグ内にbuttonを入れる
  toDoList.appendChild(li); // ulタグ内にliを入れる
}

// Function Name：handleToDoSubmit
// 機能：データの初期値設定および、入力データをコピーしtoDosへ追加
function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  if(newToDo !== ""){
    paintToDo(newToDoObj);
    saveToDos();
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}