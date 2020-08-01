var city='trichy'
var city='trichy'
undefined
city.toUpperCase()
"TRICHY"
city.toLowerCase()
"trichy"

var city="America"
undefined
city[5]
"c"
city[1]
"m"
city["length"]
7
city.charAt(3)
"r"

var city="America"
undefined
city.slice(1)
"merica"
city.slice(4)
"ica"
city.slice(2)
"erica"
city.slice(1,4)
"mer"
city.slice(1,5)
"meri"


var city="America"
undefined
city.slice(-1)
"a"
city.slice(1)
"merica"
city.slice(1,-1)
"meric"
city.slice(-3,-2)
"i"
city.slice(-4,-2)
"ri"
city.slice(-4,-1)
"ric"

var city='trichy'
undefined
city.charAt(0).toUpperCase()
"T"

var city=" France "
undefined
city.length
8
city.trim()
"France"

var data="I am learning JavaScript"
undefined
data.replace('JavaScript','JS')
"I am learning JS"

data.toLowerCase()
"i am learning javascript"
data.toLowerCase().replace('JavaScript','JS')
"i am learning javascript"
data.toLowerCase().replace('javascript','JS')
"i am learning JS"

var city=" France ."
city.trim()
"France ."
city.replace(/ /g,'')
"France."
