Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  })),
});

// global.IntersectionObserver = class IntersectionObserver {
//   constructor() {}

//   observe() {
//     return null;
//   }

//   disconnect() {
//     return null;
//   }

//   unobserve() {
//     return null;
//   }
// };
