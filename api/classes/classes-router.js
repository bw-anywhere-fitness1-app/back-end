const router = require("express").Router();
const Classes = require("./classes-model");

router.get("/", async (req, res, next) => {
  try {
    const classList = await Classes.getAll();
    res.status(200).json(classList);
  } catch (err) {
    next(err);
  }
});

router.get("/:class_id", async (req, res, next) => {
  try {
    const theClass = await Classes.getById(req.params.class_id);
    res.status(200).json(theClass);
  } catch (err) {
    next(err);
  }
});

router.get("/:user_id/attending", async (req, res, next) => {
  try {
    const classes = await Classes.getUserClasses(req.params.user_id);
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

router.get("/:user_id/instructing", async (req, res, next) => {
  try {
    const classes = await Classes.getInstructorClasses(req.params.user_id);
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newClass = await Classes.addClass(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    next(err);
  }
});

router.delete("/:class_id", async (req, res, next) => {
  try {
    const numberDeleted = await Classes.removeClass(req.params.class_id);
    res
      .status(200)
      .json({ message: `${numberDeleted} class(es) deleted successfully` });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const userClassList = await Classes.signupForClass(req.body);
    res.status(200).json(userClassList);
  } catch (err) {
    next(err);
  }
});

router.put("/:class_id", async (req, res, next) => {
  try {
    const updatedClass = await Classes.editClass(
      parseInt(req.params.class_id),
      req.body
    );
    res.status(200).json(updatedClass);
  } catch (err) {
    next(err);
  }
});

router.delete("/signup/cancel", async (req, res, next) => {
    console.log(req.body)
    try {
        const numberDeleted = await Classes.dropClass(req.body);
        res
          .status(200)
          .json({ message: `${numberDeleted} class(es) dropped successfully` });
      } catch (err) {
        next(err);
      }
})

module.exports = router;
