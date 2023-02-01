<template>
    <view class="content">
        <u-navbar title="合作详情" :autoBack="true"></u-navbar>
        <view :style="'margin-top:' + CustomBar + 'px;padding-bottom: 20px'">
            <fxbStatusCard :status="localStatus.status" :tips="localStatus.tips"
                           :icon="localStatus.icon"></fxbStatusCard>

            <view class="whiteBoxShadow" style="transform: translateY(-5px)">
                <boxTitle title="交易方式"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">交易方式</text>
                    <view>自行交易</view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">交易数量</text>
                    <text>4000瓶</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">收货人</text>
                    <text>王刚</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">联系电话</text>
                    <text>18690758686</text>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray flex-sub">收货地址</view>
                    <view class="flex-treble text-right">贵州省贵阳市观山湖区金融城MAX·C座2124室</view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="发货状态"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">发货状态</text>
                    <view>待发货</view>
                </view>
            </view>
            <view class="whiteBoxShadow flex justify-between margin-top">
                <view>查看招商合同</view>
                <view class="cuIcon-right" style="font-size: 18px"></view>
            </view>
            <view class="whiteBoxShadow margin-top">
                <boxTitle title="合同总额"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">商品总量</text>
                    <text>21000瓶</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">商品总额</text>
                    <text>¥5000000.00</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">我的出资</text>
                    <text>¥1000000.00</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">我的占比</text>
                    <text>20%</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">我的商品</text>
                    <text>4000瓶</text>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top">
                <boxTitle title="合同信息"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">协议编号</text>
                    <text>122434242342</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">甲方单位</text>
                    <text>贵州好酒选电子商务有限公司</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">乙方单位</text>
                    <text>贵阳市万隆烟酒行</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">签约时间</text>
                    <text>已支付</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">支付金额</text>
                    <text>￥5000000.00</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">支付方式</text>
                    <view>银行转账
                        <text class="cuIcon-right"></text>
                    </view>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="">支付时间</text>
                    <text>2022-05-30 12:12:26</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import goodsInfoCard from "/src/components/erp/goodsInfoCard";
import fxbImage from "/src/components/fxb/fxb-image";
import copyButton from "/src/components/common/copyButton";
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import addressBox from "/src/pages/index/applicationSample/addressBox";
import convertCurrency from "/src/utils/dataFormat/convertCurrency";
import fxbStatusCard from "../../../components/fxb/fxb-status-card";

export default {
    name: "details",
    components: {
        boxTitle,
        copyButton,
        addressBox,
        fxbImage,
        goodsInfoCard,
        fxbStatusCard
    },
    data() {
        return {
            state: 0,
            SignIn: false,
            fileList1: [],
            listStatus: 1,
            status: 1,
            showMoney: false,
            addressInfo: {
                name: "张傲",
                phone: "18878855878",
                address: "贵州省贵阳市观山湖区金融城金融城MAX·C座21楼24号"
            },
            expressInfo: [
                { time: "02:26", date: "08.31", content: "商品已支付，等待发货", id: "0" },
                { time: "02:26", date: "08.31", content: "贵阳市金阳三部的王在意已揽件。", id: "1" },
                { time: "02:26", date: "08.31", content: "快递正在运输途中，请您耐心等待。", id: "2" },
                { time: "02:26", date: "08.31", content: "贵阳金阳三部的王晓刚[18565235646]正在为您派件。", id: "3" },
                {
                    time: "02:26",
                    date: "08.31",
                    content:
                        "您的快递已暂存至[快宝的38栋中通快递快递超市]，地址：官府一号一组团38栋超市里面，请及时领取。如有疑问请联系：15564545865",
                    id: "4"
                },
                {
                    time: "02:26",
                    date: "08.31",
                    content:
                        "您的快递已签收，签收人在[快宝的38栋中通快递快递超市]（官府一号一组团38栋超市里面）领取。如有疑问，请联系：18645856575",
                    id: "5"
                }
            ]
        };
    },
    computed: {
        expressList() {
            return this.expressInfo.reverse();
        },
        localStatus() {
            const tempArr = ["已完成", "已完成", "进行中", "进行中", "进行中"];
            const tipsArr = ["用户已确认收货", "用户已确认收货", "您的合同履行进行中", "您的合同履行进行中", "您的合同履行进行中"];
            const iconArr = ["daishenhe", "weitongguo", "daishouhuo", "jinhangzhong", "a-zu699"];
            return {
                status: tempArr[this.status - 1],
                tips: tipsArr[this.status - 1],
                icon: iconArr[this.status - 1]
            };
        }
    },
    methods: {
        convertCurrency,
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file);
            let fileListLen = this[`fileList${event.name}`].length;
            lists.map((item) => {
                this[`fileList${event.name}`].push({
                    ...item,
                    status: "uploading",
                    message: "上传中"
                });
            });
            for (let i = 0; i < lists.length; i++) {
                const result = await this.uploadFilePromise(lists[i].url);
                let item = this[`fileList${event.name}`][fileListLen];
                this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
                    status: "success",
                    message: "",
                    url: result
                }));
                fileListLen++;
            }
        },
        uploadFilePromise(url) {
            return new Promise((resolve, reject) => {
                let a = uni.uploadFile({
                    url: "", // 仅为示例，非真实的接口地址
                    filePath: url,
                    name: "file",
                    formData: {
                        user: "test"
                    },
                    success: (res) => {
                        setTimeout(() => {
                            resolve(res.data.data);
                        }, 1000);
                    }
                });
            });
        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        open() {
            // console.log('open');
        },
        close() {
            this.SignIn = false;
            this.showMoney = false;
            // console.log('close');
        }
    },
    onLoad(options) {
        this.status = options.status;
        this.state = options.state;

    }
};
</script>

<style lang="scss" scoped>
.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

/deep/ .addressBox {
    .padding {
        padding: 0;
    }
}
</style>
