import { localCache } from "common/storage"

const userModule = {
    namespaced: true,
    state() {
        return {
            token: null,
            userInfo: null
        }
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload.token
            localCache.setItem("token", payload.token)

        }


    },
    getter: {
        getToken(state) {
            if (!state.token) {
                state.token = localCache.getItem('token')
            }
            return state.token
        }

    }
}

export default userModule