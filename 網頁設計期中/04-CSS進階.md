# 第四章：CSS進階

在本章中，我們將介紹CSS的進階特性，包括CSS佈局、CSS3動畫和CSS預處理器等。

## 4.1 CSS佈局

CSS佈局是網頁設計中非常重要的一個方面，它用於控制網頁中元素的位置和大小。在CSS佈局中，通常使用的屬性包括`position`、`display`、`float`、`clear`和`z-index`等。

### 4.1.1 position屬性

position屬性用於定位元素，它有以下幾個值：

1. `static`：元素的位置由文檔流決定，不能使用定位屬性來改變其位置。
2. `relative`：元素的位置相對於其正常位置進行偏移，不會影響其兄弟元素的位置。
3. `absolute`：元素的位置相對於其最近的非static定位祖先元素進行偏移，如果不存在這樣的祖先元素，則相對於文檔的初始點。
4. `fixed`：元素的位置相對於視口進行偏移，當頁面滾動時，元素的位置不會改變。

### 4.1.2 display屬性

display屬性用於控制元素的顯示方式，它有以下幾個值：

1. `block`：元素被視為一個塊級元素，佔據整個父容器的寬度，並且在前後都有換行符。
2. `inline`：元素被視為一個內聯元素，只佔據它所包含內容所需的寬度，不會在前後換行。
3. `inline-block`：元素被視為一個內聯塊級元素，佔據整個父容器的寬度，但不會在前後換行。
4. `none`：元素不顯示，但佔據原本的位置和大小。

### 4.1.3 float屬性

float屬性用於控制元素的浮動方式，它有以下幾個值：

1. `left`：元素向左浮動，將其放置在父容器的左側。
2. `right`：元素向右浮動，將其放置在父容器的右側。
3. `none`：元素不浮動。

### 4.1.4 clear屬性

clear屬性用於控制元素周圍的浮動元素，它有以下幾個值：

1. `left`：元素下方不允許出現左側的浮動元素。
2. `right`：元素下方不允許出現右側的浮動元素。
3. `both`：元素下方不允許出現任何浮動元素。
4. `none`：元素允許出現浮動元素。

### 4.1.5 `z-index`屬性

z-index屬性用於控制元素的堆疊順序，它的值為正整數。值越大的元素，越靠近視口的前面。

## 4.2 CSS3動畫

CSS3動畫可以實現網頁中的動畫效果，並且不需要使用JavaScript。在CSS3動畫中，通常使用的屬性包括`animation-name`、`animation-duration`、`animation-timing-function`、`animation-delay`、`animation-iteration-count和animation-direction`等。

### 4.2.1 `animation-name`屬性

`animation-name`屬性用於指定動畫的名稱，可以通過`@keyframes`規則來定義動畫。例如：
```css
@keyframes myanimation {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

.box {
  animation-name: myanimation;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```
### 4.2.2 `animation-duration`屬性

`animation-duration`屬性用於指定動畫的持續時間，值為正整數和小數。

### 4.2.3 `animation-timing-function`屬性

`animation-timing-function`屬性用於指定動畫的時間函數，可以控制動畫的加速度。常見的值包括`ease`、`linear`、`ease-in`、`ease-out`和`ease-in-out`等。

### 4.2.4 `animation-delay`屬性

`animation-delay`屬性用於指定動畫開始前的延遲時間，值為正整數和小數。

### 4.2.5 `animation-iteration-count`屬性

`animation-iteration-count`屬性用於指定動畫的迭代次數，可以是正整數、小數或infinite。

### 4.2.6 `animation-direction`屬性

`animation-direction`屬性用於指定動畫的播放方向，可以是`normal`、`reverse`、`alternate`或`alternate-reverse`等。

## 4.3 CSS預處理器

CSS預處理器是一種將CSS代碼進行預處理的工具，可以通過使用變量、函數和混合器等功能來提高CSS代碼的可讀性和可維護性。目前比較流行的CSS預處理器包括Sass、Less和Stylus等。

### 4.3.1 Sass

Sass是一種CSS預處理器，它可以讓CSS更加易讀、易維護，並提供了許多有用的功能，比如變量、混合器、繼承、函數等。

### 4.3.1.1 變量

Sass中的變量可以用來儲存重複使用的值，比如顏色、字體大小等。定義一個變量可以使用`$`符號，例如：

```css
$primary-color: #337ab7;

.btn-primary {
  color: $primary-color;
  background-color: darken($primary-color, 10%);
}
```
在上面的例子中，定義了一個名為$primary-color的變量，它的值是一個藍色。在.btn-primary類中，使用了$primary-color變量，這樣可以提高代碼的可讀性和可維護性。

### 4.3.1.2 混合器

Sass中的混合器可以用來定義一個可重用的代碼塊，比如設置顏色、字體等屬性。混合器定義使用@mixin，例如：
```css
@mixin button-styles($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border-radius: 4px;
}

.btn-primary {
  @include button-styles(#337ab7, #fff);
}

.btn-danger {
  @include button-styles(#d9534f, #fff);
}
```
在上面的例子中，定義了一個名為button-styles的混合器，它接受兩個參數：$bg-color和$text-color。在.btn-primary和.btn-danger類中，使用了button-styles混合器，並傳入了不同的參數。

### 4.3.1.3 繼承

Sass中的繼承可以讓一個樣式繼承另一個樣式的屬性，可以使用@extend實現繼承，例如：
```css
.btn {
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align:
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #337ab7;
  color: #fff;
  @extend .btn;
}

.btn-danger {
  background-color: #d9534f;
  color: #fff;
  @extend .btn;
}
```
在上面的例子中，`.btn`類定義了一些共用的屬性，`.btn-primary`和`.btn-danger`類使用了`@extend`繼承了`.btn`的屬性，這樣可以減少重複代碼，提高代碼的可維護性。

### 4.3.2 Less

Less是另一種CSS預處理器，它的語法比較簡潔，可以減少代碼的冗餘。Less和Sass很像，也提供了變量、混合器、繼承等功能。

以下是一個使用Less的例子：

```less
@primary-color: #337ab7;

.btn-primary {
  color: #fff;
  background-color: darken(@primary-color, 10%);
}
```
在上面的例子中，使用了@符號定義了一個變量@primary-color，然後在.btn-primary類中使用了這個變量，同時使用了darken函數讓顏色變暗。

### 4.3.3 Stylus

Stylus是另一個CSS預處理器，它的語法比較靈活，可以省略大括號、分號等符號，並且可以使用縮進來表示嵌套關係。

以下是一個使用Stylus的例子：

```css
primary-color = #337ab7

.btn-primary
  color: #fff
  background-color: darken(primary-color, 10%)
```
在上面的例子中，使用了=符號定義了一個變量`primary-color`，然後在`.btn-primary`類中使用了這個變量，同時使用了`darken`函數讓顏色變暗。
