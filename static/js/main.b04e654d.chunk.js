(this["webpackJsonpmy-markup-app"]=this["webpackJsonpmy-markup-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(3),d=n.n(a),r=(n(13),n(5)),o=n(6),s=n(8),u=n(7),l=(n(14),n(4)),h=n.n(l),m=n(0),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={markdown:"# h1\n## h2\n[Duck Duck Go](https://duckduckgo.com)\n```\nCode Block\n```\n* list item\n> blockquote\n`inline code`\n**bolded**\n![The San Juan Mountains are beautiful!](https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300 'my image')"},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("editor").value=this.state.markdown,document.getElementById("preview").innerHTML=h()(this.state.markdown),document.getElementById("editor").addEventListener("keyup",(function(){e.setState({markdown:document.getElementById("editor").value}),document.getElementById("preview").innerHTML=h()(e.state.markdown)}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Markdown Previewer"}),Object(m.jsxs)("div",{className:"flex-container",children:[Object(m.jsxs)("div",{id:"left",children:[Object(m.jsx)("h2",{className:"whiteText",children:"Markdown"}),Object(m.jsx)("textarea",{id:"editor","data-testid":"editor"})]}),Object(m.jsxs)("div",{id:"right",children:[Object(m.jsx)("h2",{className:"whiteText",children:"Preview"}),Object(m.jsx)("div",{id:"preview","data-testid":"preview"})]})]})]})}}]),n}(c.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,d=t.getTTFB;n(e),i(e),c(e),a(e),d(e)}))};d.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.b04e654d.chunk.js.map