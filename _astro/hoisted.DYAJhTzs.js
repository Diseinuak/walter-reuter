import{g as e,S as o}from"./ScrollTrigger.aLfjG8Xb.js";import{S as t}from"./ScrollSmoother.BJA5S7b-.js";e.registerPlugin(o,t);t.create({content:"#content",wrapper:"#wrapper",smooth:1,effects:!0});const l=document.querySelector(".gallery-wrapper"),r=document.querySelector(".gallery"),c=e.timeline();c.to(r,{x:`-${r.offsetWidth}`,scrollTrigger:{trigger:l,start:"top top",end:`+=${r.offsetWidth}`,pin:!0,scrub:.5}});
