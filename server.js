require("dotenv").config();
const express=require('express');
const path = require('path');
const ly=require('express-ejs-layouts');
const ejsMate=require('ejs-mate');
const mongoose=require('mongoose');
const { use } = require('express/lib/application');

const Category=require('./models/category');
const recipe=require('./models/re');
const feedback=require('./models/feedback');

const app= express();


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


const RecipeRoutes=require('./routes/recipe');
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
    
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// recipe.insertMany([
//     { 
//                 "name": "Recipe Name Goes Here",
//                 "description": `Recipe Description Goes Here`,
//                 "email": "recipeemail@raddy.co.uk",
//                 "ingredients": [
//                   " level teaspoon baking powder",
//                   " level teaspoon cayenne pepper",
//                   "level teaspoon hot smoked paprika",
//                 ],
//                 "category": "Thai", 
//                 "image": "southern-friend-chicken.jpg"
//               },
//               { 
//                         "name": "Recipe Name Goes Here",
//                         "description": `Recipe Description Goes Here`,
//                         "email": "recipeemail@raddy.co.uk",
//                         "ingredients": [
//                           " level teaspoon baking powder",
//                           " level teaspoon cayenne pepper",
//                           " level teaspoon hot smoked paprika",
//                         ],
//                         "category": "Thai", 
//                         "image": "southern-friend-chicken.jpg"
//                       },
//                 { 
//                             "name": "Recipe Name Goes Here",
//                             "description": `Recipe Description Goes Here`,
//                             "email": "recipeemail@raddy.co.uk",
//                             "ingredients": [
//                               " level teaspoon baking powder",
//                               " level teaspoon cayenne pepper",
//                               " level teaspoon hot smoked paprika",
//                             ],
//                             "category": "Thai", 
//                             "image": "southern-friend-chicken.jpg"
//                           },
                          
//                           { 
//                             "name": "Recipe Name Goes Here",
//                             "description": `Recipe Description Goes Here`,
//                             "email": "recipeemail@raddy.co.uk",
//                             "ingredients": [
//                               " level teaspoon baking powder",
//                               " level teaspoon cayenne pepper",
//                               "level teaspoon hot smoked paprika",
//                             ],
//                             "category": "Thai", 
//                             "image": "southern-friend-chicken.jpg"
//                           }
                     
                        
// ]).then(function(){
//         console.log('Inserted');
//     }).catch(function(){
//         console.log(error)
//     });
// Category.insertMany([
//     {
//         "name":"Thai",
//         "image":"thai-food.jpg"
//     },
//     {
//         "name":"Indian",
//         "image":"indian-food.jpg"
//     },
//     {
//         "name":"Mexican",
//         "image":"mexican-food.jpg"
//     },
//     {
//         "name":"Spanish",
//         "image":"spanish-food.jpg"
//     }

// ]).then(function(){
//     console.log('Inserted');
// }).catch(function(){
//     console.log(error)
// });
const port=process.env.PORT||3030
app.use('/',RecipeRoutes);
app.listen(port,()=>{
    console.log('Listening');
})