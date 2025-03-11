<script>
export default {
  data() {
        return {
          // 菜單資料
          menu: [
            { foodName: '大雞腿便當', price: 95 },
            { foodName: '大滷雞腿便當', price: 95 },
            { foodName: '日式豬排便當', price: 85 },
            { foodName: '招牌排骨便當', price: 85 },
            { foodName: '鯖魚便當', price: 85 },
            { foodName: '三杯雞便當', price: 85 },
            { foodName: '茄汁排骨便當', price: 85 },
            { foodName: '招牌雞腿便當', price: 65 }
          ],
          // 人員資料
          orders: [
            ...Array(17).fill(0).map((_, index) => ({ selected: index, picked: '', price: 0 })),
          ],
          totalOrders: 0,
          totalPrice: 0,
          isOrderSubmitted: false
        };
      },
      methods: {
        // 計算便當總數與總金額
        checkPrice() {
          this.totalOrders = 0;
          this.totalPrice = 0;

          this.orders.forEach(order => {
            if (order.picked) {
              const selectedItem = this.menu.find(item => item.foodName === order.picked);
              order.price = selectedItem.price;

              this.totalOrders++;
              this.totalPrice += order.price;
            }
          });

          this.isOrderSubmitted = true;
        },
        // 顯示所有人員
        showName(item) {
          if (item === 0) return '老師';
          if (item === 1) return '助教';
          if (item > 1) return `學生${String.fromCharCode(65 - 2 + item)}`
        },
        // 重訂便當
        resetOrder() {
          this.orders = [
            ...Array(17).fill(0).map((_, index) => ({ selected: index, picked: '', price: 0 }))
          ];
          this.totalOrders = 0;
          this.totalPrice = 0;
          this.isOrderSubmitted = false;
        },
      }
}
</script>

<template>
      <figure class="img-block">
      <img src="@/assets/便當菜單.jpg" alt="便當菜單">
    </figure> 
    <div class="container">
      <fieldset class="card" v-for="(order, index) in orders" :key="index">
        <legend>{{ showName(order.selected) }}</legend>

        <div>
          <!-- 顯示目前菜單 -->
          <div v-for="item in menu" :key="item.foodName">
            <label>
              <input v-model="order.picked" type="radio" :value="item.foodName" :disabled="isOrderSubmitted">
              {{ item.foodName }}
            </label>
          </div>
          <hr>
          <p class="choose">{{ order.picked }}</p>
        </div>
      </fieldset>
    </div>
    <hr>
    <aside class="statistics-block">
      <div>
        <button type="button" class="btn" @click="checkPrice" :disabled="isOrderSubmitted">送出訂單</button>
        <button type="button" class="btn" @click="resetOrder" :disabled="!isOrderSubmitted">重訂便當</button>
      </div>
      <p>總共訂 {{ totalOrders }} 個便當</p>
      <p>
        共
        <b class="total">{{ totalPrice }} </b>
        元
      </p>
    </aside>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.img-block {
  display: flex;
  justify-content: center;
  background-color: rgb(195, 31, 31);
}

img {
  height: 50dvh;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 4px 12px 12px;
  border: 1px solid #000000;
  border-radius: 8px;
}

.card legend {
  font-size: 1.125rem;
  font-weight: bold;
}

.card label,
.card input {
  cursor: pointer;
}

.card .choose {
  display: flex;
  justify-content: center;
  height: 22.5px;
  color: blue;
}

.btn {
  padding: 8px 16px;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-right: 8px;
  cursor: pointer;
}

.btn:hover {
  background-color: #333333;
  color: #fff;
}

.statistics-block {
  padding: 12px 30px;
}

.total {
  font-size: 1.5rem;
  color: red;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>