export default abstract class elementBackground {
  protected backgroundColor: string = '#c7fe80';
  protected title: string = '';
  protected bold: boolean = false;
  protected border: boolean = false;

  setBackgroundColor(color: string) {
    this.backgroundColor = color;
    return this;
  }
}
