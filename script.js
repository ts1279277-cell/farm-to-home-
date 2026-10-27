const filterButtons=[...document.querySelectorAll('.filter-button')];
const productCards=[...document.querySelectorAll('.product-card')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  filterButtons.forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))});
  productCards.forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter});
}));
const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');mainNav.classList.toggle('is-open',open)});
mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mainNav.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu')}));
