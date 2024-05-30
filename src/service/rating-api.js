import ApiGateway from './api-gateway';

const RatingApi = {

    getRecentRating: function getRecentRating(maxResults) {
        let url = `enc-rating/recent?maxResults=${maxResults}`;
        return ApiGateway.get(url);
    },
    saveProductRatingAndReview: function saveProductRatingAndReview(customerId, productId, reviewText, rating) {
        let url = `ratings/${productId}?ratingType=PRODUCT&customerId=${customerId}`;
        const reviewRatingReq = {
            "reviewText":reviewText,
            "ratingDetail": {
                "rating": rating
            }
        }
        return ApiGateway.post(url, reviewRatingReq);
    },
    getRatingAndReviewByItem: function getRatingAndReviewByItem(itemId) {
        let url = `ratings/${itemId}`;
        return ApiGateway.get(url);
    }
} 

export default RatingApi;