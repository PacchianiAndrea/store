(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{102:function(t,e,n){},134:function(t,e,n){},135:function(t,e,n){},136:function(t,e,n){},137:function(t,e,n){},144:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(19),r=n.n(c),i=n(13),s=n.n(i),o=n(52),d=n(86),j=n(24),l=n(32),b=n(165),u=n(168),x=n(167),m=n(169),h=n(162),p=n(163),O=n(164),f=n(166),g=n(161),v=Object(g.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{display:"flex",bottom:0},buttons:{bottom:0,display:"flex"},palette:{primary:{main:"#388e3c"}},carta:{height:"500px"}}})),y=(n(102),n(1)),w=function(t){var e=t.item,n=t.update,a=t.remove,c=v();return Object(y.jsxs)(h.a,{className:c.carta,children:[Object(y.jsx)(p.a,{image:e.media.source,alt:e.name,className:c.media}),Object(y.jsxs)(O.a,{className:c.cardContent,children:[Object(y.jsx)(b.a,{variant:"h4",children:e.name}),Object(y.jsx)(b.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(y.jsxs)(f.a,{className:c.cardActions,children:[Object(y.jsxs)("div",{className:c.buttons,children:[Object(y.jsx)(x.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(y.jsx)(b.a,{children:e.quantity}),Object(y.jsx)(x.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(y.jsx)(x.a,{onClick:function(){return a(e.id)},variant:"contained",type:"button",color:"primary",children:" Rimuovi "})]})]})},N=n(23),C=Object(g.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(N.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(N.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),k=n(17),_=function(t){var e=t.cart,n=t.empty,a=t.update,c=t.remove,r=C();return Object(y.jsxs)(m.a,{children:[Object(y.jsx)("div",{className:r.toolbar}),Object(y.jsx)(b.a,{className:r.title,variant:"h3",gutterBottom:!0,children:"Il tuo carrello"}),e.total_unique_items?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(u.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(y.jsx)(u.a,{item:!0,xs:12,sm:4,children:Object(y.jsx)(w,{update:a,remove:c,item:t})},t.id)}))}),Object(y.jsxs)("div",{className:r.cardDetails,children:[Object(y.jsxs)(b.a,{variant:"h4",children:["Totale: ",e.subtotal.formatted_with_symbol]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(x.a,{className:r.emptyButton,onClick:n,size:"large",type:"button",variant:"contained",color:"secondary",children:"Svuota carrello"}),Object(y.jsx)(x.a,{className:r.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]}):Object(y.jsxs)(b.a,{className:" ciao",variant:"subtitle1",children:["Non hai prodotti nel carrello, ",Object(y.jsx)(k.b,{className:r.link,to:"/products",children:"aggiungi qualcosa"}),"!"]})]})},I=n(170),z=n(171),S=n(172),T=n(173),A=n(77),B=n.n(A),L=n(12),R=Object(g.a)((function(t){return{appBar:Object(N.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",borderWidth:"1px",borderColor:"secondary"},menuButton:Object(N.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(N.a)({marginRight:2,borderRadius:t.shape.borderRadius,backgroundColor:Object(L.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(L.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"left",justifyContent:"center"},inputRoot:{color:"inherit"},cart:{height:"100px"},inputInput:{padding:t.spacing(1,1,1,0),paddingLeft:"30px",transition:t.transitions.create("width"),width:"100%"}}})),P=function(t){var e=t.totalItems,n=R();return Object(y.jsx)("div",{children:Object(y.jsx)(I.a,{position:"fixed",color:"inherit",children:Object(y.jsxs)(z.a,{children:[Object(y.jsx)(b.a,{variant:"h6",className:n.appBar,color:"inherit",children:Object(y.jsxs)(u.a,{container:!0,children:[Object(y.jsx)("div",{className:n.toolbar}),Object(y.jsx)(u.a,{component:k.b,to:"/",item:!0,xs:1,children:Object(y.jsx)("img",{style:{height:"70px",width:"auto"},src:"./favicon.ico",alt:"logo",height:"30px"})})]})}),Object(y.jsx)("div",{className:n.grow}),Object(y.jsx)("div",{className:n.button,children:Object(y.jsx)(S.a,{"aria-label":"Mostra i prodotti nel carrello",color:"inherit",component:k.b,to:"/cart",children:Object(y.jsx)(T.a,{badgeContent:e,color:"secondary",children:Object(y.jsx)(B.a,{})})})})]})})})},q=n(78),D=new(n.n(q).a)("pk_25965b7de998b86ab0e69047e7f85ea26e36de0904a2c",!0),W=(n(134),n(175)),H=function(){return Object(y.jsxs)("div",{children:[Object(y.jsxs)(W.a,{interval:3e3,children:[Object(y.jsx)(W.a.Item,{id:"item1",className:"Item",children:Object(y.jsx)(W.a.Caption,{className:"bottoneCentrale",children:Object(y.jsx)(u.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(y.jsx)(u.a,{item:!0,xs:3,children:Object(y.jsx)("h1",{children:Object(y.jsx)("a",{href:"#Palestra",className:"LnkC",children:"Palestra"})})})})})}),Object(y.jsx)(W.a.Item,{id:"item2",className:"Item",children:Object(y.jsx)(W.a.Caption,{children:Object(y.jsx)(u.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(y.jsx)(u.a,{item:!0,xs:3,children:Object(y.jsx)("h1",{children:Object(y.jsx)("a",{href:"#Nuoto",className:"LnkC",children:"Nuoto"})})})})})}),Object(y.jsx)(W.a.Item,{id:"item3",className:"Item",children:Object(y.jsx)(W.a.Caption,{children:Object(y.jsx)(u.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(y.jsx)(u.a,{item:!0,xs:3,children:Object(y.jsx)("h1",{children:Object(y.jsx)("a",{href:"#Sport",className:"LnkC",children:"Sport"})})})})})})]}),Object(y.jsx)("hr",{id:"Riga"}),Object(y.jsx)("h1",{children:"Prodotti:"})]})},E=(n(135),function(){return Object(y.jsxs)(u.a,{container:!0,align:"center",className:"footer animate__animated animate__fadeIn animate__delay-3s",spacing:4,children:[Object(y.jsxs)(u.a,{xs:4,item:!0,children:["Chi siamo?",Object(y.jsx)("br",{}),"Dove siamo?",Object(y.jsx)("br",{}),"Telefono: 392869053"]}),Object(y.jsxs)(u.a,{xs:4,item:!0,children:["\xa9 Copyright - 2021",Object(y.jsx)("br",{})," Andrea Pacchiani",Object(y.jsx)("br",{})," Federico Placentino",Object(y.jsx)("br",{})," Riccardo Mingon"]}),Object(y.jsx)(u.a,{xs:4,item:!0,children:"ciao"})]})}),G=n(85),M=n.n(G),F=(n(136),n(10)),J=n(82),Q=n.n(J),V=Object(g.a)((function(){return{root:{maxWidth:"100%",height:"auto"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end",bottom:0},cardContent:{display:"flex",justifyContent:"space-between",fontSize:"20px"},prodotto:{height:"auto"}}})),K=(n(137),function(t){var e=t.product,n=t.onAddToCart,a=V();return Object(y.jsxs)("div",{className:"animate__animated animate__fadeIn "+a.prodotto,children:[Object(y.jsx)("br",{}),Object(y.jsxs)(h.a,{className:a.root,children:[Object(y.jsx)(p.a,{className:a.media,image:e.media.source,title:e.name}),Object(y.jsxs)(O.a,{className:"animate__animated animate__fadeIn animate__delay-1s descrizione",children:[Object(y.jsxs)("div",{className:a.cardContent,children:[Object(y.jsx)(b.a,{variant:"h6",gutterBottom:!0,children:e.name}),Object(y.jsx)(b.a,{variant:"h6",children:e.price.formatted_with_symbol})]}),Object(y.jsx)(b.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(y.jsxs)(f.a,{disableSpacing:!0,className:a.CardActions,children:[Object(y.jsx)(S.a,{onClick:function(){return n(e.id,1)},children:Object(y.jsx)(Q.a,{})}),Object(y.jsx)(b.a,{id:"view",component:k.b,to:"product-view/"+e.id,variant:"button",children:"Visualizza"})]})]})]})}),U=Object(g.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),X=function(t){var e=t.categories,n=t.onAddToCart,a=U();return Object(y.jsx)("div",{className:a.content,children:Object(y.jsxs)("main",{children:[Object(y.jsx)("div",{className:a.toolbar}),e.map((function(t){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("section",{id:t.name,children:[Object(y.jsxs)(b.a,{variant:"h3",component:"h2",children:[Object(y.jsx)("br",{}),t.name]}),Object(y.jsx)(u.a,{container:!0,justify:"center",spacing:4,children:t.productsData.map((function(t){return Object(y.jsx)(u.a,{item:!0,spacing:0,xs:6,sm:6,md:4,lg:3,children:Object(y.jsx)(K,{product:t,onAddToCart:n})},t.id)}))})]})})}))]})})},Y=n(174),Z=n(176),$=Object(g.a)((function(){return{root:{maxWidth:"100%"},media:{paddingTop:"25%",paddingLeft:"20px",width:"500px",height:"auto"},container:{marginTop:"20%",maxWidth:"50%"},button:{display:"flex",border:"1px solid red",fontSize:"25px"},mainProd:{height:"400px"},bottoni:{display:"flex",justifyContent:"space-between"},descrizione:{fontSize:"20px"}}})),tt=n(83),et=n.n(tt),nt=function(t){var e=t.onAddToCart,n=$(),c=Object(a.useState)({}),r=Object(l.a)(c,2),i=r[0],o=r[1],d=Object(a.useState)(1),h=Object(l.a)(d,2),p=h[0],O=h[1],f=function(){var t=Object(j.a)(s.a.mark((function t(e){var n,a,c,r,i,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.products.retrieve(e);case 2:n=t.sent,a=n.name,c=n.price,r=n.media,i=n.quantity,d=n.description,o({id:e,name:a,quantity:i,description:d,src:r.source,price:c.formatted_with_symbol});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){var t=window.location.pathname.split("/");f(t[2])}),[]);var g=function(t){p+t>0&&O(p+t)};return Object(y.jsxs)(m.a,{className:"product-view",children:[Object(y.jsx)(Z.a,{className:n.button,component:"span",m:1,children:Object(y.jsx)(et.a,{color:"primary",className:"back",component:k.b,to:"/products"})}),Object(y.jsxs)(u.a,{container:!0,spacing:4,className:n.mainProd,children:[Object(y.jsx)(u.a,{item:!0,xs:12,md:8,children:Object(y.jsx)("img",{src:i.src,alt:i.name,className:n.media})}),Object(y.jsxs)(u.a,{item:!0,xs:12,md:4,className:n.container+" container1",children:[Object(y.jsx)(b.a,{variant:"h2",children:i.name}),Object(y.jsx)(b.a,{dangerouslySetInnerHTML:{__html:i.description},className:n.descrizione,variant:"body2",color:"textSecondary"}),Object(y.jsxs)(b.a,{variant:"h4",children:["Prezzo del prodotto: ",i.price,Object(y.jsx)("br",{})]}),Object(y.jsxs)(u.a,{container:!0,spacing:4,children:[Object(y.jsxs)(u.a,{item:!0,xs:12,children:[Object(y.jsxs)(b.a,{variant:"h4",children:[Object(y.jsx)("br",{}),"Quantit\xe0: ",p]}),Object(y.jsx)(x.a,{size:"large",variant:"contained",style:{marginLeft:"10px"},onClick:function(){g(1)},children:"+"}),"\u2003",Object(y.jsx)(x.a,{size:"large",color:"secondary",variant:"contained",onClick:function(){g(-1)},children:"-"})]}),Object(y.jsx)(u.a,{item:!0,xs:12,children:Object(y.jsxs)(x.a,{size:"large",onClick:function(){e(i.id,p)},children:[Object(y.jsx)(Y.a,{})," Aggiungi al carrello"]})})]})]})]})]})},at=n(84),ct=n.n(at),rt=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)({}),i=Object(l.a)(r,2),b=i[0],u=i[1],x=function(){var t=Object(j.a)(s.a.mark((function t(){var e,n,a,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.products.list();case 2:return e=t.sent,n=e.data,t.next=6,D.categories.list();case 6:return a=t.sent,r=a.data,console.log({products:n}),t.next=11,r.reduce((function(t,e){return[].concat(Object(d.a)(t),[Object(o.a)(Object(o.a)({},e),{},{productsData:n.filter((function(t){return t.categories.find((function(t){return t.id===e.id}))}))})])}),[]);case 11:i=t.sent,console.log({prodottoPerCategoria:i}),c(i);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(j.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u,t.next=3,D.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(j.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.cart.add(e,n);case 2:a=t.sent,u(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=Object(j.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.cart.empty();case 2:e=t.sent,u(e.cart);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(j.a)(s.a.mark((function t(e,n){var a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.cart.update(e,{quantity:n});case 2:a=t.sent,c=a.cart,u(c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(j.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.cart.remove(e);case 2:n=t.sent,a=n.cart,u(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){x(),m()}),[]),Object(y.jsxs)(k.a,{children:[Object(y.jsx)(P,{totalItems:b.total_items}),Object(y.jsxs)(F.c,{children:[Object(y.jsxs)(F.a,{exact:!0,path:"/",children:[Object(y.jsx)(H,{}),Object(y.jsx)(ct.a,{items:n,currentClassName:"is-current",children:Object(y.jsx)(X,{categories:n,onAddToCart:h})}),Object(y.jsx)(E,{id:"footer"})]}),Object(y.jsxs)(F.a,{exact:!0,path:"/products",children:[Object(y.jsx)(X,{categories:n,onAddToCart:h}),Object(y.jsx)(E,{id:"footer"})]}),Object(y.jsxs)(F.a,{exact:!0,path:"/cart",children:[Object(y.jsx)(M.a,{className:"back",component:k.b,to:"/products"}),Object(y.jsx)(_,{cart:b,empty:p,update:O,remove:f}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(E,{id:"footer"})]}),Object(y.jsx)(F.a,{exact:!0,path:"/product-view/:id",children:Object(y.jsx)(nt,{onAddToCart:h})})]})]})};r.a.render(Object(y.jsx)(rt,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.fed44e22.chunk.js.map