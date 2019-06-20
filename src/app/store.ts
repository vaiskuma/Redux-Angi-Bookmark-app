import { Article } from './article';
import { Actions } from './actions';
import { tassign } from 'tassign';

export interface IAppState {
    articles: Article[];
}

export const INITIAL_STATE: IAppState = {
    articles: [],
}

export function rootReducer(state: IAppState = INITIAL_STATE, action): IAppState {
    switch (action.type) {
        case Actions.LOAD_ARTICLES_SUCCESS: {
            return tassign(state, { articles: action.payload })
        }
        case Actions.ADD_ARTICLE_SUCCESS: {
            return tassign(state, { articles: [...state.articles, action.payload]});
        }
        case Actions.REMOVE_ARTICLE_SUCCESS:
            return Object.assign({}, state, {
                articles: state.articles.filter(t => t.id !== action.id),
            })
        default:
            return state;

    }
}

