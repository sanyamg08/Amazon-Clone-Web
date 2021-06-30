import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0841d578 = () => interopDefault(import('../pages/address/index.vue' /* webpackChunkName: "pages/address/index" */))
const _062fc02f = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _4f3bf1ea = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _312e7bb4 = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _04cc27c7 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _60bb2214 = () => interopDefault(import('../pages/placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _6b33f5ea = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _4e973612 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _36c78f32 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _0bfb1147 = () => interopDefault(import('../pages/address/add.vue' /* webpackChunkName: "pages/address/add" */))
const _aa925440 = () => interopDefault(import('../pages/address/_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _7a7cdd1e = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _5577d1f2 = () => interopDefault(import('../pages/reviews/_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _f4d7625a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _0841d578,
    name: "address"
  }, {
    path: "/cart",
    component: _062fc02f,
    name: "cart"
  }, {
    path: "/login",
    component: _4f3bf1ea,
    name: "login"
  }, {
    path: "/orders",
    component: _312e7bb4,
    name: "orders"
  }, {
    path: "/payment",
    component: _04cc27c7,
    name: "payment"
  }, {
    path: "/placeorder",
    component: _60bb2214,
    name: "placeorder"
  }, {
    path: "/profile",
    component: _6b33f5ea,
    name: "profile"
  }, {
    path: "/search",
    component: _4e973612,
    name: "search"
  }, {
    path: "/signup",
    component: _36c78f32,
    name: "signup"
  }, {
    path: "/address/add",
    component: _0bfb1147,
    name: "address-add"
  }, {
    path: "/address/:id",
    component: _aa925440,
    name: "address-id"
  }, {
    path: "/products/:id?",
    component: _7a7cdd1e,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _5577d1f2,
    name: "reviews-id"
  }, {
    path: "/",
    component: _f4d7625a,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
