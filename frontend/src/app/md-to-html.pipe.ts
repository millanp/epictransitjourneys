import { Pipe, PipeTransform } from '@angular/core';
import { Converter } from 'showdown';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(markdown: string, args?: any): string {
    return (new Converter({tables: true})).makeHtml(markdown);
  }

}
