const { Router } = require("express");
const Step = require("../models/Step");
const router = Router();

router.post("/create-step", async (req, res) => {
  try {
    const { stepAction, stepExpectedResult, testCase } = req.body;

    Step.create(
      {
        testCase: testCase,
        stepAction: stepAction,
        stepExpectedResult: stepExpectedResult,
      },
      function () {
        return res
          .status(200)
          .json(
            `suc create step with data ${stepAction} ${stepExpectedResult}`
          );
      }
    );
  } catch (e) {
    res
      .status(500)
      .json({ message: "Что-то пошло не так", stacktrace: e.stack });
  }
});

router.get("/get-steps", async (req, res) => {
  Step.find({}, function (err, steps) {
    if (err) return err.stack;
    return res.status(200).json(steps);
  });
});

module.exports = router;
