# 第五章：JavaScript基礎

JavaScript是一種網頁前端開發語言，可以實現動態效果、表單驗證、網頁交互等功能。在網頁設計中，JavaScript常常與HTML和CSS一起使用，進行網頁動態效果和交互。

## 5.1 JavaScript的概述

JavaScript最初是由Netscape公司創建的一種腳本語言，現在已經成為一種獨立的編程語言。JavaScript支持面向對象、函數式編程等多種編程范式，是一種動態語言，不需要編譯器，可以在網頁中直接執行。

JavaScript主要用於前端開發，可以實現動態效果、表單驗證、網頁交互等功能。JavaScript也可以用於後端開發，例如使用Node.js進行伺服器端開發。

## 5.2 JavaScript的基本語法

JavaScript的基本語法包括變數、運算符、條件語句、循環語句、函數等。

### 5.2.1 變數

在JavaScript中，可以使用var、let、const等關鍵字聲明變數。其中，var聲明的變數是全局變數，let和const聲明的變數是區塊作用域變數。在JavaScript中，變數的值可以是任意類型，包括數字、字符串、布爾值、對象、數組等。

### 5.2.2 運算符

JavaScript支持多種運算符，包括算術運算符、比較運算符、邏輯運算符等。其中，算術運算符包括加、減、乘、除等；比較運算符包括等於、不等於、大於、小於等；邏輯運算符包括AND、OR、NOT等。

### 5.2.3 條件語句

在JavaScript中，可以使用if、else、switch等語句實現條件判斷。if語句用於判斷單個條件，if-else語句用於判斷兩個條件，switch語句用於判斷多個條件。

### 5.2.4 循環語句

在JavaScript中，可以使用for、while、do-while等語句實現循環。for語句用於循環執行已知次數的代碼塊，while和do-while語句則用於循環執行未知次數的代碼塊，直到滿足某個條件才停止循環。

以下是for循環的基本語法：
```javascript
for (initialization; condition; increment) {
  // 要執行的代碼塊
}
```
其中，initialization用於初始化循環變量，condition用於定義循環的條件，increment用於在每次循環結束時更新循環變量。

以下是while循環的基本語法：
```javascript
while (condition) {
  // 要執行的代碼塊
}
```
其中，condition用於定義循環的條件，只有當條件為true時才會執行代碼塊。

以下是do-while循環的基本語法：
```javascript
do {
  // 要執行的代碼塊
} while (condition);
```
其中，代碼塊會至少執行一次，然後在每次循環結束時檢查條件，只有當條件為true時才會繼續循環。

在編寫循環代碼時，需要注意避免出現死循環（也稱為無限循環），即循環條件永遠為true，導致代碼一直執行下去，進而導致系統崩潰。

## 5.3 JavaScript的DOM操作

JavaScript不僅可以控制網頁上的動畫、表單驗證等，也可以用來動態地操作HTML文檔。這是通過Document Object Model（DOM）實現的，DOM是一個用於表示HTML文檔的樹狀結構，通過JavaScript可以動態地修改這個結構。

在網頁上使用JavaScript操作DOM有幾種方法，以下是其中一些常用的方法：

### 5.3.1 通過ID獲取元素

可以通過document.getElementById()方法來獲取一個具有指定ID的元素，然後可以通過修改該元素的屬性和樣式來修改網頁的內容。
```javascript
// 獲取具有指定ID的元素
var element = document.getElementById("myElement");

// 修改該元素的屬性和樣式
element.innerHTML = "Hello, world!";
element.style.color = "red";

```
### 5.3.2 通過類名獲取元素

可以通過document.getElementsByClassName()方法來獲取一組具有指定類名的元素，然後可以遍歷這個元素集合來修改每個元素的屬性和樣式。
```javascript
// 獲取具有指定類名的元素集合
var elements = document.getElementsByClassName("myClass");

// 遍歷元素集合並修改每個元素的屬性和樣式
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "Hello, world!";
  elements[i].style.color = "red";
}

```
### 5.3.3 通過標籤名獲取元素

可以通過document.getElementsByTagName()方法來獲取一組具有指定標籤名的元素，然後可以遍歷這個元素集合來修改每個元素的屬性和樣式。
```javascript
// 獲取具有指定標籤名的元素集合
var elements = document.getElementsByTagName("div");

// 遍歷元素集合並修改每個元素的屬性和樣式
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "Hello, world!";
  elements[i].style.color = "red";
}

```
### 5.3.4 創建新元素

可以通過document.createElement()方法創建一個新的HTML元素，然後可以通過修改這個元素的屬性和樣式來定制它的外觀和行為，最後可以將它添加到網頁上。
例如，假設我們想要在網頁上創建一個新的段落元素，並將其添加到一個id為"myDiv"的div元素中，可以使用以下代碼：
```javascript
// 創建新的段落元素
var newParagraph = document.createElement("p");

// 設置段落元素的屬性和內容
newParagraph.innerHTML = "這是一個新的段落。";
newParagraph.style.color = "red";

// 獲取父元素並將新的段落元素添加到其中
var parentElement = document.getElementById("myDiv");
parentElement.appendChild(newParagraph);

```
在這個例子中，我們首先使用document.createElement()方法創建了一個新的段落元素，然後通過設置其innerHTML和style屬性來定制了它的內容和外觀。最後，我們使用document.getElementById()方法獲取了id為"myDiv"的元素，並使用appendChild()方法將新的段落元素添加到其中。

### 5.3.5 刪除元素

在JavaScript中，可以使用removeChild()方法從網頁上刪除一個元素。這個方法可以通過父元素來操作子元素，首先需要獲取要刪除的元素的父元素，然後使用removeChild()方法將其從父元素中移除。例如，如果要刪除id為"myElement"的元素，可以使用以下代碼：
```javascript
// 獲取要刪除的元素的父元素
var parentElement = document.getElementById("parentElement");

// 獲取要刪除的元素
var childElement = document.getElementById("myElement");

// 從父元素中刪除子元素
parentElement.removeChild(childElement);

```
在這個例子中，我們首先使用document.getElementById()方法獲取了id為"parentElement"和"myElement"的元素，然後使用removeChild()方法從父元素中刪除了子元素。

### 5.3.6 修改元素屬性和樣式

在JavaScript中，可以使用元素的屬性和樣式來修改其外觀和行為。屬性是元素的內在特性，例如id、class、href等，而樣式則是元素的外在表現，例如背景色、字體大小、邊框等。可以使用JavaScript來動態地修改這些屬性和樣式，從而實現更豐富的網頁交互效果。

要修改元素的屬性，可以直接通過元素對象的屬性進行修改，例如：
```javascript
// 獲取一個元素
var element = document.getElementById("myElement");

// 修改元素的id和class屬性
```
