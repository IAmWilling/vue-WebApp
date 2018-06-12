<template>
  <div class="cartcontrol">
    <!-- 减号按钮 -->
    <transition name="fade">
      <div class="cart-decrease iconfont" v-show="food.count>0" @touchstart.stop.prevent="decreaseCart($event)">
        &#xe601;
      </div>
    </transition>
    <!-- 数量 -->
      <transition name="fade-count">
    <div class="cart-count iconfont" v-show="food.count>0">{{food.count}}</div>
    </transition>
    <div class="cart-add iconfont" @touchstart.stop.prevent="addCart($event)">&#xe659;</div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "cartcontrol",
  props: {
    food: {
      type: [Object, Array]
    }
  },
  methods: {
    addCart(event) {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        
        this.food.count++;
      }
      //当点击的时候传入dom对象
      // this.$disp atch('cart.add',event.target);
      console.log(this.food.count);
    },
    decreaseCart(event) {
    
      if (this.food.count) {
        this.food.count--;
      }
     
    },
   
  }
};
</script>
<style lang="stylus" scoped>
.fade-enter-active {
  opacity: 1;
  transform: translate3D(0rem, 0, 0) rotate(0deg);
  // transform: rotate(0deg);
  transition-duration: 0.6s;
}

.fade-leave-active {
  opacity: 1;
  transform: translate3D(0rem, 0, 0) rotate(0deg);
  // transform: rotate(0deg);
  transition-duration:  0.6s;
}

.fade-enter {
  opacity: 0;
  transform: translate3D(2rem, 0, 0) rotate(180deg);
  // transform: rotate(180deg);
  transition-duration:  0.6s;
}

.fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
  transform: translate3D(2rem, 0, 0) rotate(180deg);
  // transform: rotate(180deg);
  transition-duration:  0.6s;
}
.fade-count-enter-active, .fade-count-leave-active {
  transition: opacity .5s;
}
.fade-count-enter, .fade-count-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@font-face {
  font-family: 'iconfont'; /* project id 652215 */
  src: url('//at.alicdn.com/t/font_652215_5u5sbhy7dry3c8fr.eot');
  src: url('//at.alicdn.com/t/font_652215_5u5sbhy7dry3c8fr.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_652215_5u5sbhy7dry3c8fr.woff') format('woff'), url('//at.alicdn.com/t/font_652215_5u5sbhy7dry3c8fr.ttf') format('truetype'), url('//at.alicdn.com/t/font_652215_5u5sbhy7dry3c8fr.svg#iconfont') format('svg');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.cartcontrol {
  font-size: 0rem;
  padding: 0.5rem;

  .cart-decrease {
    display: inline-block;
    line-height: 0.3rem;
    font-size: 1.3rem;
    color: #2396FF;
  }

  .cart-count {
    display: inline-block;
    font-size: 0.8rem;
    text-align: center;
    vertical-align: top;
    color: rgb(147, 153, 159);
    line-height: 0.3rem;
    margin-left: 0.4rem;
  }

  .cart-add {
    display: inline-block;
    line-height: 0.3rem;
    font-size: 1.3rem;
    color: #2396FF;
    margin-left: 0.4rem;
  }
}
</style>
