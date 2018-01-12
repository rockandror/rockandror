App.Facebook =

  initialize: ->
    console.log 'facebook'
    ((d, s, id) ->
      js = undefined
      fjs = d.getElementsByTagName(s)[0]
      if d.getElementById(id)
        return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.11&appId=1348648721827038'
      fjs.parentNode.insertBefore js, fjs
      return
    ) document, 'script', 'facebook-jssdk'
