(this["webpackJsonpmagic-lyrics-frontend"]=this["webpackJsonpmagic-lyrics-frontend"]||[]).push([[0],{139:function(e,t,a){e.exports=a(259)},144:function(e,t,a){},145:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=(a(144),a(145),a(21)),s=a(22),l=a(24),u=a(39),m=a(129),d=a(9),p=a(265),h=a(264),f="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("8836102077dc476b87b683e9fbcd411a","&redirect_uri=").concat("https://willmharris.github.io/magic-lyrics-frontend/player","&scope=").concat(["user-read-currently-playing","user-read-playback-state","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true");var y=function(){return r.a.createElement(p.a,{style:{backgroundImage:"url(".concat("https://sheffieldsolidsurfaces.b-cdn.net/wp-content/uploads/sites/3/2019/02/b0da5f_1dec43baa7e544a986e5b77576b4b4dfmv2.jpg",")")}},r.a.createElement(p.a.Column,{style:{paddingTop:100}},r.a.createElement(p.a.Row,{style:{paddingLeft:375,paddingTop:100,fontSize:60}},"Welcome to Magic Lyrics"),r.a.createElement(p.a.Row,{style:{paddingLeft:475,paddingTop:100,fontSize:40}},"Spotify lyrics made easy"),r.a.createElement(p.a.Row,{style:{paddingLeft:515,paddingTop:100}},r.a.createElement(h.a,{href:f,style:{fontSize:35}},"Login to Spotify buddy")),r.a.createElement(p.a.Row,{style:{paddingTop:325}})))},g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).playPause=function(t){fetch("https://api.spotify.com/v1/me/player/".concat(t.target.id),{method:"PUT",headers:{Authorization:"Bearer "+e.props.accessToken}})},e.previousNext=function(t){fetch("https://api.spotify.com/v1/me/player/".concat(t.target.id),{method:"POST",headers:{Authorization:"Bearer "+e.props.accessToken}})},e.state={songData:null,lyrics:null,songURL:null},e}return Object(s.a)(a,[{key:"refresh",value:function(){var e=this;setInterval((function(){fetch("https://api.spotify.com/v1/me/player",{headers:{Authorization:"Bearer "+e.props.accessToken}}).then((function(e){return e.json()})).then((function(t){e.setState({songData:t})})).then((function(){return fetch("https://magic-lyrics-backend.herokuapp.com/lyrics?song=".concat(e.state.songData.item.name,"&artist=").concat(e.state.songData.item.artists[0].name))})).then((function(e){return e.json()})).then((function(t){e.setState({lyrics:t.lyrics,songUrl:t.website})}))}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.songData?r.a.createElement(p.a,{columns:2,style:{backgroundImage:"url(".concat("https://sheffieldsolidsurfaces.b-cdn.net/wp-content/uploads/sites/3/2019/02/b0da5f_1dec43baa7e544a986e5b77576b4b4dfmv2.jpg",")")}},r.a.createElement(p.a.Column,{style:{fontSize:25}},r.a.createElement(p.a.Row,null,r.a.createElement("img",{src:this.state.songData.item.album.images[0].url,style:{maxHeight:550,maxWidth:550}})),r.a.createElement(p.a.Row,{style:{marginTop:25}},"Song: ",this.state.songData.item.name),r.a.createElement(p.a.Row,{style:{marginTop:25}},"Artist: ",this.state.songData.item.artists[0].name),r.a.createElement(p.a.Row,{style:{marginTop:25}},r.a.createElement(h.a,{onClick:this.previousNext,id:"previous"},"Previous"),r.a.createElement(h.a,{onClick:this.playPause,id:"play"},"Play"),r.a.createElement(h.a,{onClick:this.playPause,id:"pause"},"Pause"),r.a.createElement(h.a,{onClick:this.previousNext,id:"next"},"Next"))),r.a.createElement(p.a.Column,{style:{fontSize:25,lineHeight:1.5}},r.a.createElement("div",{className:"preformatted"},this.state.lyrics))):null)}},{key:"componentDidMount",value:function(){window.location.hash="",this.refresh()}}]),a}(n.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"refresh",value:function(){setInterval((function(){console.log("test")}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Search"))}},{key:"componentDidMount",value:function(){this.refresh()}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={accessToken:window.location.hash.substring(14)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(d.a,{exact:!0,path:"/magic-lyrics-frontend",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(d.a,{exact:!0,path:"magic-lyrics-frontend/player",render:function(){return r.a.createElement(g,{accessToken:e.state.accessToken})}}),r.a.createElement(d.a,{exact:!0,path:"/search",render:function(){return r.a.createElement(b,null)}}))}}]),a}(n.Component);var E=function(){return r.a.createElement("div",null,r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(258);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.c435feaa.chunk.js.map