import { websiteMessenger } from '@/utils/messenger';

export default defineUnlistedScript(() => {
  console.log('Hello from injected script!');

  websiteMessenger.onMessage('init', (data) => {
    // initialize injected script
    console.log('Injected script received init:', data);

    // eventually, send data back to the content script
    websiteMessenger.sendMessage('somethingHappened', 'somethingHappened data');
  });
});
