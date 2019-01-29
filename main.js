navBuildJob = function(module){
  var query = module.selectionText;
  chrome.tabs.create({url: "https://travis-ci.org/username/" + query});
};

chrome.contextMenus.create({
  title: "Navigate to build box job",
  contexts:["selection"],
  onclick: navBuildJob
});
