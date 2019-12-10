<template>
  <div id="app">

    <video></video>

  </div>
</template>

<script>
  export default {
    name: 'app',
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
        let camera = navigator.mediaDevices.getUserMedia(constraints)

        camera.then(mediaStream => {
          let video = document.querySelector('video')
          video.srcObject = mediaStream
          video.onloadedmetadata = () => {
            video.play()
          }
        }).catch((err) => {
          console.log(err.name + '：' + err.message)
        })
      }
    },
    mounted () {
      this.getCamera()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
