var http = require('http');
let item = [
  {
    "name": "Spaghetti Carbonara",
    "weight": 450,
    "ingredients": ["spaghetti", "eggs", "pancetta", "parmesan cheese", "black pepper"]
  },
  {
    "name": "Chicken Tikka Masala",
    "weight": 500,
    "ingredients": ["chicken", "yogurt", "tomatoes", "onions", "garam masala", "cumin", "coriander"]
  },
  {
    "name": "Caesar Salad",
    "weight": 300,
    "ingredients": ["romaine lettuce", "croutons", "parmesan cheese", "caesar dressing", "anchovies"]
  },
  {
    "name": "Beef Stroganoff",
    "weight": 550,
    "ingredients": ["beef strips", "mushrooms", "sour cream", "onions", "beef broth", "egg noodles"]
  },
  {
    "name": "Vegetable Stir-Fry",
    "weight": 400,
    "ingredients": ["broccoli", "bell peppers", "carrots", "soy sauce", "garlic", "ginger", "tofu"]
  },
  {
    "name": "Margherita Pizza",
    "weight": 600,
    "ingredients": ["pizza dough", "tomato sauce", "mozzarella cheese", "basil", "olive oil"]
  },
  {
    "name": "Fish and Chips",
    "weight": 650,
    "ingredients": ["cod fillets", "potatoes", "flour", "beer", "tartar sauce", "peas"]
  },
  {
    "name": "Pad Thai",
    "weight": 450,
    "ingredients": ["rice noodles", "shrimp", "eggs", "bean sprouts", "peanuts", "tamarind sauce", "lime"]
  },
  {
    "name": "Lasagna",
    "weight": 700,
    "ingredients": ["lasagna noodles", "ground beef", "ricotta cheese", "mozzarella", "tomato sauce", "onions", "garlic"]
  },
  {
    "name": "Quinoa Salad",
    "weight": 350,
    "ingredients": ["quinoa", "cucumbers", "tomatoes", "feta cheese", "olives", "lemon vinaigrette"]
  },
  {
    "name": "Beef Tacos",
    "weight": 400,
    "ingredients": ["ground beef", "tortillas", "lettuce", "cheese", "salsa", "sour cream", "cumin"]
  },
  {
    "name": "Chicken Curry",
    "weight": 500,
    "ingredients": ["chicken", "coconut milk", "curry paste", "onions", "potatoes", "garlic", "ginger"]
  },
  {
    "name": "Greek Salad",
    "weight": 300,
    "ingredients": ["cucumbers", "tomatoes", "feta cheese", "olives", "red onions", "olive oil", "oregano"]
  },
  {
    "name": "Pancakes",
    "weight": 250,
    "ingredients": ["flour", "eggs", "milk", "baking powder", "butter", "maple syrup"]
  },
  {
    "name": "Sushi Rolls",
    "weight": 300,
    "ingredients": ["sushi rice", "nori", "avocado", "cucumber", "salmon", "soy sauce", "wasabi"]
  },
  {
    "name": "Chili Con Carne",
    "weight": 600,
    "ingredients": ["ground beef", "kidney beans", "tomatoes", "onions", "chili powder", "cumin", "garlic"]
  },
  {
    "name": "Ratatouille",
    "weight": 400,
    "ingredients": ["eggplant", "zucchini", "bell peppers", "tomatoes", "onions", "garlic", "herbs"]
  },
  {
    "name": "Mac and Cheese",
    "weight": 450,
    "ingredients": ["macaroni", "cheddar cheese", "milk", "butter", "flour", "breadcrumbs"]
  },
  {
    "name": "Falafel Wrap",
    "weight": 350,
    "ingredients": ["falafel balls", "pita bread", "lettuce", "tomatoes", "tahini sauce", "cucumbers"]
  },
  {
    "name": "Roast Chicken",
    "weight": 800,
    "ingredients": ["whole chicken", "potatoes", "carrots", "onions", "garlic", "rosemary", "olive oil"]
  },
  {
    "name": "Tomato Soup",
    "weight": 300,
    "ingredients": ["tomatoes", "onions", "garlic", "vegetable broth", "cream", "basil"]
  },
  {
    "name": "Beef Burger",
    "weight": 400,
    "ingredients": ["ground beef", "bun", "lettuce", "tomato", "cheese", "ketchup", "mustard"]
  },
  {
    "name": "Egg Fried Rice",
    "weight": 350,
    "ingredients": ["rice", "eggs", "peas", "carrots", "soy sauce", "green onions", "sesame oil"]
  },
  {
    "name": "Shakshuka",
    "weight": 400,
    "ingredients": ["eggs", "tomatoes", "onions", "bell peppers", "cumin", "paprika", "feta cheese"]
  },
  {
    "name": "Pasta Primavera",
    "weight": 450,
    "ingredients": ["pasta", "broccoli", "zucchini", "cherry tomatoes", "garlic", "olive oil", "parmesan"]
  },
  {
    "name": "Lamb Kebabs",
    "weight": 500,
    "ingredients": ["lamb", "onions", "bell peppers", "yogurt marinade", "cumin", "coriander", "lemon"]
  },
  {
    "name": "Veggie Burger",
    "weight": 350,
    "ingredients": ["black beans", "quinoa", "carrots", "onions", "bun", "lettuce", "avocado"]
  },
  {
    "name": "Clam Chowder",
    "weight": 500,
    "ingredients": ["clams", "potatoes", "onions", "celery", "cream", "butter", "thyme"]
  },
  {
    "name": "Bibimbap",
    "weight": 550,
    "ingredients": ["rice", "beef", "spinach", "carrots", "mushrooms", "egg", "gochujang"]
  },
  {
    "name": "French Toast",
    "weight": 300,
    "ingredients": ["bread", "eggs", "milk", "cinnamon", "butter", "maple syrup", "powdered sugar"]
  },
  {
    "name": "Miso Soup",
    "weight": 250,
    "ingredients": ["miso paste", "tofu", "seaweed", "green onions", "dashi broth"]
  },
  {
    "name": "Pulled Pork Sandwich",
    "weight": 450,
    "ingredients": ["pork shoulder", "bbq sauce", "bun", "coleslaw", "onions", "pickles"]
  },
  {
    "name": "Caprese Salad",
    "weight": 300,
    "ingredients": ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt"]
  },
  {
    "name": "Chicken Parmesan",
    "weight": 600,
    "ingredients": ["chicken breast", "marinara sauce", "mozzarella", "parmesan", "breadcrumbs", "pasta"]
  },
  {
    "name": "Stuffed Peppers",
    "weight": 500,
    "ingredients": ["bell peppers", "ground beef", "rice", "tomatoes", "onions", "cheese", "cumin"]
  },
  {
    "name": "Omelette",
    "weight": 200,
    "ingredients": ["eggs", "cheese", "ham", "bell peppers", "onions", "milk"]
  },
  {
    "name": "Pho",
    "weight": 600,
    "ingredients": ["rice noodles", "beef broth", "beef slices", "bean sprouts", "basil", "lime", "hoisin"]
  },
  {
    "name": "Risotto",
    "weight": 450,
    "ingredients": ["arborio rice", "mushrooms", "onions", "white wine", "parmesan", "chicken broth", "butter"]
  },
  {
    "name": "Tuna Salad",
    "weight": 300,
    "ingredients": ["tuna", "mayonnaise", "celery", "onions", "lettuce", "bread"]
  },
  {
    "name": "Goulash",
    "weight": 550,
    "ingredients": ["beef", "paprika", "onions", "tomatoes", "potatoes", "carrots", "sour cream"]
  },
  {
    "name": "Frittata",
    "weight": 350,
    "ingredients": ["eggs", "spinach", "feta cheese", "onions", "potatoes", "herbs"]
  },
  {
    "name": "Dumplings",
    "weight": 400,
    "ingredients": ["ground pork", "cabbage", "ginger", "garlic", "soy sauce", "dumpling wrappers"]
  },
  {
    "name": "Gazpacho",
    "weight": 300,
    "ingredients": ["tomatoes", "cucumbers", "bell peppers", "garlic", "olive oil", "vinegar", "bread"]
  },
  {
    "name": "Biryani",
    "weight": 700,
    "ingredients": ["rice", "chicken", "onions", "yogurt", "spices", "nuts", "raisins"]
  },
  {
    "name": "BLT Sandwich",
    "weight": 250,
    "ingredients": ["bacon", "lettuce", "tomato", "bread", "mayonnaise"]
  },
  {
    "name": "Paella",
    "weight": 650,
    "ingredients": ["rice", "seafood", "chicken", "peas", "saffron", "bell peppers", "onions"]
  },
  {
    "name": "Cobb Salad",
    "weight": 400,
    "ingredients": ["lettuce", "chicken", "bacon", "avocado", "eggs", "blue cheese", "dressing"]
  },
  {
    "name": "Meatloaf",
    "weight": 600,
    "ingredients": ["ground beef", "breadcrumbs", "eggs", "onions", "ketchup", "worcestershire sauce"]
  },
  {
    "name": "Kimchi Fried Rice",
    "weight": 400,
    "ingredients": ["rice", "kimchi", "eggs", "green onions", "sesame oil", "gochujang"]
  },
  {
    "name": "Bouillabaisse",
    "weight": 700,
    "ingredients": ["fish", "shellfish", "fennel", "onions", "tomatoes", "saffron", "garlic"]
  },
  {
    "name": "Quesadilla",
    "weight": 350,
    "ingredients": ["tortillas", "cheese", "chicken", "bell peppers", "onions", "salsa"]
  },
  {
    "name": "Pot Roast",
    "weight": 800,
    "ingredients": ["beef chuck", "potatoes", "carrots", "onions", "beef broth", "herbs"]
  },
  {
    "name": "Hummus Bowl",
    "weight": 300,
    "ingredients": ["hummus", "falafel", "cucumbers", "tomatoes", "tahini", "pita"]
  },
  {
    "name": "Chicken Fajitas",
    "weight": 450,
    "ingredients": ["chicken", "bell peppers", "onions", "tortillas", "salsa", "sour cream", "cumin"]
  },
  {
    "name": "Lentil Soup",
    "weight": 400,
    "ingredients": ["lentils", "carrots", "celery", "onions", "garlic", "vegetable broth", "cumin"]
  },
  {
    "name": "Eggplant Parmesan",
    "weight": 500,
    "ingredients": ["eggplant", "marinara sauce", "mozzarella", "parmesan", "breadcrumbs", "basil"]
  },
  {
    "name": "Ramen",
    "weight": 550,
    "ingredients": ["ramen noodles", "pork broth", "eggs", "green onions", "nori", "miso"]
  },
  {
    "name": "Coleslaw",
    "weight": 250,
    "ingredients": ["cabbage", "carrots", "mayonnaise", "vinegar", "sugar", "celery seed"]
  },
  {
    "name": "Beef Wellington",
    "weight": 900,
    "ingredients": ["beef tenderloin", "puff pastry", "mushrooms", "pate", "eggs", "herbs"]
  },
  {
    "name": "Veggie Stir-Fry Noodles",
    "weight": 400,
    "ingredients": ["noodles", "broccoli", "carrots", "soy sauce", "ginger", "garlic", "tofu"]
  },
  {
    "name": "Shepherd's Pie",
    "weight": 650,
    "ingredients": ["ground lamb", "peas", "carrots", "onions", "mashed potatoes", "cheese"]
  },
  {
    "name": "Tiramisu",
    "weight": 300,
    "ingredients": ["ladyfingers", "mascarpone", "coffee", "eggs", "sugar", "cocoa"]
  },
  {
    "name": "Chicken Nuggets",
    "weight": 200,
    "ingredients": ["chicken", "breadcrumbs", "eggs", "flour", "oil", "ketchup"]
  },
  {
    "name": "Minestrone Soup",
    "weight": 450,
    "ingredients": ["pasta", "beans", "carrots", "celery", "tomatoes", "vegetable broth", "basil"]
  },
  {
    "name": "Sashimi",
    "weight": 200,
    "ingredients": ["fresh fish", "soy sauce", "wasabi", "ginger", "rice"]
  },
  {
    "name": "Cornbread",
    "weight": 300,
    "ingredients": ["cornmeal", "flour", "eggs", "milk", "butter", "honey"]
  },
  {
    "name": "Lobster Bisque",
    "weight": 400,
    "ingredients": ["lobster", "cream", "butter", "onions", "carrots", "cognac", "thyme"]
  },
  {
    "name": "Falafel Bowl",
    "weight": 350,
    "ingredients": ["falafel", "quinoa", "cucumbers", "tomatoes", "tahini", "lemon"]
  },
  {
    "name": "Pork Chops",
    "weight": 500,
    "ingredients": ["pork chops", "applesauce", "potatoes", "green beans", "garlic", "rosemary"]
  },
  {
    "name": "Tabouli",
    "weight": 300,
    "ingredients": ["bulgur", "tomatoes", "cucumbers", "parsley", "mint", "lemon", "olive oil"]
  },
  {
    "name": "Chicken Pot Pie",
    "weight": 600,
    "ingredients": ["chicken", "peas", "carrots", "onions", "cream", "pie crust", "thyme"]
  },
  {
    "name": "Baba Ganoush",
    "weight": 250,
    "ingredients": ["eggplant", "tahini", "garlic", "lemon", "olive oil", "cumin"]
  },
  {
    "name": "Steak",
    "weight": 400,
    "ingredients": ["beef steak", "butter", "garlic", "rosemary", "potatoes", "asparagus"]
  },
  {
    "name": "Cucumber Salad",
    "weight": 200,
    "ingredients": ["cucumbers", "vinegar", "sugar", "dill", "onions", "sour cream"]
  },
  {
    "name": "Lamb Tagine",
    "weight": 550,
    "ingredients": ["lamb", "apricots", "onions", "cumin", "cinnamon", "almonds", "couscous"]
  },
  {
    "name": "French Onion Soup",
    "weight": 400,
    "ingredients": ["onions", "beef broth", "bread", "gruyere cheese", "butter", "thyme"]
  },
  {
    "name": "Peking Duck",
    "weight": 700,
    "ingredients": ["duck", "hoisin sauce", "pancakes", "cucumbers", "green onions", "soy sauce"]
  },
  {
    "name": "Spinach Salad",
    "weight": 250,
    "ingredients": ["spinach", "strawberries", "feta", "almonds", "balsamic vinaigrette"]
  },
  {
    "name": "Osso Buco",
    "weight": 650,
    "ingredients": ["veal shanks", "onions", "carrots", "celery", "white wine", "broth", "gremolata"]
  },
  {
    "name": "Chickpea Curry",
    "weight": 450,
    "ingredients": ["chickpeas", "coconut milk", "curry paste", "spinach", "tomatoes", "garlic"]
  },
  {
    "name": "Hot Dog",
    "weight": 200,
    "ingredients": ["sausage", "bun", "mustard", "ketchup", "onions", "relish"]
  },
  {
    "name": "Mushroom Risotto",
    "weight": 450,
    "ingredients": ["arborio rice", "mushrooms", "onions", "parmesan", "white wine", "broth", "butter"]
  },
];

let server = http.createServer( (req,res) =>{
    res.writeHead(200,{"Content-Type": "application/json"});
    let output =JSON.stringify(item);
    res.write(output);
    let url = req.url;
    if(url === '/dishes'){
        res.write(output);
    }
    res.end();
})

let port = 3000;
server.listen(port, () =>{
    console.log("server is running on port " + port); 
})