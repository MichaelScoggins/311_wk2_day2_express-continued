const express = require("express")

const router = express.Router()
const commentsControllers = require("../controllers/comments-controllers")

router.get("/comments", commentsControllers.listComments)
router.get("/comments/:userId", commentsControllers.showComment)
router.put("/comments/:userId", commentsControllers.updateComment)
router.delete("/comments/:userId", commentsControllers.deleteComment)
router.post("/comments", commentsControllers.createComment)

module.exports = router
