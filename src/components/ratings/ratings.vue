<template>
    <div class="ratings" ref="ratings_content">
      <div class="ratings-content" >
        <div class="overview border">
          <div class="overview-left">
            <h1 class="score">{{seller.score}}</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家{{seller.rankRate}}%</div>
          </div>
          <div class="overview-right">
            <div class="score-wrapper">
              <span class="title">服务态度</span>
               <star :size="36" :score="seller.serviceScore" class="star"></star>
               <span class="score">{{seller.serviceScore}}</span>
            </div>
             <div class="score-wrapper">
               <span class="title">商品评分</span>
               <star :size="36" :score="seller.foodScore" class="star"></star>
               <span class="score">{{seller.foodScore}}</span>
             </div>
             <div class="delivery-wrapper">
               <span class="title">送达时间</span>
               <span class="delivery">{{seller.deliveryTime}}分钟</span>
             </div>
          </div>
        </div>
      
        <!-- @content_toggle="content_toggles" @ratingType_select="ratingType_selects"      :desc="desc"  -->
         <ratingselect class="ratingselect" @content_toggle="content_toggles" @ratingType_select="ratingType_selects" :selectType="selectType" :ratings="ratings"></ratingselect>


         <div class="rating-wrapper">
           <ul>
             <li v-show="needShow(rating.rateType,rating.text)" v-for="(rating,index) in ratings" class="rarting-item border" :key="index">
              <div class="avatar">
                <img :src="rating.avatar" alt="" width="28" height="28">
              </div>
              <div class="content">
                <h1 class="name">{{rating.username}}</h1>
                <div class="star-wrapper">
                  <star :size="24" :score="rating.score" class="star"></star>
                  <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
                </div>
                <p class="text">{{rating.text}}</p>
                <div class="recommend" v-show="rating.recommend.length">
                  <span class="iconfont icon_up">&#xe602;</span>
                  <span v-for="(item,index) in rating.recommend" :key="index" class="item border-base">{{item}}</span>
                </div>
                <div class="time">
                  {{rating.rateTime | formatDates}}
                </div>
              </div>
             </li>
           </ul>
         </div>
      </div>
    </div>
</template>
<script>
import star from "../start/start";
import ratingselect from "../ratingselect/ratingselect";
import { formatDate } from "@/common/js/data.js";
import BScroll from "better-scroll";
import axios from "axios";
const ALL = 2;
export default {
  filters: {
    formatDates(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  components: {
    star,
    ratingselect
  },
  name: "ratings",
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.$nextTick(() => {
      axios
        .get("/api/data.json")
        .then(res => {
          this.ratings = res.data.ratings;
        })
        .catch(error => {
          alert("接收失败");
        });

      this._inScroll();
    });
  },
  data() {
    return {
      ratings: [],
      showFlag: false,
      selectType: ALL,
      onlyContent: true
    };
  },
  methods: {
    _inScroll() {
      this.ratingsScroll = new BScroll(this.$refs.ratings_content, {
        click: true
      });
    },
    ratingType_selects(data) {
      this.selectType = data;
      this.$nextTick(() => {
        this.ratingsScroll.refresh();
      });
    },
    content_toggles(data) {
      this.onlyContent = !this.onlyContent;
      this.$nextTick(() => {
        this.ratingsScroll.refresh();
      });
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
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.ratings {
  position: absolute;
  top: 12.5rem;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: #F4F5F7;

  .ratings-content {
    .overview {
      display: flex;
      padding-top: 18px;
      padding-right: 10px;
      padding-bottom: 18px;
      padding-left: 10px;
      background-color: #fff;

      .overview-left {
        padding: 0.5rem 0;
        border-right: 1px solid rgba(7, 17, 27, 0.1);
        flex: 0 0 7rem;
        width: 8.5rem;
        text-align: center;

        @media only screen and (max-width: 320px) {
          flex: 0 0 7.5rem;
          width: 7.5rem;
        }

        .score {
          margin-bottom: 0.3rem;
          line-height: 1.75rem;
          font-size: 1.7rem;
          color: rgb(255, 153, 0);
        }

        .title {
          font-size: 0.75rem;
          line-height: 0.75rem;
          color: rgb(7, 17, 27);
          margin-bottom: 0.5rem;
        }

        .rank {
          line-height: 0.625rem;
          font-size: 0.625rem;
          color: rgb(147, 153, 159);
        }
      }

      .overview-right {
        flex: 1;
        margin-left: 5px;
        padding-left: 0.8rem;
        padding-top: 6px;

        .score-wrapper {
          margin-bottom: 0.3rem;
          line-height: 18px;
          font-size: 0;

          .title {
            display: inline-block;
            vertical-align: top;
            font-size: 0.75rem;
            color: rgb(7, 17, 27);
          }

          .star {
            margin-left: 0.3rem;
            display: inline-block;
          }

          .score {
            display: inline-block;
            vertical-align: top;
            font-size: 0.75rem;
            color: rgb(255, 153, 0);
          }
        }

        .delivery-wrapper {
          font-size: 0;

          .title {
            display: inline-block;
            vertical-align: top;
            font-size: 0.75rem;
            color: rgb(7, 17, 27);
          }

          .delivery {
            margin-left: 1rem;
            font-size: 0.75rem;
            color: rgb(147, 153, 159);
          }
        }
      }
    }

    .ratingselect {
      margin-top: 1rem;
      background-color: #fff;
    }

    .rating-wrapper {
      background-color: #fff;
      padding: 0 0.75rem;

      .rarting-item {
        display: flex;
        padding: 0.75rem;
        0;
      }

      .avatar {
        margin-right: 12px;

        img {
          border-radius: 50%;
        }
      }

      .content {
        flex: 1;
        position: relative;

        .name {
          margin-bottom: 4px;
          font-size: 0.75rem;
          line-height: 12px;
          color: rgb(7, 17, 27);
        }

        .star-wrapper {
          font-size: 0;
          margin-bottom: 6px;

          .star {
            display: inline-block;
            vertical-align: top;
            margin-right: 6px;
          }

          .delivery {
            display: inline-block;
            vertical-align: top;
            margin-right: 6px;
          }
        }

        .text {
          line-height: 0.75rem;
          font-size: 0.8rem;
          margin-bottom: 8px;
        }

        .recommend {
          line-height: 16px;
          font-size: 0rem;

          .icon_up, .item {
            display: inline-block;
            margin-right: 8px;
            margin-bottom: 4px;
            font-size: 9px;
          }

          .icon_up {
            color: rgb(0, 160, 220);
          }

          .item {
            padding-right: 6px;
            color: rgb(147, 153, 159);
            background-color: #fff;
            font-size: 0.75rem;
          }
        }

        .time {
          position: absolute;
          top: 0;
          right: 0;
          line-height: 12px;
          font-size: 10px;
          color: rgb(147, 153, 159);
          font-size: 0.75rem;
        }
      }
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

.border-base {
  border-bottom: 0.1rem solid #E6E7E9;
  border-radius: 1px;
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .border-base {
    border: 0.05rem solid #E6E7E9;
    border-radius: 1px;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .border-base {
    border: 0.0333333rem solid #E6E7E9;
    border-radius: 1px;
  }
}
</style>
