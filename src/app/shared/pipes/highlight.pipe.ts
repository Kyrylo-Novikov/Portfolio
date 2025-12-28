import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined, words: string[]): SafeHtml {
    if (!value) return '';
    if (!words || words.length === 0) return value;

    const highlightWord = words.join('|');
    const regex = new RegExp(`(${highlightWord})`, 'gi');

    const replaced = value.replace(regex, (match: string) => {
      return `<span class="highlight-legal-words"> ${match}</span>`;
    });
    return this.sanitizer.bypassSecurityTrustHtml(replaced);
  }
}
