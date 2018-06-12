<template>
  <div class="Ebody">
  	<eleme-header :seller="seller"></eleme-header>
  	<div class="tab">
  		<router-link tag="div" to="/goods" class="tab-item">商品</router-link>
  		<router-link tag="div" to="/ratings" class="tab-item">评论</router-link>
  		<router-link tag="div" to="/seller" class="tab-item">商家</router-link>
	  </div>
	  <div class="border-1Px"></div>
  	<div class="content">
  		<transition name="fade" mode="out-in">
  			<router-view :seller="this.seller" ></router-view>
  		</transition>
  	</div>
  </div>
</template>

<script>
import axios from "axios";
import elemeHeader from "./header/Header";
export default {
  name: "Body",
  components: {
    elemeHeader
  },
  activated() {
    this.$router.push("/goods");
  },
  mounted() {
    this.getElemeData(); //获取数据
  },
  created() {},
  data() {
    return {
      seller: {},
    };
  },
  methods: {
    getElemeData() {
      axios
        .get("/api/data.json")
        .then(res => {
          this.seller = res.data.seller;
          this.$store.commit("GetSeller",res.data.seller);
          console.log(res.data);
        })
        .catch(error => {
          alert("接收失败");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../common/stylus/mixin.styl';
.tab >>> .router-link-active{
	color:rgb(240,20,20);
}
.tab {
	display: flex;
	width: 100%;
	height: 3rem;
	line-height: 3rem;
}

.tab-item {
		flex: 1;
		text-align: center;
		font-size:1rem;
		color:rgb(77,85,93);
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
	opacity: 0;
}
</style>
