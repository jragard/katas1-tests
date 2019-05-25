const katas4 = require('./../temp/temp.js');
const chai = require('../../node_modules/chai');
const expect = chai.expect;
const colors = require('../../node_modules/mocha/lib/reporters/base').colors;
colors['pending'] = '93';
colors['green'] = '92';

const success = 'CORRECT!  Function passes all tests';
const incorrect = 'Incorrect - Something has gone wrong'

describe("Kata1, Should return an array from gotCitiesCSV", function() {

    it("should be a function", function() {
        if(typeof katas4.kata1 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata1 === 'function') {

    const stringFunction = katas4.kata1.toString()
    const restricted = /\['King\\'s Landing', 'Braavos', 'Volantis', 'Old Valyria', 'Free Cities', 'Qarth', 'Meereen'\]/
    const test = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded array", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT - displays an array from gotCitiesCSV", function() {
        expect(katas4.kata1()).to.eql(['King\'s Landing', 'Braavos', 'Volantis', 'Old Valyria', 'Free Cities', 'Qarth', 'Meereen'])
    })
}
})

describe("Kata2, should return an array of words from the sentence in bestThing", function() {

    it("should be a function", function() {
        if(typeof katas4.kata2 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata2 === 'function') {

    const stringFunction = katas4.kata2.toString()
    const restricted = /\['The', 'best', 'thing', 'about', 'a', 'boolean', 'is', 'even', 'if', 'you', 'are', 'wrong', 'you', 'are', 'only', 'off', 'by', 'a', 'bit'\]/
    const test = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded array", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT - displays an array of words from the sentence in bestThing", function() {
        expect(katas4.kata2()).to.eql(['The', 'best', 'thing', 'about', 'a', 'boolean', 'is', 'even', 'if', 'you', 'are', 'wrong', 'you', 'are', 'only', 'off', 'by', 'a', 'bit'])
    })
}
})

describe("Kata3, Should return a string separated by semi-colons instead of commas from gotCitiesCSV", function() {

    it("should be a function", function() {
        if(typeof katas4.kata3 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata3 === 'function') {

    const stringFunction = katas4.kata3.toString()
    const restricted = /King's Landing;Braavos;Volantis;Old Valyria;Free Cities;Qarth;Meereen/
    const test = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded string", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT - displays a string separated by semi-colons from gotCitiesCSV", function() {
        expect(katas4.kata3()).to.eql("King's Landing;Braavos;Volantis;Old Valyria;Free Cities;Qarth;Meereen")
    })
    }
})

describe("Kata4, Should return a CSV (comma-separated) string from lotrCitiesArray", function() {

    it("should be a function", function() {
        if(typeof katas4.kata4 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata4 === 'function') {

    const stringFunction = katas4.kata4.toString()
    const restricted = /Mordor,Gondor,Rohan,Beleriand,Mirkwood,Dead Marshes,Rhun,Harad/
    const test = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded string", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT - displays a comma separated string from lotrCitiesArray", function() {
        expect(katas4.kata4()).to.eql("Mordor,Gondor,Rohan,Beleriand,Mirkwood,Dead Marshes,Rhun,Harad")
    })
    }
})

describe("Kata5, Should return an array with the first 5 cities in lotrCitiesArray", function() {

    it("should be a function", function() {
        if(typeof katas4.kata5 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata5 === 'function') {

    const stringFunction = katas4.kata5.toString()
    const restricted = /\['Mordor', 'Gondor', 'Rohan', 'Beleriand', 'Mirkwood'\]/
    const test = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded array", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT - displays the first 5 cities in lotrCitiesArray", function() {
        expect(katas4.kata5()).to.eql(['Mordor', 'Gondor', 'Rohan', 'Beleriand', 'Mirkwood'])
    })
    }
})

describe("Kata6, Should return an array with the last 5 cities in lotrCitiesArray", function() {

    it("should be a function", function() {
        if(typeof katas4.kata6 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata6 === 'function') {

    const stringFunction = katas4.kata6.toString()
    const restricted = /\['Beleriand', 'Mirkwood', 'Dead Marshes', 'Rhun', 'Harad'\]/
    const test = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded array", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT - displays the last 5 cities in lotrCitiesArray", function() {
        expect(katas4.kata6()).to.eql(['Beleriand', 'Mirkwood', 'Dead Marshes', 'Rhun', 'Harad'])
    })
    }
})

describe("Kata7, Should return an array with the 3rd to 5th city in lotrCitiesArray", function() {

    it("should be a function", function() {
        if(typeof katas4.kata7 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata7 === 'function') {

    const stringFunction = katas4.kata7.toString()
    const restricted = /\['Rohan', 'Beleriand', 'Mirkwood'\]/
    const test = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded array", function() {
        expect(test).to.equal(false)
    })
    it("CORRECT - displays the 3rd to 5th city in lotrCitiesArray", function() {
        expect(katas4.kata7()).to.eql(['Rohan', 'Beleriand', 'Mirkwood'])
    })
    }
})

describe("Kata8, using splice, should remove 'Rohan' from lotrCitiesArray, and return the new lotrCitiesArray", function() {

    it("should be a function", function() {
        if(typeof katas4.kata8 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata8 === 'function') {

    const stringFunction = katas4.kata8.toString()
    const restricted = /\['Mordor', 'Gondor', 'Beleriand', 'Mirkwood', 'Dead Marshes', 'Rhun', 'Harad'\]/
    const required = /splice/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT - uses splice to remove and display 'Rohan' from lotrCitiesArray", function() {
        expect(katas4.kata8()).to.eql(['Mordor', 'Gondor', 'Beleriand', 'Mirkwood', 'Dead Marshes', 'Rhun', 'Harad'])
    })
    }
})

describe("Kata9, remove all cities after 'Dead Marshes' in lotrCitiesArray and return the new lotrCitiesArray", function() {

    it("should be a function", function() {
        if(typeof katas4.kata9 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata9 === 'function') {

    const stringFunction = katas4.kata9.toString()
    const restricted = /\['Mordor', 'Gondor', 'Beleriand', 'Mirkwood', 'Dead Marshes'\]/
    const required = /splice/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, removes all cities after 'Dead Marshes' in lotrCitiesArray", function() {
        expect(katas4.kata9()).to.eql(['Mordor', 'Gondor', 'Beleriand', 'Mirkwood', 'Dead Marshes'])
    })
    }
})

describe("Kata10, using splice, add 'Rohan' back to lotrCitiesArray right after 'Gondor' and return the new lotrCitiesArray", function() {

    it("should be a function", function() {
        if(typeof katas4.kata10 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata10 === 'function') {

    const stringFunction = katas4.kata10.toString()
    const restricted = /\['Mordor', 'Gondor', 'Rohan', 'Beleriand', 'Mirkwood', 'Dead Marshes'\]/
    const required = /splice/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, adds 'Rohan' back to lotrCitiesArray right after 'Gondor' and returns new array", function() {
        expect(katas4.kata10()).to.eql(['Mordor', 'Gondor', 'Rohan', 'Beleriand', 'Mirkwood', 'Dead Marshes'])
    })
    }
    
})

describe("Kata11, using splice, rename 'Dead Marshes' to 'Deadest Marshes' in lotrCitiesArray and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata11 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata11 === 'function') {

    const stringFunction = katas4.kata11.toString()
    const restricted = /\['Mordor', 'Gondor', 'Rohan', 'Beleriand', 'Mirkwood', 'Deadest Marshes'\]/
    const required = /splice/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, renames 'Dead Marshes' to 'Deadest Marshes' and returns new array", function() {
        expect(katas4.kata11()).to.eql(['Mordor', 'Gondor', 'Rohan', 'Beleriand', 'Mirkwood', 'Deadest Marshes'])
    })
    }
})

describe("Kata12, using slice, return a string with the first 14 characters from 'bestThing'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata12 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata12 === 'function') {

    const stringFunction = katas4.kata12.toString()
    const restricted = /The best thing/
    const required = /slice/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, returns a string with the first 14 characters from 'bestThing'", function() {
        expect(katas4.kata12()).to.eql('The best thing')
    })    
    }
})

describe("Kata13, using slice, return a string with the last 12 characters from 'bestThing'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata13 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata13 === 'function') {

    const stringFunction = katas4.kata13.toString()
    const restricted = /off by a bit/
    const required = /slice/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, displays the last 12 characters from 'bestThing'", function() {
        expect(katas4.kata13()).to.eql('off by a bit')
    })
    }
})

describe("Kata14, using slice, return a string with the characters between the 23rd and 38th position of 'bestThing', (i.e., 'boolean is even')", function() {

    it("should be a function", function() {
        if(typeof katas4.kata14 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata14 === 'function') {

    const stringFunction = katas4.kata14.toString()
    const restricted = /boolean is even/
    const required = /slice/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, returns a string displaying 'boolean is even' from 'bestThing'", function() {
        expect(katas4.kata14()).to.eql('boolean is even')
    })
    }
})

describe("Kata15, repeat #13 using substring instead of slice", function() {

    it("should be a function", function() {
        if(typeof katas4.kata15 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata15 === 'function') {

    const stringFunction = katas4.kata15.toString()
    const restricted = /off by a bit/
    const required = /substr/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses substr instead of splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, returns a string displaying 'boolean is even' from 'bestThing'", function() {
        expect(katas4.kata15()).to.eql('off by a bit')
    })
    }
})

describe("Kata16, repeat #14 using substr instead of slice", function() {

    it("should be a function", function() {
        if(typeof katas4.kata16 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata16 === 'function') {

    const stringFunction = katas4.kata16.toString()
    const restricted = /boolean is even/
    const required = /substr/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Uses substr instead of splice", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, returns a string displaying 'boolean is even' from 'bestThing'", function() {
        expect(katas4.kata16()).to.eql('boolean is even')
    })
    }
})

describe("Kata17, Find and return the index of 'only' in bestThing", function() {

    it("should be a function", function() {
        if(typeof katas4.kata17 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata17 === 'function') {

    const stringFunction = katas4.kata17.toString()
    const restricted = /64/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, finds and returns the index of 'only' in 'bestThing'", function() {
        expect(katas4.kata17()).to.eql(64)
    })
    }
})

describe("Kata18, find and return the index of the last word in 'bestThing'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata18 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata18 === 'function') {

    const stringFunction = katas4.kata18.toString()
    const restricted = /78/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, finds and returns the index of 'only' in 'bestThing'", function() {
        expect(katas4.kata18()).to.eql(78)
    })
    }
})

describe("Kata19, find and return an array with all the cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.)", function() {

    it("should be a function", function() {
        if(typeof katas4.kata19 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata19 === 'function') {

    const stringFunction = katas4.kata19.toString()
    const restricted = /\['Braavos', 'Free Cities', 'Meereen'\]/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, finds and returns an array with all cities from gotCitiesCSV that use double vowels", function() {
        expect(katas4.kata19()).to.eql(['Braavos', 'Free Cities', 'Meereen'])
    })
    }
})

describe("Kata20, find and return an array with all cities from 'lotrCitiesArray' that end with 'or'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata20 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata20 === 'function') {

    const stringFunction = katas4.kata20.toString()
    const restricted = /\['Mordor', 'Gondor'\]/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'", function() {
        expect(katas4.kata20()).to.eql(['Mordor', 'Gondor'])
    })
    }
})

describe("Kata21, find and return an array with all the words in 'bestThing' that start with a 'b'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata21 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata21 === 'function') {

    const stringFunction = katas4.kata21.toString()
    const restricted = /\['best', 'boolean', 'by', 'bit'\]/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, finds and returns an array with all words in 'bestThing' that start with a 'b'", function() {
        expect(katas4.kata21()).to.eql(['best', 'boolean', 'by', 'bit'])
    })
    }
})

describe("Kata22, return 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'...use array prototype 'includes'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata22 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata22 === 'function') {

    const stringFunction = katas4.kata22.toString()
    const required = /lotrCitiesArray.includes/
    const requiredTest = required.test(stringFunction)

    it("Function uses array prototype 'includes'", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, returns 'Yes'", function() {
        expect(katas4.kata22()).to.eql('Yes')
    })    
    }
})

describe("Kata23, return 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'...use array prototype 'includes'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata23 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata23 === 'function') {

    const stringFunction = katas4.kata23.toString()
    const required = /lotrCitiesArray.includes/
    const requiredTest = required.test(stringFunction)

    it("Function uses array prototype 'includes'", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, returns 'No'", function() {
        expect(katas4.kata23()).to.eql('No')
    })
    }
})

describe("Kata24, return the index of 'Mirkwood' in 'lotrCitiesArray'", function() {

    it("should be a function", function() {
        if(typeof katas4.kata24 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata24 === 'function') {

    const stringFunction = katas4.kata24.toString()
    const restricted = /return 4/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, returns '4'", function() {
        expect(katas4.kata24()).to.eql(4)
    })
    }
})

describe("Kata25, find and return the first city in 'lotrCitiesArray' that has more than one word", function() {

    it("should be a function", function() {
        if(typeof katas4.kata25 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata25 === 'function') {

    const stringFunction = katas4.kata25.toString()
    const restricted = /Deadest Marshes/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, returns 'Deadest Marshes'", function() {
        expect(katas4.kata25()).to.eql('Deadest Marshes')
    })
    }
})

describe("Kata26, reverse the order in 'lotrCitiesArray' and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata26 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata26 === 'function') {

    const stringFunction = katas4.kata26.toString()
    const restricted = /\['Deadest Marshes', 'Mirkwood', 'Beleriand', 'Rohan', 'Gondor', 'Mordor'\]/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, reverses the order in 'lotrCitiesArray' and returns the new array", function() {
        expect(katas4.kata26()).to.eql(['Deadest Marshes', 'Mirkwood', 'Beleriand', 'Rohan', 'Gondor', 'Mordor'])
    })
    }
})

describe("Kata27, sort 'lotrCitiesArray' alphabetically and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata27 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata27 === 'function') {

    const stringFunction = katas4.kata27.toString()
    const restricted = /\['Beleriand', 'Deadest Marshes', 'Gondor', 'Mirkwood', 'Mordor', 'Rohan'\]/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, sorts 'lotrCitiesArray' alphabetically and returns the new array", function() {
        expect(katas4.kata27()).to.eql(['Beleriand', 'Deadest Marshes', 'Gondor', 'Mirkwood', 'Mordor', 'Rohan'])
    })
    }
})

describe("Kata28, sort 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata28 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata28 === 'function') {

    const stringFunction = katas4.kata28.toString()
    const restricted = /\['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'\]/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, sorts 'lotrCitiesArray' by the number of characters in each city returns the new array", function() {
        expect(katas4.kata28()).to.eql(['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'])
    })
    }
})

describe("Kata29, using pop, remove the last city from lotrCitiesArray and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata29 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata29 === 'function') {

    const stringFunction = katas4.kata29.toString()
    const restricted = /\['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand'\]/
    const required = /pop/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)
    
    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Function uses pop", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, removes the last city from 'lotrCitiesArray' and returns the new array", function() {
        expect(katas4.kata29()).to.eql(['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand'])
    })
    }
})

describe("Kata30, using push, add back the city from 'lotrCitiesArray' that was removed in #29 to the back of the array and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata30 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata30 === 'function') {

    const stringFunction = katas4.kata30.toString()
    const restricted = /\['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'\]/
    const restrictedTest = restricted.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("CORRECT, adds back the city from 'lotrCitiesArray' that was removed in #29 to the back of the array and returns the new array", function() {
        expect(katas4.kata30()).to.eql(['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'])
    })
    }
})

describe("Kata31, using shift, remove the first city from lotrCitiesArray and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata31 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata31 === 'function') {

    const stringFunction = katas4.kata31.toString()
    const restricted = /\['Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'\]/
    const required = /shift/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Function uses shift", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, removes the first city from 'lotrCitiesArray' and returns the new array", function() {
        expect(katas4.kata31()).to.eql(['Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'])
    })
    }
})

describe("Kata32, using unshift, add back the city from 'lotrCitiesArray' that was removed in #31 to the front of the array, and return the new array", function() {

    it("should be a function", function() {
        if(typeof katas4.kata32 != 'function') {
            this.skip();
        }
    })

    if(typeof katas4.kata32 === 'function') {

    const stringFunction = katas4.kata32.toString()
    const restricted = /\['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'\]/
    const required = /unshift/
    const restrictedTest = restricted.test(stringFunction)
    const requiredTest = required.test(stringFunction)

    it("Function doesn't simply return a hardcoded answer", function() {
        expect(restrictedTest).to.equal(false)
    })
    it("Function uses unshift", function() {
        expect(requiredTest).to.equal(true)
    })
    it("CORRECT, adds back the city from 'lotrCitiesArray' that was removed in #31 to the front of the array and returns the new array", function() {
        expect(katas4.kata32()).to.eql(['Rohan', 'Gondor', 'Mordor', 'Mirkwood', 'Beleriand', 'Deadest Marshes'])
    })
    }
})
