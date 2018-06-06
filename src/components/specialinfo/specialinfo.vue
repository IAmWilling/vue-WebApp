<template>
    <div class="flexx">
        <div class="line"></div>
        <div class="text">{{title}}</div>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
  name: "specialinfo",
  props:{
      title:String,
  }
};
</script>
<style lang="stylus" scoped>
.flexx{
    display:flex;
    width:80%;
    margin:2rem auto 2rem auto;
    .line{
        flex:1;
        position:relative;
        top:-6px;
        border-bottom:1px solid rgba(255,255,255,0.2);
    }
    .text{
        padding:0 1rem;
        font-size:0.9rem;
    }
}
</style>
