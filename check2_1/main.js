document.addEventListener('DOMContentLoaded', function() {
    // addTodoBtnの要素を取得してください。
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    // 追加ボタンが押下されたときのイベントを追加してください
    addTodoBtn.addEventListener('click', function() {
        // 処理1、inputが空になっていたら、alert()処理をして処理を終わらせてください。
        // メッセージは"ToDoを入力してください"を出力してください
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            alert('ToDoを入力してください');
            return;
        }

        // 処理2、todoItem内に入力された文字が追加されるようにしてください。
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);

        // 入力フィールドをクリア
        todoInput.value = '';
    });
});