function vowelEater(string){
    string = string.replace(/o/g, "").replace(/a/g, "").replace(/e/g,"")
    .replace(/i/g, "").replace(/u/g, "").replace(/ /g, "");
    return string;
}

console.log("two drums and a cymbal fall off a cliff => *nom* *nom* => " +
            vowelEater("two drums and a cymbal fall off a cliff"));