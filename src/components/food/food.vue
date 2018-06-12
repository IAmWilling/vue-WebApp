<template>
  <div>
    <transition name="toggle">
      <div v-show="showFlag" class="food" ref="food_content">
        <div class="food-content" style="position:relative;">
          <div class="image-header">
            <img :src="food.image" @click="showPicture(food.image)" alt="">
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
              <div style="display:inline-block;">
                <span class="now"> <span style="font-size:0.75rem;font-weight:700">￥</span>{{food.price}}</span>
                <span class="old"> <del>￥{{food.oldPrice}}</del></span>
              </div>
              <div class="cartcontrol-wraper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
              <transition name="scale">
                <div @click.stop.prevent="handleAdd(food,$event)" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
              </transition>
            </div>
          </div>
  
  
          <div class="food-detail-content border_top border" v-show="food.info">
            <h1 style="font-size:0.9rem;color:#091219;">商品介绍</h1>
            <p class="text">{{food.info}}</p>
          </div>
          <div class="rating border_top border">
            <h1 class="title">商品评价</h1>
            <ratingselect @content_toggle="content_toggles" @ratingType_select="ratingType_selects" :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
            <div class="rating-wrapper">
              <ul v-show="food.ratings && food.ratings.length">
                <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings" class="rating-item border" :key="rating.username">
                  <div class="user">
                    <span class="name">{{rating.username}}</span>
                    <img width="12" height="12" :src="rating.avatar" alt="" class="avarar">
                  </div>
                  <div class="time">{{rating.rateTime | formatDates}}</div>
                  <p class="text">
                    <span v-show="rating.rateType==0" class="iconfont icon_up">&#xe602;</span>
                    <span v-show="rating.rateType==1" class="iconfont icon_down">&#xe61e;</span>{{rating.text}}
                  </p>
                </li>
              </ul> 
               <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
            </div>
          </div>
        </div>
        
      </div>
    </transition>
    <pictures :img="imgPicture" ref="pic"></pictures>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Vue from "vue";
import pictures from '../picture/picture'
import cartcontrol from "../cartcontrol/cartcontrol";
import ratingselect from "../ratingselect/ratingselect";
import { formatDate } from "@/common/js/data.js";

const ALL = 2;
export default {
  filters: {
    formatDates(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  },
  components: {
    cartcontrol,
    ratingselect,
    pictures
  },
  props: {
    food: Object
  },
  data() {
    return {
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: "全部",
        positive: "推荐",
        negative: "吐槽"
      },
      imgPicture:null,
    };
  },
  methods: {
    showPicture(img){
      this.$refs.pic.isShowPicture = true;
      this.imgPicture = img;
    },
    show() {
      //初始化
      this.showFlag = true;
      this.selectType = ALL;
      this.onlyContent = true;
      this.$nextTick(() => {
        this._initBetterScroll();
      });
    },
    hide() {
      this.showFlag = false;
    },
    _initBetterScroll() {
      this.foot_content = new BScroll(this.$refs.food_content, {
        click: true
      });
    },
    handleAdd(food, event) {
      if (!event._constructed) {
        return;
      }
      Vue.set(this.food, "count", 1);
    },
    needShow(type, text) {
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType == ALL) {
        return true;
      } else {
        return type == this.selectType;
      }
    },
    ratingType_selects(data) {
      this.selectType = data;
      this.$nextTick(() => {
        this.foot_content.refresh();
      });
    },
    content_toggles(data) {
      this.onlyContent = !this.onlyContent;
      this.$nextTick(() => {
        this.foot_content.refresh();
      });
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

  .content {
    padding: 18px;
    background-color: #fff;
    width: 100%;

    .title {
      font-size: 14px;
      font-weight: 700;
      color: rgb(7, 17, 27);
    }

    .detail {
      margin-top: 0.3rem;
      margin-bottom: 1rem;
      text-align: left;

      .sell-count, .rating {
        font-size: 0.8rem;
        color: rgb(147, 153, 159);
      }

      .sell-count {
        font-size: 0.8rem;
      }

      .rating {
        margin-left: 0.8rem;
      }
    }

    .price {
      width: 100%;

      .now {
        font-size: 1.2rem;
        color: red;
        font-weight: 700;
      }

      .old {
        font-size: 0.8rem;
        color: rgb(147, 153, 159);
        font-weight: 700;
        margin-left: 0.5rem;
      }

      .buy {
        display: inline-block;
        width: 5rem;
        border-radius: 1rem;
        height: 2rem;
        background-color: #00a0dc;
        margin-right: 1rem;
        color: #fff;
        line-height: 2rem;
        font-size: 0.8rem;
        text-align: center;
        position: absolute;
        left: 75%;
        z-index: 10;
      }

      .cartcontrol-wraper {
        display: inline-block;
        position: absolute;
        left: 75%;
        margin-top: 0.3rem;
        z-index: 1;
      }
    }
  }

  // 购物车
  .food-detail-content {
    margin-top: 1rem;
    padding: 18px;
    background-color: #fff;

    .text {
      font-size: 0.8rem;
      color: rgb(147, 153, 159);
      line-height: 1.4rem;
      padding: 0 0.5rem;
    }
  }

  .rating {
    margin-top: 1rem;
    background-color: #fff;

    .title {
      font-size: 0.9rem;
      color: #091219;
      margin-left: 18px;
      margin-top: 1rem;
    }

    .rating-wrapper {
      padding: 0 18px;

      .rating-item {
        position: relative;
        padding: 16px 0;

        .user {
          position: absolute;
          right: 0;
          top: 16px;
          line-height: 12px;
          font-size: 0rem;

          .name {
            display: inline-block;
            margin-right: 6px;
            vertical-align: top;
            font-size: 0.8rem;
            color: rgb(147, 153, 159);
          }

          .avatar {
            border-radius: 50%;
          }

          .time {
            margin-bottom: 6px;
            line-height: 12px;
            font-size: 0.8rem;
            color: rgb(147, 153, 159);
          }

          .text {
            line-height: 16px;
            font-size: 0.8rem;
            color: rgb(7, 17, 27);
          }
        }
      }
    }
  }
}

.icon_up {
  line-height: 16px;
  margin-right: 4px;
  font-size: 15px;
  color: rgb(0, 160, 220);
}

.icon_down {
  line-height: 16px;
  margin-right: 4px;
  font-size: 14px;
  color: rgb(147, 153, 159);
}

.no-rating {
  padding: 16px 0;
  font-size: 12px;
  color: rgb(147, 153, 159);
}

.scale-enter-active, .scale-leave-active {
  transition: opacity 0.5s;
}

.scale-enter, .scale-leave-to { /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
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
