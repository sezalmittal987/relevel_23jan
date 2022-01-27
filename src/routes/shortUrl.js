const auth = require('../middlewares/auth');
const express = require("express");
const router = express.Router();
const ShortUrlController = require('../controllers/shortUrl');

router.get('/', auth, ShortUrlController.getUrl);
router.get('/allUrls', ShortUrlController.getAllUrls);
router.get('/shortUrls', auth, ShortUrlController.getAllUrlsForUser );
router.post('/:code', auth, ShortUrlController.directUrl);
module.exports = router;