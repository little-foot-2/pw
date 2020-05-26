import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HtmlUtils {
  createElementFromHTML(htmlString: string): ChildNode {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.childNodes.item(0);
  }
}
