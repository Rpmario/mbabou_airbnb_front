export default {
  register(body) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  },
  login(body) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  },

  // user(body) {
  //   return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user`, {
  //     method: "GET",
      
  //     headers: {
  //       'Content-type': "application/json"
  //     },
  //     body: JSON.stringify(body)
  //   }).then(res => res.json())
  // },

  newpost(body) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/place`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
  },
}





















