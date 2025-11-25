var http = require("http");
let url = require("url");


var info = [
    {
        "source": "Bhavnagar",
        "destination": "Ahmedabad",
        "journeyType": "express",
        "departureTime": "06:15"
    },
    {
        "source": "Ahmedabad",
        "destination": "Surat",
        "journeyType": "AC",
        "departureTime": "08:30"
    },
    {
        "source": "Rajkot",
        "destination": "Jamnagar",
        "journeyType": "gujarat nagari",
        "departureTime": "07:45"
    },
    {
        "source": "Surat",
        "destination": "Baroda",
        "journeyType": "sleeper",
        "departureTime": "22:00"
    },
    {
        "source": "Baroda",
        "destination": "Bhuj",
        "journeyType": "express",
        "departureTime": "09:15"
    },
    {
        "source": "Jamnagar",
        "destination": "Rajkot",
        "journeyType": "AC",
        "departureTime": "14:20"
    },
    {
        "source": "Bhuj",
        "destination": "Ahmedabad",
        "journeyType": "sleeper",
        "departureTime": "20:30"
    },
    {
        "source": "Ahmedabad",
        "destination": "Bhavnagar",
        "journeyType": "gujarat nagari",
        "departureTime": "11:00"
    },
    {
        "source": "Surat",
        "destination": "Rajkot",
        "journeyType": "express",
        "departureTime": "05:40"
    },
    {
        "source": "Baroda",
        "destination": "Surat",
        "journeyType": "AC",
        "departureTime": "17:50"
    },
    {
        "source": "Rajkot",
        "destination": "Bhuj",
        "journeyType": "sleeper",
        "departureTime": "21:15"
    },
    {
        "source": "Bhavnagar",
        "destination": "Surat",
        "journeyType": "gujarat nagari",
        "departureTime": "10:30"
    },
    {
        "source": "Ahmedabad",
        "destination": "Jamnagar",
        "journeyType": "express",
        "departureTime": "13:45"
    },
    {
        "source": "Bhuj",
        "destination": "Baroda",
        "journeyType": "AC",
        "departureTime": "19:00"
    },
    {
        "source": "Jamnagar",
        "destination": "Bhavnagar",
        "journeyType": "sleeper",
        "departureTime": "23:10"
    },
    {
        "source": "Surat",
        "destination": "Ahmedabad",
        "journeyType": "express",
        "departureTime": "07:20"
    },
    {
        "source": "Rajkot",
        "destination": "Surat",
        "journeyType": "gujarat nagari",
        "departureTime": "16:05"
    },
    {
        "source": "Baroda",
        "destination": "Rajkot",
        "journeyType": "AC",
        "departureTime": "12:40"
    },
    {
        "source": "Bhavnagar",
        "destination": "Bhuj",
        "journeyType": "sleeper",
        "departureTime": "18:30"
    },
    {
        "source": "Ahmedabad",
        "destination": "Baroda",
        "journeyType": "express",
        "departureTime": "15:55"
    },
    {
        "source": "Surat",
        "destination": "Bhavnagar",
        "journeyType": "AC",
        "departureTime": "09:10"
    },
    {
        "source": "Jamnagar",
        "destination": "Ahmedabad",
        "journeyType": "gujarat nagari",
        "departureTime": "06:50"
    },
    {
        "source": "Bhuj",
        "destination": "Rajkot",
        "journeyType": "express",
        "departureTime": "08:00"
    },
    {
        "source": "Baroda",
        "destination": "Jamnagar",
        "journeyType": "sleeper",
        "departureTime": "22:45"
    },
    {
        "source": "Rajkot",
        "destination": "Baroda",
        "journeyType": "AC",
        "departureTime": "11:20"
    },
    {
        "source": "Ahmedabad",
        "destination": "Bhuj",
        "journeyType": "express",
        "departureTime": "20:15"
    },
    {
        "source": "Bhavnagar",
        "destination": "Rajkot",
        "journeyType": "gujarat nagari",
        "departureTime": "14:00"
    },
    {
        "source": "Surat",
        "destination": "Bhuj",
        "journeyType": "sleeper",
        "departureTime": "19:40"
    },
    {
        "source": "Jamnagar",
        "destination": "Surat",
        "journeyType": "express",
        "departureTime": "07:30"
    },
    {
        "source": "Baroda",
        "destination": "Bhavnagar",
        "journeyType": "AC",
        "departureTime": "10:45"
    },
    {
        "source": "Rajkot",
        "destination": "Ahmedabad",
        "journeyType": "gujarat nagari",
        "departureTime": "13:20"
    },
    {
        "source": "Bhuj",
        "destination": "Surat",
        "journeyType": "sleeper",
        "departureTime": "21:50"
    },
    {
        "source": "Bhavnagar",
        "destination": "Baroda",
        "journeyType": "express",
        "departureTime": "08:20"
    },
    {
        "source": "Ahmedabad",
        "destination": "Rajkot",
        "journeyType": "AC",
        "departureTime": "18:45"
    },
    {
        "source": "Surat",
        "destination": "Jamnagar",
        "journeyType": "gujarat nagari",
        "departureTime": "12:10"
    },
    {
        "source": "Baroda",
        "destination": "Bhuj",
        "journeyType": "sleeper",
        "departureTime": "16:35"
    },
    {
        "source": "Jamnagar",
        "destination": "Surat",
        "journeyType": "express",
        "departureTime": "09:55"
    },
    {
        "source": "Rajkot",
        "destination": "Bhavnagar",
        "journeyType": "AC",
        "departureTime": "15:10"
    },
    {
        "source": "Bhuj",
        "destination": "Baroda",
        "journeyType": "gujarat nagari",
        "departureTime": "07:05"
    },
    {
        "source": "Ahmedabad",
        "destination": "Surat",
        "journeyType": "sleeper",
        "departureTime": "23:25"
    },
    {
        "source": "Bhavnagar",
        "destination": "Jamnagar",
        "journeyType": "express",
        "departureTime": "11:40"
    },
    {
        "source": "Surat",
        "destination": "Rajkot",
        "journeyType": "AC",
        "departureTime": "19:15"
    },
    {
        "source": "Baroda",
        "destination": "Ahmedabad",
        "journeyType": "gujarat nagari",
        "departureTime": "14:30"
    },
    {
        "source": "Jamnagar",
        "destination": "Bhuj",
        "journeyType": "sleeper",
        "departureTime": "22:05"
    },
    {
        "source": "Rajkot",
        "destination": "Surat",
        "journeyType": "express",
        "departureTime": "06:25"
    },
    {
        "source": "Bhuj",
        "destination": "Bhavnagar",
        "journeyType": "AC",
        "departureTime": "17:40"
    },
    {
        "source": "Ahmedabad",
        "destination": "Baroda",
        "journeyType": "gujarat nagari",
        "departureTime": "10:05"
    },
    {
        "source": "Surat",
        "destination": "Jamnagar",
        "journeyType": "sleeper",
        "departureTime": "21:00"
    },
    {
        "source": "Baroda",
        "destination": "Rajkot",
        "journeyType": "express",
        "departureTime": "08:50"
    },
    {
        "source": "Bhavnagar",
        "destination": "Surat",
        "journeyType": "AC",
        "departureTime": "16:20"
    },
    {
        "source": "Jamnagar",
        "destination": "Ahmedabad",
        "journeyType": "gujarat nagari",
        "departureTime": "12:55"
    },
    {
        "source": "Rajkot",
        "destination": "Bhuj",
        "journeyType": "sleeper",
        "departureTime": "20:10"
    },
    {
        "source": "Bhuj",
        "destination": "Surat",
        "journeyType": "express",
        "departureTime": "07:35"
    },
    {
        "source": "Ahmedabad",
        "destination": "Bhavnagar",
        "journeyType": "AC",
        "departureTime": "15:50"
    },
    {
        "source": "Surat",
        "destination": "Baroda",
        "journeyType": "gujarat nagari",
        "departureTime": "09:25"
    },
    {
        "source": "Baroda",
        "destination": "Jamnagar",
        "journeyType": "sleeper",
        "departureTime": "23:40"
    },
    {
        "source": "Bhavnagar",
        "destination": "Rajkot",
        "journeyType": "express",
        "departureTime": "11:15"
    },
    {
        "source": "Jamnagar",
        "destination": "Surat",
        "journeyType": "AC",
        "departureTime": "18:30"
    },
    {
        "source": "Rajkot",
        "destination": "Ahmedabad",
        "journeyType": "gujarat nagari",
        "departureTime": "13:45"
    },
    {
        "source": "Bhuj",
        "destination": "Baroda",
        "journeyType": "sleeper",
        "departureTime": "21:20"
    },
    {
        "source": "Ahmedabad",
        "destination": "Surat",
        "journeyType": "express",
        "departureTime": "06:10"
    },
    {
        "source": "Surat",
        "destination": "Bhuj",
        "journeyType": "AC",
        "departureTime": "17:25"
    },
    {
        "source": "Baroda",
        "destination": "Bhavnagar",
        "journeyType": "gujarat nagari",
        "departureTime": "10:40"
    },
    {
        "source": "Jamnagar",
        "destination": "Rajkot",
        "journeyType": "sleeper",
        "departureTime": "22:55"
    },
    {
        "source": "Rajkot",
        "destination": "Surat",
        "journeyType": "express",
        "departureTime": "08:15"
    },
    {
        "source": "Bhuj",
        "destination": "Ahmedabad",
        "journeyType": "AC",
        "departureTime": "16:00"
    },
    {
        "source": "Bhavnagar",
        "destination": "Baroda",
        "journeyType": "gujarat nagari",
        "departureTime": "12:30"
    },
    {
        "source": "Ahmedabad",
        "destination": "Jamnagar",
        "journeyType": "sleeper",
        "departureTime": "20:45"
    },
    {
        "source": "Surat",
        "destination": "Rajkot",
        "journeyType": "express",
        "departureTime": "07:55"
    },
    {
        "source": "Baroda",
        "destination": "Bhuj",
        "journeyType": "AC",
        "departureTime": "15:20"
    },
    {
        "source": "Jamnagar",
        "destination": "Surat",
        "journeyType": "gujarat nagari",
        "departureTime": "09:05"
    },
    {
        "source": "Rajkot",
        "destination": "Bhavnagar",
        "journeyType": "sleeper",
        "departureTime": "23:15"
    },
    {
        "source": "Bhuj",
        "destination": "Surat",
        "journeyType": "express",
        "departureTime": "11:50"
    },
    {
        "source": "Ahmedabad",
        "destination": "Baroda",
        "journeyType": "AC",
        "departureTime": "19:35"
    },
    {
        "source": "Surat",
        "destination": "Jamnagar",
        "journeyType": "gujarat nagari",
        "departureTime": "14:10"
    },
    {
        "source": "Baroda",
        "destination": "Rajkot",
        "journeyType": "sleeper",
        "departureTime": "21:30"
    },
    {
        "source": "Bhavnagar",
        "destination": "Ahmedabad",
        "journeyType": "express",
        "departureTime": "06:35"
    },
    {
        "source": "Jamnagar",
        "destination": "Bhuj",
        "journeyType": "AC",
        "departureTime": "17:10"
    },
    {
        "source": "Rajkot",
        "destination": "Surat",
        "journeyType": "gujarat nagari",
        "departureTime": "10:25"
    },
    {
        "source": "Bhuj",
        "destination": "Bhavnagar",
        "journeyType": "sleeper",
        "departureTime": "22:20"
    },
    {
        "source": "Ahmedabad",
        "destination": "Rajkot",
        "journeyType": "express",
        "departureTime": "08:40"
    },
    {
        "source": "Surat",
        "destination": "Baroda",
        "journeyType": "AC",
        "departureTime": "16:45"
    },
    {
        "source": "Baroda",
        "destination": "Surat",
        "journeyType": "gujarat nagari",
        "departureTime": "12:00"
    },
    {
        "source": "Bhavnagar",
        "destination": "Jamnagar",
        "journeyType": "sleeper",
        "departureTime": "20:05"
    },
    {
        "source": "Jamnagar",
        "destination": "Ahmedabad",
        "journeyType": "express",
        "departureTime": "07:10"
    },
    {
        "source": "Rajkot",
        "destination": "Bhuj",
        "journeyType": "AC",
        "departureTime": "15:40"
    },
    {
        "source": "Bhuj",
        "destination": "Rajkot",
        "journeyType": "gujarat nagari",
        "departureTime": "09:30"
    },
    {
        "source": "Ahmedabad",
        "destination": "Surat",
        "journeyType": "sleeper",
        "departureTime": "23:50"
    },
    {
        "source": "Surat",
        "destination": "Bhavnagar",
        "journeyType": "express",
        "departureTime": "11:20"
    },
    {
        "source": "Baroda",
        "destination": "Jamnagar",
        "journeyType": "AC",
        "departureTime": "18:55"
    },
    {
        "source": "Bhavnagar",
        "destination": "Baroda",
        "journeyType": "gujarat nagari",
        "departureTime": "13:15"
    },
    {
        "source": "Jamnagar",
        "destination": "Surat",
        "journeyType": "sleeper",
        "departureTime": "21:40"
    },
    {
        "source": "Rajkot",
        "destination": "Ahmedabad",
        "journeyType": "express",
        "departureTime": "06:00"
    },
    {
        "source": "Bhuj",
        "destination": "Surat",
        "journeyType": "AC",
        "departureTime": "17:15"
    },
    {
        "source": "Ahmedabad",
        "destination": "Bhuj",
        "journeyType": "gujarat nagari",
        "departureTime": "10:50"
    },
    {
        "source": "Surat",
        "destination": "Rajkot",
        "journeyType": "sleeper",
        "departureTime": "22:35"
    },
    {
        "source": "Baroda",
        "destination": "Bhavnagar",
        "journeyType": "express",
        "departureTime": "08:30"
    },
    {
        "source": "Bhavnagar",
        "destination": "Surat",
        "journeyType": "AC",
        "departureTime": "16:10"
    },
    {
        "source": "Jamnagar",
        "destination": "Baroda",
        "journeyType": "gujarat nagari",
        "departureTime": "12:35"
    },
    {
        "source": "Rajkot",
        "destination": "Jamnagar",
        "journeyType": "sleeper",
        "departureTime": "20:25"
    },
    {
        "source": "Bhuj",
        "destination": "Ahmedabad",
        "journeyType": "express",
        "departureTime": "07:25"
    },
    {
        "source": "Ahmedabad",
        "destination": "Rajkot",
        "journeyType": "AC",
        "departureTime": "15:05"
    },
    {
        "source": "Surat",
        "destination": "Bhuj",
        "journeyType": "gujarat nagari",
        "departureTime": "09:45"
    },
    {
        "source": "Baroda",
        "destination": "Surat",
        "journeyType": "sleeper",
        "departureTime": "23:20"
    },
    {
        "source": "Bhavnagar",
        "destination": "Ahmedabad",
        "journeyType": "express",
        "departureTime": "11:00"
    },
    {
        "source": "Jamnagar",
        "destination": "Bhavnagar",
        "journeyType": "AC",
        "departureTime": "18:20"
    },
    {
        "source": "Rajkot",
        "destination": "Baroda",
        "journeyType": "gujarat nagari",
        "departureTime": "13:50"
    },
    {
        "source": "Bhuj",
        "destination": "Surat",
        "journeyType": "sleeper",
        "departureTime": "21:10"
    }
]

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let search = url.parse(req.url, true);
    let path = search.pathname;
    let data = search.query;
    let output = "";
    if (path === "/routes" && data.source === undefined && data.destination === undefined) {

        output = JSON.stringify(info);
    }
    else if (path === "/routes" && data.source !== undefined && data.destination !== undefined && data.journeyType !== undefined) {
        output = info.filter((item) => {
            if (item.source.toLocaleLowerCase() === data.source.toLocaleLowerCase() && item.destination.toLocaleLowerCase() === data.destination.toLocaleLowerCase() && item.journeyType.toLocaleLowerCase() === data.journeyType.toLocaleLowerCase())
                return item;
        });
        output = JSON.stringify(output);
    }
    else if (path === "/routes" && data.source.toLocaleLowerCase() !== undefined && data.destination !== undefined) {
        output = info.filter((item) => {
            if (item.source.toLocaleLowerCase() === data.source.toLocaleLowerCase() && item.destination.toLocaleLowerCase() === data.destination.toLocaleLowerCase())
                return item;
        });
        output = JSON.stringify(output);
    }
    res.write(output);
    res.end();

});

server.listen(3000, () => {
    console.log("Serevr is start");

})