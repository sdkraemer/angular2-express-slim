var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
        "id": 1,
        "description": "First workout"
    },
    {
        "id": 2,
        "description": "Went for a run, 2.12 miles."
    },
    {
        "id": 3,
        "description": "Went for a run, 2.5 miles"
    },
    {
        "id": 4,
        "description": "P90X3 Total Synergistics"
    },
    {
        "id": 5,
        "description": "Hiked Tumamoc"
    }
]);
});

module.exports = router;


