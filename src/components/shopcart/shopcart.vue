<template>
<div>
 <div class="shopcart">
      <div class="content" @click="toggleList">
          <div class="content-left">
              <!-- 容器包装它logo -->
              <div class="logo-wrapper">
                  <div class="logo" :class="{'highlight':totalCount>0}">
                      <span class="iconfont ico" :class="{'highlight-icon':totalCount>0}">&#xe63a;</span>
                  </div>
                  <div class="num" v-show="totalCount>0">{{totalCount}}</div>
              </div>
              <!-- 费用 -->
              <div class="price" :class="{'highlight-price':totalPrice>0}">￥{{totalPrice}}</div>
              <!-- 描述 配送价 -->
              <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
          </div>
          <div class="content-right" :class="payClass" @click.stop.prevent="pay">{{payDesc}}</div>
      </div>
      <div class="ball-containe">
          <div v-for="ball in balls" v-show="ball.show" transition="drop" class="ball">
              <div class="inner inner-hook"></div>
          </div>
      </div>
      <!-- 购物车列表 -->
      <transition name="toggle">
  
  
          <div class="shopcart-list" v-show="listShow" >
              <div class="list-header">
                  <h1 class="title">购物车</h1>
     
                  <span class="empty" @click="emptyList">清空</span>
                 
              </div>
        
              <div class="list-content" ref="list_content">
                  <ul>
                      <li v-for="food in selectFoods" class="food">
                          <span class="name">{{food.name}}</span>
                          <div class="price">
                              <span>￥{{food.price * food.count}}</span>
                          </div>
                          <div class="cartontrol-wrappe icon-add">
                              <cartcontrol :food="food"></cartcontrol>
                          </div>
                      </li>
                 
                  </ul>
              </div>
          </div>
      </transition>
  </div>
<!-- 遮罩层 -->
<transition name="fade">
  <div class="list-mask" v-show="listShow" @click="hideList"></div>
</transition>


</div>
 
</template>
<script>
import cartcontrol from "../cartcontrol/cartcontrol";
import BScroll from "better-scroll";
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            count: 1,
            price: 10
          }
        ];
      }
    },
    deliveryPrice: Number,
    minPrice: Number
  },
  components: {
    cartcontrol
  },
  data() {
    return {
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      dropBall: [], //下落的小球
      fold: true //折叠
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      this.$store.commit("drop_push", this.drop(this.$store.state.targetBall));
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}元`;
      } else {
        return "去结算";
      }
    },
    payClass() {
      if (this.totalPrice < this.minPrice) {
        return "not-enough";
      } else {
        return "en-enough";
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true;
        return false;
      }
      let show = !this.fold;
      if (show) {
        this.$nextTick(() => {
          if (!this.shopcart) {
            this.shopcart = new BScroll(this.$refs.list_content, {
              click: true
            });
          }else{
            this.shopcart.refresh();
          }
        });
      }
      return show;
    }
  },
  methods: {
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i];
        if (!ball.show) {
          ball.show = true;
          ball.el = el;
          this.dropBall.push(ball);
          return;
        }
      }
    },
    toggleList() {
      if (!this.totalCount) {
        return;
      }
      this.fold = !this.fold;
    },
     emptyList(){
        this.selectFoods.forEach(food=>{
          food.count = 0;
        }) 
      },
      hideList(){
         this.fold = true
      },
      pay(){
        if(this.totalPrice<this.minPrice){
          return;
        }else{
          console.log(this.selectFoods)
          this.$store.commit("GetSelectFoods",this.selectFoods);
          this.$router.push("/payDetail")
        }
      }
  },
  transitions: {
    drop: {
      beforeEnter(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = "";
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementByClassName("inner-hook")[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      enter(el) {
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = "translate3d(0,0,0)";
          el.style.transform = "translate3d(0,0,0)";
          let inner = el.getElementByClassName("inner-hook")[0];
          inner.style.webkitTransform = "translate3d(0,0,0)";
          inner.style.transform = "translate3d(0,0,0)";
          alert(123);
        });
      },
      afterEnter(el) {
        let ball = this.dropBall.shift();
        if (ball) {
          ball.show = false;
          el.style.display = "none";
        }
      },
     
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

@font-face {
  font-family: 'iconfont'; /* project id 652215 */
  src: url('//at.alicdn.com/t/font_652215_pv87cmhwr2g9zfr.eot');
  src: url('//at.alicdn.com/t/font_652215_pv87cmhwr2g9zfr.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_652215_pv87cmhwr2g9zfr.woff') format('woff'), url('//at.alicdn.com/t/font_652215_pv87cmhwr2g9zfr.ttf') format('truetype'), url('//at.alicdn.com/t/font_652215_pv87cmhwr2g9zfr.svg#iconfont') format('svg');
}

.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 3rem;
  background: #000;

  .content {
    display: flex;
    font-size: 0;
    background-color: #141d27;

    .content-left {
      flex: 1;
      height: 3rem;
      background-color: #141d27;

      .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -0.8rem;
        margin: 0 1rem;
        padding: 0.45rem;
        width: 3.6rem;
        height: 3.5rem;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background-color: #141d27;
        line-height: 3.5rem;
        text-align: center;

        .highlight {
          transition-duration: 0.5s;
          background: #2396FF !important;
        }

        .logo {
          background-color: #2B333B;
          width: 2.8rem;
          height: 2.8rem;
          border-radius: 50%;
          line-height: 2.8rem;
          margin: 0 auto;

          .ico {
            color: #bfbfbf;
          }

          .highlight-icon {
            transition-duration: 0.5s;
            color: #fff !important;
          }
        }

        .num {
          position: absolute;
          background-color: rgb(240, 20, 20);
          color: #fff;
          max-width: 1.5rem;
          min-width: 1.3rem;
          height: 1rem;
          top: 0px;
          right: 0.2rem;
          border-radius: 0.5rem;
          line-height: 1rem;
          text-align: center;
          font-size: 0.5rem;
          font-weight: 600;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }

      .price {
        display: inline-block;
        font-weight: bold;
        font-size: 1rem;
        color: #999;
        position: relative;
        top: 0.7rem;
        padding-right: 0.3rem;
        height: 1.5rem;
        width: 4.5rem;
        text-align: center;
        line-height: 1.7rem;
        margin-left: -1.5%;
        border-right: 1px solid rgba(255, 255, 255, 0.4);
      }

      /* 价格高亮 */
      .highlight-price {
        transition-duration: 0.5s;
        color: #fff;
      }

      .desc {
        display: inline-block;
        font-size: 0.7rem;
        color: #999;
        height: 1.5rem;
        position: relative;
        top: 0.7rem;
        line-height: 1.5rem;
        margin-left: 0.5rem;
      }
    }

    .content-right {
      flex: 0 0 7rem;
      width: 7rem;
      height: 3rem;
      background-color: #2B333B;
      font-weight: 600;
      line-height: 3rem;
      color: #bfbfbf;
      font-size: 0.8rem;
      text-align: center;
    }

    .not-enough {
      transition-duration: 0.5s;
      background: #2b333b;
    }

    .en-enough {
      transition-duration: 0.5s;
      background-color: #58D178;
      color: #fff;
    }
  }

  .ball-containe {
    .ball {
      position: fixed;
      left: 32px;
      bottom: 22px;
      z-index: 200;

      &.drop-transition {
        transition: all 0.4s;

        .inner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: rgb(0, 160, 220);
          transition: all 0.2s;
        }
      }
    }
  }

  .shopcart-list {
    position: absolute;
    top: -10rem;
    left: 0;
    z-index: -1;
    width: 100%;
    background-color: #fff;

    .list-header {
      height: 2rem;
      background: red;
      line-height: 2rem;
      padding: 0 0.3rem;
      background-color: #f3f5f7;

      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }

      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }

    .list-content {
      padding: 0 18px;
      height: 125px;
      background-color: #fff;
      overflow: hidden;

      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        display: flex;

        .name {
          display: block;
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .price {
          position: absolute !important;
          right: 7.5rem !important;
          color: red !important;
        }
      }
    }
  }
}
/*遮罩层*/
.list-mask{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:40;
  background-color:rgba(7,17,27,0.75);
  backdrop-filter:blur(20px)

}
.icon-add {
  position: absolute;
  right: 2rem;
}

.toggle-enter-active {
  transform: translate3D(0, 0, 0);
  // transform: rotate(0deg);
  transition-duration: 0.6s;
}

.toggle-leave-active {
  transform: translate3D(0, 0, 0);
  // transform: rotate(0deg);
  transition-duration: 0.6s;
}

.toggle-enter {
  transform: translate3D(0, 10rem, 0);
  // transform: rotate(180deg);
  transition-duration: 0.6s;
}

.toggle-leave-to { /* .fade-leave-active below version 2.1.8 */
  transform: translate3D(0, 10rem, 0);
  // transform: rotate(180deg);
  transition-duration: 0.6s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
