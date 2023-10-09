// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],

	devtools: { enabled: true },

	/* Needed so HMR works inside docker */
	vite: {
		server: {
			watch: {
				usePolling: true
			}
		}
	}
})
