

class HYCache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
    }

    setItem(key, value) {
        if (key == "version") {
            this.storage.setItem(key, JSON.stringify(value))
            var newStorageEvent = document.createEvent('StorageEvent');
            newStorageEvent.initStorageEvent('setItem', false, false, key, null, null, null, null);
            window.dispatchEvent(newStorageEvent)
            
        }
        if (value != null) {
            this.storage.setItem(key, JSON.stringify(value))
        }
    }
    getItem(key) {
        let value = this.storage.getItem(key)
        if (value != null) {
            value = JSON.parse(value)
            return value
        }
    }
    removeItem(key) {
        this.storage.removeItem(key)

    }
    clear() {
        this.storage.clear()
    }
    key(index) {
        return this.storage.key(index)
    }
    length(index) {
        return this.storage.length
    }
}
const localCache = new HYCache()
const sessionCache = new HYCache(false)




export {
    localCache,
    sessionCache
    
}