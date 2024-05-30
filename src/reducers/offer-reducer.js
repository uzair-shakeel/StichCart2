import InitialState from './initialstate';

function offerReducers(prevState = { isOfferTileOffersLoading: false, offerTileOffers : InitialState.offerTileOffers}, action) {
    switch (action.type) {
        case 'GET_OFFER_TILE_OFFERS_REQUEST':
            return { ...prevState, isOfferTileOffersLoading: true , error: ''};
        case 'GET_OFFER_TILE_OFFERS_SUCCESS':
            return { ...prevState, isOfferTileOffersLoading: false, offerTileOffers: action.offers, error: '', message:'' };
        case 'GET_OFFER_TILE_OFFERS_FAILURE':
            return { ...prevState, isOfferTileOffersLoading: false, error: ''};
        default:
            return prevState;
    }
}

export default offerReducers;