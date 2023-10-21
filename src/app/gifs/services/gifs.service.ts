import { HttpClient, HttpParams } from '@angular/common/http';
// El httpClientModule se importa en el modulo de la app 
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';




@Injectable({ providedIn: 'root' })

export class GifsService {


    public gifList : Gif[] = [];
    private _tagsHistory : string[] = [];
    private apiKey : string = 'vbHJ02ghlM9MhK09q7N9YczEAjb79ken';
    private serviceURL: string = 'https://api.giphy.com/v1/gifs';

    constructor( private http : HttpClient ) { }

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
        this.saveHistoryLocalStorage()
        //Guardamos el historial en el local storage
    }

    saveHistoryLocalStorage(){
        localStorage.setItem('History',JSON.stringify(this._tagsHistory))
    }

    searchTag(tag : string):void {
        if(tag.length === 0)return
        // Determinamos que el valor que envie el usuario no sea nulo

        this.organizeHistory(tag)
        // unshift añade elemtos al inicio del array

        const params = new HttpParams()
        .set('api_key', this.apiKey)
        // La key proporcionada en la api
        .set('limit','10')
        // Limite de datos que puede traer la request
        .set('q',tag)
        // Nombre del objeto que quiere buscar

        // Establecemos los parametros que tiene que tener la request

        this.http.get<SearchResponse>(`${this.serviceURL}/search`, {params})
        .subscribe( resp => {
            this.gifList = resp.data
            // Data traída de la API
        })
    }
}