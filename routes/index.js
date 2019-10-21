const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => { // req stands for reques, you are making a request on the site;

    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');
    
    let query = "SELECT ID, avatar, Name, Logo, Job Title FROM tbl_card"; // have data that lives in a database, now give it to me on a page by going ro retrieve the data!!!

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // console.log(result); // should see objects wrapped in a array

        // render the home view with dynamic data
        res.render('home', { people: result });
    })
})

// localhost:3000/anything
router.get('/:id', (req, res) => {
    console.log('hit a dynamic route!');
    console.log(req.params.id);
    
    let query = `SELECT * FROM tbl_bio WHERE profID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        // res.render('home', { people: result });
    })
})
module.exports = router;