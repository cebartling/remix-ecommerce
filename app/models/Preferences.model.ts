export default class Preferences {
  private _foobar!: string;

  get foobar(): string {
    return this._foobar;
  }

  set foobar(value: string) {
    this._foobar = value;
  }
}
