const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer(

    (req,res)=>{

        let address=url.parse(req.url,true);
        let query=address.query;
        let path=address.pathname;
        let filename='mystory.txt';
        let content='Your cintent is added to file...';

        if(path=='/add_story'){
            let filecontent="\nName: "+ query.name +"\nEmail: "+ query.email +"\nMobile: "+ query.mobile +"\nStory: "+query.story;
            fs.appendFile(filename,filecontent,(error)=>{
                if(error==null){
                    console.log("Your data is append to file!");
                }
                else{
                    console.log("There is an error...");
                }
            });
        }

        res.writeHead(200,{'content-type':'text/html'});
        res.write(content);
        res.end();
    }
 );

port=5000;
server.listen(port,()=>{
    console.log("server is running on port 5000...");
});