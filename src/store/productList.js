export const dataStore = {
    state: {
        products: [
            {
                id: 1,
                title: 'Nike Red',
                descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt u',
                img: require('../assets/img/1.png'),
                gallery: [
                    {name: 'Nike boots first', img: require('../assets/img/1.png')},
                    {name: 'Nike boots second', img: require('../assets/img/2.png')},
                    {name: 'Nike boots third', img: require('../assets/img/3.png')}
                ]
            },
            {
                id: 2,
                title: 'Nike Default',
                descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt u',
                img: require('../assets/img/4.png'),
                gallery: [
                    {name: 'Nike boots first', img: require('../assets/img/4.png')},
                    {name: 'Nike boots second', img: require('../assets/img/5.png')},
                    {name: 'Nike boots third', img: require('../assets/img/6.png')}
                ]
            },
            {
                id: 3,
                title: 'Nike Green',
                descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt u',
                img: require('../assets/img/7.png'),
                gallery: [
                    {name: 'Nike boots first', img: require('../assets/img/7.png')},
                    {name: 'Nike boots second', img: require('../assets/img/8.png')},
                    {name: 'Nike boots third', img: require('../assets/img/9.png')}
                ]
            },
            {
                id: 4,
                title: 'Nike Street',
                descr: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt u',
                img: require('../assets/img/10.png'),
                gallery: [
                    {name: 'Nike boots first', img: require('../assets/img/11.png')},
                    {name: 'Nike boots second', img: require('../assets/img/12.png')}
                ]
            }
        ]
    },
    mutations:{},
    actions: {
    },
    getters:{
        getProductList(state){
            return state.products;
        }
    }
}