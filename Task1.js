const names = [
    {
        name: "Bart"
    },
    {
        name: "Lisa"
    },
    {
        name: "Maggie"
    },
]

function list(names){
    let string = ""
    for(let i = 0; i<names.length; i++){
        string += `${names[i].name}`
        if(i==names.length-2){
            string += ` & ${names[i+1].name}`
            break
        }else if(i==names.length-1){
            break
        }
        else{
            string += ", "
        }
    }
    console.log(string);
}

list(names)