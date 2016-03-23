import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "strong",
  pure: false
})

export class StrongPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredKegAbv = args[0];
    console.log(desiredKegAbv);
    if(desiredKegAbv === "strong") {
      return input.filter((keg) => {
        if (keg.abv > 7) {
          return true;
        }
      });
    } else if (desiredKegAbv === "notStrong") {
      return input.filter((keg) => {
        if (keg.abv <= 7) {
          return true;
        }
      });
    } else {
      return input;
    }
  }
}
