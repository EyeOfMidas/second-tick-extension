(()=>{function e(e){return new Promise(((n,t)=>{for(var r=(new Date).getTime()+e;;)if((new Date).getTime()>=r){n();break}t()}))}async function n(){console.log((new Date).getTime())}chrome.runtime.onInstalled.addListener((()=>{console.log(`installed and starting the run ${(new Date).getTime()}`),async function(){for(let t=0;t<60;t++)n(),await e(1e3),chrome.alarms.create(`recurring-polling-thread-${t}`,{periodInMinutes:1})}(),console.log("run complete")})),chrome.alarms.onAlarm.addListener((()=>{n()}))})();