import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:3000/api/links';
  
  constructor(private httpClient: HttpClient) {}

	getArticles(): Observable<Article[]> {
		return this.httpClient.get<Article[]>(this.url);
	}

	addArticle(article: Article): Observable<Article> {
		return this.httpClient.post<Article>(this.url, article);
	}

	deleteArticle(id: number): Observable<string> {
		const urldelete = this.url + '/' + id; 
		return this.httpClient.delete<string>(urldelete);
	}
}
