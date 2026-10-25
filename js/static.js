"use strict";
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
function closeMenu(){if(!links)return;links.classList.remove('static-open');toggle.setAttribute('aria-expanded','false');}
if(toggle && links){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';links.classList.toggle('static-open',open);toggle.setAttribute('aria-expanded',String(open));});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});window.matchMedia('(min-width:901px)').addEventListener('change',closeMenu);}
const search = document.querySelector('#preview-search');
if(search){const field=search.querySelector('input[name="q"]');const result=document.querySelector('.search-result');function filter(){const query=field.value.trim().toLowerCase();let count=0;document.querySelectorAll('.prod-card').forEach(card=>{const show=card.textContent.toLowerCase().includes(query);card.hidden=!show;if(show)count++;});result.textContent=query?`${count} example listing${count===1?'':'s'} match your search.`:'';}search.addEventListener('submit',event=>{event.preventDefault();filter();});field.addEventListener('input',filter);}
document.querySelectorAll('form:not(#preview-search)').forEach(form=>form.addEventListener('submit',event=>event.preventDefault()));
