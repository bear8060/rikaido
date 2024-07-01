class User {
    // 名前とメールアドレスのプロパティを持ったコンストラクタを作成してください。
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// ユーザー情報を保存する配列を作成してください。
const users = [];

// ユーザー情報を登録する関数を作成してください。
function registerUser() {
    // nameフィールドの値を取得してください
    const name = document.getElementById('name').value;
    // emailフィールドの値を取得してください。
    const email = document.getElementById('email').value;

    // メールアドレスの重複を確認してください。
    const isDuplicate = users.some(user => user.email === email);
    
    if (isDuplicate) {
        // 既に登録済みの場合、登録しようとしたメールアドレスをを含む重複している旨のメッセージを出力してください。
        console.log(`Error: メールアドレス ${email} は既に登録されています。`);
    } else {
        // 未登録の場合はユーザー情報を配列に追加してください。    
        const user = new User(name, email);
        users.push(user);
        console.log(`Success: ユーザー ${name} が登録されました。`);
    }

    // 登録後にnameフィールドの値を削除してください
    document.getElementById('name').value = '';
    // 登録後にemailフィールドの値を削除してください
    document.getElementById('email').value = '';
}

// 登録されたユーザー情報を1件ずつコンソール出力する関数を作成してください。
function findUser() {
    users.forEach(user => {
        console.log(`名前: ${user.name}, メールアドレス: ${user.email}`);
    });
}