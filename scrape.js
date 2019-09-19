var scraper = require('./tools').scraper;
//scraper = function(url,parseFcn,filename)
//scrapes a URL, parses it with parseFcn, and archives the data in a JSON file called filename.

var marvel = function($,data)
{
    var parent = $("#comics-characterindex > section.module.moduColor_Light.modu_AZ > div:nth-child(4) > div > div:nth-child(2)");
    var children = parent.find("li");
    children.toArray()
    .forEach(function(item,index)
    {
        data.push($(item).text());
    });
    
}

scraper("https://www.marvel.com/comics/characters", marvel, "heroes.json")

// #comics-characterindex > section.module.moduColor_Light.modu_AZ > div:nth-child(4) > div > div:nth-child(2)