<template xmlns="">
    <view>
        <u-navbar :autoBack="true" title="政策声明"></u-navbar>
        <view :style="`margin-top:${CustomBar}px;height:calc(100vh - ${CustomBar}px)`"
              class="bg-white flex flex-direction align-center ">
            <view class="text-bold text-xl padding-tb">好酒选政策声明</view>
            <view class="padding-sm margin-xs">
                <view class="text-bold">提示条款</view>

<!--                    新浪非常重视对您的个人隐私的保护。在某些情况下我们需要您提供一些信息才能为您提供您请求的服务。本隐私权声明说明了这些情况下的信息收集和使用情况。-->
<!--                    本隐私权声明适用于新浪提供的所有产品、服务和网站。-->
<!--                    我们可能会收集以下类型的信息:-->
<!--                    您提供的信息一在 您使用新浪提供的某些服务时，我们会在征得您的同意后搜集您的-一些个人信息用于识别您的身份。 这些信息包括但不限于:姓名、性别、年龄、出生日期、身份证号(或其他证件及号码)、家庭住址、教育信息、职业信息、兴趣爱好等。 我们可能会将您通过自己的帐户提交的信息与新浪的其他服务或第三方的信息相结合，以便为您提供更好的体验并提高我们的服务质量。-->

                <view class="margin-tb">
                    <text style="line-height: 50rpx" class="">
                        新浪非常重视对您的个人隐私的保护。在某些情况下我们需要您提供一些信息才能为您提供您请求的服务。本隐私权声明说明了这些情况下的信息收集和使用情况。
                        本隐私权声明适用于新浪提供的所有产品、服务和网站。
                        我们可能会收集以下类型的信息:
                        您提供的信息一在 您使用新浪提供的某些服务时，我们会在征得您的同意后搜集您的-一些个人信息用于识别您的身份。 这些信息包括但不限于:姓名、性别、年龄、出生日期、身份证号(或其他证件及号码)、家庭住址、教育信息、职业信息、兴趣爱好等。 我们可能会将您通过自己的帐户提交的信息与新浪的其他服务或第三方的信息相结合，以便为您提供更好的体验并提高我们的服务质量。

                    </text>
                </view>
                <view class="text-bold">定义</view>
                <view class="margin-tb">
                    <text style="line-height: 50rpx" class="">
                        我们会将您提供的信息用于支持、完善我们的相关服务;
                        我们将个人信息提供给我们的子公司、关联公司或其他可信赖的企业或个人，以便其代表我们处理个人信息。我们要求上述各方同意按照我们的规定、本隐私权政策以及其他任何适用的保密和安全措施来处理这些信息;
                        我们将用于保护新浪用户的权利和财产。
                        这些信息将仅用于收集时即已确定的目的，如有除此之外的任何其他用途，我们都会提前征得您的同意。同时，新浪会在法律要求或符合新浪网站相关服务条款及约定的情况下透露您的个人信息。

                    </text>
                </view>
            </view>

        </view>
    </view>
</template>

<script>
export default {
    name: "policyIndex"
};
</script>

<style scoped>
.text-indent{
    text-indent: 2rem;
}
</style>