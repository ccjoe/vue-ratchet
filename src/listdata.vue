<template>
<ul class="table-view" v-bind:class="{'card':card, 'table-noarrow':!arrow}">
    <li v-for="it in list"  v-bind:key="it.id" v-on:click="collapseListGroup" v-bind:class="{'table-view-cell':!it.isDivider, 'table-view-divider':it.isDivider,  'table-view-collapse':it.collapse, 'table-view-full':(it.badge===void 0)}">
        <span v-if="it.isDivider">{{it.title}}</span>
        <router-link v-if="!it.isDivider" class="navigate-right" v-bind:to="it.link?it.link:''">
            <badge v-if="it.badge">{{it.badge}}</badge>
            <img v-if="media === 'img' && it.img" class="media-object pull-left" v-bind:src="it.img" />
            <icon v-if="media === 'icon'" :icon="it.icon" class="media-object  pull-left"></icon>
            <btn v-if="media === 'btn'">{{it.btn}}</btn>
            <div class="media-body">
                <span>{{it.title}}</span>
                <p v-if="it.content">{{it.content}}</p>
            </div>
        </router-link>
    </li>
</ul>
</template>

<script>
//@todo list change to <list><item></item></list>
import badge from './badge.vue'
import icon from './icon.vue'
import btn from './btn.vue'

export default {
    components: {icon, badge, btn},
    props: {
        list: {
            type: Array,
            default: []
        },
        media: {
            type: String,
            default: '' //or img
        },
        card: {
            type: Boolean,
            default: false
        },
        arrow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            collapseState: false
        }
    },
    watch: {
        'collapseState' () {

        }
    },
    methods: {
        collapseListGroup: function (event) {
            let elem = event.currentTarget,
                classes = elem.className;
            if (!~classes.indexOf('table-view-divider') || !~classes.indexOf('table-view-collapse')) {
                return;
            }

            let compon = this;
            next(elem);
            //获取相连的满足相同条件的元素
            function next(element) {
                let nextElem = element.nextSibling;
                if (nextElem.tagName === 'LI' && !!~nextElem.className.indexOf('table-view-cell')) {
                    if (!compon.collapseState) {
                        nextElem.style.display = 'none';
                        compon.collapseState = true;
                    } else {
                        nextElem.style.display = 'block';
                        compon.collapseState = false;
                    }
                } else {
                    return;
                }
                next(nextElem);
            }
        }
    }
}
</script>
