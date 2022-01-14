import { TinyEmitter } from "tiny-emitter";

var emitter = new TinyEmitter();

function fire(...args) {
  emitter.emit(...args);
}
function listen(...args) {
  emitter.on(...args);
}

export default { fire, listen };
