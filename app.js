const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data(){
        return{
            showBooks: true,
           books:[
               {title: "Name of the wind", author:"Patrick rothfuss"},
               {title: "The way of kings", author:"Brandon sander"},
               {title: "The fianl empire", author:"Brandon sander"}
           ],
            x: 0,
            y:0,
        }
    },
        // methods: {
        //     changeTitle(title){
        //     //   this.title = 'words of Randiance '
        //     this.title = title
        //     }

        // }
        methods: {
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            },

            handletEvent(e){
                console.log(e, e.type)
            },

            handleMousemove(e){
                this.x = e.offsetX,
                this.y = e.offsetY


            }

        }
       
    
})

app.mount('#app')