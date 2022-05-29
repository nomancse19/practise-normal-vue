var app= Vue.createApp({
data (){
    return {
        msg:"welcome To Vue JS",
        noman: `Hello Noman from`,
        about:{
            name: "Jahidul Islam Noman",
            age:20,
            dept:"CSE At JU",
        }
    };
}
});



app.mount("#app");