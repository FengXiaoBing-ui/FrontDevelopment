<template>
    <view class="content">
        <u-navbar :border="false" :fixed="true" :title="status==4?'报名列表':'参会列表'" :autoBack="true"></u-navbar>
        <view :style="'top:'+CustomBar+'px'" class="search bg-white">
            <view class="bg-white padding-lr-sm">
                <view class="flex align-center margin-tb-sm bg-gray" style="border-radius: 4px">
                    <text class="cuIcon-search text-red"
                          style="font-size: 20px; padding: 4px; margin-left: 4px"></text>
                    <input
                        class="w100"
                        type="text"
                        placeholder-class="text-gray"
                        placeholder="请输入商品名称进行搜索"
                        confirm-type="search"
                    />
                </view>
                <HM-filterDropdown :menuTop="(CustomBar+45)*2" :filterData="filterData"
                                   :defaultSelected="defaultSelected"
                                   :key="filterData.toString()"
                                   :updateMenuName="true" @confirm="confirm"></HM-filterDropdown>
            </view>
        </view>
        <view class="padding-lr-sm padding-tb" :style="'margin-top:'+ (CustomBar+92) + 'px'">
            <view class="flex justify-between align-center">
                <text>报名人数:56</text>
                <text v-if="status==4">付款人数:54</text>
                <text>优惠券使用:56</text>
                <text>优惠券剩余:56</text>
            </view>
            <view>
                <view v-for="(item,index) in dataList" :key="index" @click="gotoDetails(item.status)" class="whiteBoxShadow margin-top-sm flex justify-between">
                    <u-avatar src="https://cdn.uviewui.com/uview/album/1.jpg" size="50"></u-avatar>
                    <view class="flex basis-xl flex-direction">
                        <view class="flex justify-between">
                            <view class="flex align-center">
                                <view class="margin-right-sm text-lg">{{ item.name }}</view>
                                <view> <text class="cuIcon-mobile text-red"></text>{{ item.phone }}</view>
                            </view>
                            <view :class="item.status===0?'text-red':'text-blue'">{{ item.status===0?statusText[status==4?0:1][0]:statusText[status==4?0:1][1] }}</view>
                        </view>
                        <view class="margin-tb-xs flex align-center justify-between"><view>{{ item.unit }}</view> <u-tag v-if="item.tag" :text="item.tag" type="error" plain plainFill size="mini"></u-tag> </view>
                        <view class="text-gray">报名时间:{{ item.date }}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "enrollList",
    data(){
        return{
            status:0,
            statusText:[
                ['未支付','已支付'],
                ['未参会','已参会']
            ],
            filterData: [
                {
                    "name": "用户来源",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "全部",
                            "value":"全部"
                        },
                        {
                            "name": "微信",
                            "value":"微信"
                        },
                        {
                            "name": "快手",
                            "value":"快手"
                        },
                        {
                            "name": "抖音",
                            "value":"抖音"
                        },
                    ]
                },
                {
                    "name": "支付状态",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "全部",
                            "value":"全部"
                        },
                        {
                            "name": "已支付",
                            "value":"已支付"
                        },
                        {
                            "name": "未支付",
                            "value":"未支付"
                        },
                    ]
                },
                {
                    "name": "优惠券",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "全部",
                            "value":"全部"
                        },
                        {
                            "name": "已使用",
                            "value":"已使用"
                        },
                        {
                            "name": "未使用",
                            "value":"未使用"
                        },
                    ]
                },
                {
                    "name": "时间排序",
                    "type": "hierarchy-column",
                    "submenu": [
                        {
                            "name": "全部",
                            "value":"全部"
                        },
                        {
                            "name": "已使用",
                            "value":"已使用"
                        },
                        {
                            "name": "未使用",
                            "value":"未使用"
                        },
                    ]
                },
            ],
            defaultSelected: [
                [
                    [0,0]
                ],
                [
                    [0,0]
                ],
                [
                    [0,0]
                ],
            ],
            dataList:[
                {
                    name:"张小丁",
                    phone:"16890728548",
                    status:0,
                    unit:"贵州好酒选电子商务有限公司",
                    date:"2022-08-30 15:23:45"
                },
                {
                    name:"张小丁",
                    phone:"16890728548",
                    status:1,
                    unit:"贵州好酒选电子商务有限公司",
                    tag:"优惠券",
                    date:"2022-08-30 15:23:45"
                },
                {
                    name:"张小丁",
                    phone:"16890728548",
                    status:1,
                    unit:"贵州好酒选电子商务有限公司",
                    date:"2022-08-30 15:23:45"
                }
            ]
        }
    },
    onLoad(options){
      this.status = options.status
    },
    methods:{
        confirm(e){

        },
        gotoDetails(type){
            uni.navigateTo({
                url:"/pages/admin/marketing/enrollDetails?status="+this.status+"&type="+type
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.search {
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 999;
}
</style>