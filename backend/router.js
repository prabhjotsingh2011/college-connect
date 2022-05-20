const router = require('express').Router();
// const multerConfig = require('./config/multer');
const postController= require('./Controllers/postController/postController.js');
const userController = require('./Controllers/userController');
const projectController = require('./Controllers/projectController');
const uuidv4 = require('uuid/v4')
var multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


// var upload = multer({ dest: 'uploads/' })

// const upload = multerConfig();
router.post('/add/post',upload.single("image"),postController.addPost);
router.post('/add/user',userController.addUser);
router.post('/add/like',postController.addLike);
router.post('/upload/project/profile',upload.single("image"),projectController.addProjectPic);
router.get('/get/post',postController.getPost);
router.get('/get/projects',projectController.getProjects);


module.exports = router;

