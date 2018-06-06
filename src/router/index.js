import Vue from 'vue'
import Router from 'vue-router'
import Body from 'components/Body'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller'
import ratings from 'components/ratings/ratings'
import payDetail from 'components/payDetail/payDetail'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Body',
            component: Body,
            children: [{
                    path: '/goods',
                    component: goods
                },
                {
                    path: '/seller',
                    component: seller
                },
                {
                    path: '/ratings',
                    component: ratings
                }
            ]
        },
        {
            path: '/payDetail',
            name: 'payDetail',
            component: payDetail
        }

    ],
});