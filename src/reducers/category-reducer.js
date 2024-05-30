import InitialState from './initialstate';

function categoryReducers(prevState = { 
    getCategoriesLoading: false, 
    categories : InitialState.categories,
    customCategories: InitialState.customCategories,
    customCategoryNames: InitialState.customCategoryNames,
    loadCategoryDetailLoading: false,
    categoryDetail: InitialState.categoryDetail}, action) {

    switch (action.type) {
        case 'GET_CATEGORIES_REQUEST':
            return { ...prevState, getCategoriesLoading: true , error: ''};
        case 'GET_CATEGORIES_SUCCESS':
            return { ...prevState, getCategoriesLoading: false, categories: action.categories, error: '', message:'' };
        case 'GET_CATEGORIES_FAILURE':
            return { ...prevState, getCategoriesLoading: false, error: ''};
        case 'LOAD_CUSTOM_DESIGN_CATEGORIES_REQUEST':
            return { ...prevState, loadCustomCategoriesLoading: true , error: ''};
        case 'LOAD_CUSTOM_DESIGN_CATEGORIES_SUCCESS':
            return { ...prevState, loadCustomCategoriesLoading: false, 
                customCategories: action.customCategories, customCategoryNames: action.customCategoryNames, error: '', message:'' };
        case 'LOAD_CUSTOM_DESIGN_CATEGORIES_FAILURE':
            return { ...prevState, loadCustomCategoriesLoading: false, error: ''};  
        case 'LOAD_CATEGORY_DETAIL_REQUEST':
            return { ...prevState, loadCategoryDetailLoading: true ,categoryDetail: InitialState.categoryDetail, error: ''};
        case 'LOAD_CATEGORY_DETAIL_SUCCESS':
            return { ...prevState, loadCategoryDetailLoading: false, categoryDetail: action.categoryDetail, error: '', message:'' };
        case 'LOAD_CATEGORY_DETAIL_FAILURE':
            return { ...prevState, loadCategoryDetailLoading: false, error: ''};
    
        default:
            return prevState;
    }
}

export default categoryReducers;