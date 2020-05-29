import { RxTranslation } from "@rxweb/translate";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private http: HttpClient, private rxTranslation: RxTranslation) {}

  get() { 
    return this.http.get("assets/i18n/lookup/countries." + this.rxTranslation.language + ".json")
  }
}
