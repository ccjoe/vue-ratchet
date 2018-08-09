<template>
<div>
    <hd :title="title" :subtitle="subtitle" :onleft="onleft"></hd>
    <keep-alive>
        <div class="content">
            <router-view></router-view>
        </div>
    </keep-alive>
</div>
</template>

<script>
import hd from '../src/hd.vue'
export default {
  name: 'app',
  components: {
    hd
  },
  data() {
    return {
      title: 'VueRatchet App',
      subtitle: 'VueRatchet App Demo'
    }
  },
  methods: {
    onleft: function() {
      history.go(-1)
      console.log('onleft from appvue')
    }
  }
}
</script>

<style lang="sass">
@import '../src/scss/vue-ratchet';
html,
body {
    font-size: 24px;
}

.view-enter-active,
.view-leave-active {
    transition: all .3s ease;
}

.view-enter,
.view-leave-active {
    opacity: 0; // transform: translate3d(20px, 0, 0);
}

body {
    min-width: 300px;
}

body,
.ui-modal,
.modal-overlay,
input,
textarea,
select,
header,
footer,
section,
button {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.table-view-cell {
    img {
        width: 60px;
    }
}

.content {
    // margin-top: 44px;
}

.gom-content {
    position: absolute;
    left: 0;
    top: 0;
}

.table-view-full {
    padding-right: 10px;
    img.media-object.pull-left {
        max-width: 100px;
    }
}

.content h5 {
    padding: 15px;
}

.card:not(.table-view) {
    border: 0;
}
</style>
