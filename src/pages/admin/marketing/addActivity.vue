<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" title="新增活动" :autoBack="true"></u-navbar>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ CustomBar + 'px;padding-bottom:100rpx'">
            <view class="whiteBoxShadow">
                <boxTitle title="新增活动"></boxTitle>
                <view class="flex">
                    <text><text class="text-red">*</text>上传首页图</text>
                </view>
                <view class="margin-tb-sm">
                    <u-upload
                        :fileList="fileList1"
                        @afterRead="afterRead"
                        @delete="deletePic"
                        name="1"
                        multiple
                        :maxCount="1"
                    ></u-upload>
                </view>
                <view class="u-border-top">
                    <view class="flex margin-top-sm">
                        <text class="">
                            <text class="text-red">*</text>
                            上传详情首图
                        </text>
                    </view>
                    <view class="margin-top-sm">
                        <u-upload
                            :fileList="fileList1"
                            @afterRead="afterRead"
                            @delete="deletePic"
                            name="1"
                            multiple
                            :maxCount="1"
                        ></u-upload>
                    </view>
                </view>
                <view class="flex justify-between u-border-top-bottom padding-tb-sm margin-top">
                    <text class=""><text class="text-red">*</text>活动名称</text>
                    <input class="text-right" type="text" placeholder="请输入活动名称">
                </view>
                <view class="flex u-border-bottom padding-tb-sm align-center justify-between">
                    <text><text class="text-red">*</text>活动时长</text>
                    <view @click="show = true" class="flex justify-between align-center">
                        <view class="text-gray">{{ msg }}</view>
                        <view class="cuIcon-right margin-left-xs" style="font-size: 36rpx"></view>
                    </view>
                </view>
                <view class="flex padding-top-sm  align-center justify-between">
                    <text class="">
                        <text class="text-red">*</text>费用合计</text>
                    <view class="flex justify-between align-center padding-left-lg">
                        <view class="text-red">￥0.00</view>
                    </view>
                </view>

                <u-picker :show="show" :columns="columns" @cancel="cancel" @confirm="confirm"></u-picker>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="活动商品" right-text="添加商品" @change="gotoPath('/pages/admin/marketing/selectProduct')" right-text-class="text-red"></boxTitle>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                               retail-price="389"
                >
                    <view slot="discount" class="flex justify-between align-center margin-top-sm">
                        <view>发布代理：46人</view>
                        <view>已代理：22</view>
                        <view>剩余代理：22</view>
                    </view>
                </goodsInfoCard>
                <view class="u-border-bottom margin-tb-sm"></view>
                <goodsInfoCard agent-price="365"
                               goods-name="飞天茅台53°瓶装酱香型 500ml"
                               goods-type="酱香型"
                               goodsDegrees="49"
                               goodsVolume="500"
                               img-url="/productDetails/Slice%201.png"
                               retail-price="389"
                >
                    <view slot="discount" class="flex justify-between align-center margin-top-sm">
                        <view>发布代理：46人</view>
                        <view>已代理：22</view>
                        <view>剩余代理：22</view>
                    </view>
                </goodsInfoCard>
            </view>
            <view class="whiteBoxShadow margin-top-sm">
                <boxTitle title="添加代理政策" right-text="添加政策" @change="gotoPath('/pages/admin/policyAgency/addPolicy')" right-text-class="text-red"></boxTitle>
                <view class="flex align-center justify-between">
                    <view class="w-third  text-center padding-tb-xs radius" style="font-size: 16px">代理政策1(省级)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-top flex  flex-wrap">
                    <view class=" w-third  padding-lr padding-tb"  v-for="item in policyList.province" :key="item.id">{{item.name}}</view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view class="flex align-center justify-between margin-tb">
                    <view class="w-third  text-center padding-tb-xs radius" style="font-size: 16px">代理政策2(市级)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-bottom" v-for="item in policyList.city" :key="item.id">
                    <view class="text-left text-gray margin-bottom">{{item.province}}</view>
                    <view class="margin-top flex justify-around">
                        <view class="margin-right-xs padding-lr padding-tb-xs" v-for="el in item.city" :key="el.id">{{el.name}}</view>
                    </view>
                </view>
                <view class="u-border-bottom margin-top"></view>
                <view class="flex align-center justify-between margin-top">
                    <view class="w-third text-center padding-tb-xs radius " style="font-size: 16px">代理政策3(区级)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-bottom margin-top" v-for="item in policyList.area" :key="item.id">
                    <view class="text-left text-gray margin-bottom">{{item.city}}</view>
                    <view class="margin-top flex justify-around">
                        <view class="margin-right-xs padding-lr padding-tb-xs" v-for="el in item.area" :key="el.id">{{el.name}}</view>
                    </view>
                </view>
                <view class="flex align-center justify-between margin-top">
                    <view class="w-third  text-center padding-tb-xs radius" style="font-size: 16px">代理政策4(街道)</view>
                    <view class="flex align-center">
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="trash" size="20px"></u-icon>
                            删除
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="edit-pen" size="20px"></u-icon>
                            编辑
                        </view>
                        <view class="flex align-center margin-left-sm">
                            <u-icon name="info-circle" size="20px"></u-icon>
                            详情
                        </view>
                    </view>
                </view>
                <view class="margin-bottom margin-top" v-for="item in policyList.street" :key="item.id">
                    <view class="text-left text-gray margin-bottom">{{item.area}}</view>
                    <view class="margin-top flex justify-around">
                        <view class="margin-right-xs padding-lr padding-tb-xs" v-for="el in item.street" :key="el.id">{{el.name}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="botBtn bg-white padding-xs flex">
            <button class="cu-btn bg-red radius flex-sub">提交申请</button>
        </view>
    </view>
</template>

<script>

import boxTitle from "/src/pages/agent/components/fxb-box-title";
import goodsInfoCard from "/src/components/erp/goodsInfoCard";
import agencyPolicy from "/src/components/erp/agencyPolicy";

export default {
    name: "addActivity",
    components: {
        boxTitle,
        goodsInfoCard,
        agencyPolicy
    },
    data() {
        return {
            msg:"请选择时长",
            fileList1:[],
            columns:[["7日","15日","30日"]],
            show:false,
            status: 0,
            policyList: {
                province: [
                    { name: "贵州省 1", id: "1" },
                    { name: "四川省 2", id: "2" },
                    { name: "云南省 2", id: "3" }
                ],
                city: [
                    {
                        province: "贵州省",
                        city: [
                            { name: "贵阳市 2", id: "01" },
                            { name: "毕节市 2", id: "02" },
                            { name: "安顺市 2", id: "03" }
                        ]
                    },
                    {
                        province: "云南省",
                        city: [
                            { name: "昆明市 3", id: "01" },
                            { name: "普洱市 3", id: "02" },
                            { name: "清镇市 3", id: "03" }
                        ]
                    }
                ],
                area: [
                    {
                        city: "贵州省贵阳市",
                        area: [
                            { name: "观山湖区 4", id: "001" },
                            { name: "南明区 4", id: "002" },
                            { name: "花溪区 6", id: "003" }
                        ]
                    },
             {
                 city: "云南省昆明市",
                     area: [
                 { name: "云岩区 4", id: "001" },
                 { name: "小河区 6", id: "002" },
                 { name: "乌当区 5", id: "003" }
             ]
             }
                ],
                street: [
                    {
                        area: "贵州省贵阳市观山湖区",
                        street: [
                            { name: "世纪街道 4", id: "0001" },
                            { name: "会展街道 4", id: "0002" },
                            { name: "华园街道 6", id: "0003" }
                        ]
                    },
                    {
                        area: "云南省昆明市南明区",
                        street: [
                            { name: "冰洋街道 4", id: "0001" },
                            { name: "云潭街道 6", id: "0002" },
                            { name: "关山街道 5", id: "0003" }
                        ]
                    }

                ]
            }
        };
    },
    onLoad(options) {
        this.status = options.status;
    },
    methods: {
        gotoPath(path){
          uni.navigateTo({
              url:path
          })
        },
        confirm(e){
            this.msg = e.value[0]
            this.show = false
        },
        cancel(e){
            this.show = false
        },
        gotoPayment() {
            uni.navigateTo({
                url: "/pages/admin/tastingMeeting/payment"
            });
        },
        // 删除图片
        deletePic(event) {
            this[`fileList${event.name}`].splice(event.index, 1)
        },
        // 新增图片
        async afterRead(event) {
            // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
            let lists = [].concat(event.file)
            let fileListLen = this[`fileList${event.name}`].length
            lists.map((item) => {
                this[`fileList${event.name}`].push({
                    ...item,
                    status: 'uploading',
                    message: '上传中'
                })
            })
            for (let i = 0; i < lists.length; i++) {
                const result = await this.uploadFilePromise(lists[i].url)
                let item = this[`fileList${event.name}`][fileListLen]
                this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
                    status: 'success',
                    message: '',
                    url: result
                }))
                fileListLen++
            }
        },
        uploadFilePromise(url) {
            return new Promise((resolve, reject) => {
                let a = uni.uploadFile({
                    url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
                    filePath: url,
                    name: 'file',
                    formData: {
                        user: 'test'
                    },
                    success: (res) => {
                        setTimeout(() => {
                            resolve(res.data.data)
                        }, 1000)
                    }
                });
            })
        },
    }
};
</script>

<style lang="scss" scoped>
.botBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>