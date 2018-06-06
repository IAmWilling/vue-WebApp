<template>
  <div class="header">
  	<div class="content-wrapper">
  		<div class="avatar">
  			<img width="64" height="64" :src="seller.avatar">
  		</div>
  		<div class="content">
  			<!-- title -->
  			<div class="title">
  				<!-- 品牌 -->
  				<span class="brand"></span>
  				<!-- 名称 -->
  				<span class="name">{{seller.name}}</span>
  			</div>
  			<div class="description">
  				{{seller.description}}/{{seller.deliveryTime}}分钟送达
  			</div>
  			<div v-if="seller.supports" class="support">
  				<span class="icon" :class="classMap[seller.supports[0].type]"></span>
  				<span class="text">{{seller.supports[0].description}}</span>
  			</div>
		  </div>
		  <div  class="supports-cont" @click="handleDetailShow"><span>{{seller.supports.length}}个</span><i class="iconfont">&#xe8c4;</i></div>
  	</div>
  	<div class="bullentin-wrapper" @click="handleDetailShow">
		  <span class="bulletin-title"></span>
		  <span class="bulletin-text">{{seller.bulletin}}</span>
		  <i class="iconfont arrow_right">&#xe8c4;</i>
	  </div>
	  <div class="background">
		  <img :src="seller.avatar" width="100%" height="100%">
	  </div>
	  <!-- 浮层遮罩 -->
	  <transition name="fade">
	  
	  
	  <div class="detail" v-show="detailShow">
	  	<div class="detail-wrapper clearfix">
			  <div class="detail-main">
				 <h1 class="name">
					 {{seller.name}}
				 </h1>
				 <div class="star-wrapper">
					 <start :size="48" :score="seller.score"></start>
				 </div>
				 <specialinfo :title="speciInfo"></specialinfo>
				 <ul v-if="seller.supports" class="support ul_support1">
					 <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
						 <span class="icon" :class="classMap[seller.supports[index].type]"></span>
						 <span class="text">{{seller.supports[index].description}}</span>
					 </li>
				 </ul>
				 <specialinfo :title="merchantInfo"></specialinfo>
				 <div class="bulletin">
					 <p class="">{{seller.bulletin}}</p>
				 </div>
			  </div>
		  </div>
		  <div class="detail-close" @click="handleHidDetail">
			  <i class="iconfont">&#xe6ac;</i>
		  </div>
	  
	  </div>
	  </transition>
  </div>
</template>
<script>
import start from "components/start/start";
import specialinfo from "components/specialinfo/specialinfo";
export default {
  name: "elemeHeader",
  components: {
    start,
    specialinfo
  },
  props: {
    seller: Object
  },
  data() {
    return {
      detailShow: false,
      speciInfo: "优惠信息",
	  merchantInfo:'商家公告'
    };
  },
  methods: {
    handleDetailShow() {
      this.detailShow = true;
    },
	handleHidDetail(){
		this.detailShow = false;
	}
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl';

@font-face {
	font-family: 'iconfont'; /* project id 652215 */
	src: url('//at.alicdn.com/t/font_652215_cwpgv4q4wajaif6r.eot');
	src: url('//at.alicdn.com/t/font_652215_cwpgv4q4wajaif6r.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_652215_cwpgv4q4wajaif6r.woff') format('woff'), url('//at.alicdn.com/t/font_652215_cwpgv4q4wajaif6r.ttf') format('truetype'), url('//at.alicdn.com/t/font_652215_cwpgv4q4wajaif6r.svg#iconfont') format('svg');
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.header {
	color: #fff;
	position: relative;
	overflow: hidden;
	background-color: rgba(7, 17, 27, 0.5);

	.content-wrapper {
		padding: 2.4rem 1.2rem 1.8rem 2.4rem;
		font-size: 0rem;
		height: 4.6rem;
	}

	.avatar {
		display: inline-block;
		vertical-align: bottom;
	}

	.avatar img {
		border-radius: 0.2rem;
	}

	.content {
		display: inline-block;
		margin-left: 1.2rem;
		font-size: 0.9rem;
	}

	.title {
		margin: 0.2rem 0rem 0.3rem 0rem;

		.brand {
			width: 1.5rem;
			height: 1rem;
			vertical-align: bottom;
			display: inline-block;
			bg-image('brand');
			background-size: 1.5rem 1rem;
			background-repeat: no-repeat;
			position: relative;
			top: -0.15rem;
		}

		.name {
			margin-left: 0.3rem;
			font-size: 1.06rem;
			font-weight: bold;
		}
	}

	.description {
		margin-bottom: 0.1rem;
		line-height: 1rem;
		font-size: 0.8rem;
	}

	.support {
		.icon {
			display: inline-block;
			width: 1rem;
			height: 1rem;
			margin-right: 0.2rem;
			background-size: 1rem 1rem;
			background-repeat: no-repeat;
			position: relative;
			top: 0.1rem;
		}
	}

	.supports-cont {
		width: 3.2rem;
		height: 2rem;
		position: relative;
		left: 17rem;
		top: -1.5rem;
		font-size: 0.9rem;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
		line-height: 2rem;
		text-align: center;
	}

	.bullentin-wrapper {
		position: relative;
		height: 2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.77rem;
		line-height: 2rem;
		padding: 0 1rem 0 1rem;
		margin-top: -1.3rem;
		background-color: rgba(7, 17, 27, 0.2);

		.bulletin-title {
			display: inline-block;
			width: 2rem;
			height: 1.2rem;
			bg-image('bulletin');
			background-size: 2rem 1.2rem;
			background-repeat: no-repeat;
			position: relative;
			top: 0.3rem;
		}

		.arrow_right {
			float: right;
			margin-top: -2rem;
			margin-left: 0.2rem;
		}
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(0.39rem);
	}

	.detail {
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(7, 17, 27,0.93);
		top: 0;

		.detail-wrapper {
			min-height: 100%;
			width: 100%;

			.detail-main {
				margin-top: 3.1rem;
				padding-bottom: 6.4rem;

				.name {
					line-height: 1.6rem;
					text-align: center;
					font-size: 1rem;
					font-weight: 700;
				}

				.star-wrapper {
					margin-top: 1.8rem;
					padding: 0.2rem 0;
					text-align: center;
				}

				.supports {
					width: 80%;
					margin: 0 auto;
				}
			}
		}

		.detail-close {
			position: relative;
			width: 3.2rem;
			height: 3.2rem;
			margin: -6.4rem auto 0 auto;
			text-align: center;
			clear: both;
			font-size: 1.2rem;

			i {
				line-height: 3.2rem;
			}
		}
	}
}
.ul_support1{
	margin-left:10%;
}
.support-item {
	padding: 0 1.2rem;
	margin-bottom:1.2rem;
	font-size:0.8rem;
	&:last-child{
		margin-bottom:0;
	}
	.icon{
		display:inline-block;
		width:0.5rem;
		height:0.5rem;
		margin-right:0.6rem;
		background-size:0.5rem 0.5rem;
		background-repeat:no-repeat;
	}
}
.bulletin{
	margin:0 auto;
	width:80%;
	line-height:1.3rem;
	p{
		font-size:0.96rem;
	}
}
.fade-enter-active{
	left:0;
	transition-duration:0.5s;
	
}
.fade-leave-active {
	transition-duration:0.5s;
	left:0rem;
}
.fade-enter{
	position:absolute;
	left:100rem;

}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	left:100rem;
	transition-duration:0.5s;
}
.decrease {
	bg-image('decrease_1');
}

.discount {
	bg-image('discount_1');
}

.guarantee {
	bg-image('guarantee_1');
}

.invoice {
	bg-image('invoice_1');
}

.special {
	bg-image('special_1');
}
</style>
