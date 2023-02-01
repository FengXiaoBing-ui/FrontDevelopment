<template>
    <table border="1" style="margin: 0 auto">
        <tr class="text-sm">
            <td>品名</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsName ? dataObj.goodsName: "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>香型</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo ? dataObj.goodsInfo.controAromaticType : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>酒精度</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo ? dataObj.goodsInfo.controAlcohol : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>容量</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controNetContent ? dataObj.goodsInfo.controNetContent : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>酒瓶材质</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controMaterialQuality ? dataObj.goodsInfo.controMaterialQuality : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>厂家</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controManufactor ? dataObj.goodsInfo.controManufactor : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>产地</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controPlaceOfOrigin ? dataObj.goodsInfo.controPlaceOfOrigin : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>原料</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controRawMaterial ? dataObj.goodsInfo.controRawMaterial : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>执行标准</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controExecutiveStandards ? dataObj.goodsInfo.controExecutiveStandards : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>规格参数</td>
            <td class="padding-lr-sm " style="width: 80%">
            </td>
        </tr>
        <tr class="text-sm">
            <td>商品编号</td>
            <td class="padding-lr-sm " style="width: 80%">

                {{ dataObj.goodsInfo.controArticleNo ? dataObj.goodsInfo.controArticleNo : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>主体</td>
            <td class="padding-lr-sm " style="width: 80%"></td>
        </tr>
        <tr class="text-sm">
            <td>保质期</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controQualityGuaranteePeriod ? dataObj.goodsInfo.controQualityGuaranteePeriod : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>储存方式</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controStorageMode ? dataObj.goodsInfo.controStorageMode : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>参数</td>
            <td class="padding-lr-sm " style="width: 80%"></td>
        </tr>
        <tr class="text-sm">
            <td>适用场景</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controApplicableScenarios ? dataObj.goodsInfo.controApplicableScenarios : "" }}
            </td>
        </tr>
        <tr class="text-sm">
            <td>包装形式</td>
            <td class="padding-lr-sm " style="width: 80%">
                {{ dataObj.goodsInfo.controPackagingForm ? dataObj.goodsInfo.controPackagingForm : "" }}
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: "fxb-table-tr-td",
    props:{
        dataObj:{
            type:Object,
            default: () => {
                return {}
            }
        }
    }
};
</script>

<style lang="scss" scoped>
td,
th,
table {
    border: 1px solid #bebebe;
}

tr {
    td {
        &:nth-child(1) {
            text-align: center;
            padding: 14rpx 0;
            width: 154rpx;
        }
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>