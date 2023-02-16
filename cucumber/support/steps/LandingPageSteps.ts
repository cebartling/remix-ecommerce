import { After, Before, Given, setWorldConstructor } from '@cucumber/cucumber';
import FoobarWorld from '../worlds/FoobarWorld';

setWorldConstructor(FoobarWorld);

Before(async function (this: FoobarWorld) {});

After(async function (this: FoobarWorld) {});

Given(
  /^the customer navigates to the landing page$/,
  function (this: FoobarWorld) {
    console.log('Current world', this);
  }
);
