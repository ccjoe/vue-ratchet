<template>
<li @click="v2m" v-bind:class="'table-view-cell item' + active?'active':''">
    <label v-bind:class="hasicon?'check-cion':''"><slot>{{title}}</slot></label>
</li>
</template>

<script>
//这是个很神奇的组件，父组件可以是checkbox 或 radio 或是其它, 父组件有个属性model可以取得选中的值
//适用于一切选择项
export default {
    name: 'check',
    props: {
        //选中后写到model的值
        key: {
            required: true
        },
        hasicon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            active: false
        }
    },
    created() {
        this.m2v();
    },
    methods: {
        m2v: function () {
            var val = this.key || title;
            this.active = this.ischeckbox ? (!!~this.$parent.model.indexOf(val)) : (this.$parent.model === val);
        },
        v2m: function () {
            this.active = this.ischeckbox ? !this.active : true;
            this.getval();
        },
        getval: function () {
            var pmodel = this.$parent.model,
                val = this.key || title;
            if (this.ischeckbox) {
                if (this.active) {
                    pmodel.push(val)
                } else {
                    pmodel.splice(pmodel.indexOf(val), 1);
                }
            } else {
                this.$parent.$children.forEach(function (item) {
                    item.active = false;
                });
                this.$parent.model = val;
                this.m2v();
            }
        }
    },
    computed: {
        ischeckbox: function () {
            return this.$parent.type === 'checkbox';
        }
    }
}
</script>
