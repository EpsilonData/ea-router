'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSiteUrl = getSiteUrl;
exports.getApiUrl = getApiUrl;
exports.getEuphoriaUrl = getEuphoriaUrl;
exports.openEuphoria = openEuphoria;
exports.openPublisherPlaybook = openPublisherPlaybook;
exports.openIntegrationGuide = openIntegrationGuide;
function getSiteUrl() {
  if (window.location.protocol === 'http:') {
    return 'http://localhost:4444';
  } else {
    return 'https://euphoricadventur.es';
  }
}

function getApiUrl() {
  return window.location.protocol + '//api.euphoricadventur.es/v1';
}

function getEuphoriaUrl(email) {
  if (window.location.protocol === 'http:') {
    return 'http://localhost:8080/#!/inbound/log-in-email/' + email;
  } else {
    return 'https://euphoricadventur.es/app#!/inbound/log-in-email/' + email;
  }
}

function openEuphoria(email) {
  window.open(getEuphoriaUrl(email), '_blank');
}

function openPublisherPlaybook() {
  window.open(getSiteUrl() + '/integration-guide', '_blank');
  // this guide hasn't been written yet
  // window.open(`${getSiteUrl()}/publisher-playbook`, '_blank')
}

function openIntegrationGuide() {
  window.open(getSiteUrl() + '/integration-guide', '_blank');
}
