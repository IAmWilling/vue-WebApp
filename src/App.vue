<template>
  <div id="app">
    <transition name="fade">
    
    
    <keep-alive>
    
   
    <router-view/>
     </keep-alive>
     </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html {
  font-size: 15.6px;
}
body {
  font-weight: 200;
  font-family: "PingFang SC", "STheitiSC-Light", "Helvetica-Light", arial,
    sans-serif;
}
#app{
  height: 100%;
  overflow: hidden;
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
	left:500rem;

}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	left:500rem;
	transition-duration:0.5s;
}

</style>
