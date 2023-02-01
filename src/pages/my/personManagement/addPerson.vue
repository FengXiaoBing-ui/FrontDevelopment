<!---->
<template>
    <view>
        <u-navbar :autoBack="true" title="添加企业成员账号"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px)`" class="bg-white">
            <view class="margin-xs">
<!--                组件，封装-->
                <view v-for="(item,index) in form" :key=item.id class="cu-form-group " :class="item.type=='check'||item.type=='area'?'align-start':''">
                    <view class="title ">
                        {{ item.title }}
                    </view>
                    <input v-if="item.type=='input'" v-model="item.value" :disabled="item.disable"
                           :placeholder="item.placeholder"
                           name="input"></input>
                    <u--textarea v-if="item.type=='area'" v-model="item.value" :placeholder="item.placeholder" autoHeight
                                 class="margin-sm" confirmType="done"></u--textarea>
                    <text v-if="item.icon" :class=item.icon class="text-orange"></text>
                    <view v-if="item.type==='check'">
                        <u-checkbox-group v-model="item.value" @change="checkboxChange"  class="flex flex-wrap  scale margin-top-sm" >
                            <u-checkbox
                                class="margin-left-xs"
                                v-for="(el, index) in item.checkList"
                                :key="index"
                                :customStyle="{marginBottom: '8px'}"
                                :label="el.lable"
                                :name="el.name"
                                activeColor="red"
                                shape="circle"
                            >
                            </u-checkbox>
                        </u-checkbox-group>
                    </view>
                </view>
            </view>
            <view class="margin-xs">
                <button style="width: 100%" class="cu-btn bg-red"@click="gotoPath('/pages/my/personManagement/personManagementIndex')">保存</button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "addPerson",
    data: function() {
        return {
            form: [
                { id: "xx123", title: "ID", value: "A14558778", placeholder: "", disable: true,type:'input' },
                { id: "xx133", title: "负责人", value: "", placeholder: "姓名",type:'input' },
                { id: "xx143", title: "联系方式", value: "", placeholder: "手机号",type:'input' },
                { id: "xx1523", title: "企业/门店名称", value: "", placeholder: "门店名称",type:'input' },
                { id: "xx1283", title: "所在地区", value: "", placeholder: "省、市、区、街道", icon: "cuIcon-locationfill",type:'input' },
                { id: "xx12374", title: "详细地址", value: "", placeholder: "小区楼栋、乡村名称", type:'area'},
                {
                    id: "xx124", title: "账号权限", value:[], placeholder: "小区楼栋/乡村名称",type: "check",
                    checkList: [
                        { lable: "人员管理",name: "gl" },
                        { lable: "添加订单",  name: "add" },
                        { lable: "查看订单",  name: "check" },
                        { lable: "修改订单1",  name: "fiex1"},
                        { lable: "修改订单2",  name: "fiex2"},
                        { lable: "修改订单3",  name: "fiex3"}
                    ]
                }
            ]
        };
    },
    methods:{
        gotoPath(path) {
            uni.navigateTo({
                url: path
            });
        },
        addPerson(){
            uni.navigateBack({
                delta:1
            })
        },
        checkboxChange(n) {
            console.log(n);
        }
    }
};
</script>

<style scoped>
.cu-form-group .title {
    min-width: calc(4em + 15px);
    white-space: nowrap;
}
.scale{
    transform:scale(0.9)
}
</style>