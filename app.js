const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data(){
        return{
            showBooks: true,
            title: 'The Final Empire',
            author:'Brandon Sanderson',
            age:'45'
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
            }

        }
       
    
})

app.mount('#app')