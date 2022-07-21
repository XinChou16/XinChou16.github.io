# vuex store core

```js
/**
 * Store core
 */
 export default class Store {
    constructor(opts) {
      const { state } = opts;
  
      // data
      this.opts = opts;
      this._state = state;
  
      // install
      this.installMutations();
      this.installActions();
    }
    commit(type, payload) {
      const mutator = this._mutations[type];
      if (mutator) {
        mutator(payload);
      }
    }
    dispatch(type, payload) {
      const handler = this._actions[type];
      if (handler) {
        handler(payload);
      }
    }
    installMutations() {
      const store = this;
      this._mutations = {};
  
      Object.keys(this.opts.mutations).forEach(key => {
        const mutator = this.opts.mutations[key];
        this._mutations[key] = (payload) => {
          mutator.call(store, store._state, payload);
        }
      })
    }
    installActions() {
      const store = this;
      this._actions = {};
  
      Object.keys(this.opts.actions).forEach(key => {
        const handler = this.opts.actions[key];
        Object.defineProperty(this._actions, key, {
          get: () => {
            return payload => {
              const ctx = {
                commit: store.commit.bind(store),
                dispatch: store.dispatch.bind(store),
                state: store._state
              };
              handler.call(store, ctx, payload);
            }
          }
        });
      });
    }
  }
  

// usage
const store = window.store = new Store({
  state: {
    count: 1,
    b: false,
  },
  mutations: {
    setCount(state, payload) {
      state.count = payload;
    }
  },
  actions: {
    getCountAsync({ commit }, payload) {
      setTimeout(() => {
        commit('setCount', payload);
      }, 1000)
    }
  }
});

console.log(store._state.count)
store.dispatch('getCountAsync', 100);
setTimeout(() => {
  console.log(store._state.count)
  console.log(store)
}, 2000)
  
```