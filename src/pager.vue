<template>
<div class="total" v-if="data && data.length">
    <template v-for="(item, cindex) in showData">
        <slot :data="item"></slot>
    </template>
    <div v-on:click="onRequest">
        {{showAll ? '收起' : '点击展开更多'}}
    </div>
</div>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 3
        },
        index: {
            type: Number,
            default: 1
        },
        data: {
            type: Array,
            default: []
        },
        isolate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showIndex: this.index,
            showAll: false,
            showData: []
        }
    },
    created() {
        this.getPagerData()
    },
    watch: {
        showIndex: function () {
            this.getPagerData()
        },
        data: function () {
            this.getPagerData()
        }
    },
    methods: {
        onRequest() {
            if (this.showAll) {
                this.showIndex = 1
            } else {
                this.showIndex++
            }
        },
        getPagerData() {
            this.showAll = this.data.length > this.showIndex * this.size ? false : true
            this.showData = !this.showAll && this.data ? this.data.slice(0, this.size * this.showIndex) : this.data
        }
    }
}
</script>
