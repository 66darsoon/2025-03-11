<script>
export default {
  data() {
    return {
      menu: [
            { foodName: '陶板蛋酥絲瓜', price: 380 },
            { foodName: '客家筍干圓蹄', price: 490 },
            { foodName: '避風塘大蝦', price: 480 },
            { foodName: '百菇鮮蝦羹', price: 480 },
            { foodName: '白玉蕈菇海鮮羹', price: 520 },
            { foodName: '翡翠海鮮羹', price: 520 },
            { foodName: '麻辣水煮小卷', price: 520 },
            { foodName: '翡翠圓蹄', price: 580 },
            { foodName: '蕈菇娃娃菜', price: 380 },
            { foodName: '焗烤大草蝦', price: 680 },
            { foodName: '陶板塩烤大蝦', price: 480 },
            { foodName: '蒜蓉鮮蝦粉絲煲', price: 580 },
            { foodName: '南瓜海鮮羹', price: 520 },
            { foodName: '蒜蓉鮮蝦豆腐煲', price: 490 },
            { foodName: '麻辣水煮(牛羊豬)', price: 450 },
            { foodName: '枸杞花枝鮮魚卷', price: 580 },
            { foodName: '金沙大草蝦', price: 680 },
            { foodName: '中式脆皮豬腳', price: 780 },
            { foodName: '黑胡椒豬肋排', price: 780 },
          ],
          orders:[],
          checkTable: '',
    }
  },
  methods: {
    addOrder() {
      const selectItem = this.menu.filter(item => item.picked);

      selectItem.forEach(order => {
        this.orders.push({
          foodName: order.foodName,
          price: order.price,
        });
      });

      // 清空check選擇
      this.menu.forEach(item => {
          item.picked = false; // 重置選擇
        });
    },
    totalPrice() {
      return this.orders.reduce((total, order) => total + order.price, 0);
    }
  }
}

</script>

<template>
<figure>
      <img src="https://lh3.ggpht.com/p/AF1QipMRLHRj0MA_ZtP3o9EagKWJ5M_nQCbCczdpZ5F3=s1024" alt="菜單">
    </figure>
    <div class="container">
      <div>
        <div class="top-block">
          <p class="text-3xl">菜單選項</p>
          <label>
            <select v-model="checkTable">
              <option  value="" hidden>請選擇桌號</option>
              <option value="1號桌">1號桌</option>
            </select>
          </label>
        </div>
        <hr>
        <div class="options">
          <label  v-for="(item, index) in menu" :key="index" >
            <input v-model="item.picked" type="checkbox" :value="item.foodName">
            {{ item.foodName }}
          </label>
        </div>
      </div>
      <div>
        <button type="button" class="btn" @click="addOrder">結帳</button>
        <table border="1">
          <thead>
            <tr>
              <th>餐點</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <td>{{ order.foodName }}</td>
              <td>{{ order.price }}元</td>
            </tr>
            
            <tr>
              <td colspan="2">
                <div class="order-buttom">
                  <span>桌號：{{ checkTable }} </span>
                  <span>合計： {{ totalPrice() }} 元</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<style>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: cadetblue;
    }

    #app {
      display: flex;
      gap: 24px;
      padding: 30px;
    }

    figure {
      flex: 1;
      margin: 0 auto;
    }
    
    img {
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 680px;
      padding: 30px;
      background-color: #fff;
    }

    .top-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }

    select {
      padding: 4px;
      border-radius: 4px;
    }

    .options {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      flex-wrap: wrap;
      gap: 16px;
      padding: 12px 0;
    }

    .options label, .options input {
      cursor: pointer;
    }

    .btn {
      width: 100%;
      padding: 8px 16px;
      background-color: yellowgreen;
      color: #000;
      border-radius: 4px;
      margin-bottom: 8px;
      margin-right: 8px;
      font-size: 1.125rem;
      cursor: pointer;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 8px;
    }

    td[colspan="2"] {
      text-align: right;
    }

    .order-buttom {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
</style>