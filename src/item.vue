<template>
<li v-on:click="collapseListGroup" v-bind:class="{'active':active, 'table-view-cell':!divider, 'table-view-divider':divider,  'table-view-collapse':collapse, 'table-view-full':(badge===void 0)}" :style="styleobject">
    <span v-if="divider"><slot>{{title}}</slot></span>
    <a v-if="!divider" class="navigate-right" v-bind:href="href?href:'javascript:'">
        <badge v-if="badge">{{badge}}</badge>
        <img v-if="img" class="media-object pull-left" :src="img" />
        <icon v-if="icon" :icon="icon" class="media-object  pull-left"></icon>
        <btn v-if="btn">{{btn}}</btn>
        <div class="media-body">
            <slot>{{title}}</slot>
            <p v-if="content">{{content}}</p>
        </div>
    </a>
</li>
</template>

<script>
import badge from './badge.vue'
import icon from './icon.vue'
import btn from './btn.vue'

export default {
    name: 'item',
    components: {icon, badge, btn},
    props: {
        btn: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        badge: {
            type: String,
            default: void 0
        },
        content: {
            type: String,
            default: ''
        },
        link: { //vue path route link
            type: String
        },
        href: { //a html link
            type: String,
            default: ''
        },
        divider: {
            type: Boolean,
            default: false
        },
        collapse: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        height: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            collapseState: false,
            styleobject: this.height ? {
                height: this.height + 'px',
                lineHeight: this.height + 'px'
            } : {} //列表单项行内样式
        }
    },

    methods: {
        collapseListGroup: function (event) {
            if (this.divider !== 'true') return;
        }
    },
    beforeDestroy() {

    }
}
</script>

<style lang="sass">
a {
    text-decoration: none;
    color: #333;
}
</style>
