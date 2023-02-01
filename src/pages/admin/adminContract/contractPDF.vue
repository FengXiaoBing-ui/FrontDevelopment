<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="合同详情" :autoBack="true">
        </u-navbar>
        <view class="padding" :style="'margin-top:'+ CustomBar + 'px;'">
            <web-view :fullscreen="false" :src="url"></web-view>
        </view>
    </view>
</template>

<script>
export default {
    name: "contractPDF",
    data(){
      return{
          viewerUrl: '/hybrid/html/web/viewer.html',
          allUrl: this.$config.IMG_SERVER+'/pdf/contract.pdf',
          url: ""
      }
    },
    onLoad(options){
        // h5，使用h5访问的时候记得跨域
        // #ifdef H5
        this.url = this.allUrl;
        // #endif

        // 在安卓和ios手机上
        // 判断是手机系统：安卓，使用pdf.js
        // #ifdef APP-PLUS
        if(plus.os.name === 'Android') {
            this.url = `${this.viewerUrl}?file=${encodeURIComponent(this.allUrl)}`;
        }
        // ios，直接访问pdf所在路径
        else {
            this.url = encodeURIComponent(this.allUrl);
        }
        // #endif
        setTimeout(() => {
            let currentWebview = this.$scope.$getAppWebview();
            let GOOGLE_MAP_STYLE = currentWebview.children()[0]
            GOOGLE_MAP_STYLE.setStyle({
                top: this.CustomBar,
                left: 0
            })
        },100)
    }
};
</script>

<style scoped>

</style>