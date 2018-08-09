<template>
<modal class="svc-block" :show="show" type="bottom" :hastitle="false">
    <div slot="content">
        <list arrow='false'>
            <item class="svc-title">致电携程客服</item>
            <item class="svc-item"><span>免费</span>网络电话</item>
            <item class="svc-item" v-bind:href="'tel:'+inTel">手机: {{inTel}}</item>
            <item class="svc-item" v-bind:href="'tel:'+outTel">手机境外漫游: {{outTel}}</item>
        </list>
        <p class="svc-tips">WIFI连接时建议使用免费网络电话</p>
    </div>
</modal>
</template>

<script>
import modal from '../modal.vue'
import list from '../list.vue'
import item from '../item.vue'

export default {

    props: {
        show: {
            default: false,
            type: Boolean,

        }
    },
    components: {
        modal,
        list,
        item
    },
    data() {
        return {
            inTel: '400-821-6666',
            outTel: '+86-21-3406-4888'
        }
    }
}
</script>

<style lang="scss">
.svc-block {
    text-align: center;
    .table-view {
        border-top: 0 none;
    }
    a.navigate-right {
        text-decoration: none;
        color: #555;
    }
    .svc-item {
        padding: 8px;
        font-weight: bold;
        font-size: 16px;
        border-bottom: 1px solid #f0f0f0;
        span {
            font-size: 12px;
            background-color: #EFA529;
            padding: 2px 3px;
            color: #fff;
            margin-right: 5px;
        }
    }
    .svc-title {
        background-color: #089CDE;
        font-size: 18px;
        padding: 8px;
        a {
            color: #fff;
        }
    }
    .svc-tips {
        color: #aaa;
        font-size: 13px;
        line-height: 36px;
    }
}
</style>
