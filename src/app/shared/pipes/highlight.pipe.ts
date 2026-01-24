import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
/**
 * All matching words are wrapped in a <span> elemetn with the CSS class "highlight-legal-words" to giv custom styling.
 *
 * Since the pipe generates HTML markup dynamically, the result is
 * sanitized using Angular's DomSanitizer and returned as SafeHtml.
 *
 * exaple:
 * {{text | highlight : legalWords}}
 */
@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Highlights all occurences of the provided keywords within the given text.
   *
   * @param text Text that have to be processed
   * @param words Array of words that should be highlighted
   * @returns The processed text with highlighted keywords as SafeHtml,
   *          or the original text if no highlighting is applied
   */
  transform(text: string, words: string[]): SafeHtml | string {
    if (!text) return '';
    if (!words || words.length === 0) return text;
    const highlightWord = words.join('|');
    const replaced = text.replace(
      this.defineRegex(highlightWord),
      (match: string) => {
        return `<span class="highlight-legal-words"> ${match}</span>`;
      },
    );
    return this.sanitizer.bypassSecurityTrustHtml(replaced);
  }

  /**
   * Creats a case-insensitive, global regular expression
   * to match all providet keywords inside the text.
   *
   * @param serched Pattern
   * @returns The Configurated regex
   */
  defineRegex(serched: string) {
    const regex = new RegExp(`(${serched})`, 'gi');
    return regex;
  }
}
