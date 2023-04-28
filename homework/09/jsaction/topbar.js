/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let main = document.querySelector('.bigmargin')

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
let pages = {
  '#home':`
  <h1>劉思妤的個人網頁/</h1>
  <p>金門大學資工系學生</p>
  <a href="https://www.facebook.com/profile.php?id=100006958454643">我的FB</a>
  <br/>
  <img src="01.png"/>
  </body>
  </html>
  `,

  '#login':`
  <h1>登入</h1>
  <form>
    <label for="username">使用者名稱：</label>
    <input type="text" id="username" name="username"><br><br>

    <label for="password">密碼：</label>
    <input type="password" id="password" name="password"><br><br>

    <button type="submit">登入</button>
  </form>
  `,

  '#logout':`
  <h1>登出</h1>
  <p>您已成功登出。</p>
  `,

  '#signup':`
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
}

window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}