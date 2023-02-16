import type { IWorldOptions } from '@cucumber/cucumber';
import { World } from '@cucumber/cucumber';

export default class BarfooWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
  }
}
