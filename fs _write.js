
 // write file 
let http = require("http");

let url =  require("url");

let fs = require('fs');



let server = http.createServer((req,res) =>{

    let querystring = url.parse(req.url,true);
    let info = querystring.query;
    let path = querystring.path;
    let filename = "myStory.txt";
    let content = "Your Story Submited Succesfully";
    
    if(path == "/submit_story")
    {
        let filedata = "Name:" +  info.name + "\nEmail:" + info.email + "\nMobileNo:" + info.mobile + "\nStory:" + info.story;
    
    fs.writeFile(filename,filedata,(error) =>{

         if(error == undefined) 
         {
            console.log("Some issue is hear");
         }
         else{
            content;
         }

    });


    res.writeHead(200,{"Content-Type" :"text/html"})
    res.write(content);
    res.end();
}
});
let port = 5000;
server.listen (port, () =>{
 console.log("server is start");
})