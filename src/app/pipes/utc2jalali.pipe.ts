import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'utc2jalali'
})
export class Utc2jalaliPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log( value);
    let MomentDate = moment(value, 'YYYY/MM/DD');
    
    return MomentDate.locale('fa').format('YYYY/M/D');
  }

}
