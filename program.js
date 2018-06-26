const cap = 299

function sum(arr) {
    return arr.reduce((total, current) => {
	return total + current
    })
}

function findFactor(x) {
    let output = []
    for(let i = 1; i <= x; i++) {
	if(x % i === 0) {
	    output = output.concat(i)
	}
    }
    return output
}

function check(x, y) {
    let factorX = findFactor(x)
    let factorY = findFactor(y)
    for(let i = 0; i < factorX.length; i++) {
	if(factorY.find(factor => factor === factorX[i])) {
	    return true
	}
    }
    return false
}

console.log("begin")
for(let a = 1; a < cap; a++) {
    for(let b = 1; b < cap-a; b++) {
	for(let c = 1; c < cap-a-b; c++) {
	    for(let d = 1; d < cap-a-b-c; d++) {
		//console.log("check [" + a + ", " + b + ", " + c + ", " + d + "]")
		if(sum([a, b, c, d]) === cap) {
		    if(check(a, b) && check(b,c) && check(c,d) && check(d,a) && !check(a, c) && !check(b, d)) {
			console.log("answer: " + a + ", " + b + ", " + c + ", " + d)
			return
		    }
		}
	    }
	}
    }
}
console.log("done")
