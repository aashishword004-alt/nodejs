let http = require("http");
let url = require("url");

let product = [
  { "name": "Wireless Bluetooth Headphones", "price": 2499, "details": "Over-ear design with deep bass and long battery life." },
  { "name": "Portable Bluetooth Speaker", "price": 1599, "details": "Compact speaker with powerful sound and waterproof build." },
  { "name": "Smart Fitness Band", "price": 1899, "details": "Tracks steps, heart rate, and sleep patterns." },
  { "name": "Rechargeable Beard Trimmer", "price": 1299, "details": "Fast charging trimmer with stainless steel blades." },
  { "name": "LED Desk Lamp", "price": 1799, "details": "Adjustable brightness with eye-care mode." },
  { "name": "Gaming Keyboard", "price": 2499, "details": "Mechanical keys with RGB lighting." },
  { "name": "Gaming Mouse", "price": 1399, "details": "High precision sensor with customizable buttons." },
  { "name": "Wireless Router Dual Band", "price": 1999, "details": "Fast WiFi with long coverage." },
  { "name": "32GB Pen Drive", "price": 1199, "details": "High-speed USB 3.0 storage." },
  { "name": "Portable Power Bank 20000mAh", "price": 1699, "details": "Fast charging with dual USB output." },
  { "name": "Electric Kettle", "price": 1499, "details": "Auto shut-off and stainless steel body." },
  { "name": "Smart Home Light Strip", "price": 1999, "details": "RGB lights with Alexa control." },
  { "name": "Wireless Earbuds", "price": 2799, "details": "Noise reduction with clear mic quality." },
  { "name": "Mini Tripod Stand", "price": 1299, "details": "Flexible tripod for mobile and camera." },
  { "name": "Bluetooth Car Adapter", "price": 1399, "details": "Hands-free calling and music streaming." },
  { "name": "Portable USB Fan", "price": 1099, "details": "Rechargeable mini fan with 3-speed modes." },
  { "name": "Smart Watch Lite", "price": 2999, "details": "Fitness tracking with notifications." },
  { "name": "Waterproof Backpack", "price": 1699, "details": "Durable bag with laptop compartment." },
  { "name": "Mini Blender", "price": 2499, "details": "Compact blender for smoothies and shakes." },
  { "name": "Rechargeable LED Torch", "price": 1199, "details": "Long range with fast charging." },
  { "name": "Wireless Keyboard + Mouse Combo", "price": 1899, "details": "Silent keys and ergonomic design." },
  { "name": "Portable Hard Drive Case", "price": 1099, "details": "Shockproof travel storage case." },
  { "name": "Smart Table Clock", "price": 1499, "details": "Digital display with alarm and temperature." },
  { "name": "Mobile Tripod Ring Light", "price": 2499, "details": "Perfect for video calls and photography." },
  { "name": "Premium Stainless Steel Flask", "price": 1599, "details": "Keeps drinks hot or cold for hours." },
  { "name": "Electric Lunch Box", "price": 1999, "details": "Food warming system for office use." },
  { "name": "Car Vacuum Cleaner", "price": 1699, "details": "Portable handheld vacuum for cars." },
  { "name": "USB LED Projector", "price": 3499, "details": "Portable projector for movies and presentations." },
  { "name": "Wireless Charging Pad", "price": 1299, "details": "Fast wireless charging for smartphones." },
  { "name": "Bluetooth Soundbar Mini", "price": 3499, "details": "High-quality stereo sound in a compact size." },
  { "name": "Home Weighing Scale", "price": 1799, "details": "Digital scale with high precision sensors." },
  { "name": "Electric Hair Dryer", "price": 1399, "details": "Powerful airflow with heat control." },
  { "name": "Trendy Sneakers", "price": 2399, "details": "Comfortable and stylish everyday shoes." },
  { "name": "Smart Home Plug", "price": 1299, "details": "WiFi plug with app & voice control." },
  { "name": "Car Dashboard Camera", "price": 3999, "details": "Full HD recording with night vision." },
  { "name": "WiFi Security Camera", "price": 2999, "details": "360° coverage with motion detection." },
  { "name": "Laptop Cooling Pad", "price": 1299, "details": "Multi-fan cooling to reduce heat." },
  { "name": "Bluetooth Keyboard for Tablets", "price": 2199, "details": "Slim design with long battery life." },
  { "name": "Electric Beard Shaver", "price": 1799, "details": "Smooth shaving with skin protection." },
  { "name": "Kids Smart Learning Tablet", "price": 3999, "details": "Educational content with parental control." },
  { "name": "Mini WiFi Range Extender", "price": 1399, "details": "Boosts internet coverage across rooms." },
  { "name": "Portable Car Air Compressor", "price": 2199, "details": "Inflates tyres quickly using 12V power." },
  { "name": "Electric Foot Massager", "price": 3499, "details": "Relaxing massage with heat option." },
  { "name": "Compact Shoe Rack", "price": 1999, "details": "Space-saving foldable rack." },
  { "name": "Smart LED Bulbs Pack", "price": 1599, "details": "Adjustable color and brightness." },
  { "name": "Fitness Dumbbell Pair", "price": 1699, "details": "Durable rubber-coated weights." },
  { "name": "Electric Mini Heater", "price": 2499, "details": "Portable heater with temperature control." },
  { "name": "Kitchen Knife Set", "price": 1399, "details": "High-quality stainless steel knives." },
  { "name": "HD Webcam", "price": 2499, "details": "1080p video with noise-cancelling mic." },
  { "name": "Laptop Sleeve Bag", "price": 1299, "details": "Shockproof sleeve for 15-inch laptops." }
]


let server = http.createServer((req,res) =>{
    res.writeHead(200,{"content-type": "application/json"});
    let search = url.parse(req.url,true);
    let path = search.pathname;
    let data = search.query;
    let output = ""
    if(path === "/product" && data.price === undefined)
    {
        output = JSON.stringify(product);
    }
   
   else if (path === "/product" && data.price !== undefined) {
    let price = Number(data.price);
    let type = data.type;

    if (type === "low") {
        output = product.filter(item => item.price <= price);
    }
    else if (type === "high") {
        output = product.filter(item => item.price >= price);
    }
  

    output = JSON.stringify(output);
}
else if()

     
    res.write(output);
    res.end();

});
let port = 3000;
server.listen(port , () => {
    console.log("Server is start");
})