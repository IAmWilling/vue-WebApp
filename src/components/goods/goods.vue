<template>
<div class="goods">
	<div class="menu-wrapper" ref="menu_wrapper">
		<ul>
			<li v-for="(item,index) in goods" :key="index" :class="{current:currentIndex===index}" class="menu-item" @click="handleClickItemName(item.name,$event)" >
				<span class="text border"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
			</li>
		</ul>
	</div>
	<div class="foods-wrapper" ref="foods_wrapper">
		<ul>
			<li v-for="item in goods" class="food-list food-list-hook" :key="item.name">
			<!-- 分类标题 -->
				<h1 class="title" ref="special_title">{{item.name}}</h1>
				<ul>
					<li  @click="selectedFood(food,$event)" v-for="food in item.foods" :key="food.name" class="food-item border"  ref="food_item">
							<!-- 食品图片 -->
							<div class="icon"><img :src="food.icon" width="64" height="64"></div>
							<div class="content">
								<!-- 食品名称 -->
								<h2 class="name">{{food.name}}</h2>
								<!-- 简介 -->
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<!-- 月售 好评 -->
									<span>月售{{food.sellCount}}份</span>
									<span>好评率{{food.rating}}</span>
								</div>
								<div class="price">
									<!-- 新价格 -->
									<span class="newPrice">￥{{food.price}}</span>
									<!-- 老价格 -->
									<span v-show="food.oldPrice" class="oldPrice"><del>￥{{food.oldPrice}}</del></span>
								</div>
								<div class="cartcontrol-wraper">
									<cartcontrol :food="food"></cartcontrol>
								</div>
							</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<shopcart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
	<food :food="selectedFoods" ref="food"></food>
</div>
    
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
import shopcart from "../shopcart/shopcart";
import cartcontrol from "../cartcontrol/cartcontrol";
import food from "../food/food";
export default {
  name: "goods",
  props: {
    seller: Object
  },
  components: {
    shopcart,
    cartcontrol,
    food
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      current: "current",
      selectedFoods: {} //选中空选项
    };
  },
  created() {
    axios
      .get("/api/data.json")
      .then(res => {
        this.goods = res.data.goods;
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHe();
        });
      })
      .catch(error => {
        alert("接收失败");
      });
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach(good => {
        good.foods.forEach(food => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  },
  methods: {
    _initScroll() {
      this.foodsScroll = new BScroll(this.$refs.foods_wrapper, {
        click: true,
        probeType: 3 //希望在滚动的时候实时告诉滚动的位置
      });
      this.menuScroll = new BScroll(this.$refs.menu_wrapper, {
        click: true
      });
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y)); //转换整数
      });
    },
    _calculateHe() {
      let foodList = this.$refs.foods_wrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    _search(inerText) {
      let element = this.$refs.special_title;
      for (let i = 0; i < this.$refs.special_title.length; i++) {
        if (inerText == this.$refs.special_title[i].innerText) {
          return this.$refs.special_title[i];
        }
      }
    },
    handleClickItemName(name, e) {
      this.foodsScroll.scrollToElement(this._search(name), 500);
    },
    _drop(target) {},
    selectedFood(food, event) {
      if (!event._constructed) {
        return;
      }

   
      this.selectedFoods = food;
      this.$refs.food.show();
      console.log(food);
    }
  },
  events: {
    "cart.add"(target) {
      this._drop(target);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.goods {
	position: absolute;
	top: 12.5rem;
	bottom: 3rem;
	width: 100%;
	display: flex;
	overflow: hidden;

	.menu-wrapper {
		flex: 0 0 5rem;
		width: 5rem;
		background: #f3f5f7;

		.menu-item {
			display: table;
			height: 3.5rem;
			width: 100%;
			line-height: 1rem;
			text-align: center;
			margin: 0 auto;

			&.current {
				font-weight: 700;
				position: relative;
				z-index: 100;
				border-bottom: 1px solid rgb(51, 151, 228);
				background-color: #fff;
			}

			.icon {
				display: inline-block;
				width: 1rem;
				height: 1rem;
				margin-right: 0.4rem;
				background-size: 1rem 1rem;
				background-repeat: no-repeat;
				position: relative;
				top: 0.1rem;

				.decrease {
					bg-image('decrease_3');
				}

				.discount {
					bg-image('discount_3');
				}

				.guarantee {
					bg-image('guarantee_3');
				}

				.invoice {
					bg-image('invoice_3');
				}

				.special {
					bg-image('special_3');
				}
			}

			.text {
				display: table-cell;
				width: 4rem;
				vertical-align: middle;
				font-size: 0.77rem;
			}
		}
	}

	.foods-wrapper {
		flex: 1;

		.title {
			padding-left: 0.14rem;
			height: 2.6rem;
			line-height: 2.6rem;
			border-left: 0.2rem solid #d9dde1;
			font-size: 0.9rem;
			color: rgb(147, 153, 159);
			background-color: #f3f5f7;
		}

		.food-item {
			display: flex;
			margin: 1.3rem;
			position: relative;

			.icon {
				margin-right: 0.5rem;
			}

			.content {
				.name {
					font-size: 0.8rem;
					color: rgb(7, 17, 27);
					margin-bottom: 0.2rem;
				}

				.desc {
					font-size: 0.7rem;
					color: rgb(147, 153, 159);
					margin-bottom: 0.2rem;
				}

				.extra {
					font-size: 0.8rem;
					color: rgb(147, 153, 159);
					margin-bottom: 0.5rem;
				}

				.price {
					margin-bottom: 1.3rem;

					.newPrice {
						font-size: 0.9rem;
						color: red;
					}

					.oldPrice {
						font-size: 0.7rem;
						color: #999;
					}
				}

				.cartcontrol-wraper {
					position: absolute;
					right: -1rem;
					bottom: 0.8rem;
				}
			}
		}
	}
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
