let main = document.querySelector('#main')

let pages = {
    '#aboutus':`
aboutus/
aboutus/
aboutus/
aboutus/
    `,
    '#example1':`
    <h1>註冊</h1>
    <strong><label for="firstname">姓名：</label></strong>
    <strong><input type="text" id="firstname" name="firstname"></strong><br><br>
    <strong><label for="email">電子郵件：</label></strong>
    <strong><input type="email" id="email" name="email"></strong><br><br>

    <strong><label for="phone">手機號碼：</label></strong>
    <input type="tel" id="phone" name="phone" placeholder="09xx-xxx-xxx" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"><br><br>

    <strong><label for="password">密碼：</label></strong>
    <strong><input type="password" id="password" name="password"></strong><br><br>
    <strong><label for="confirm_password">確認密碼：</label></strong>
    <strong><input type="password" id="confirm_password" name="confirm_password"></strong><br><br>
    <strong><label for="color">喜歡的顏色</label></strong>
    <strong><input type="color" id="color" name="color"></strong><br><br>
    <strong><label for="birthday">生日：</label></strong>
    <input type="date" id="birthday" name="birthday"><br><br>
    <strong><label for="gender">性別：</label></strong>
    <select id="gender" name="gender">
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="other">其他</option>
    </select><br><br>
    <button type="submit">註冊</button>
    `,
    '#example2':`example2`,
    '#example3':'example3',
}

window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}