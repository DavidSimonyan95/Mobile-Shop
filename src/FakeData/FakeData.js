
const FakeData = [
    {
        id: 1,
        name : 'Xiaomi Poco M4 Pro 4G',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/4/0/40_7.jpg',
        price: 105000,
        cashless : ['Անկանխիկ`',115000],
        cash: ['Կանխիկ`',105000],
        category: "Mobile"
    },
    {
        id: 2,
        name : 'Samsung Galaxy Z Flip 4',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/i/m/img_0_77_3641_0_6.png',
        price: 559000,
        cashless : ['Անկանխիկ`',614000],
        cash: ['Կանխիկ`',559000],
        category: "Mobile"
    },
    {
        id: 3,
        name : 'Apple iPhone 13 Pro',
        price: 465000,
        cashless : ['Անկանխիկ`',511000],
        cash: ['Կանխիկ`',455000],
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/1/_/1_11_3.jpg',
        category: "Mobile"
    },
    {
        id: 4,
        name : 'Apple Beats',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/6/1/61x9mifsehl._ac_sl1500__1.jpg',
        price: 46500,
        cashless : ['Անկանխիկ`',49000],
        cash: ['Կանխիկ`',46500],
        category : "Accessories"
    },
    {
        id: 5,
        name : 'Baseus USB ',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/977ea4a48f7b863f635e2edcfdbc3115/o/r/orig_1.jpg',
        price: 5000 ,
        cashless : ['Անկանխիկ`',5500],
        cash: ['Կանխիկ`',5000],
        category : "Accessories"
    },
    {
        id:6,
        name : 'Apple IPad Air 5',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/1/a/1a32788cda2720329068d26f9e7d4afa_3.jpg',
        price: 299000,
        cashless : ['Անկանխիկ`',320000],
        cash: ['Կանխիկ`',299000],
        category : 'Tablets'
    },
    {
        id:7,
        name : 'Samsung Galaxy Tab A8',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/66ccd96acdf323d05dc4ead8d7cd9b39/1/0/10_48_1_1.jpg',
        price: 120000,
        cashless : ['Անկանխիկ`',133000],
        cash: ['Կանխիկ`',120000],
        category : 'Tablets'
    },
    {
        id:8,
        name : 'Apple IPad Pro 11',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/66ccd96acdf323d05dc4ead8d7cd9b39/3/0/30_10_3.jpg',
        price: 420000,
        cashless : ['Անկանխիկ`',465000],
        cash: ['Կանխիկ`',420000],
        category : 'Tablets'
    },
    {
        id:9,
        name: 'Apple Watch S5',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/b533ecaebcf9570a30855094844f5dc7/6/d/6dc1747fbc6c2eddb70f82e995232024_1_.jpg',
        price: 185000,
        cashless : ['Անկանխիկ`',207000],
        cash: ['Կանխիկ`',185000],
        category : 'Watches'
    },
    {
        id:10,
        name: 'Samsung Galaxy S22 ',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/i/m/img_0_77_3416_0_1.jpg',
        price: 589000,
        cashless : ['Անկանխիկ`',647000],
        cash: ['Կանխիկ`',589000],
        category : 'Mobile'
    },
    {
        id: 11,
        name: 'Sony WH-1000XM5',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/6/1/61_btxzpfdl._ac_sl1500_.jpg',
        price: 259300,
        cashless : ['Անկանխիկ`',288000,],
        cash: ['Կանխիկ`',259300],
        category : 'Accessories'
    },
    {
        id:12,
        name: 'Oppo Reno 5',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/i/m/img_0_77_2929_8_1.jpg',
        price: 163500,
        cashless : ['Անկանխիկ`',181000],
        cash: ['Կանխիկ`',163500],
        category : 'Mobile'
    },
    {
        id:13,
        name: 'Samsung Galaxy Tab S8',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/977ea4a48f7b863f635e2edcfdbc3115/s/a/samsung-tab-s8-ultra-5g-sm-x906b-_12_256_-graphite-1.jpg',
        price: 585000,
        cashless : ['Անկանխիկ`',645000],
        cash: ['Կանխիկ`',585000],
        category : 'Tablets'
    },
    {
        id:14,
        name: 'Apple iPhone SE 3',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/n/e/new-apple-iphone-se-3rd-generation-12gb-red-1647957367-3.png',
        price: 209000,
        cashless : ['Անկանխիկ`',229000],
        cash: ['Կանխիկ`',209000],
        category : 'Mobile'
    },
    {
        id:15,
        name: 'Samsung Galaxy Watch 5',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/977ea4a48f7b863f635e2edcfdbc3115/u/a/ua-galaxy-watch5-40mm-sm-r900nzdasek-533191181.jpg',
        price: 180000,
        cashless : ['Անկանխիկ`',196000],
        cash: ['Կանխիկ`',180000],
        category : 'Watches'
    },
    {
        id:16,
        name: 'Apple Watch S7 ',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/977ea4a48f7b863f635e2edcfdbc3115/a/p/apple_watch_series_7_gps_41mm_green_aluminum_clover_sport_band_pdp_image_position-1__ww-ru_2.jpg',
        price: 190000,
        cashless : ['Անկանխիկ`',207000],
        cash: ['Կանխիկ`',190000],
        category : 'Watches'
    },
    {
        id:17,
        name: 'Baseus Car',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/2/-/2-82-1.jpg',
        price: 10000,
        cashless : ['Անկանխիկ`',11000],
        cash: ['Կանխիկ`',10000],
        category : 'Accessories'
    },
    {
        id:18,
        name: 'Apple IPhone 12',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/7/7/7796ed68c0c12a0c9f4d6706267ce313.jpg',
        price: 300000,
        cashless : ['Անկանխիկ`',330000],
        cash: ['Կանխիկ`',300000],
        category : 'Mobile'
    },
    {
        id:19,
        name: 'Apple IPad Pro 11',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/6/0/60a55d7bc5e63-600-600.jpg',
        price: 420000,
        cashless : ['Անկանխիկ`',435000],
        cash: ['Կանխիկ`',420000],
        category : 'Tablets'
    },
    {
        id:20,
        name: 'Xiaomi 12 Lite',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/p/m/pms_1656928498.99827624_2.jpg',
        price: 185000,
        cashless : ['Անկանխիկ`',199000],
        cash: ['Կանխիկ`',185000],
        category : 'Mobile'
    },
    {
        id:21,
        name: 'Apple Pencil 2',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/p/e/pen2.jpg',
        price: 65000,
        cashless : ['Անկանխիկ`',71000],
        cash: ['Կանխիկ`',65000],
        category : 'Accessories'
    },
    {
        id:22,
        name: 'Rapoo Keyboard X1',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/d/s/dsc_2083a.jpg',
        price: 17000,
        cashless : ['Անկանխիկ`',18800],
        cash: ['Կանխիկ`',17000],
        category : 'Accessories'
    },
    {
        id: 23,
        name: 'Xiaomi Mi Smart ',
        image : 'https://yerevanmobile.am/media/catalog/product/cache/57f083443baa4ba0b92f2984c599babe/f/r/front_45__black_result.jpg',
        price: 39500,
        cashless : ['Անկանխիկ`',49000],
        cash: ['Կանխիկ`',39500],
        category : 'Watches'
    }
  
    
  


]
export default FakeData;