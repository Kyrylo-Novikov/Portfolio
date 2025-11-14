import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  highlightWord!: string;
  regex!: any;
  @Input('appHighlight') words: string[] = [];
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.highlightWord = this.words.join('|');
    this.regex = new RegExp(this.highlightWord, 'gi');
    this.highLightChildrenElement(this.el.nativeElement);
  }

  highLightChildrenElement(legelNoticeText: HTMLElement) {
    legelNoticeText.childNodes.forEach((node: any) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const newText = text.replace(
          this.regex,
          (match: any) => `<span class="highlight-legal-words">${match}</span>`
        );

        const div = document.createElement('div');

        div.innerHTML = newText;
        node.replaceWith(div);
      } else {
        this.highLightChildrenElement(node);
      }
    });
  }
}
