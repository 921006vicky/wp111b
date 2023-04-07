# 第三章：CSS基礎

CSS是用於網頁樣式的語言，本章節將介紹CSS的基礎知識，包括CSS的概述、CSS樣式的設置、CSS選擇器等方面。

## 3.1 CSS的概述

CSS全稱為層疊樣式表（Cascading Style Sheets），是一種用於描述網頁樣式的語言。CSS用於描述網頁元素的顯示方式、顏色、字體、尺寸、邊框、背景等樣式效果。它可以將HTML文檔和CSS樣式分離，提高了網頁的可維護性和可重用性。

CSS樣式可以通過以下三種方式添加到HTML文檔中：

1. 內部樣式表：使用style元素將樣式直接添加到HTML文檔的head元素中。
2. 外部樣式表：將樣式寫在一個獨立的CSS文件中，並使用link元素將該文件與HTML文檔關聯起來。
3. 內聯樣式：使用style屬性將樣式直接添加到HTML元素中。

以下是一個簡單的CSS樣式示例：
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>網頁標題</title>
    <style>
        h1 {
            color: red;
            font-size: 24px;
            text-align: center;
        }
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>網頁標題</h1>
    <p>網頁內容</p>
</body>
</html>
```
在這個例子中，使用了內部樣式表的方式來添加CSS樣式，其中h1和p是CSS選擇器，用於選擇HTML中的標題和段落元素，花括號中的內容是CSS樣式，用於描述元素的顯示效果。

## 3.2 CSS樣式的設置

CSS樣式主要由屬性和值組成，屬性用於描述元素的某個特定的樣式效果，值則是屬性的具體值。下面是一個基本的CSS樣式格式：
```css
selector {
    property: value;
}
```
其中，selector是CSS選擇器，用於選擇要應用樣式的HTML元素；property是CSS屬性，用於描述元素的某個樣式效果；value是CSS屬性的具體值。

以下是一些常用的CSS樣式：

1. color：用於設置文字顏色，可以使用顏色名稱、RGB值或十六進制值。
2. font-size：用於設置字體大小，可以使用像素值、百分比或其他相對值。
3. font-family：用於設置字體，可以使用字體名稱或具體的字體文件。
5. background-color：用於設置背景顏色，可以使用顏色名稱、RGB值或十六進制值。
6. background-image：用於設置背景圖片，可以使用圖片的URL。
7. border：用於設置邊框，可以設置邊框的顏色、寬度、樣式等。
8. margin：用於設置元素的外邊距，可以設置上、右、下、左四個方向的距離。
9. padding：用於設置元素的內邊距，可以設置上、右、下、左四個方向的距離。
10. text-align：用於設置文字對齊方式，可以設置居中、靠左、靠右等。

除了這些常用的樣式外，CSS還有很多其他的樣式屬性，可以用於設置元素的顯示效果。

## 3.3 CSS選擇器

在CSS中，選擇器用於選擇要應用樣式的HTML元素。CSS選擇器有很多種類，常用的選擇器有以下幾種：

1. 元素選擇器：使用HTML元素的標籤名稱作為選擇器。例如，使用h1作為選擇器可以選擇所有的標題元素。
2. 類選擇器：使用class屬性的值作為選擇器。例如，使用.class-name作為選擇器可以選擇所有class屬性為class-name的元素。
3. ID選擇器：使用id屬性的值作為選擇器。例如，使用#id-name作為選擇器可以選擇所有id屬性為id-name的元素。
4. 屬性選擇器：使用元素的屬性值作為選擇器。例如，使用[type="text"]作為選擇器可以選擇所有type屬性值為text的元素。
5. 組合選擇器：使用多個選擇器組合成一個複合選擇器，以便更準確地選擇元素。例如，使用h1.class-name作為選擇器可以選擇所有class屬性為class-name的標題元素。

以下是一些CSS選擇器的示例：
```css
/* 元素選擇器 */
h1 {
    color: red;
}

/* 類選擇器 */
.class-name {
    font-size: 16px;
}

/* ID選擇器 */
#id-name {
background-color: yellow;
}

/* 屬性選擇器 */
[type="text"] {
border: 1px solid black;
}

/* 組合選擇器 */
h1.class-name {
text-align: center;
}
```
在編寫CSS樣式時，我們可以使用以上這些選擇器來選擇要應用樣式的HTML元素。同時，還可以使用通用選擇器、後代選擇器、子元素選擇器等更複雜的選擇器。

## 3.4 CSS框模型

在CSS中，每個HTML元素都被視為一個矩形框，稱為框模型。框模型由四個部分組成：內容區域、內邊距、邊框、外邊距。

![CSS box model](https://mdn.mozillademos.org/files/13647/boxmodel-(3).png)

- 內容區域：元素的實際內容區域，例如文字、圖像等。
- 內邊距：內容區域和邊框之間的區域，用於設置元素的內部空間。
- 邊框：內邊距和外邊距之間的區域，用於設置元素的邊框。
- 外邊距：元素邊框和周圍元素之間的區域，用於設置元素的外部空間。

框模型的每一個部分都可以設置對應的CSS樣式，例如：
```css
/* 設置內容區域的寬度和高度 */
div {
    width: 200px;
    height: 100px;
}

/* 設置內邊距 */
div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}

/* 設置邊框 */
div {
    border-width: 2px;
    border-style: solid;
    border-color: red;
}

/* 設置外邊距 */
div {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}
```
## 3.5 CSS優先級

當多個CSS樣式作用於同一個元素時，會按照一定的優先級規則決定最終樣式的應用順序。CSS優先級的決定方式如下：

1. 樣式繼承的優先級最低，即樣式被繼承時，不會影響元素的優先級。
2. HTML標籤的優先級次之，例如<div>和<p>等標籤，它們的優先級相同。
3. 類(class)、ID和屬性選擇器的優先級較高，其中ID選擇器的優先級最高。
4. 通用選擇器(*)和組合選擇器的優先級最低。

當多個樣式具有相同的優先級時，最後一個樣式具有優先權。

例如：
```html
<div id="box" class="container"></div>
```
```css
/* 樣式1 */
#box {
    background-color: red;
}

/* 樣式2 */
.container {
    background-color: blue;
}

/* 樣式3 */
div {
    background-color: green;
}
```
在上述例子中，樣式1的優先級最高，因為它使用了ID選擇器，樣式2的優先級次之，因為它使用了類選擇器，而樣式3的優先級最低，因為它使用了HTML標籤選擇器。

## 3.6 CSS屬性縮寫

CSS提供了一種屬性縮寫的方法，可以在一個聲明中設置多個CSS屬性，例如：
```css
/* 等同於font-size: 16px; font-weight: bold; font-family: Arial; */
font: bold 16px Arial;
```
屬性縮寫包括以下屬性：

1. `background`
2. `border`
3. `border-radius`
4. `font`
5. `list-style`
6. `margin`
7. `padding`
8. `transition`

使用屬性縮寫可以簡化CSS代碼，提高代碼的可讀性和可維護性。

總結
本章介紹了CSS的基礎知識，包括CSS的語法、選擇器、框模型、優先級和屬性縮寫等。熟悉這些知識對於寫出高質量的CSS代碼非常重要。在下一章中，我們將介紹CSS的進階特性，例如CSS佈局和動畫等。