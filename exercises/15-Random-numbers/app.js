/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	var randomNumber = Math.random()*10;
    
    randomNumber=Math.round(randomNumber)
    return randomNumber;
}


console.log(getRandomInt());