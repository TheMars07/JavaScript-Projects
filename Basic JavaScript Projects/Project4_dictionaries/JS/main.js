//Key-value pair function
function myDictionary(){
    var book = {
        Title: "House of Flame and Shadow",
        Author: "Sarah J. Maas",
        Release_Date: "30/01/2024",
        Print_Lenght: "848 pages",
        Publisher: "Bloomsbury Publishing PLC",
    };
    //Delete value
    delete book.Author;
    document.getElementById("dictionary").innerHTML = book.Author;
}