<template>
  <div class="ratingselect">
    <div class="rating-type border">
      <span class="block positive"  @click="select(2,$event)" :class="{'active':selectType==2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span  class="block positive" @click="select(0,$event)" :class="{'active':selectType==0}">{{desc.positive}}<span class="count">{{positive.length}}</span></span>
      <span  class="block negative" @click="select(1,$event)" :class="{'active-black':selectType==1}">{{desc.negative}}<span class="count">{{negative.length}}</span></span>
    </div>
    <div class="switch border" @click="toggleContent" >
      <span class="iconfont icon" :class="{'on-icon':onlyContent==true}">&#xe629;</span>
      <span class="text">只看内容的评价</span>
    </div>
  </div>
</template>
<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
  props: {
    ratings: {
      type: Array,
      default() {
        return [];
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default() {
        return {
          all: "全部",
          positive: "满意",
          negative: "不满意"
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    positive() {
      return this.ratings.filter(rating => {
        return rating.rateType == POSITIVE;
      });
    },
    negative() {
      return this.ratings.filter(rating => {
        return rating.rateType == NEGATIVE;
      });
    }
  },
  methods: {
    select(type, event) {
      this.$emit("ratingType_select", type);
    },
    toggleContent() {
      this.$emit("content_toggle", this.onlyContent);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.ratingselect {
  .rating-type {
    padding: 18px 0;
    margin: 0 18px;
    font-size: 0rem;

    .block {
      display: inline-block;
      padding: 8px 12px;
      margin-right: 8px;
      border-radius: 1px;
      color: rgb(77, 85, 93);
      font-size: 0.96rem;

      .count {
        margin-left: 2px;
        font-size: 0.6rem;
      }
    }

    .positive {
      background-color: rgba(0, 160, 220, 0.2);
    }

    .negative {
      background-color: rgba(77, 85, 93, 0.2);
    }

    .active {
      color: #fff;
      background-color: rgb(0, 160, 220);
    }

    .active-black {
      color: #fff;
      background-color: gray;
    }
  }

  .switch {
    padding: 12px 18px;
    line-height: 24px;
    color: rgb(147, 153, 159);
    font-size: 0px;

    .icon {
      display: inline-block;
      vertical-align: top;
      margin-right: 4px;
      font-size: 24px;
    }

    .on-icon {
      color: #00c850;
    }
    .text {
      display: inline-block;
      line-height: 30px;
      font-size: 1rem;
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
  .border_top {
    border-top: 0.05rem solid #E6E7E9;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .border_top {
    border-top: 0.0333333rem solid #E6E7E9;
  }
}
</style>
