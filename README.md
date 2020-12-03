## Available Scripts

1. Palindrome Check

```
function  removeSpecials(str)  {
	var  lower  =  str.toLowerCase();
	var  upper  =  str.toUpperCase();
	var  res  =  "";
	for(var  i=0;  i<lower.length;  ++i)  {
	if(lower[i]  !=  upper[i]  ||  lower[i].trim()  ===  '')
	res  +=  str[i];
	}
	return  res;
}

function  palindromeChecker(text)  {

let  newText  =  removeSpecials(text)
let  replace  =  newText.split(' ').join('')
let  charArray  =  replace.toLowerCase().split("")
let  result  =  charArray.every((letter,  index)  =>  {
	return  letter  ===  charArray[charArray.length  -  index  -  1];
})
	return  result
}	
```

2. Separate Number Logic

```
const  value  =  '1.500.210' //example 
const  newNumber=  Number.parseFloat(value.split('.').join(""))

function  splitNumber(n)  {
let  temp  =  []
let  value  =  n
const  keyValue  =  [100000,  50000,  20000,  10000,  5000,  2000,  1000,  500,  200,  100]
keyValue.forEach(item  =>  {
	if (value  >=  item) {
	let  resResult  =  value
	value  =  value  %  item
	let  amount  =  (resResult  -  value)  /  item
	let  nominal  =  item
	if (nominal  >=  1000 ) {
	 nominal  = item.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+    (?!\d))/g,  '.')
	}
	temp.push({nominal:  nominal  , amount:  amount})
  }
})

let  result  =  ""
temp.forEach(val  =>  {
  result  =  result  +  `${val.nominal}(x${val.amount}), `
})
result  =  result  +  `sisa ${value},`
return  result
}

```
 You can check demo [here]([https://koala-challenge.vercel.app/palindrome](https://koala-challenge.vercel.app/palindrome))
