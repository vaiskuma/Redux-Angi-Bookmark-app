import { ApiService } from "./api.service";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./store";
import { Article } from "./article";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class Actions {

    constructor(private apiService: ApiService, private ngRedux: NgRedux<IAppState>) { }

    static LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
    static LOAD_ARTICLES_FAIL = "LOAD_ARTICLES_FAIL";
    static ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
    static ADD_ARTICLE_FAIL = 'ADD_ARTICLE_FAIL';
    static REMOVE_ARTICLE_SUCCESS = 'REMOVE_ARTICLE_SUCCESS';
    static REMOVE_ARTICLE_FAIL = 'REMOVE_ARTICLE_FAIL';


    loadAllArticles() {
        this.apiService.getArticles().subscribe(res => {
            this.ngRedux.dispatch({
                type: Actions.LOAD_ARTICLES_SUCCESS,
                payload: res
            });
        }, error => {
            //If web service fails.
            this.ngRedux.dispatch({
                type: Actions.ADD_ARTICLE_FAIL,
                payload: error
            });
        })
    }

    addArticle(article: Article) {
        this.apiService.addArticle(article).subscribe(res => {
            this.ngRedux.dispatch({
                type: Actions.ADD_ARTICLE_SUCCESS,
                payload: res
            });
        }, error => {
            //If web service fails.
            this.ngRedux.dispatch({
                type: Actions.ADD_ARTICLE_FAIL,
                payload: error
            });
        }
        )
    }
    removeArticle(article: Article) {
        this.apiService.deleteArticle(article.id).subscribe(() => {
            this.ngRedux.dispatch({
                type: Actions.REMOVE_ARTICLE_SUCCESS,
                id: article.id
            })

        }, error => {
            //If web service fails.
            this.ngRedux.dispatch({
                type: Actions.REMOVE_ARTICLE_FAIL,
                payload: error
            });
        })
    }
}