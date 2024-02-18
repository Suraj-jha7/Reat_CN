let greet= document.querySelector("#greetings");

greet.innerText="hi.....";
let currenttime=13;

const func=()=>{
if(currenttime<12)
{
    greet.innerText="hi Suraj good morning";
    // console.log("good morning");
}

else if(currenttime>=12 && currenttime<16)
greet.innerText="hi Suraj good afternoon";

else if(currenttime>=16 && currenttime<20)
greet.innerText="hi Suraj good evening ";
else
{
    greet.innerText="hi Suraj good night";
}
}

func();