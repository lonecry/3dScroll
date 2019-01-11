/*
 * Created by Sun Wen on 2017.2.9.
 */
$( document ).ready( function(){
    var app = new Vue( {
        el   : '#app' ,
        data : {
            message : 'Hello Vue!'
        }
    } )

    var app2 = new Vue( {
        el   : '#app2' ,
        data : {
            message : '哈哈 么么么哒'
        }
    } )

    var app3 = new Vue( {
        el   : '#app3' ,
        data : {
            seen : true
        }
    } )

    var app4 = new Vue( {
        el   : '#app-4' ,
        data : {
            todos : [
                { text : 'Learn JavaScript' } ,
                { text : 'Learn Vue' } ,
                { text : 'Build something awesome' }
            ]
        }
    } )

    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })

    var app6 = new Vue( {
        el   : '#app-6' ,
        data : {
            message : 'v-model 数据绑定 指令'
        }
    } )

    Vue.component('sw', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })
    var app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { text: 'Vegetables' },
                { text: 'Cheese' },
                { text: 'Whatever else humans are supposed to eat' }
            ]
        }
    })

})
