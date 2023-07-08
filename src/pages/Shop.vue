<template>
  <div class="wrapper-content wrapper-content--fixed">

    <section>
      <div class="container">
        <h1>shop page</h1>
        <div class="item___wrapper">
        <shopItem
        v-for="product in shopList"
        :key="product.id"
        :product="product"
        />
          </div>
      </div>
    </section>


  </div>
</template>

<script>
import shopItem from'@/components/ShopItem'
export default {
  components:{
    shopItem
  },
  data(){
    return{
      shopList:null
    }
  },
  beforeCreate() {
  },
  created(){
    if(this.$store.getters.getShopList == 0){
      let prod = this.$store.getters.getProductList;
      prod.forEach(v => {
        this.$store.dispatch('addShopList',v)
      })
    }
    this.shopList = this.$store.getters.getShopList;
    console.log(this.shopList)
  },
  mounted(){

  }
}
</script>
