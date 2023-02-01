<template>
    <view class="content">
        <!--    顶部导航-->
        <u-navbar
            :border="false"
            :fixed="true"
            title="会员入驻协议"
            :autoBack="true"
        >
        </u-navbar>
        <view class="padding" :style="'margin-top:'+CustomBar+'px'">
            <view class="whiteBoxShadow">
                <view class="text-xl text-red text-center text-bold margin-bottom-xl">好酒选会员入驻协议</view>
                <text>
                    感谢您成为好酒选的注册用户：

                    《好酒选用户服务协议》（以下简称“本协议”）是由好酒选网站(包括PC端、移动端及应用程序)的用户（以下简称“用户或您”）与好酒选网站的运营方，即好酒选络科技股份有限公司及其关联公司（以下简称“好酒选”）之间，就网站交易平台服务等相关事宜共同缔结。本协议具有合同效力，您应当阅读并遵守本协议。请您务必审慎阅读、充分理解各条款内容，特别是以黑体加粗形式提示您注意的条款。

                    一、 协议确认

                    1、您同意并点击确认本协议条款并完成注册程序后，才能成为好酒选的正式注册用户，并享受各类服务。

                    2、根据国家法律法规变化及网站运营需要，好酒选有权对本协议条款不时进行修改，修改后的协议一经发布并经您确认同意后即刻生效，并代替原来的协议。您可在好酒选网站随时查阅最新协议。您继续使用好酒选网站的行为将视为您接受了好酒选网站不时更新的用户服务协议。

                    3、本协议包括协议正文及所有好酒选已经发布的，或未来可能发布或更新的各类规则，包括但不限于：《退换货政策》，《大宗商品购买政策》，《好酒选抵用券使用规则》，《发票制度》，《会员制度》等。

                    所有规则为本协议不可分割的组成部分，与本协议正文具有同等法律效力。在您申请注册成为好酒选注册会员前，请仔
                </text>
                <view class="margin-top-xl text-cut flex align-end">
                    <u-checkbox-group>
                        <u-checkbox @change="isCheckbox" v-model="Checkbox" label="我已阅读" size="14"></u-checkbox>
                    </u-checkbox-group>
                    <text class="text-df">中意好酒选</text>
                    <text class="text-df text-blue">《好酒选会员入驻服务协议》</text>
                </view>
                <button style="width: 100%" @click="agree" class="cu-btn bg-red radius margin-top">同意</button>
            </view>

        </view>
    </view>
</template>

<script>

export default {
    name: "memberAgreement",
    components: {},
    data() {
        return {
            Checkbox: false
        };
    },
    methods: {
        isCheckbox(e) {
            this.Checkbox = e;
            console.log(this.Checkbox);
        },
        agree() {
            if (!this.Checkbox) {
                uni.showToast({
                    title: "您未勾选已阅读好酒选会员入驻协议",
                    icon: "none"
                });
                return false;
            }
            uni.navigateTo({
                url: "/pages/appCenter/attestation/basicInfo"
            });
        }
    }
};
</script>

<style scoped>

</style>
