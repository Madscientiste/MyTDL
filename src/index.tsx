// Root contains the main dependencies and providers of the base app
// App contains the main structure of the base app
// These are the two main chunks that are used to render the core structure of the app
// Importing them with Promise.all (by using HTTP/2 multiplexing) we can load them in parallel
// and achieve the best possible performance
import { initMocks } from "@test/server";

// this is so mocking is only enabled for certain cenarios
if (__VITE_ENABLE_FAKE_BACKEND__) {
  initMocks();
}

Promise.all([import("@/Root"), import("@/App")]).then(([{ default: render }, { default: App }]) => {
  render(App);
});

// ts(1208)
export {};
