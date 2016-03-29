<template>
    <modal :modalshow.sync="show" type="bottom" :title="title" classname="ui-select">
        <div slot="content">
            <slot></slot>
        </div>
    </modal>
</template>

<script>
    import modal from './modal.vue'
    export default {
        name: 'vselect',
        components: {modal},
        props:{
            show:{
              type: Boolean,
              default: true,
            },
            title: {
              type: String,
              default: '',
            }
        }
    }
</script>

<style lang="sass">
.ui-select{
    .modal-title{
        height: 35px;
    }
    .ui-scroll{
        float: left;
    }
}
.ui-scroll-select{
    display: flex;
    height: 100%;
    .ui-scroll-select-item{
        flex: 1;
    }
}
</style>
