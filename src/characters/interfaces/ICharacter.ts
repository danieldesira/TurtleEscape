interface ICharacter {
  loadImage(): Promise<HTMLImageElement>;
  paint(context: CanvasRenderingContext2D, bgOffsetX?: number, bgOffsetY?: number): void;
  get x(): number;
  get y(): number;
  set x(x: number);
  set y(y: number);
  get isSolitary(): boolean;
  get foodValue(): number;
  get stomachImpact(): number;
  get damage(): number;
  get image(): HTMLImageElement;
  get points(): number;
}

export default ICharacter;
