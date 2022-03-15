chrome.runtime.onInstalled.addListener(() => {
  console.log(`installed and starting the run ${new Date().getTime()}`)
  run()
  console.log(`run complete`)
})

async function run() {
  for(let i = 0; i < 60; i++) {
    tick()
    await asyncDelay(1000)
    chrome.alarms.create(`recurring-polling-thread-${i}`, { periodInMinutes:1 })
  }
}

function asyncDelay(msToDelay) {
  return new Promise((success, failure) => {
      var completionTime = new Date().getTime() + msToDelay
      while (true) {
        if (new Date().getTime() >= completionTime){
          success()
          break
        }
      }
      failure()
  })
}

chrome.alarms.onAlarm.addListener(() => {
  tick()
})

async function tick() {
  console.log(new Date().getTime())
}
