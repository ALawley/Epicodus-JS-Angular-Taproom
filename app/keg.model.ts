export class Keg {
  public delete: boolean = false;
  public pours: number = 124;
  constructor(public name: string, public brand: string, public style: string, public price: number, public abv: number) {

  }
}
