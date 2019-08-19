/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const baseURL = 'http://localhost:3000'

const getUrlParameter = (param) => {
  const url = new URL(window.location.href)
  const orderId = new URLSearchParams(url.search).get(param)
  return orderId
}

let httpRequest = {
  get: function (uri) {
    return $.ajax({
      method: 'get',
      async: true,
      url: `${baseURL}${uri}`
    })
  },

  post: function (uri, data) {
    return $.ajax({
      method: 'post',
      data,
      url: `${baseURL}${uri}`
    })
  },
  patch: function (uri, data) {
    return $.ajax({
      method: 'patch',
      data,
      url: `${baseURL}${uri}`
    })
  }
}
