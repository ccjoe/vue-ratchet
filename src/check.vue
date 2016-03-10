<template>
<li @click="v2m" class="table-view-cell item" :class="{active: active}">
    <label><slot>{{title}}</slot></label>
</li>
</template>

<script>
    export default {
        name: 'check',
        props: {
            key: {
                type: String,
                required: true
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
            m2v: function() {
                var val = this.key || title;
                this.active = this.ischeckbox ? (!!~this.$parent.model.indexOf(val)) : (this.$parent.model === val);
            },
            v2m: function() {
                this.active = this.ischeckbox ? !this.active : true;
                this.val;
            }
        },
        computed: {
            ischeckbox: function() {
                return this.$parent.constructor.name.toLowerCase() === 'checkbox';
            },
            val: function() {
                var pmodel = this.$parent.model,
                    val = this.key || title;
                if (this.ischeckbox) {
                    if (this.active) {
                        pmodel.push(val)
                    } else {
                        pmodel.splice(pmodel.indexOf(val), 1);
                    }
                } else {
                    this.$parent.$children.forEach(function(item){
                        item.active = false;
                    });
                    this.$parent.model = val;
                    this.m2v();
                }
            }
        }
    } 
</script>