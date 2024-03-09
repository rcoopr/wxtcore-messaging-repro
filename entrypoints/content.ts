import { websiteMessenger } from '@/utils/messenger';

export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    console.log('Hello content.');
    const script = document.createElement('script');
    script.src = browser.runtime.getURL('./injected.js');
    document.head.appendChild(script);

    script.onload = () => {
      websiteMessenger.sendMessage('init', 'init data');
    };

    websiteMessenger.onMessage('somethingHappened', (data) => {
      // React to messages from the injected script
      console.log('Content script received somethingHappened:', data);
    });
  },
});
