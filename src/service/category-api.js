import ApiGateway from './api-gateway';

const CategoryApi = {

    getCategories : function getCategories() {
        let url = `encproducts/getallcategoriestree?externalId=Enclothe`;
        return ApiGateway.get(url);
    },
    getCustomDesignCategories : function getCustomDesignCategories() {
        let url = `enc-category/customdesign`;
        return ApiGateway.get(url);
    },
    getCategoryDetail : function getCategoryDetail(categoryId) {
        let url = `enc-category/${categoryId}?includeCustomDesignTypes=true&includeProductAddons=true`;
        return ApiGateway.get(url);
    }
} 

export default CategoryApi;