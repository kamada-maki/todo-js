import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImcompleteLIst(inputText);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromCompleteList = (target) => {
  //押された削除ボタンの親ダグを未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};
//未完了にリストに追加する関数
const createImcompleteLIst = (text) => {
  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ
  const li = document.createElement("li");
  li.innerText = text;

  //divタグの子要素に各要素を
  div.appendChild(li);
  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押されたボタンの親タグを未完了リストから削除
    deleteFromCompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    //戻るボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createImcompleteLIst(text);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親ダグを未完了リストから削除
    deleteFromCompleteList(deleteButton.parentNode);
  });
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};
