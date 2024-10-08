import { RestService } from '../../../utils/rest-service';

const serviceUri = 'expenditure-goods';
const comodityPriceserviceUri = 'comodity-prices';
const finishedGoodServiceUri = 'finished-good-stocks';
const serviceUriFinOut = 'finishing-outs';
const serviceUriSewOut = 'sewing-outs';
const serviceUriLoadingOut = 'loadings';
const serviceUriCutOut = 'cutting-outs';

class Service extends RestService {
    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "garment-production");
    }

    search(info) {
        var endpoint = `${serviceUri}`;
        return super.list(endpoint, info);
    }

    getComodityPrice(info) {
        var endpoint = `${comodityPriceserviceUri}`;
        return super.list(endpoint, info);
    }

    getFinishedGood(info) {
        var endpoint = `${finishedGoodServiceUri}/list`;
        return super.list(endpoint, info);
    }

    getFinishedGoodByRo(info) {
        var endpoint = `${finishedGoodServiceUri}/get-by-ro`;
        return super.list(endpoint, info);
    }

    create(data) {
        var endpoint = `${serviceUri}`;
        return super.post(endpoint, data);
    }

    read(id) {
        var endpoint = `${serviceUri}/${id}`;
        return super.get(endpoint);
    }

    update(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        return super.put(endpoint, data);
    }

    delete(data) {
        var endpoint = `${serviceUri}/${data.Id}`;
        return super.delete(endpoint, data);
    }

    searchFinishingOutColor(info) {
        var endpoint = `${serviceUriFinOut}/color`;
        return super.list(endpoint, info);
    }

    getPdfById(id,buyer) {
        var endpoint = `${serviceUri}/${id}/${buyer}`;
        return super.getPdf(endpoint);
    }

    searchSewingOutColor(info) {
        var endpoint = `${serviceUriSewOut}/color`;
        return super.list(endpoint, info);
    }

    searchLoadingOutColor(info) {
        var endpoint = `${serviceUriLoadingOut}/color`;
        return super.list(endpoint, info);
    }

    searchCuttingOutColor(info) {
        var endpoint = `${serviceUriCutOut}/color`;
        return super.list(endpoint, info);
    }

}

const costCalculationServiceUri = 'cost-calculation-garments';
const serviceUriSalesContract = "merchandiser/garment-sales-contracts";
//const serviceUriSalesContract = "merchandiser/garment-sales-contracts/by-ro";

class SalesService extends RestService {
    constructor(http, aggregator, config, api) {
        super(http, aggregator, config, "sales");
    }

    getCostCalculationByRONo(info) {
        var endpoint = `${costCalculationServiceUri}`;
        return super.list(endpoint, info);
    }

    getSalesContractByRONo(info) {
        var endpoint = `${serviceUriSalesContract}`;
        return super.list(endpoint, info);
    }

    // getSalesContractByRONo(ro) {
    //     var endpoint = `${serviceUriSalesContract}/${ro}`;
    //     return super.get(endpoint);
    // }
}

const serviceUriPR = 'garment-purchase-requests';
class PurchasingService extends RestService {
    constructor(http, aggregator, config, api) {
        super(http, aggregator, config, "purchasing-azure");
    }

    getGarmentPR(info) {
        var endpoint = `${serviceUriPR}`;
        return super.list(endpoint, info);
    }
}

const shippingInvoiceServiceUri = 'garment-shipping/invoices/packingListById'; 
class PackingInventoryService extends RestService {
    constructor(http, aggregator, config, api) {
        super(http, aggregator, config, "packing-inventory");
    }

    getDataByPackingLisId(id) {
        var endpoint = `${shippingInvoiceServiceUri}/${id}`;
        return super.get(endpoint);
    }
}

export { Service, SalesService, PurchasingService, PackingInventoryService }

