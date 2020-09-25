import textAlignType from '../../enum/textAlignType';

export default abstract class elementText {
  protected text: string = '';
  protected textAlign: textAlignType = textAlignType.Center;
  protected title: string = '';
  protected underline: boolean = false;
  protected round: boolean = false;

  setText(text: string) {
    this.text = text;
    return this;
  }

  setTextAlign(alignType: textAlignType) {
    this.textAlign = alignType;
    return this;
  }

}
