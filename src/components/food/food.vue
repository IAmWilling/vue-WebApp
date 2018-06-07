<template>
  <div>
    <transition name="toggle">
      <div v-show="showFlag" class="food" >
        <div class="image-header">
          <img :src="food.image" alt="">
          <div class="back" @click="hide">
            <span class="iconfont icon">&#xe612;</span>
          </div>
          
        </div>
        <div class="content border">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now"> <span style="font-size:0.75rem;font-weight:700">￥</span>{{food.price}}</span>
            <span class="old"> <del>￥{{food.oldPrice}}</del></span>
          </div>
        </div>
        <div class="food-detail-content border_top border">
          <h1 style="font-size:0.9rem;color:#091219;">商品介绍</h1>
          <p class="text">{{food.info}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    food: Object
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.toggle-enter-active {
  transform: translate3D(0, 0, 0);
  // transform: rotate(0deg);
  transition-duration: 0.5s;
}

.toggle-leave-active {
  transform: translate3D(0, 0, 0);
  // transform: rotate(0deg);
  transition-duration: 0.5s;
}

.toggle-enter {
  transform: translate3D(80rem, 0, 0);
  // transform: rotate(180deg);
  transition-duration: 0.5s;
}

.toggle-leave-to { /* .fade-leave-active below version 2.1.8 */
  transform: translate3D(80rem, 0, 0);
  // transform: rotate(180deg);
  transition-duration: 0.5s;
}

.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 3rem;
  z-index: 30;
  width: 100%;
  background-color: #F4F5F7;
  .image-header {
    position: relative;
    width: 100%;
    height: 0rem;
    padding-top: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .back {
      position: absolute;
      top: 0.5rem;
      left: 0;

      .icon {
        display: bloack;
        padding: 1rem;
        color: #0fb0ff;
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }
  .content{
    padding:18px;
    background-color:#fff;
    .title{
      font-size:14px;
      font-weight:700;
      color:rgb(7,17,27)
    }
    .detail{
      margin-top:0.3rem;
      margin-bottom:1rem;
      text-align:left;
      .sell-count,.rating{
        font-size:0.8rem;
        color:rgb(147,153,159);
      }
      .sell-count{
        font-size:0.8rem;
      }
      .rating{
        margin-left:0.8rem;
      }
    }
    .price{
      
      .now{
        font-size:1.2rem;
        color:red;
        font-weight:700;
      }
      .old{
        font-size:0.8rem;
        color:rgb(147,153,159);
        font-weight:700;
        margin-left:0.5rem;
      }
    }
  }
  .food-detail-content{
    margin-top:1rem;
    padding:18px;
    background-color:#fff;
    .text{
      font-size:0.8rem;
       color:rgb(147,153,159);
       line-height:1.4rem;
    }
  }
}
.border {
	border-bottom: 0.1rem solid #E6E7E9;

}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
	.border {
		border-bottom: 0.05rem solid #E6E7E9;
	}
}

@media screen and (-webkit-min-device-pixel-ratio: 3) {
	.border {
		border-bottom: 0.0333333rem solid #E6E7E9;
	}
}
.border_top {
	border-top: 0.1rem solid #E6E7E9;
  
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
	.border {
		border-top: 0.05rem solid #E6E7E9;
	}
}

@media screen and (-webkit-min-device-pixel-ratio: 3) {
	.border {
		border-top: 0.0333333rem solid #E6E7E9;
	}
}
</style>
