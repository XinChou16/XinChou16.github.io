(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{205:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-key"}},[s._v("#")]),s._v(" ssh-key")]),s._v(" "),a("h2",{attrs:{id:"单个-ssh-key-的生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个-ssh-key-的生成"}},[s._v("#")]),s._v(" 单个 ssh key 的生成")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rsa")]),s._v("\nssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ed25519")]),s._v("\nssh-keygen -t ed25519 -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v("\n")])])]),a("p",[s._v("生成：")]),s._v(" "),a("ul",[a("li",[s._v("私钥："),a("code",[s._v("~/.ssh/id_rsa")])]),s._v(" "),a("li",[s._v("公钥："),a("code",[s._v("~/.ssh/id_rsa.pub")])])]),s._v(" "),a("h2",{attrs:{id:"连接测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接测试"}},[s._v("#")]),s._v(" 连接测试")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);