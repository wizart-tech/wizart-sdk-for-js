const axios = require('axios').default;

const FeatureTypes = {
    WALL: 'walls',
    FLOOR: 'floor',
    CEILING: 'ceiling',
    WINDOW: 'windows'
}

const DEFAULT_ENDPOINT = 'https://pim-client.wizart.ai/vision-api'

const AnalysisTypes = {
    CAMERA: 'camera',
    IMAGE_INFO: 'image-info',
    INTERIOR_TYPE: 'interior-type'
}

class WizartVision {
    endpoint = ''
    token = ''

    constructor(token, endpoint=DEFAULT_ENDPOINT) {
        this.endpoint = endpoint
        this.token = token
    }

    segmentation(data, feature='') {
        return this._request('segmentation', feature, data)
    }

    detection(data, feature='') {
        return this._request('detection', feature, data)
    }

    reconstruction(data, feature='') {
        return this._request('reconstruction', feature, data)
    }

    analysis(data, feature='') {
        return this._request('analysis', feature, data)
    }

    interior(data, feature='') {
        return this._request('interior', feature, data)
    }

    _request(featurePath, feature, data={}) {
        const requestUrl = this.endpoint + '/v3/' + featurePath + (feature ? '/' + feature : feature)

        return axios({
            method: 'post',
            url: requestUrl,
            headers: {
                'Authorization': this.token
            },
            data
        }).then(response => {
            return response.data
        });
    }
}

export { WizartVision, FeatureTypes, AnalysisTypes }