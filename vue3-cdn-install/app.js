var app= Vue.createApp({
data (){
    return {
        msg:"welcome To Vue JS",
        noman: `Hello Noman from`,
        count:0,
        about:{
            name: "Jahidul Islam Noman",
            age:20,
            dept:"CSE At JU",
        }


    };
},
methods:{
    show_data:function(){
        return this.count=this.count+1;
    }
}
});



app.mount("#app");