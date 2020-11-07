import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  private recipeText: string;
  private start = 0;
  static PageRecordCount = 10;
  private end = 0;

  private api_url = "https://api.edamam.com/search";
  private app_id = '****';
  private app_key = '****';


  constructor(private http: HttpClient) {
  }

  public Initialize() {
    this.start = 0;
    this.end = 0;
  }
  private moveToNextPage() {
    if (this.end) {
      this.end += RecipeDataService.PageRecordCount;
    }
    else {
      this.start += RecipeDataService.PageRecordCount;
      this.end += RecipeDataService.PageRecordCount;
    }    
  }

  public getNextPageRecipes(recipeName: string): Observable<any[]> {
    this.moveToNextPage();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers.append('Content-Encoding', "gzip");

    this.recipeText = recipeName;

    let params = new HttpParams();
    params.set("q", encodeURI(this.recipeText));
    params.set('app_id', this.app_id);
    params.set('app_key', this.app_key);
    params.set('from', this.start.toString());
    params.set('to', this.end.toString());

    return this.http.get<any[]>(this.api_url, { headers: headers, params: params });
  }
}
