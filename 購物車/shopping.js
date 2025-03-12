// 取得控制下拉選單元素
const dropdownMenuBtn = document.querySelector('#dropdown-menu-btn');
const dropdownMenu = document.querySelector('#dropdown-menu');
// 取得商品加減按鈕元素
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
// 取得商品數量元素
const goodsCount = document.querySelector('#goods-count');
// 取得商品價格元素
const goodsPrice = document.querySelector('#goods-price');
// 取得顯示結果元素
const showCount = document.querySelector('#show-count');
const showGoodsPrice = document.querySelector('#show-goods-price');
const showTransPrice = document.querySelector('#show-trans-price');
const showTotalPrice = document.querySelector('#show-total-price');

// 取得送出按鈕元素
const submitBtn = document.querySelector('#submit-btn');

// 檢查視窗大小，超過 768px 時隱藏 dropdown menu
window.addEventListener('resize', function () {
  if(document.body.offsetWidth >= 768){
    dropdownMenu.classList.add('hidden');
  }
});

// 監聽下拉選單事件(顯示或隱藏)
dropdownMenuBtn.addEventListener('click', function(){
  dropdownMenu.classList.toggle('hidden');
});

// 商品數量增加
plus.addEventListener('click', function () {
  goodsCount.value ++;
});

// 商品數量減少
minus.addEventListener('click', function () {
  if(goodsCount.value > 0){
    goodsCount.value --;
  }
});

// 下一步按鈕監聽
submitBtn.addEventListener('click', function (){
  let count = goodsCount.value;
  let price = goodsPrice.textContent;
  let transPrice = 0;

    if(count * price < 300){
      transPrice = 60;
    }else {
      transPrice = 0;
    }

  showCount.textContent = count;
  showGoodsPrice.textContent = count * price;
  showTransPrice.textContent = transPrice;
  showTotalPrice.textContent = count * price + transPrice;
});








