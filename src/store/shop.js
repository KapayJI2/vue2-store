//import productList from "@/store/productList";


export default {
    state:{
        shopList:[]

    },
    mutations:{
        addShopList(state, payload) {
            state.shopList.push(payload)
        }
    },
    actions:{
        addShopList({commit}, payload){
            commit('addShopList',payload)
            //console.log(productList.state.products)
        }
    },
    getters:{
        getShopList(state){
            return state.shopList;
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}