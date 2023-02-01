<script>
import tool from "./utils/tool";

export default {
    onLaunch: function() {
        // 禁止横屏
        // #ifdef APP-PLUS
        plus.screen.lockOrientation("portrait-primary");
        // #endif

        // this.$nextTick(async () => {
        //     // #ifdef APP-PLUS
        //     plus.push.addEventListener("click", function (msg) {
        //         let payload = msg.payload;
        //         try {
        //         } catch (e) {
        //             //TODO handle the exception
        //         }
        //     });
        //     plus.push.addEventListener("receive", function (msg) {
        //         let payload = msg.payload;
        //         try {
        //         } catch (e) {
        //             //TODO handle the exception
        //         }
        //     });
        //     // #endif
        // });
    },
    onShow: function() {
        // #ifdef APP-PLUS
        // scheme启动参数
        const args = plus.runtime.arguments;
        if (args !== `{"startFromLauncher":"shortcut"}`) {
            // uni.showModal({ content: args });
            // 处理args参数，如直达到某新页面等 
        }
        // #endif

    },
    onHide: function() {
        // tool.setPastPath();
    },
    methods: {
        showCID() {
            const cid = plus.push.getClientInfo().clientid;
            console.log(cid);
            uni.showToast({ title: cid, icon: "none", duration: 99999 });
        }
    }
};
</script>

<style lang="scss">
/* #ifndef APP-NVUE */
@import "static/font/iconfont-app.css";
@import "uview-ui/index.scss";
@import "plugins/colorui/main.css";
@import "plugins/colorui/icon.css";
@import "static/css/reset";
/* #endif */
</style>
