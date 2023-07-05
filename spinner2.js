// this fuction creates a small animation of a line spinning in
// the console
const spinner = () => {
  const frames = [
    "\r|  ",
    "\r/  ",
    "\r-  ",
    "\r\\",
    "\r|  ",
    "\r/  ",
    "\r-  ",
    "\r\\  ",
    "\r|  ",
    "\n",
  ];

  // keeping track of how many times we call setTimeout
  let timesCalled = 0;


  for (const frame of frames) {

    // using timesCalled in the second argument of setTimeout to modify
    // the time between each frame writing, starting at 100ms, and adding 200ms to each 
    // time its called 
    setTimeout(() => {
      process.stdout.write(frame);
    }, 100 + timesCalled * 200);

    // incrementing timesCalled by 1 each loop 
    timesCalled++;
  }
};

spinner();
