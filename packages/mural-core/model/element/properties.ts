export default class Properties {
  protected locked: boolean = false;
  protected parentId: boolean = false;
  protected lastUpdate: boolean = false;

  setLocked(status: boolean) {
    this.locked = status;
    return this;
  }
}
