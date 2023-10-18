import { Injectable } from '@angular/core';




@Injectable({ providedIn: 'root' })

export class GifsService {

    private _tagsHistory : string[] = [];

    constructor() { }

    get tagsHistory(){
        return [...this._tagsHistory];
        // Para crear una copia del valor de los tagHistories
    }

    private organizeHistory(tag : string){
        tag = tag.toLowerCase();

        if(this._tagsHistory.includes( tag )){
            this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
            // filtramos los valores del array y trae los datos diferentes al nuevo dato ingresado
        }

        this._tagsHistory.unshift( tag );   
        // Metemos el valor similar al inicio del array

        this._tagsHistory = this.tagsHistory.splice(0,10);
        // limitamos que el tamaño del array no supere los 10 valores
    }

    searchTag(tag : string):void {
        if(tag.length === 0)return
        // Determinamos que el valor que envie el usuario no sea nulo

        this.organizeHistory(tag)
        // unshift añade elemtos al inicio del array
        
    }
    
}