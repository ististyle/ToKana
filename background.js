let color = '#3aa757';
let probability = '0.1';
let revert = '0'
let advanced = '1'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  chrome.storage.sync.set({ probability });
  chrome.storage.sync.set({ revert });
  chrome.storage.sync.set({ advanced });
});