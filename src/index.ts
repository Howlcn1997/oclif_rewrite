import { Command } from '@oclif/command'
import app = require("./app");

class GoodbyeCommand extends Command {
  async run() {
    let arr = ["1231", "12234234", "123444"];
    let data = [
      { id: 2, parentId: 1, label: "2" },
      { id: 3, parentId: 1, label: "2" },
      { id: 4, parentId: 2, label: "2" },
      { id: 1, parentId: null, label: "1" },
      { id: 5, parentId: 4, label: "2" },
    ];
    this.log("-----第一题答案-----\n", app.findCommon(arr));
    this.log("-----第二题答案-----\n", JSON.stringify(app.convert2Tree(data), null, 2))
  }
}

export = GoodbyeCommand;
