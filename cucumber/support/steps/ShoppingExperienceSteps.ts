import {
  After,
  Before,
  Given,
  setWorldConstructor,
  When
} from '@cucumber/cucumber';
import BarfooWorld from '../worlds/BarfooWorld';

setWorldConstructor(BarfooWorld);

Before(async function (this: BarfooWorld) {});

After(async function (this: BarfooWorld) {});

Given(
  /^the customer navigates to the shopping cart page$/,
  function (this: BarfooWorld) {
    console.log('Current world', this);
  }
);

When(
  /^the customer should see the shopping cart page$/,
  function (this: BarfooWorld) {
    console.log('Again the current world is', this);
  }
);
