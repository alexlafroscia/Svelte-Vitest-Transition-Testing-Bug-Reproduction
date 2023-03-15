# Svelte/Vitest/JSDOM Transition Bug Reproduction

This repo demonstrates a bug when using JSDOM through Vitest in an attempt to test a component that hides an element using a transition to animate the element's removal.

## Running the Demo

After cloning the repo

```
yarn install
yarn test
```

This will run the tests, which will fail, because the element that should have been removed from the DOM was not actually removed.

## What's Going On?

I believe the issue has something to do with the JSDOM implementation of `requestAnimationFrame`, which Svelte relies on for these transitions.

If I replace the `jsdom` environment for Vitest with `happy-dom`, the error is resolved. Additionally, stubbing the `requestAnimationFrame` implementation can fix the problem as well.

```ts
beforeEach(() => {
  vi.stubGlobal('requestAnimationFrame', (fn) => {
    return window.setTimeout(() => fn(Date.now()), 16);
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
});
```

## Other Related Issues

- https://github.com/testing-library/svelte-testing-library/issues/206
