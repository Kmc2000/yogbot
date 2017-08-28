const RouterPath = require("../../RouterPath.js");

class RouterPathFrontpage extends RouterPath {
  constructor(subsystem, router) {
    super(subsystem, router);
  }

  register() {
    this.router.get("", (req, res) => {
      this.get(req, res);
    });
  }

  get(req, res) {
    res.send(":^)");
  }

  post(req, res) {

  }
}

module.exports = RouterPathFrontpage;
