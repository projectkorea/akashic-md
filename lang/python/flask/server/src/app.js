async function run() {
  await Controller.init();
  startPubSub();
}

run();
