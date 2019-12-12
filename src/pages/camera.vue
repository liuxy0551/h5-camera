<template>
  <div>
    <video></video>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      // 测试 H5 调用摄像头
      getCamera () {
        let constraints = {
          audio: true,
          video: {
            width: 350,
            height: 350,
            facingMode: 'user'
          }
        }
        let camera = this.getUserMedia(constraints)

        camera && camera.then(mediaStream => {
          let video = document.querySelector('video')
          video.srcObject = mediaStream
          video.onloadedmetadata = () => {
            video.play()
          }
        }).catch((err) => {
          console.log(err.name + '：' + err.message)
        })
      },
      // 访问用户媒体设备的兼容方法
      getUserMedia (constraints) {
        console.log(navigator)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // 最新的标注 API
          console.log(1)
          return navigator.mediaDevices.getUserMedia(constraints)
        } else if (navigator.webkitGetUserMedia) {
          // webkit 核心浏览器
          console.log(2)
          return navigator.webkitGetUserMedia(constraints)
        } else if (navigator.mozGetUserMedia) {
          // firfox 浏览器
          console.log(3)
          return navigator.mozGetUserMedia(constraints)
        } else if (navigator.getUserMedia) {
          // 旧版 API
          console.log(4)
          return navigator.getUserMedia(constraints)
        }
        return null
      }
    },
    mounted () {
      this.getCamera()
    }
  }
</script>

<style lang="scss" scoped>

</style>
