const readline = require('readline-sync');

function userInput(content){

    content.searchTerm = askAndReturnSearchTerm();
    content.prefixrefix = askAndReturnPrefix();

    function askAndReturnSearchTerm(){
        return readline.question("Type a Wikipedia search term: ");
    }
    
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one opition: ');
        const selectedPrefixText = prefixes[selectedPrefixIndex];
    
        return selectedPrefixText;
    }
    
        return content;
}
module.exports = userInput;