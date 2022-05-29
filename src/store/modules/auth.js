const authModule = {
    namespaced:true,
    state() {
        return {
            isadmin: false
        }
    },
    mutations: {
        adminLogin(state) {
            state.isadmin = true

        },
        adminLogout(state) {
            state.isadmin = false
        }
    }
}

export default authModule