import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');
import fs = require("fs");

const filePath = path.join(__dirname, 'empty.cscfg');
fs.writeFileSync(filePath, '<ServiceConfiguration></ServiceConfiguration>')

let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('targetFilePath', filePath);
tmr.setInput('overrideNetworkSiteName', 'test-vnet');

try {
  tmr.run();
}
finally {
  fs.unlinkSync(filePath);
}
