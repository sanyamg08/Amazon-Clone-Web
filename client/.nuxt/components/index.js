export { default as FeaturedProduct } from '../../components/FeaturedProduct.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as ReviewSection } from '../../components/ReviewSection.vue'
export { default as Search } from '../../components/Search.vue'

export const LazyFeaturedProduct = import('../../components/FeaturedProduct.vue' /* webpackChunkName: "components/FeaturedProduct" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/Navbar" */).then(c => c.default || c)
export const LazyReviewSection = import('../../components/ReviewSection.vue' /* webpackChunkName: "components/ReviewSection" */).then(c => c.default || c)
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/Search" */).then(c => c.default || c)
