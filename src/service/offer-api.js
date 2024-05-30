import ApiGateway from './api-gateway';

const OfferApi = {

    loadAllOfferForOfferTile: function loadOfferForOfferTile() {
        let url = `enc-offer/offers/tile`;
        return ApiGateway.get(url);
    }

} 

export default OfferApi;