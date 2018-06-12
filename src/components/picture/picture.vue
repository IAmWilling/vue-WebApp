<template>
  <div>
  
    <transition name="toggle">
      <div class="picture" v-show="isShowPicture" @click="hidPicture">
        <div class="picture-wrapper">
          <img :src="img" @click.stop="yyy">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    props: {
      img: {
        type: String
      }
    },
    data() {
      return {
        isShowPicture: false
      }
    },
    methods: {
      hidPicture() {
        this.isShowPicture = false
      },
      yyy() {}
    }
  }
</script>
<style lang="stylus" scoped>
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

.picture {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background: #000;

  .picture-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    img {
      width: 100%;
      height: 20rem;
    }
  }
}
</style>
