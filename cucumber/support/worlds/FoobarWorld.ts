import type { IWorldOptions } from '@cucumber/cucumber';
import { World } from '@cucumber/cucumber';

export default class FoobarWorld extends World {
  count = 0;

  constructor(options: IWorldOptions) {
    super(options);
  }

  // eat(count) {
  //   this.count += count
  // }
}
