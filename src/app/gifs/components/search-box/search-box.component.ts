import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gif-search-box',
    template: `
        <h5>Buscar</h5>
        <input type="text"
        class="form-control"
        placeholder="Buscar Gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput
        >
    `
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
     public tagInput!: ElementRef<HTMLInputElement>;

    constructor() { }

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        console.log({newTag});
    }


}