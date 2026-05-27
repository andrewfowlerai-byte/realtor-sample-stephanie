// Reveal on scroll
;(function () {
  const els = document.querySelectorAll('.reveal')
  if (!els.length) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  )
  els.forEach((el) => observer.observe(el))
})()
