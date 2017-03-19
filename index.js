var usr = {
        user : "facebook"
      };
const url = Mustache.render("https://api.github.com/users/{{user}}",usr)

fetch(url)
.then(response => response.json())
.then(json => document.getElementById("usercard").innerHTML = '<div class="ui card"><div class="image"><img src="' + json.avatar_url + '"></div><div class="content"><a class="header">Kristy</a><div class="meta"><span class="date">Joined in 2013</span></div><div class="description">Kristy is an art director living in New York.</div></div><div class="extra content"><a><i class="user icon"></i>22 Friends</a></div></div>')

