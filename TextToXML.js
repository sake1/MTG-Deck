var fs = require('fs')
var filename = process.argv[2]

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err
    console.log(header)
    data.split("\n").forEach(line => {
	if(line !== "") {
	    var word = line.split(" ")
	    //console.log(word)
	    var qty = word[0]
	    var cardName = ""
	    word.slice(1, word.length).forEach(w => {
		cardName = cardName === "" ? w : cardName + " " + w
	    })
	    console.log("<card number=\"" + qty + "\" name=\"" + cardName + "\"/>")
	}
    })
    console.log(footer)
})

var header = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<cockatrice_deck version=\"1\">\n\
<deckname></deckname>\n\
<comments></comments>\n\
<zone name=\"main\">\n"

var footer = "</zone>\n\
<zone name=\"side\">\n\
<card number=\"1\" name=\"Island\"/>\n\
<card number=\"1\" name=\"Plains\"/>\n\
<card number=\"1\" name=\"Forest\"/>\n\
<card number=\"1\" name=\"Swamp\"/>\n\
<card number=\"2\" name=\"Mountain\"/>\n\
</zone>\n\
</cockatrice_deck>"
