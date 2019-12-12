<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "layout",
    methods: {
      isPC () {
        let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        let flag = true
        for (let i of Agents) {
          if (navigator.userAgent.indexOf(i) > 0) {
            flag = false
            break
          }
        }
        return flag
      }
    },
    mounted () {
      if (this.isPC()) {
        let html = document.querySelector('html')
        html.style.fontSize = '24px'
        html.style.width = '375px'
        html.style.height = '667px'
        html.style.margin = '0 auto'
        html.style.transform = 'translate(0, 10%)'
      }
    }
  }
</script>
