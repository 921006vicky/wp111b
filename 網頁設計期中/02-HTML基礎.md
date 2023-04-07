# 第二章：HTML基礎

HTML是網頁設計中最基礎的技術之一，本章節將介紹HTML的基礎知識，包括HTML的概述、HTML文件的結構、HTML標籤的使用等方面。

# 2.1 HTML的概述

HTML全稱為超文本標記語言（HyperText Markup Language），是一種用於網頁標記的標準語言。HTML用於描述網頁的結構和內容，是網頁設計中最基礎的技術之一。

# 2.2 HTML文件的結構

HTML文件的結構主要由文檔類型聲明（DOCTYPE）、HTML元素和HEAD元素、BODY元素三部分構成。

文檔類型聲明用於告訴瀏覽器使用哪種HTML版本來解釋文檔，如：

<!DOCTYPE html>

HTML元素是網頁的最外層元素，用於描述網頁的結構，如：
```html
<html>
    ...
</html>
```
HEAD元素用於描述網頁的元信息，如標題、關鍵詞、網頁描述等，如：
```html
<head>
    <meta charset="UTF-8">
    <title>網頁標題</title>
</head>
```
BODY元素用於描述網頁的內容，如文本、圖像、表格等，如：
```html
<body>
    <h1>網頁標題</h1>
    <p>網頁內容</p>
</body>
```
# 2.3 HTML標籤的使用

HTML標籤用於描述網頁的結構和內容，每個HTML標籤由一對起始標籤和結束標籤組成。起始標籤和結束標籤之間的內容是標籤的內容。

常用的HTML標籤包括標題標籤（h1-h6）、段落標籤（p）、超鏈接標籤（a）、圖像標籤（img）、表格標籤（table）、列表標籤（ul、ol）、表單標籤（form）等。

例如，下面是一個基本的HTML文件示例：
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>網頁標題</title>
</head>
<body>
    <h1>網頁標題</h1>
    <p>網頁內容</p>
    <a href="https://www.example.com">超鏈接</a>
    <img src="https://www.example.com/image.jpg" alt="圖像描述">
    <table>
        <tr>
            <th>表頭1</th>
            <th>表頭2</th>
        </tr>
        <tr>
            <td>表格內容1</td>
            <td>表格內容2</td>
        </tr>
    </table>
    <ul>
        <li>列表項目1</li>
        <li>列表項目2</li>
    </ul>
    <form action="/submit" method="post">
        <input type="text" name="username" placeholder="請輸入用戶名">
        <input type="password" name="password" placeholder="請輸入密碼">
        <input type="submit" value="提交">
    </form>
</body>
</html>
```