export function getSiteUrl () {
  if (window.location.protocol === 'http:') {
    return 'http://localhost:4444'
  } else {
    return `${window.location.protocol}//${window.location.hostname}`
  }
}

export function getApiUrl () {
  return `${window.location.protocol}//api.${window.location.hostname}/v1`
}

export function getEuphoriaUrl (email) {
  if (window.location.protocol === 'http:') {
    return `http://localhost:8080/#!/inbound/log-in-email/${email}`
  } else {
    return `${window.location.protocol}//${window.location.hostname}/app/#!/inbound/log-in-email/${email}`
  }
}

export function openEuphoria (email) {
  window.open(getEuphoriaUrl(email), '_blank')
}

export function openPublisherPlaybook () {
  window.open(`${getSiteUrl()}/publisher-playbook`, '_blank')
}

export function openIntegrationGuide () {
  window.open(`${getSiteUrl()}/integration-guide`, '_blank')
}
