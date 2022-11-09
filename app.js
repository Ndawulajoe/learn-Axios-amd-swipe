axios.get('https://swapi.dev/api/planets/1/').then((res)=>{
    console.log(res.data);
    const data =res.data;
    const {name,climate,terrain}=data;
console.log(`The name of the planet is ${name} and it's climate condition is ${climate} and it's terrain is ${terrain}`)
    console.log(`These are the films in which it appeared`)
for(let moves of data.films){
        axios.get(moves).then((res)=>{
            console.log(res.data.title)
        })
    
    }
})