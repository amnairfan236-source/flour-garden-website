/* ---------- Data ---------- */
const menu = {
  croissants: [
    { name: 'Almond Croissant', price: '$3.80', desc: 'Flaky all-butter dough, frangipane filling, toasted almond crust.', tag: 'Bestseller', tagClass: '', img: 'https://images.pexels.com/photos/13439698/pexels-photo-13439698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Classic Butter Croissant', price: '$2.90', desc: 'Laminated 27 layers, baked fresh every morning at dawn.', tag: 'Vegetarian', tagClass: 'veg', img: 'https://images.pexels.com/photos/7333002/pexels-photo-7333002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Jam & Croissant Plate', price: '$4.50', desc: 'Warm croissant served with house berry compote and cappuccino.', tag: 'New', tagClass: 'new', img: 'https://images.pexels.com/photos/20212456/pexels-photo-20212456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ],
  cakes: [
    { name: 'Choco Hazelnut Slice', price: '$5.20', desc: 'Dark chocolate sponge, roasted hazelnut praline, glossy ganache.', tag: 'Bestseller', tagClass: '', img: 'https://images.pexels.com/photos/37418888/pexels-photo-37418888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Afternoon Tea Cake', price: '$4.80', desc: 'Light layered sponge paired perfectly with a pot of loose-leaf tea.', tag: 'Vegetarian', tagClass: 'veg', img: 'https://images.pexels.com/photos/37857738/pexels-photo-37857738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Black Forest Slice', price: '$5.60', desc: 'Cherry-kissed chocolate cake with whipped cream and dark shavings.', tag: 'New', tagClass: 'new', img: 'https://images.pexels.com/photos/7381533/pexels-photo-7381533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ],
  breads: [
    { name: 'Rustic Sourdough', price: '$6.50', desc: '48-hour fermented wild yeast loaf with an open, chewy crumb.', tag: 'Bestseller', tagClass: '', img: 'https://images.pexels.com/photos/40715979/pexels-photo-40715979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Country Round', price: '$5.40', desc: 'Partially sliced hearty loaf, baked on a wooden peel in our stone oven.', tag: 'Vegetarian', tagClass: 'veg', img: 'https://images.pexels.com/photos/5567093/pexels-photo-5567093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Artisan Farmhouse', price: '$5.90', desc: 'Golden crackly crust, soft interior — baked with stone-milled flour.', tag: 'New', tagClass: 'new', img: 'https://images.pexels.com/photos/18647862/pexels-photo-18647862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ],
  treats: [
    { name: 'Rainbow Macarons', price: '$3.50', desc: 'Delicate almond shells in a vibrant assortment of seasonal flavors.', tag: 'Bestseller', tagClass: '', img: 'https://images.pexels.com/photos/36455119/pexels-photo-36455119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Rose Macaron Box', price: '$12.00', desc: 'A twelve-piece box of pink and beige macarons, gift-ready.', tag: 'Vegetarian', tagClass: 'veg', img: 'https://images.pexels.com/photos/14206178/pexels-photo-14206178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Lavender Tea Set', price: '$8.80', desc: 'Lavender macarons served with a floral tea set for a slow afternoon.', tag: 'New', tagClass: 'new', img: 'https://images.pexels.com/photos/3776950/pexels-photo-3776950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ],
}

const galleryImgs = [
  'https://images.pexels.com/photos/13439075/pexels-photo-13439075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37418888/pexels-photo-37418888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/40715979/pexels-photo-40715979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/36455119/pexels-photo-36455119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7381533/pexels-photo-7381533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/14206178/pexels-photo-14206178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
]

/* ---------- Render menu ---------- */
const grid = document.getElementById('menuGrid')

function renderMenu(cat) {
  const items = menu[cat] || []
  grid.innerHTML = items.map((it, i) => `
    <article class="menu-card" style="animation: fadeUp 0.5s ease ${i * 0.08}s both">
      <div class="menu-card-img"><img src="${it.img}" alt="${it.name}" /></div>
      <div class="menu-card-body">
        <h3>${it.name} <span class="price">${it.price}</span></h3>
        <p class="desc">${it.desc}</p>
        <span class="tag ${it.tagClass}">${it.tag}</span>
      </div>
    </article>
  `).join('')
}
renderMenu('croissants')

/* ---------- Menu tabs ---------- */
const tabs = document.getElementById('menuTabs')
tabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab')
  if (!btn) return
  tabs.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'))
  btn.classList.add('active')
  renderMenu(btn.dataset.cat)
})

/* ---------- Gallery ---------- */
const galleryEl = document.getElementById('galleryContainer')
const layout = ['', 'wide', '', 'tall', '', '']
galleryEl.innerHTML = galleryImgs
  .map((src, i) => `<div class="gallery-item ${layout[i] || ''}"><img src="${src}" alt="Bakery creation ${i + 1}" /></div>`)
  .join('')

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'))
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
)

/* ---------- Sticky nav shadow ---------- */
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10)
})

/* ---------- Reveal on scroll ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('in')
        observer.unobserve(en.target)
      }
    })
  },
  { threshold: 0.12 }
)
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

/* ---------- Contact form ---------- */
const form = document.getElementById('contactForm')
const success = document.getElementById('formSuccess')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = form.name.value.trim()
  const email = form.email.value.trim()
  const message = form.message.value.trim()
  if (!name || !email || !message) return
  success.classList.add('show')
  form.reset()
  setTimeout(() => success.classList.remove('show'), 5000)
})

/* ---------- Footer Year ---------- */
document.getElementById('currentYear').textContent = `© ${new Date().getFullYear()} The Flour Garden. Baked with love.`