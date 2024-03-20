var num = (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function guessnum()
{
    var Usernum=parseInt(document.getElementById("num").value);
    if(num==Usernum)
    {
        document.getElementById("res").textContent="Congratulations!!! You guessed the number in "+count+" tries.";

    }
    else if(num>Usernum)
    {
    
        document.getElementById("res").textContent = "Try with the greater number";
    }
    else{
        document.getElementById("res").textContent = "Try with the smaller number";
    }
    document.getElementById("tries").textContent = count;
    count++;

}