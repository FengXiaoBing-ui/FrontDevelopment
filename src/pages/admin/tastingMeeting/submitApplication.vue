<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="品鉴会申请" :autoBack="true">
        </u-navbar>
        <view :style="'margin-top:'+ CustomBar + 'px'" style="padding-bottom: 80px">
            <view v-if="shutOff" class="padding-sm bg-white">
                <view class="red-Bacground-Box flex justify-between padding-sm align-center">
                    <view class="text-sm text-red " style="line-height: 20px">温馨提示：品鉴会可提前10日准备，确定场地及参会人
                        数，已发布的品鉴会可前往营销专区参与推广活动；
                    </view>
                    <view @click="shutOff=false" class="cuIcon-roundclosefill text-red margin-left-sm"></view>
                </view>
            </view>
            <view class="padding-lr-sm margin-top-sm">
                <view class="whiteBoxShadow margin-top flex align-center">
                    <view class="flex align-center">
                        <view class="text-red">*</view>
                        <view>品鉴会名称</view>
                    </view>
                    <input class="margin-left-sm" type="text" placeholder="请输入品鉴会名称" style="font-size: 14px">
                </view>
                <!--        主内容-->
                <view class="whiteBoxShadow margin-top-sm">
                    <view class="flex justify-between ">
                        <boxTitle style="margin: 0" title="合同商品"></boxTitle>
                        <view @click="gotoPath('/pages/admin/tastingMeeting/contractProductList')"
                              class="flex align-center text-red">
                            <text>选择合同商品</text>
                            <view class="cuIcon-right margin-left-sm" style="font-size: 15px"></view>
                        </view>
                    </view>
                    <view class="flex justify-between align-center margin-top-sm">
                        <text class="text-bold text-lg">东方国宾·尊致酒500ml酱香型合同</text>
                        <text class="bg-gray radius padding-xs">合同详情</text>
                    </view>
                    <view class="flex justify-between text-sm margin-top-sm">
                        <view>
                            <view class="flex">结算方式：
                                <text>先款后货</text>
                            </view>
                            <view class="margin-top-sm">报销费用：
                                <text class="text-red">￥1500.00</text>
                                /场
                            </view>
                        </view>
                        <view>
                            <view class="flex">合同编号：
                                <text>155678458248525</text>
                            </view>
                            <view class="flex margin-top-sm">报销商品：
                                <text>2瓶/场</text>
                            </view>
                        </view>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="flex align-start margin-top">
                        <fxbImage width="150" height="150" src="/productDetails/Slice%201.png"
                                  mode="aspectFill"></fxbImage>
                        <view class="margin-left-sm flex flex-treble flex-direction">
                            <view class="text-bold text-lg">东方国宾53°瓶装500ml</view>
                            <view class="text-sm flex align-center margin-top-sm">
                                <text class="text-gray"
                                      style="color: #F37B1D ;background-color:rgba(255,165,0,0.2)">
                                    香型:酱香型
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #E54D42;background-color:rgba(255,0,0,0.2)">
                                    度数:53°
                                </text>
                                <text class="text-gray margin-left-sm"
                                      style="color: #0081FF;background-color:rgba(0,0,255,0.1)">
                                    容量:500ml
                                </text>
                            </view>
                            <view class="text-sm flex justify-between align-center margin-top-sm">
                                <view class="flex align-center">
                                    <text>代理价：</text>
                                    <view>￥365.00</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm">
                    <boxTitle title="提交资料"></boxTitle>
                    <view class="margin-top flex align-center justify-between">
                        <view class="flex align-center">
                            <view class="text-red">*</view>
                            <view>选择地址</view>
                        </view>
                        <view class="flex align-center">
                            <input type="text" placeholder="请选择地区" style="font-size: 14px;width: 75px">
                            <view class="cuIcon-right margin-left-sm" style="font-size: 16px"></view>
                        </view>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="margin-top flex align-center">
                        <view class="flex align-center">
                            <view class="text-red">*</view>
                            <view>详细地址</view>
                        </view>
                        <input class="margin-left-sm" type="text" placeholder="请输入详细地址" style="font-size: 14px">
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="margin-top flex align-center">
                        <view class="flex align-center">
                            <view class="text-red">*</view>
                            <view>酒店名称</view>
                        </view>
                        <input class="margin-left-sm" type="text" placeholder="请输入酒店名称" style="font-size: 14px">
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="margin-top flex align-center justify-between ">
                        <view class="flex align-center">
                            <view class="flex align-center">
                                <view class="text-red">*</view>
                                <view>报名金额</view>
                            </view>
                            <view class="flex margin-left-sm">
                                <view class="flex">
                                    <text>￥</text>
                                    <input class="" type="text" placeholder="请输入金额" style="font-size: 14px">
                                </view>
                            </view>
                        </view>
                        <text>/人</text>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="margin-top flex align-center justify-between ">
                        <view class="flex align-center">
                            <view class="flex align-center">
                                <view class="text-red">*</view>
                                <view>参会人数</view>
                            </view>
                            <input class="margin-left-sm" type="text" placeholder="请参会人数" style="font-size: 14px">
                        </view>
                        <text>人</text>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="margin-top flex align-center justify-between">
                        <view class="flex align-center">
                            <view class="text-red">*</view>
                            <view>举办日期</view>
                        </view>
                        <view class="flex align-center">
                            <text>2022-08-31</text>
                            <view class="cuIcon-right margin-left-sm"></view>
                        </view>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="margin-top flex align-center justify-between">
                        <view class="flex align-center">
                            <view class="text-red">*</view>
                            <view>起止时间</view>
                        </view>
                        <view class="flex align-center">
                            <text>16:30~19:00</text>
                            <view class="cuIcon-right margin-left-sm"></view>
                        </view>
                    </view>
                    <view class="u-border-bottom margin-tb"></view>
                    <view class="margin-top flex align-center justify-between">
                        <view class="flex align-center">
                            <view class="text-white">*</view>
                            <view>举办流程</view>
                        </view>
                        <view @click="addFlowPath" style="font-size: 36rpx" class="cuIcon-roundaddfill text-red"></view>
                    </view>
                    <view class="flex flex-direction margin-top-sm">
                        <view v-for="(item,index) in flowPathList" :key="index+'a'">
                            <view class="flex justify-between align-center border padding-sm radius margin-top-sm">
                                <view class="flex">流程{{ bigNum[index] }}：
                                    <input class="margin-left-sm" type="text" placeholder="请输入流程内容"
                                           style="font-size: 14px">
                                </view>
                                <view @click="close(index)" style="font-size: 34rpx" class="cuIcon-roundclosefill text-gray light"></view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="whiteBoxShadow margin-top-sm ">
                    <boxTitle title="渠道服务商支持"></boxTitle>
                    <view class="flex justify-between">
                        <view>是否需要业务人员支持</view>
                        <view class="flex">
                            <view class="flex align-center">
                                <view @click="RadioChange1" class="radio">
                                    <radio :checked="show1" class="margin-left-sm"></radio>
                                </view>
                                <view>是</view>
                            </view>
                            <view class="flex margin-left align-center">
                                <view @click="RadioChange2" class="radio">
                                    <radio :checked="show2" class="margin-left-sm"></radio>
                                </view>
                                <view>否</view>
                            </view>
                        </view>
                    </view>
                    <view class="u-border-bottom margin-tb-sm"></view>
                    <view class="margin-top flex align-center justify-between ">
                        <view class="flex align-center">
                            <view>支持人数</view>
                            <input class="margin-left-sm" type="text" placeholder="请输入需要支持的人数" style="font-size: 14px">
                        </view>
                        <text>人</text>
                    </view>
                    <view class="u-border-bottom margin-tb-sm"></view>
                    <view class="margin-top flex align-center">
                        <view>备注信息</view>
                        <input class="margin-left-sm w75" type="text" placeholder="请输入备注信息（例如举办品鉴会需求）"
                               style="font-size: 12px">
                    </view>
                </view>
            </view>
        </view>
        <view class="botBtn bg-white padding-bottom-xl padding-lr-sm padding-top-sm">
            <button @click="gotoPath('pages/payResult/payResult?status=submitpay')" style="width: 100%"
                    class="cu-btn bg-red radius">提交申请
            </button>
        </view>
    </view>
</template>

<script>
import boxTitle from "/src/pages/agent/components/fxb-box-title";
import fxbImage from "/src/components/fxb/fxb-image";

export default {
    name: "submitApplication",
    components: {
        boxTitle,
        fxbImage
    },
    data() {
        return {
            flowPathList: [
                {
                    value: ""
                }
            ],
            bigNum:["一","二","三","四","五","六","七","八","九","十"],
            show2: false,
            show1: false,
            shutOff: true,
            fileList1: [],
            baseFormData: {
                sex: 2
            },
            sexs: [
                {
                    text: "男",
                    value: 0
                },
                {
                    text: "女",
                    value: 1
                }
            ]
        };
    },
    methods: {
        close(index) {
            this.flowPathList.splice(index, 1);
        },
        addFlowPath() {
            this.flowPathList.push({
                value: ""
            });
        },
        RadioChange1() {
            this.show1 = !this.show1;
        },
        RadioChange2() {
            this.show2 = !this.show2;
        },
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1);
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
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
                // let a = uni.uploadFile({
                //   url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
                //   filePath: url,
                //   name: 'file',
                //   formData: {
                //     user: 'test'
                //   },
                //   success: (res) => {
                //     setTimeout(() => {
                //       resolve(res.data.data)
                //     }, 1000)
                //   }
                // });
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.red-Bacground-Box {
    background-color: rgba(255, 0, 0, 0.05);
}

.radio {
    transform: scale(0.7);
}

.botBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

/deep/ .uni-radio-input-checked {
    background-color: red !important;
    border-color: red !important;
}

/deep/ .uni-radio-input-checked::before {
    display: none !important;
}
</style>