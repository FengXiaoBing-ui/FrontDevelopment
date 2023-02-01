<template>
    <view class="content">
        <u-navbar title="退换货详情" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb"
              :style="'margin-top:' + CustomBar + 'px;'+(status==3?'padding-bottom:120rpx':'')">
            <view class="whiteBoxShadow">
                <view class="flex align-center justify-between">
                    <text class="text-gray">售后状态</text>
                    <text class="text-orange">
                        <!--status:1、待审核 2、未通过 3、进行中取件 4、进行中收货 5、进行中同意发货-->
                        {{ status == 1 ? "待审核" : status == 2 ? "未通过" : status == 3||status==4||status==5||status==6? "进行中" : "已完成" }}
                    </text>
                </view>
                <template v-if="status==2">
                    <view class="flex align-center justify-between margin-top-sm">
                        <text class="text-gray">未通过原因</text>
                        <text>照片不清晰</text>
                    </view>
                    <view class="flex align-center justify-between margin-top-sm">
                        <text class="text-gray">审核时间</text>
                        <text>2022-08-30 12:23:56</text>
                    </view>
                </template>
            </view>
            <view v-if="status==4||status==5||status==6" class="whiteBoxShadow margin-top-sm" >
                <view  v-if="true">
                    <boxTitle  title="物流信息"></boxTitle>
                    <view>
                        <view class="flex justify-between margin-top-sm" v-if="status==5||status==6">
                            <text class="text-gray flex-sub">物流单号</text>
                            <text class="flex-treble text-right">23234234234234</text>
                        </view>
                        <view class="flex justify-between margin-top-sm">
                            <view class="text-gray">物流状态</view>
                            <view v-if="status==4" class="text-black">代取件</view>
                            <view v-if="status==5" class="text-black">待商家收货</view>
                            <view v-if="status==6" class="text-black">商家已签收</view>
                        </view>


                        <view v-if="status==4||status==5||status==6" class="flex justify-between margin-top-sm">
                            <view class="text-gray">取件时间</view>
                            <text  class="text-black">2022-02-26 12:12:26</text>
                        </view>
                        <view v-if="status==4" class="flex justify-between margin-top-sm">
                            <view class="text-gray">取件码</view>
                            <view  class="text-red">456896</view>
                        </view>
                        <view v-if="status==6" class="flex justify-between margin-top-sm">
                            <view class="text-gray">卖家收货时间</view>
                            <view class="text-black">2022-02-26 12:12:26</view>
                        </view>
                        <view v-if="status==6" class="justify-end flex margin-top-sm">
                            <button class="cu-btn radius bg-white u-border"  @click="gotoPath('pages/index/applicationSample/expressDetailsIndex')">查看物流</button>
                        </view>
                    </view>

                </view>
            </view>
            <view v-if="status==3" class="whiteBoxShadow margin-top-sm">
                <view class="text-df text-red">商家已同意您的退货申请，请将商品寄回至以下地址</view>
                <view class="margin-top-sm">贵州省贵阳市观山湖区贵州金融城max.C座</view>
                <view class="margin-top-sm">张晓刚  <text class="margin-left">18690728686</text></view>
            </view>
            <view v-if="status==7||status==0" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="完成信息"></boxTitle>
                <view class="text-df text-red margin-top-sm">您的退款申请已完成，商品已自动入库到您的云库存，请前往查看入库记录</view>
                <view class="cu-btn w100 bg-red  margin-right-sm radius margin-top">查看入库记录</view>
            </view>
            <view v-if="status==7||status==0" class="whiteBoxShadow margin-top-sm">
                <boxTitle title="物流信息"></boxTitle>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">物流单号</text>
                    <text>2598426411</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">物流状态</text>
                    <text>商家已签收</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">取件时间</text>
                    <text>2022-02-12  12:30</text>
                </view>
                <view class="flex justify-between align-center margin-top-sm">
                    <text class="text-gray">卖家收货时间</text>
                    <text>2022-02-12  12:30</text>
                </view>
                <view class="flex justify-end margin-top-sm">
                    <button class="cu-btn bg-white u-border radius">查看物流</button>
                </view>
            </view>
            <!--售后信息-->
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="售后信息"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">售后类型</text>
                    <text>换货</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">换货原因</text>
                    <text>商品有瑕疵</text>
                </view>
                <view class="flex align-center justify-between margin-top-sm">
                    <text class="text-gray">换货商品</text>
                    <text></text>
                </view>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="53°"
                               goodsVolume="500ml"
                               img-url="/productDetails/Slice%201.png"
                >
                    <view slot="discount" class="flex justify-between align-center margin-top-sm">
                        <view>
                            <text class="text-gray">换货数量：</text>
                            <text>72瓶</text>
                        </view>
                        <view class="text-red text-bold">￥5300.00</view>
                    </view>
                </goodsInfoCard>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="53°"
                               goodsVolume="500ml"
                               img-url="/productDetails/Slice%201.png"
                >
                    <view slot="discount" class="flex justify-between align-center margin-top-sm">
                        <view>
                            <text class="text-gray">换货数量：</text>
                            <text>72瓶</text>
                        </view>
                        <view class="text-red text-bold">￥5300.00</view>
                    </view>
                </goodsInfoCard>
                <view>
                    <view class="text-gray">描述/凭证图片</view>
                    <input class="margin-top-sm" type="text" placeholder="这是输入的内容">
                    <u-upload class="margin-top-sm"
                              :fileList="fileList1"
                              @afterRead="afterRead"
                              @delete="deletePic"
                              name="1"
                              multiple
                              :maxCount="10"
                    ></u-upload>
                </view>
            </view>

            <view class="whiteBoxShadow margin-top-sm">
                <view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">数量合计</view>
                        <view>240瓶</view>
                    </view>
                    <view class="flex justify-between margin-top-sm">
                        <view class="text-gray">金额合计</view>
                        <view>￥59000.00</view>
                    </view>
                    <view v-if="status==1 ||status==2" class="flex justify-between margin-top-sm">
                        <view class="text-gray">物流运费</view>
                        <view>￥0.00</view>
                    </view>
                </view>
                <view class="u-border-bottom margin-top-sm"></view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-bold text-lg">金额合计</view>
                    <view>
                        <view class="text-red text-bold">￥500000.00</view>
                        <view>{{ convertCurrency(500000) }}</view>
                    </view>
                </view>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="售后详情"></boxTitle>
                <view class="flex align-center justify-between margin-top-sm">
                    <view class="text-gray">售后编号</view>
                    <view class="flex align-center">
                        <view>HJXCGD20220901001</view>
                        <!--                        <copyButton value="4856874887"></copyButton>-->
                    </view>
                </view>
                <view class="flex justify-between margin-top-sm">
                    <view class="text-gray">关联发货单号</view>
                    <view>HJXCGD20220901001</view>
                </view>
                <view class="flex justify-between">
                    <view></view>
                    <view class="cu-btn bg-white border uni-shadow-sm text-bold">查看订单</view>
                </view>
                <view class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">操作时间</view>
                    <view class="">2022-08-22 12:23:26</view>
                </view>
                <view class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">操作员</view>
                    <view class="">王晓丫</view>
                </view>
                <view v-if="status==4" class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">审核人</view>
                    <view class="">张东</view>
                </view>
                <view v-if="status==4" class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">通过时间</view>
                    <view class="">2022-08-22 12:23:26</view>
                </view>
                <view v-if="status==4" class="flex align-center  justify-between margin-top-sm">
                    <view class="text-gray">完成时间</view>
                    <view class="">2022-08-22 12:23:26</view>
                </view>
            </view>

            <view v-if="status==3" class="botBtn padding-xs bg-white">
                <button @click="gotoPath('/pages/admin/goodsSales/appointmentPick')" style="width: 100%"
                        class="cu-btn bg-red radius lg">预约取件
                </button>
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
export default {
    name: "afterSalesDetails",
    components: {
        boxTitle,
        copyButton,
        addressBox,
        fxbImage,
        goodsInfoCard
    },
    data() {
        return {
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
            this.showMoney = false;
            // console.log('close');
        }
    },
    onLoad(options) {
        this.status = options.status;
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
