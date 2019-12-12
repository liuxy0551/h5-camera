<template>
  <div>
    <div class="title">H5 页面调用摄像头与拾音器</div>

    <div class="btn-box">
      <van-button plain type="info" @click="startCamera">开 始</van-button>
      <van-button plain type="info" @click="pauseCamera" v-if="!pausePlay">暂 停</van-button>
      <van-button plain type="info" @click="continueCamera" v-else>继 续</van-button>
      <van-button plain type="info" @click="stopCamera">停 止</van-button>
    </div>

    <video></video>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        camera: null,
        video: null,
        mediaStreamTrack: null,
        pausePlay: false
      }
    },
    methods: {
      // 开始按钮
      startCamera () {
        // 新版本 API
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          this.getCamera()
        }
      },
      // 暂停按钮
      pauseCamera () {
        this.pausePlay = true
        this.video && this.video.pause()
      },
      // 继续按钮
      continueCamera () {
        this.pausePlay = false
        this.video && this.video.play()
      },
      // 停止按钮
      stopCamera () {
        if (this.mediaStreamTrack) {
          for (let i of this.mediaStreamTrack) {
            i.stop()
          }
          this.camera = null
          this.video = null
          this.mediaStreamTrack = null
        }
      },
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
        this.camera = navigator.mediaDevices.getUserMedia(constraints)

        this.camera && this.camera.then(mediaStream => {
          // 拿到一个数组，包含 audio, video
          this.mediaStreamTrack = typeof mediaStream.stop === 'function' ? mediaStream : mediaStream.getTracks()

          this.video = document.querySelector('video')
          this.video.srcObject = mediaStream
          this.video.onloadedmetadata = () => {
            this.video.play()
          }
        }).catch((err) => {
          console.log(err.name + '：' + err.message)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    padding-top: 30px;
  }
  .btn-box {
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;
  }
  video {
    width: 350px;
    height: 350px;
    background: #000;
  }
</style>
