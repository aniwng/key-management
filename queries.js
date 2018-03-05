const promise = require('bluebird');
const moment = require('moment');

const registrationProps = require('./registration-properties.json').registration_props.row;

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://blackduck:mallard@localhost:55432/bds_private';
const db = pgp(connectionString);

module.exports = {
    getKeys: getKeys,
    getSingleKey: getSingleKey,
    getLatestKeys: getLatestKeys,
    getKeyBySearch: getKeyBySearch
};

function getKeys(req, res, next) {
    db.any('SELECT * FROM registration LIMIT 1')
        .then(data => {
            res.status(200)
                .json({ items: data });
        })
        .catch(err => {
            return next(err);
        });
}

function getSingleKey(req, res, next) {
    const ID = req.params.id;
    db.one('SELECT * FROM registration WHERE registration_id = $1', ID)
        .then(data => {
            let formattedData = buildProps(data.props);
            data.props = formattedData;
            res.status(200)
                .json({ items: data });
        })
        .catch(err => {
            return next(err);
        });
}

function getLatestKeys(req, res, next) {
    // Get keys from this month
    let date = moment().format('YYYYMM');
    db.any('SELECT registration_id FROM registration WHERE props LIKE $1', `%date_created=${date}%`)
        .then(data => {
            res.status(200)
                .json({ items: data });
        })
        .catch(err => {
            return next(err);
        });
}

function getKeyBySearch(req, res, next) {
    const query = req.params.q;
    db.any('SELECT registration_id FROM registration WHERE registration_id LIKE $1', `%${query}%`)
        .then(data => {
            res.status(200)
                .json({ items: data });
        })
        .catch(err => {
            return next(err);
        });
}

function dataToMap(data) {
    let dataMap = new Map();
    let dataList = data.split('&');
    for(let value of dataList) {
        let splitValue = value.split('=');
        dataMap.set(splitValue[0], splitValue[1]);
    }
    return dataMap;
}

function dataToObj(data) {
    let obj = {};
    let dataList = data.split('&');
    for(let value of dataList) {
        let splitValue = value.split('=');
        obj[splitValue[0]] = splitValue[1];
    }
    return obj;
}

function mapToObj(map) {
    let obj = {};
    map.forEach((m, key) => {
        obj[`${key}`] = m;
    });
    return obj;
}

function buildProps(data) {
    let obj = [];
    let dataObj = dataToMap(data);
    let categories = [];
    for(let value of registrationProps) {
        categories.push(value.fieldGroup);
    }
    let uniqueCategories = new Set(categories);
    for(let value of uniqueCategories) {
        let catObj = {};
        catObj[value] = [];
        obj.push(catObj);
    }
    for(let [key, value]  of dataObj) {
        let detailsObj = {};
        let details = registrationProps.find(prop => prop.handle === key);
        let selected = obj.find(prop => Object.keys(prop)[0] === details.fieldGroup);

        detailsObj = details;
        detailsObj.value = value;

        selected[Object.keys(selected)[0]].push(detailsObj);
    }
    return obj;
}