export function getSiteUrl () {
  if (window.location.protocol === 'http:') {
    return 'http://localhost:4444'
  } else {
    return 'https://euphoricadventur.es'
  }
}

export function getApiUrl () {
  return `${window.location.protocol}//jada.io/euphoria-api`
}

export function getEuphoriaUrl (email) {
  if (window.location.protocol === 'http:') {
    return `http://localhost:8080/#!/inbound/log-in-email/${email}`
  } else {
    return `https://euphoricadventur.es/app/index.html#!/inbound/log-in-email/${email}`
  }
}

export function openEuphoria (email) {
  window.open(getEuphoriaUrl(email), '_blank')
}

export function openPublisherPlaybook () {
  window.open(`${getSiteUrl()}/integration-guide`, '_blank')
  // this guide hasn't been written yet
  // window.open(`${getSiteUrl()}/publisher-playbook`, '_blank')
}

export function openIntegrationGuide () {
  window.open(`${getSiteUrl()}/integration-guide`, '_blank')
}
