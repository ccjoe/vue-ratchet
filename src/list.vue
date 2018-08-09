<template>
<ul class="table-view" v-bind:class="{'media clearfix': media, 'card':card, 'table-noarrow':!arrow}">
    <slot></slot>
</ul>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    media: {
      type: Boolean,
      default: false
    },
    card: {
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import './scss/variables';
@import './scss/mixins';
.table-view {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 15px;
  list-style: none;
  background-color: #fff;
  border-top: $border-default;
  border-bottom: $border-default;
  font-size: 16px;
}

.table-view.media{
   .table-view-cell{
     width: 200px;
     margin: 10px 15px;
     background-color: #eee;
     border-radius: 6px;
     display: inline-block;
     float:left;
     padding: 0;
     .media-body{
       padding: 10px 15px;
     }
     a{
       margin: 0;
        > .btn,
        > .badge,
        > .toggle {
          position: relative;
          top: auto;
          right:15px;
          float:right;
        }
     }
     img{
       display:block;
       width: 100%;
       max-width: 100%;
       max-height: 150px;
     }
   }
   .pull-left{
     float:none;
   }
}

.table-view-cell {
  position: relative;
  padding: 11px 65px 11px 15px;
  overflow: hidden;
  border-bottom: $border-default;
  &:last-child {
    border-bottom: 0;
  }
  > a:not(.btn) {
    position: relative;
    display: block;
    padding: inherit;
    margin: -11px -65px -11px -15px;
    overflow: hidden;
    color: inherit;
    &:active {
      background-color: #eee;
    }
  }
  p {
    margin-bottom: 0;
  }
} // Table view dividers
// --------------------------------------------------
.table-view-divider {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  margin-top: -1px; // Hides the border of the previous list item
  margin-left: 0;
  font-weight: $font-weight;
  color: #999;
  background-color: #fafafa;
  border-top: $border-default;
  border-bottom: $border-default;
  a {
    color: #999;
  }
} // Table-views with media (images,avatars, icons)
// --------------------------------------------------
.table-view .media,
.table-view .media-body {
  overflow: hidden;
}

.table-view .media-object {
  &.pull-left {
    margin-right: 10px;
  }
  &.pull-right {
    margin-left: 10px;
  }
} // Table-views with buttons, badges and toggles
// --------------------------------------------------
.table-view-cell,
.table-view-cell > a {
  > .btn,
  > .badge,
  > .toggle {
    position: absolute;
    top: 50%;
    right: 15px;
    @include transform(translateY(-50%));
  }
} // If the table view is the first component, give it extra margin on top.
.content > .table-view:first-child {
  margin-top: 15px;
} // Add chevrons to elements
.table-noarrow {
  .navigate-left:after {
    content: '';
  }
  .navigate-right:after {
    content: '';
  }
}

.navigate-left,
.navigate-right {
  &:after {
    position: absolute;
    top: 50%;
    display: inline-block;
    font-family: Ratchicons;
    font-size: inherit;
    line-height: 1;
    color: #bbb;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    @include transform(translateY(-50%));
  }
}

.navigate-left:after {
  left: 15px;
  content: '\e822';
}

.navigate-right:after {
  right: 15px;
  content: '\e826';
}
</style>
