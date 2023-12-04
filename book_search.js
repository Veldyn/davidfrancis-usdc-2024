/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    //First, convert scannedTextObject to JS Object for parsing:
    const objdata = JSON.parse(JSON.stringify(scannedTextObj));

    //Next we need to define our results that we will be returning.
    //The function was provided for us.
    //Have result return the searchTerm, as well as the findings from the JSON parse.
        var result = {
            "SearchTerm": searchTerm,
            "Results": [],
        };
    
    //Next, we need to write a for-loop to iterate over the array of input data:
    for (const objdata of scannedTextObj) {
        //And another for-loop to iterate through the content array
        for (const Content of objdata.Content) {
            if (Content.Text.includes(searchTerm)) {
                //Push the following to 'Results' array if the text includes the search term:
                result.Results.push({
                    ISBN: objdata.ISBN,
                    Page: Content.Page,
                    Line: Content.Line,
                });
            }
        }
    }
    
    console.log(result) //result log for testing purposes
    return result; //return result, the array we filled with the term and results array.
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

//Custom output object to test 'and'
const twentyLeaguesOut2 = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/* Custom Unit-Tests Below: */

//Test 3: Test to see if the word 'and' appears (should pass)
const test3result = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}

//Test 4: Determine if line 7 content is found (should fail)
const test4result = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut.Results.ISBN) === JSON.stringify(test4result.Results.ISBN)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut.Results.ISBN);
    console.log("Received:", test4result.Results.ISBN);
}

//Test 5: Check 'Canadian' for capitalization (should pass)
const test5result1 = findSearchTermInBooks("Canadian", twentyLeaguesIn);
const test5result2 = findSearchTermInBooks("canadian", twentyLeaguesIn);
if (test5result1 === test5result2) {
    console.log("FAIL: Test 5");
    console.log("Expected:", true)
    console.log("Received:", false)
} else {
    console.log("PASS: Test 5");
}

//Test 6: Multiple searchTerms (should fail)
function test6() {
    try {
        const test6result = findSearchTermInBooks("and", "the", twentyLeaguesIn);
    } catch (e) {
        console.log("PASS: Test 6");
        console.log("Expected:", e);
    }
}
test6();
