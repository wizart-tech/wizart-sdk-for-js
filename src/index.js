import axios from 'axios';

const DEFAULT_ENDPOINT = 'https://vision-api.p.rapidapi.com';
const X_RAPID_API_HOST = 'vision-api.p.rapidapi.com';

const FeatureTypes = {
    WALL: 'walls',
    FLOOR: 'floor',
    CEILING: 'ceiling',
    WINDOW: 'windows'
};

const AnalysisTypes = {
    CAMERA: 'camera',
    IMAGE_INFO: 'image-info',
    INTERIOR_TYPE: 'interior-type'
};

class WizartVision {
    constructor(token, endpoint = DEFAULT_ENDPOINT) {
        this.endpoint = endpoint;
        this.token = token;
    }

    segmentation(data, feature = '') {
        return this._request('segmentation', feature, data);
    }

    detection(data, feature = '') {
        return this._request('detection', feature, data);
    }

    reconstruction(data, feature = '') {
        return this._request('reconstruction', feature, data);
    }

    analysis(data, feature = '') {
        return this._request('analysis', feature, data);
    }

    interior(data, feature = '') {
        return this._request('interior', feature, data);
    }

    _request(featurePath, feature, data = {}) {
        const requestUrl = `${this.endpoint}/${featurePath}${feature ? '/' + feature : feature}`;

        const options = {
            method: 'POST',
            url: requestUrl,
            headers: {
                Accept: 'application/json',
                'X-RapidAPI-Key': this.token,
                'X-RapidAPI-Host': X_RAPID_API_HOST
            },
            data: data
        };
        return axios.request(options).then(response => {
            return response.data;
        });
    }
}

export { WizartVision, FeatureTypes, AnalysisTypes };