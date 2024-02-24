import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true
})
export class CountryCodePipe implements PipeTransform {

  transform(value: number, country: string): unknown {

    let code = "+91-"
    if(country == "USA") code = "+1-"
    return code + value;
  }

}
