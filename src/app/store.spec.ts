import { rootReducer } from './store';
import { Actions } from './actions';


describe('Reducer', () => {
    it('should have correct initial state', () => {
        const state = rootReducer(undefined, {});
        expect(state.articles.length).toBe(0);
    });
    it('should add article to array on add success'), () => {
        const state = rootReducer(undefined, {
            type: Actions.ADD_ARTICLE_SUCCESS,
            payload: {
                id: 1,
                title: "test",
                link: "test",
                tag: "#test"
            }
        })
        expect(state.articles.length).toBe(1);
    }
    it('should remove article from array when remove success', () => {
        const initialState = {
            articles: [{
                id: 33,
                title: "test",
                link: "test",
                tag: "#test"
            },
            {
                id:44,
                title: "test",
                link: "test",
                tag: "#test"
            }
            ]
        };
        const state = rootReducer(initialState, {
            type: Actions.REMOVE_ARTICLE_SUCCESS,
            id: 33
        });
        expect(state.articles[0].id).toBe(44);
    })
});