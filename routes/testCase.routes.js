const { Router } = require("express");
const TestCase = require("../models/TestCase");
const router = Router();

router.post("/create-test", async (req, res) => {
  try {
    const {
      testCaseName,
      testCasePrecondition,
      testCaseDescription,
    } = req.body;

    TestCase.create(
      {
        testCaseName: testCaseName,
        testCasePrecondition: testCasePrecondition,
        testCaseDescription: testCaseDescription,
      },
      function () {
        return res
          .status(200)
          .json(`suc create test step with ${testCaseName}`);
      }
    );
  } catch (e) {
    res
      .status(500)
      .json({ message: "Что-то пошло не так", stacktrace: e.stack });
  }
});

router.post("/getTestCasebyId", async (req, res) => {
  try {
    const { testCaseId } = req.body;
    console.log(testCaseId);
    TestCase.findById(testCaseId, function (err, testCase) {
      return res.status(200).json(testCase);
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Что-то пошло не так", stacktrace: e.stack });
  }
});

module.exports = router;
