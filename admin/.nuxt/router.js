import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01276e22 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6883acf9 = () => interopDefault(import('../pages/category.vue' /* webpackChunkName: "pages/category" */))
const _520e3a48 = () => interopDefault(import('../pages/owner.vue' /* webpackChunkName: "pages/owner" */))
const _44ce21a2 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _7b5c248a = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _20df48e7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _01276e22,
    name: "about"
  }, {
    path: "/category",
    component: _6883acf9,
    name: "category"
  }, {
    path: "/owner",
    component: _520e3a48,
    name: "owner"
  }, {
    path: "/products",
    component: _44ce21a2,
    name: "products"
  }, {
    path: "/products/:id",
    component: _7b5c248a,
    name: "products-id"
  }, {
    path: "/",
    component: _20df48e7,
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
