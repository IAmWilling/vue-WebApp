<template>
  <div class="payDetail">
  
    <div class="headers">
      <div class="header-top">
        <div class="iconfont" style="color:#fff;font-size:1.3rem;font-weight:500;flex:0 0 16rem;"> <span @click="returnGoods">&#xe612;</span> </div>
        <div class="peisongtext"><span style="font-size:1.1rem;font-weight:700;margin-right:5px;">10:00</span>开始配送</div>
      </div>
      <div class="address-detail">
        <div style="font-size:0.9rem;color:#CCEDFF;">订单配送至</div>
        <div class="address-content">
          <div class="address-text">
            <marquee id="scrollText" onmouseover="scrollText.stop();" onmouseout="scrollText.start();" scrollamount="2" direction="left"
              behavior="alternate">河北软件职业技术学院(东校区)A座教学楼 105门</marquee>
          </div>
          <div class="iconfont" style="font-size:1rem;color: #A3D4FF;line-height:2rem;">&#xe61d;</div>
        </div>
        <div style="font-size:0.98rem;color:#ffffff;">张（先生）18931893326</div>
      </div>
    </div>

  
    <div class="content-detail">
      <div class="content-detail-one">
        <div class="detail-one-top">
          <div class="detail">
            <div style="color:black;font-size:0.96rem;font-weight:700;line-height:2rem;flex:1;">送达时间</div>
            <div style="color:#2396FF;font-size:0.96rem;font-weight:700;line-height:2rem;">选择预定送达时间</div>
            <div class="iconfont" style="font-size:1rem;color: #D1D1D6;line-height:2rem;margin-left:0.3rem;">&#xe61d;</div>
          </div>
        </div>
        <div class="border-1Px" style="width:90%;margin:0 auto;"></div>
        <div class="detail-one-bottom">
          <div class="detail">
            <div style="color:black;font-size:0.96rem;font-weight:700;height:3rem;flex:1;">
              <div style="color:black;font-size:0.96rem;font-weight:700;line-height:2rem;">支付方式</div>
              <div style="color:#999999;font-size:0.71rem;font-weight:500;">花呗新户下单<span style="color:#FF624A;">立减5元</span></div>
  
            </div>
            <div style="color:#2396FF;font-size:0.96rem;font-weight:700;line-height:3rem;">支付宝</div>
            <div class="iconfont" style="font-size:1rem;color: #D1D1D6;line-height:3rem;margin-left:0.3rem;">&#xe61d;</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-detail-cont">
      <div class="good-title border">
        重庆鸡公煲
      </div>
  
      <div class="detail-list border">
        <!-- 图片和标题 -->
        <div class="img-title">
          <div style="display:inline-block;width:3.2rem;height:3rem;">
            <img style=" width:auto;height:3rem;max-width:100%;max-height:100%;" src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3689517520,124186600&fm=202&mola=new&crop=v1"
              alt="">
          </div>
  
          <div class="title">
            迷你小包+鱼豆腐+宽粉+金针菇+米饭
          </div>
        </div>
        <div class="count">
          x1
        </div>
        <div class="price">
          ￥14.99
        </div>
      </div>
      <!-- 红包 -->
      <div class="redBox border">
        <div style="color:black;font-size:0.96rem;font-weight:700;line-height:2rem;flex:1;">红包</div>
        <div style="color:#BBBBBB;font-size:0.8rem;line-height:2rem;">无可用红包</div>
        <div class="iconfont" style="font-size:1rem;color: #D1D1D6;line-height:2rem;margin-left:0.3rem;">&#xe61d;</div>
      </div>
      <!-- 小计 -->
      <div class="smallPay">
        <div style="color:#BBBBBB;font-size:0.8rem;line-height:2.5rem;flex:1;">优惠说明 ?</div>
        <div style="color:black;font-size:0.9rem;line-height:2.9rem;">小计</div>
        <div class="iconfont" style="font-size:1.2rem;color: black;font-weight:700;line-height:2.5rem;margin-left:0.3rem;">￥14.99</div>
      </div>
    </div>
    <!-- 是否成为超级会员 -->
    <div class="eleme-vip">
      <div style="color:black;font-size:0.96rem;font-weight:700;height:3rem;flex:1;">
        <div style="color:black;font-size:0.96rem;font-weight:700;line-height:2rem;">成为超级会员,本单减3元</div>
        <div style="color:#BBBBBB;font-size:0.71rem;font-weight:500;">每月送10元奖励金，可兑至少10元无门槛红包</div>
      </div>
      <div style="color:black;font-size:0.96rem;font-weight:700;line-height:3rem;"><span style="color:#BBBBBB;font-size:0.8rem;"><del>￥15</del></span>￥6</div>
      <div class="iconfont" style="font-size:1rem;color: #D1D1D6;line-height:3rem;margin-left:0.3rem;">&#xe629;</div>
    </div>
    <!-- 订单备注等 -->
    <div class="dingdanDetail">
      <!-- 订单备注 -->
      <div class="beizhu border">
        <div style="color:black;font-size:0.96rem;font-weight:700;line-height:2rem;flex:1;">订单备注</div>
        <div style="color:#BBBBBB;font-size:0.8rem;line-height:2rem;">口味、偏好</div>
        <div class="iconfont" style="font-size:1rem;color: #D1D1D6;line-height:2rem;margin-left:0.3rem;">&#xe61d;</div>
      </div>
      <!-- 餐具份数 -->
      <div class="canjufenshu border">
        <div style="color:black;font-size:0.96rem;font-weight:700;line-height:2rem;flex:1;">餐具份数</div>
        <div style="color:#BBBBBB;font-size:0.8rem;line-height:2rem;"> <span class="iconfont" style="color:#1DC971;font-size:0.8rem;margin-right:0.6rem;">&#xe645;&nbsp;马上助力环保</span>选择</div>
        <div class="iconfont" style="font-size:1rem;color: #D1D1D6;line-height:2rem;margin-left:0.3rem;">&#xe61d;</div>
      </div>
      <!-- 匿名购买 -->
      <div class="nimingPay">
        <div style="color:black;font-size:0.96rem;font-weight:700;line-height:2rem;flex:1;">匿名购买</div>

        <div class="" data-control="BOX" id="Box_points_switch">
          <label><input class="mui-switch mui-switch-anim" type="checkbox" id="switch"></label>
        </div>
      </div>
    </div>
   


  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  methods: {
    returnGoods() {
      this.$router.push("/goods");
    }
  },
  created() {
    // this.$nextTick(() => {
    //   this.bscroll = new BScroll(this.$refs.aaa, {
    //     click: true
    //   });
    // });
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

@font-face {
  font-family: 'iconfont'; /* project id 652215 */
  src: url('//at.alicdn.com/t/font_652215_f6u5xpgvrfkzkt9.eot');
  src: url('//at.alicdn.com/t/font_652215_f6u5xpgvrfkzkt9.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_652215_f6u5xpgvrfkzkt9.woff') format('woff'), url('//at.alicdn.com/t/font_652215_f6u5xpgvrfkzkt9.ttf') format('truetype'), url('//at.alicdn.com/t/font_652215_f6u5xpgvrfkzkt9.svg#iconfont') format('svg');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.payDetail {
  padding: 0.8rem;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#00aaff+0,00aaff+37,06adff+37,0aadff+38,0fb0ff+38,13b0ff+38,16b2ff+38,15b0fe+38,18b3ff+38,19b2ff+38,1cb4ff+38,1eb3fe+39,21b6ff+39,20b4fe+39,27b8ff+39,29b7fe+39,32bbff+39,36bbfe+40,3dbfff+40,3fbefe+40,46c2ff+40,45c0fe+40,48c2ff+41,4ac2fe+41,51c5fe+41,57c6fe+41,5ac8fe+41,5cc7fd+42,63cbfe+42,62c9fd+42,65cbfe+42,6ecdfd+43,77d1fd+43,7bd1fc+43,7ed3fd+43,90d7fb+44,94dafc+45,a7defa+46,abe1fb+46,b5e2f9+46,b9e5fa+46,f6f6f6+50,f5f5f5+94,414143+94,414143+100 */
  background: #00aaff; /* Old browsers */
  background: -moz-linear-gradient(top, #00aaff 0%, #00aaff 37%, #06adff 37%, #0aadff 38%, #0fb0ff 38%, #13b0ff 38%, #16b2ff 38%, #15b0fe 38%, #18b3ff 38%, #19b2ff 38%, #1cb4ff 38%, #1eb3fe 39%, #21b6ff 39%, #20b4fe 39%, #27b8ff 39%, #29b7fe 39%, #32bbff 39%, #36bbfe 40%, #3dbfff 40%, #3fbefe 40%, #46c2ff 40%, #45c0fe 40%, #48c2ff 41%, #4ac2fe 41%, #51c5fe 41%, #57c6fe 41%, #5ac8fe 41%, #5cc7fd 42%, #63cbfe 42%, #62c9fd 42%, #65cbfe 42%, #6ecdfd 43%, #77d1fd 43%, #7bd1fc 43%, #7ed3fd 43%, #90d7fb 44%, #94dafc 45%, #a7defa 46%, #abe1fb 46%, #b5e2f9 46%, #b9e5fa 46%, #f6f6f6 50%, #f5f5f5 94%, #414143 94%, #414143 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #00aaff 0%, #00aaff 37%, #06adff 37%, #0aadff 38%, #0fb0ff 38%, #13b0ff 38%, #16b2ff 38%, #15b0fe 38%, #18b3ff 38%, #19b2ff 38%, #1cb4ff 38%, #1eb3fe 39%, #21b6ff 39%, #20b4fe 39%, #27b8ff 39%, #29b7fe 39%, #32bbff 39%, #36bbfe 40%, #3dbfff 40%, #3fbefe 40%, #46c2ff 40%, #45c0fe 40%, #48c2ff 41%, #4ac2fe 41%, #51c5fe 41%, #57c6fe 41%, #5ac8fe 41%, #5cc7fd 42%, #63cbfe 42%, #62c9fd 42%, #65cbfe 42%, #6ecdfd 43%, #77d1fd 43%, #7bd1fc 43%, #7ed3fd 43%, #90d7fb 44%, #94dafc 45%, #a7defa 46%, #abe1fb 46%, #b5e2f9 46%, #b9e5fa 46%, #f6f6f6 50%, #f5f5f5 94%, #414143 94%, #414143 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #00aaff 0%, #00aaff 37%, #06adff 37%, #0aadff 38%, #0fb0ff 38%, #13b0ff 38%, #16b2ff 38%, #15b0fe 38%, #18b3ff 38%, #19b2ff 38%, #1cb4ff 38%, #1eb3fe 39%, #21b6ff 39%, #20b4fe 39%, #27b8ff 39%, #29b7fe 39%, #32bbff 39%, #36bbfe 40%, #3dbfff 40%, #3fbefe 40%, #46c2ff 40%, #45c0fe 40%, #48c2ff 41%, #4ac2fe 41%, #51c5fe 41%, #57c6fe 41%, #5ac8fe 41%, #5cc7fd 42%, #63cbfe 42%, #62c9fd 42%, #65cbfe 42%, #6ecdfd 43%, #77d1fd 43%, #7bd1fc 43%, #7ed3fd 43%, #90d7fb 44%, #94dafc 45%, #a7defa 46%, #abe1fb 46%, #b5e2f9 46%, #b9e5fa 46%, #f6f6f6 50%, #f5f5f5 94%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  position: relative;
  overflow: hidden;
  height: 100%;
  z-index: 1 !important;

  .headers {
    position: fixed;
    width: 100%;
    z-index: 100;

    .header-top {
      display: flex;

      .peisongtext {
        flex: 1;
        height: 1.8rem;
        border-radius: 1rem;
        background-color: #2BC443;
        line-height: 1.8rem;
        text-align: center;
        color: #fff;
        font-size: 0.7rem;
      }
    }

    .address-detail {
      width: 92%;
      height: 5rem;

      // padding:0.5rem;
      .address-content {
        display: flex;

        .address-text {
          flex: 1;
          color: #FFFFFF;
          font-size: 1.5rem;
          width: 95%;
        }
      }
    }
  }

  .content-detail {
    position: relative;
    margin: 0 auto;
    top: 7rem;
    z-index: 0;

    .content-detail-one {
      background-color: #fff;
      height: 8.2rem;

      .detail-one-top {
        height: 4.1rem;

        .detail {
          padding: 1rem;
          height: 2rem;
          display: flex;
        }
      }

      .detail-one-bottom {
        height: 4.1rem;

        .detail {
          padding-top: 0.3rem;
          padding-right: 1rem;
          padding-bottom: 0.8rem;
          padding-left: 0.9rem;
          height: 3rem;
          display: flex;
        }
      }
    }
  }

  .content-detail-cont {
    position: relative;
    top: 7rem;
    margin-top: 0.6rem;
    min-height: 14rem;
    background-color: #fff;

    .good-title {
      height: 2rem;
      padding: 1rem;
      line-height: 2rem;
      color: black;
      font-size: 0.96rem;
      font-weight: 700;
    }

    .detail-list {
      height: 3rem;
      padding: 1rem;
      display: flex;

      .img-title {
        word-wrap: break-word;
        word-break: normal;
        flex: 1;

        .title {
          position: relative;
          top: -3.2rem;
          left: 3.5rem;
          height: 3rem;
          overflow: hidden;
          white-space: nowrap;
          font-size: 0.9rem;
          width: 13rem;
          white-space: normal;
          word-wrap: break-word;
          word-break: normal;
        }
      }

      .count {
        font-size: 0.8rem;
        line-height: 5;
        font-weight: 700;
      }

      .price {
        font-size: 0.95rem;
        line-height: 4.2;
        font-weight: 700;
      }
    }

    .redBox {
      padding: 1rem;
      height: 1.5rem;
      display: flex;
    }

    .smallPay {
      padding: 1rem;
      height: 2.5rem;
      display: flex;
    }
  }

  .eleme-vip {
    position: relative;
    top: 7rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    height: 3rem;
    padding: 1rem;
    background-color: #fff;
    border-left: 0.2rem solid #D7C56F;
    display: flex;
  }

  .dingdanDetail {
    height: 6.5rem;
    background-color: #fff;
    position: relative;
    top: 7rem;
    width: 100%;

    .beizhu {
      padding-top: 0.6rem;
      padding-right: 1rem;
      padding-bottom: 0.6rem;
      padding-left: 1rem;
      height: 2rem;
      display: flex;
    }

    .canjufenshu {
      padding-top: 0.6rem;
      padding-right: 1rem;
      padding-bottom: 0.6rem;
      padding-left: 1rem;
      height: 2rem;
      display: flex;
    }

    .nimingPay {
      padding-top: 0.6rem;
      padding-right: 1rem;
      padding-bottom: 0.6rem;
      padding-left: 1rem;
      height: 2rem;
      background-color: #fff;
      display: flex;

      #Box_points_switch {
        line-height: 2.4rem;
      }
    }
  }
}

.mui-switch {
  width: 2rem;
  height: 1.2rem;
  position: relative;
  border: 1px solid #dfdfdf;
  background-color: #fdfdfd;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border-radius: 3em;
  background-clip: content-box;
  display: inline-block;
  -webkit-appearance: none;
  user-select: none;
  outline: none;
}

.mui-switch:before {
  content: '';
  width: 1em;
  height: 1em;
  position: absolute;
  top: 0px;
  left: 0;
  border-radius: 3em;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.mui-switch:checked:before {
  left: 1rem;
}

.mui-switch.mui-switch-anim {
  transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;
}

.mui-switch.mui-switch-anim:before {
  transition: left 0.3s;
}

.mui-switch.mui-switch-anim:checked {
  box-shadow: #64bd63 0 0 0 16px inset;
  background-color: #64bd63;
  transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s;
}

.mui-switch.mui-switch-anim:checked:before {
  transition: left 0.3s;
}

.border {
  border-bottom: 0.1rem solid rgba(7, 17, 27, 0.04);
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .border {
    border-bottom: 0.05rem solid rgba(7, 17, 27, 0.04);
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .border {
    border-bottom: 0.0333333rem solid rgba(7, 17, 27, 0.04);
  }
}
</style>
