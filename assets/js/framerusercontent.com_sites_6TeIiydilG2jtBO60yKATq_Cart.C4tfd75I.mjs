import{t as e}from"./rolldown-runtime.CvQFqTql.mjs";import{B as t,H as n,I as r,R as i,T as a,c as o,l as s,o as c}from"./react.CH4GvDdU.mjs";import{t as l,w as u}from"./motion.Bhy8XPSf.mjs";import{K as d,a as f}from"./framer.h_LCY2Bd.mjs";import{l as p,n as m,r as h,t as g,u as _}from"./esm.CT9r1Cwz.mjs";function v({image:e,color:t,size:n,style:r={},defaultImage:i}){let a=t||(e?.src?void 0:`#999`);return o(`div`,{"aria-label":e?.alt,style:{width:n,height:n,minWidth:n,minHeight:n,pointerEvents:`none`,backgroundColor:a,backgroundImage:a?`none`:`url('${e?.src}')`,maskImage:e?.src?`url('${e?.src}')`:i,backgroundSize:`contain`,backgroundPosition:`center`,maskSize:`contain`,maskPosition:`center`,...r}})}function y({buttonTitle:e=`Icon`,size:t=24,object:n=!0}={}){return{type:f.Object,buttonTitle:e,optional:!0,defaultValue:{color:`#000`,size:t},controls:{image:{type:f.ResponsiveImage},color:{type:f.Color,optional:!0,defaultValue:`#000`},size:{type:f.Number,defaultValue:t,min:1,step:1,displayStepper:!0}}}}function b({tag:e=`button`,fill:t,color:n,shadows:r,border:i,radius:a,padding:c,font:l,opacity:d,bgBlur:f,transition:p,variant:m=``,children:h,style:g,animate:_,...v}){let y=`none`;t&&(y=t.type===`color`?t[`${m}Color`]||t.defaultColor:`linear-gradient(${t.gradientAngle}deg, ${t[`${m}ColorB`]||t.defaultColorB}, ${t[`${m}ColorA`]||t.defaultColorA})`);let b=u[e],x=e===`input`,S=[h,i&&o(u.div,{animate:{borderColor:i[`${m}Color`]||i.defaultColor},style:{position:`absolute`,inset:0,borderWidth:i.width,borderStyle:i.style,borderRadius:a,pointerEvents:`none`},initial:!1,transition:p})],C=o(b,{style:{position:`relative`,borderRadius:a,padding:c,textAlign:`center`,appearance:`none`,border:`none`,backdropFilter:f?`blur(${f}px)`:void 0,...l,...g},animate:{background:y,color:typeof n==`object`?n[`${m}Color`]||n.defaultColor:n,boxShadow:typeof r==`object`?r[`${m}Shadows`]||r.defaultShadows:r,opacity:typeof d==`object`?typeof d[m]==`number`?d[m]:d.default:typeof d==`number`?d:1,..._},initial:!1,transition:p,children:x?void 0:S,...v});return x&&(C=s(`div`,{style:{display:`contents`},children:[C,S]})),C}function x({variants:e=[],font:t=!0,color:n=!0,placeholder:r=!1,opacity:i=!1,padding:a=`10px`,hidden:o={},endProps:s={},lastControlDescription:c=``}){let l=e.length?e:[{id:`default`,title:`Default`,optional:!1,...S.Primary}],u={},d={},p={},m={},g={},_={},v={},y={},b={type:`color`,gradientAngle:0},x={width:`1px`,style:`solid`},C={},w=l.some(e=>e.borderColor);for(let t of l){let n=t.id===`default`,a=t.optional??!0;u[`${t.id}Color`]={type:f.Color,optional:a,defaultValue:t.color,title:n?`Color`:t.title},r&&(d[`${t.id}Color`]={type:f.Color,optional:a,defaultValue:t.placeholder,title:n?`Color`:t.title}),p[`${t.id}Color`]={type:f.Color,optional:a,defaultValue:t.fill,title:n?`Color`:t.title,hidden:e=>e.type!=`color`},p[`${t.id}ColorA`]={type:f.Color,optional:a,defaultValue:t.fillA,title:n?`Colors`:t.title,hidden:e=>e.type!=`linearGradient`},p[`${t.id}ColorB`]={type:f.Color,optional:a,defaultValue:t.fillB,title:` `,hidden:e=>e.type!=`linearGradient`},m[`${t.id}Color`]={type:f.Color,optional:a,defaultValue:t.borderColor||(e.length===1?`#222`:void 0),title:n?`Color`:t.title},g[`${t.id}Shadows`]={type:f.BoxShadow,title:t.title},i&&(_[t.id]={type:f.Number,title:t.title,defaultValue:typeof t.opacity==`number`?t.opacity:1,min:0,max:1,step:.01})}for(let e of Object.keys(u))v[e]=u[e].defaultValue;for(let e of Object.keys(d))y[e]=d[e].defaultValue;for(let e of Object.keys(p))b[e]=p[e].defaultValue;for(let e of Object.keys(m))x[e]=m[e].defaultValue;for(let e of Object.keys(_))C[e]=_[e].defaultValue;let T=e.length>0;return{font:t?{type:`font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:14,lineHeight:1.4},hidden:o.font}:void 0,color:n?e.length?{type:f.Object,defaultValue:v,controls:u,buttonTitle:`Font Color`}:u.default:void 0,placeholder:r?e.length?{type:f.Object,defaultValue:y,controls:d,hidden:o.placeholder}:{...d.default,hidden:o.placeholder}:void 0,fill:{type:f.Object,optional:!0,defaultValue:b,controls:{type:{type:f.Enum,options:[`color`,`linearGradient`],optionTitles:[`Color`,`Gradient`],displaySegmentedControl:!0},...p,gradientAngle:{type:f.Number,defaultValue:0,title:`Angle`,step:1,min:0,max:360,unit:`°`,hidden:e=>e.type!=`linearGradient`}}},radius:{type:f.BorderRadius,defaultValue:`10px`},padding:{type:f.Padding,defaultValue:a},border:{type:f.Object,optional:!0,defaultValue:w?x:void 0,controls:{...m,width:{type:f.Padding,defaultValue:x.width},style:{type:f.Enum,defaultValue:x.style,options:[`solid`,`dashed`,`dotted`,`double`],optionTitles:[`Solid`,`Dashed`,`Dotted`,`Double`]}}},shadows:e.length?{type:f.Object,optional:!0,controls:g}:{type:f.BoxShadow},opacity:i?{type:f.Object,controls:_}:void 0,bgBlur:{type:f.Number,min:0,max:100,step:1,displayStepper:!0,title:`BG Blur`,description:T?void 0:c},...s,transition:T?{type:f.Transition,defaultValue:h,description:c}:void 0}}var S,C=e((()=>{c(),d(),l(),p(),S={Primary:{color:`#000`,fill:`#F3F3F3`,fillA:`#F3F3F3`,fillB:`#999999`},Accent:{color:`#FFF`,fill:`#111`,fillA:`#5E5E5E`,fillB:`#111`}}})),w,T,E,D,O,k,A,j,M=e((()=>{t(),w=Object.defineProperty,T=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||={})E.call(t,n)&&O(e,n,t[n]);if(T)for(var n of T(t))D.call(t,n)&&O(e,n,t[n]);return e},A=e=>t=>{try{let n=e(t);return n instanceof Promise?n:{then(e){return A(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return A(t)(e)}}}},j=(e,t)=>(n,r,i)=>{let a=k({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>k(k({},t),e)},t);(a.blacklist||a.whitelist)&&console.warn(`The ${a.blacklist?`blacklist`:`whitelist`} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);let o=!1,s=new Set,c=new Set,l;try{l=a.getStorage()}catch{}if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)}),r,i);l.removeItem||console.warn(`[zustand persist middleware] The given storage for item '${a.name}' does not contain a 'removeItem' method, which will be required in v4.`);let u=A(a.serialize),d=()=>{let e=a.partialize(k({},r()));a.whitelist&&Object.keys(e).forEach((t=>{!a.whitelist?.includes(t)&&delete e[t]})),a.blacklist&&a.blacklist.forEach((t=>delete e[t]));let t,n=u({state:e,version:a.version}).then((e=>l.setItem(a.name,e))).catch((e=>{t=e}));if(t)throw t;return n},f=i.setState;i.setState=(e,t)=>{f(e,t),d()};let p=e(((...e)=>{n(...e),d()}),r,i),m,h=()=>{if(!l)return;o=!1,s.forEach((e=>e(r())));let e=a.onRehydrateStorage?.call(a,r())||void 0;return A(l.getItem.bind(l))(a.name).then((e=>{if(e)return a.deserialize(e)})).then((e=>{if(e){if(typeof e.version!=`number`||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)}})).then((e=>(m=a.merge(e,p),n(m,!0),d()))).then((()=>{e?.(m,void 0),o=!0,c.forEach((e=>e(m)))})).catch((t=>{e?.(void 0,t)}))};return i.persist={setOptions:e=>{a=k(k({},a),e),e.getStorage&&(l=e.getStorage())},clearStorage:()=>{var e;(e=l?.removeItem)==null||e.call(l,a.name)},rehydrate:()=>h(),hasHydrated:()=>o,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},h(),m||p}}));async function N(e,t={}){let{shopUrl:n,accessToken:r}=V();if(!n||!r)return console.warn(`Missing shop URL or access token`),null;try{let i=await(await fetch(`https://${n}/api/2024-10/graphql.json`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Shopify-Storefront-Access-Token":r},body:JSON.stringify({query:e,variables:t})})).json();return i?i.data:null}catch(e){return console.error(e),null}}async function P(){let e=await N(`
    ${X}
    mutation {
      cartCreate {
        cart {
          ...CartFields
        }
      }
    }
  `);return e?e.cartCreate.cart:null}async function F(e){let t=await N(`
    ${X}
    query($cartId: ID!) {
      cart(id: $cartId) {
        ...CartFields
      }
    }
  `,{cartId:e});return t?t.cart:null}async function I(e,t,n){let r=`
    ${X}
    mutation($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFields
        }
        userErrors {
          field
          message
        }
      }
    }
  `,i={cartId:e,lines:[{quantity:n,merchandiseId:t}]};try{let e=await N(r,i);if(e&&e.cartLinesAdd.userErrors.length>0){if(e.cartLinesAdd.userErrors.find(e=>e.message===`The specified cart does not exist.`)){let e=await N(r,{cartId:(await P()).id,lines:[{quantity:n,merchandiseId:t}]});if(e&&e.cartLinesAdd.userErrors.length>0)throw Error(e.cartLinesAdd.userErrors.map(e=>e.message).join(`, `));return e.cartLinesAdd.cart}throw Error(e.cartLinesAdd.userErrors.map(e=>e.message).join(`, `))}return e?e.cartLinesAdd.cart:null}catch(e){throw e}}async function L(e,t){let n=await N(`
    ${X}
    mutation($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ...CartFields
        }
      }
    }
  `,{cartId:e,lineIds:[t]});return n?n.cartLinesRemove.cart:null}async function R(e){let t={id:e};try{let e=await N(`
		query getInventory($id: ID!) {
			product(id: $id) {
				variants(first: 100) {
					edges {
						node {
							id
							quantityAvailable
						}
					}
				}
			}
		}
	`,t),n={};if(e)for(let t of e.product.variants.edges)n[t.node.id]=t.node.quantityAvailable;return n}catch(e){throw console.error(`Error fetching inventory:`,e),e}}function z(e){let{shopifyId:t}=_(e),[n,a]=i({}),[o,s]=i(!0);return r(()=>{s(!0),R(t).then(e=>{a(e),s(!1)})},[t]),[n,o]}async function B(e,t,n){let r=await N(`
    ${X}
    mutation($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFields
        }
        userErrors {
          field
          message
        }
      }
    }
  `,{cartId:e,lines:[{id:t,quantity:n}]});if(r&&r.cartLinesUpdate.userErrors.length>0)throw Error(r.cartLinesUpdate.userErrors.map(e=>e.message).join(`, `));return r?r.cartLinesUpdate.cart:null}function V(){let e=``,t=``,r=``,i=``,a=!1,o=!1;if(typeof document<`u`&&n!==void 0){n.location.hostname.endsWith(`.framercanvas.com`)&&(o=!0);let s=document.querySelector(`meta[name="frameship-id"]`);if(s){let n=U(s.getAttribute(`content`)||``);o=H(n.stagingDomain,n.productionDomain),o&&(e=n.shopUrl||``,t=n.shopifyAccessToken||``,r=n.stagingDomain||``,i=n.productionDomain||``,a=n.isCreatorLicense??!1)}else{let n=document.querySelector(`div[data-frameship-id]`);if(n){let s=U(n.getAttribute(`data-frameship-id`)||``);o=H(s.stagingDomain,s.productionDomain),o&&(e=s.shopUrl||``,t=s.shopifyAccessToken||``,r=s.stagingDomain||``,i=s.productionDomain||``,a=s.isCreatorLicense??!1)}else{let n=document.querySelector(`div[data-frameship-component]`);if(n){let a=n.getAttribute(`data-staging-domain`)||``,s=n.getAttribute(`data-production-domain`)||``;o=H(a,s),o&&(e=n.getAttribute(`data-shop-url`)||``,t=n.getAttribute(`data-shopify-access-token`)||``,r=a,i=s)}}}}else o=!0;return{shopUrl:e,accessToken:t,stagingDomain:r,productionDomain:i,hasAccess:o,isCreatorLicense:a}}function H(e,t){if(typeof document>`u`||n===void 0)return!0;let r=n.location.hostname,i=r.endsWith(`.framercanvas.com`),a=(e||``).replace(`https://`,``),o=(t||``).replace(`https://`,``);return!!(i||r===a||r===o)}function U(e){if(!e||typeof e!=`string`)return{};if(Y.hasOwnProperty(e))return Y[e];try{let t=W(G(K(e))),n=JSON.parse(t);if(!n||typeof n!=`object`)return{};let r={shopUrl:typeof n.a==`string`?n.a:``,shopifyAccessToken:typeof n.b==`string`?n.b:``,productionDomain:typeof n.c==`string`?n.c:``,stagingDomain:typeof n.d==`string`?n.d:``,isCreatorLicense:typeof n.e==`boolean`?n.e:!1};return Y[e]=r,r}catch{return{}}}function W(e){try{let t=e.length%4,n=t?e+`=`.repeat(4-t):e;return atob(n)}catch(e){return console.error(`Error decoding base64:`,e),``}}function G(e){return e.replace(/[A-Za-z]/g,function(e){let t=e.charCodeAt(0),n=e.toUpperCase()===e?65:97;return String.fromCharCode((t-n+13)%26+n)})}function K(e){return e.split(``).reverse().join(``)}function q(e){let{isCreatorLicense:t}=V();return t?`https://frameship.io/`:e}var J,Y,X,Z,Q=e((()=>{t(),m(),M(),a(),p(),J=`frameship-shopify-cart-id`,Y={},X=`
  fragment CartFields on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          cost {
            subtotalAmount {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`,Z=g(j((e,t)=>({cartId:null,items:[],loading:!1,error:null,checkoutUrl:null,subtotal:null,initializeCart:async(n=!1)=>{if(!(t().items.length>0)){e({loading:!0});try{let r=t().cartId;if(r){let t=await F(r);e({items:t.lines.edges.map(e=>e.node),checkoutUrl:q(t.checkoutUrl),subtotal:t.cost.subtotalAmount,loading:!1})}else if(n){let t=await P();e({cartId:t.id,items:[],checkoutUrl:q(t.checkoutUrl),subtotal:t.cost.subtotalAmount,loading:!1})}}catch(t){e({error:t.message,loading:!1})}}},addToCart:async(n,r)=>{e({loading:!0});try{t().cartId||await t().initializeCart(!0);let i=t().cartId,a=await I(i,n,r);e({items:a.lines.edges.map(e=>e.node),subtotal:a.cost.subtotalAmount,loading:!1})}catch(t){e({error:t.message,loading:!1})}},removeFromCart:async n=>{e({loading:!0});try{let r=t().cartId,i=await L(r,n);e({items:i.lines.edges.map(e=>e.node),subtotal:i.cost.subtotalAmount,loading:!1})}catch(t){e({error:t.message,loading:!1})}},setCartItemQuantity:async(n,r)=>{e({loading:!0});try{let i=t().cartId,a=await B(i,n,r);e({items:a.lines.edges.map(e=>e.node),subtotal:a.cost.subtotalAmount,loading:!1})}catch(t){e({error:t.message,loading:!1})}},getCheckoutUrl:()=>t().checkoutUrl||``,clearError:()=>e({error:null}),resetCart:()=>{e({cartId:null,items:[],loading:!1,error:null,checkoutUrl:null,subtotal:null})},validateAndResetCart:async()=>{let e=t().cartId;if(e)try{await F(e)||t().resetCart()}catch(e){console.warn(`Cart validation failed, resetting cart:`,e),t().resetCart()}}}),{name:J,partialize:e=>({cartId:e.cartId})}))}));export{S as a,y as c,b as i,C as l,z as n,v as o,Z as r,x as s,Q as t};
//# sourceMappingURL=Cart.C4tfd75I.mjs.map