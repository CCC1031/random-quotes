function generate(){
    let quotes = {
        " - Nelson Mandela" : '"When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw."',
        " - C.S. Lewis" : '"We meet no ordinary people in our lives."',
        "- Albert Einstein" : '"Laws alone can not secure freedom of expression; in order that every man present his views without penalty there must be spirit of tolerance in the entire population."' 
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}