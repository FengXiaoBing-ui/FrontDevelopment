export default [
    //服务商
    [
        {
            id: 100,
            name: "常用功能 ",
            childrenList: [
                {
                    appId: 0,
                    appIcon: "cuIcon-evaluate",
                    appName: "营销管理",
                    appLink: "/pages/admin/marketing/bannerAdmin",
                    icon: "wodedailishang"
                    // isCharge:true
                },
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "我的代理商",
                    appLink: "/pages/admin/myAgent/index",
                    icon: "wodedailishang"
                    // isCharge: true 该功能是否需要付费
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "合同管理",
                    appLink: "/pages/admin/adminContract/index?fnStatus=0",
                    icon: "hetongguanli"
                },
                // {
                //     appId: 3,
                //     appIcon: "cuIcon-send",
                //     appName: "合同发货订单",
                //     appLink: "/pages/admin/contractDeliverGoods/orderOne",
                //     icon: "hetongfahuo"
                // },
                {
                    appId: 4,
                    appIcon: "cuIcon-form",
                    appName: "商品管理",
                    appLink: "/pages/admin/adminProduct/productList",
                    icon: "shangpinguanli"
                },
                {
                    appId: 5,
                    appIcon: "cuIcon-pic",
                    appName: "代理政策",
                    appLink: "/pages/admin/policyAgency/policyList",
                    icon: "dailizhengce"
                },
                {
                    appId: 6,
                    appIcon: "cuIcon-cart",
                    appName: "发票管理",
                    appLink: "/pages/admin/invoiceAdmin/index?status=0",
                    icon: "fapiaoguanli"
                },
                {
                    appId: 7,
                    appIcon: "cuIcon-cart",
                    appName: "品鉴会报销",
                    appLink: "/pages/admin/tastingMeeting/index?status=0",
                    icon: "pinjianhui"
                },
                {
                    appId: 8,
                    appIcon: "cuIcon-cart",
                    appName: "代理审核",
                    appLink: "/pages/admin/adminContract/agentAudit",
                    icon: "shenqingdaili"
                },
                {
                    appId: 9,
                    appIcon: "cuIcon-cart",
                    appName: "返佣管理",
                    appLink: "/pages/admin/returnCommissionService/serviceAdminIndex",
                    icon: "fanyongguanli"
                },
                {
                    appId: 10,
                    appIcon: "cuIcon-cart",
                    appName: "合同补货",
                    appLink: "/pages/admin/replenishment/replenishmentList",
                    icon: "hetongbuhuo"
                }
            ]
        },
        // {
        //     id: 101,
        //     name: "合同发货",
        //     childrenList: [
        //         {
        //             appId: 1,
        //             appIcon: "cuIcon-evaluate",
        //             appName: "发货申请",
        //             appLink: "/pages/admin/contractDeliverGoods/deliverGoodsApply",
        //             icon: "hetongfahuoshenqing"
        //         },
        //         {
        //             appId: 2,
        //             appIcon: "cuIcon-send",
        //             appName: "发货订单",
        //             appLink: "/pages/admin/contractDeliverGoods/orderOne",
        //             icon: "shujutongji"
        //         },
        //         {
        //             appId: 3,
        //             appIcon: "cuIcon-send",
        //             appName: "数据统计",
        //             appLink: "pages/admin/dataForService/dataCountIndex",
        //             icon: "shujutongji"
        //         }
        //     ]
        // },
        {
            id: 102,
            name: "商品管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-cart",
                    appName: "代理政策",
                    appLink: "/pages/admin/policyAgency/policyList",
                    icon: "dailizhengce"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-form",
                    appName: "商品管理",
                    appLink: "/pages/admin/adminProduct/productList",
                    icon: "shangpinguanli"
                }
            ]
        },
        {
            id: 103,
            name: "合同管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-pic",
                    appName: "代理审核",
                    appLink: "/pages/admin/adminContract/agentAudit",
                    icon: "shenqingdaili"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-form",
                    appName: "合同管理",
                    appLink: "/pages/admin/adminContract/index?fnStatus=0",
                    icon: "hetongguanli"
                }
            ]
        },
        {
            id: 104,
            name: "订单管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-cart",
                    appName: "样品订单",
                    appLink: "/pages/admin/orderSample/orderSampleIndex",
                    icon: "yangpindingdan"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-cart",
                    appName: "合作订单",
                    appLink: "/pages/admin/orderAdmin/orderAdmin",
                    icon: "wodehezuohuoban"
                },
                {
                    appId: 10,
                    appIcon: "cuIcon-cart",
                    appName: "合同补货",
                    appLink: "/pages/admin/replenishment/replenishmentList",
                    icon: "hetongbuhuo"
                }
            ]
        },
        {
            id: 105,
            name: "财务管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "发票管理",
                    appLink: "/pages/admin/invoiceAdmin/index?status=0",
                    icon: "fapiaoguanli"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-evaluate",
                    appName: "返佣管理",
                    appLink: "/pages/admin/returnCommissionService/serviceAdminIndex",
                    icon: "fanyongguanli"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-evaluate",
                    appName: "数据统计",
                    appLink: "/pages/admin/dataForService/dataCountIndex",
                    icon: "shujutongji"
                },
                {
                    appId: 4,
                    appIcon: "cuIcon-evaluate",
                    appName: "财务统计",
                    appLink: "",
                    icon: "caiwutongji"
                }
            ]
        },
        {
            id: 106,
            name: "合作管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "我的代理商",
                    appLink: "/pages/admin/myAgent/index",
                    icon: "wodedailishang"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "我的合作伙伴",
                    appLink: "/pages/admin/myPartnershipService/index",
                    icon: "wodehezuohuoban"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-pay",
                    appName: "销售额统计",
                    appLink: "/pages/admin/myPartnershipService/salesStatistics",
                    icon: "wodehezuohuoban"
                }
            ]
        },
        {
            id: 107,
            name: "营销管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "轮播图管理",
                    appLink: "/pages/admin/marketing/bannerAdmin?status=0",
                    icon: "fanyongguanli"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "品牌管理",
                    appLink: "/pages/admin/marketing/bannerAdmin?status=1",
                    icon: "fanyongguanli"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-pay",
                    appName: "活动管理",
                    appLink: "/pages/admin/marketing/bannerAdmin?status=2",
                    icon: "fanyongguanli"
                },
            ]
        },
        {
            id: 109,
            name: "品鉴会管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "办理审核",
                    appLink: "/pages/admin/tastingMeeting/index?status=0",
                    icon: "pinjianhui"
                },
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "报销审核",
                    appLink: "/pages/admin/tastingMeeting/adminIndex",
                    icon: "pinjianhuibaoxiaoshenhe"
                }
            ]
        },
        {
            id: 110,
            name: "云库存管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "退换货审核",
                    appLink: "pages/admin/returnAudit/index",
                    icon: "tuihuanhuoshenhe"
                }
            ]
        },
        {
            id: 111,
            name: "条码招标",
            childrenList:[
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "招标列表",
                    appLink: "/pages/admin/tender/tenderIndex",
                    icon: "wodedailishang"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "合作协议管理",
                    appLink: "/pages/admin/tender/tenderIndexTwo",
                    icon: "tuihuanhuoshenhe"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-evaluate",
                    appName: "条码商品管理",
                    appLink: "pages/admin/tender/barCodeProduct",
                    icon: "wofabude"
                },
            ]
        },
        {
            id: 112,
            name: "舍得酒专区",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "样品订单",
                    appLink: "/pages/admin/orderSample/orderSampleIndex",
                    icon: "wodedailishang"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "采购进货",
                    appLink: "/pages/admin/purchasingManagement/Purchase",
                    icon: "fanyongguanli"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-pay",
                    appName: "我要提货",
                    appLink: "/pages/admin/takeDelivery/takeDeliveryIndex",
                    icon: "wodedailishang"
                },
                {
                    appId: 4,
                    appIcon: "cuIcon-pay",
                    appName: "云库存提货",
                    appLink: "/pages/admin/cloudInventory/cloudInventoryIndex",
                    icon: "fanyongguanli"
                },
                {
                    appId: 5,
                    appIcon: "cuIcon-pay",
                    appName: "换货申请",
                    appLink: "/pages/admin/exchangeApplication/exchangeApplicationIndex",
                    icon: "hetongfahuoshenqing"
                },
                {
                    appId: 6,
                    appIcon: "cuIcon-pay",
                    appName: "客户管理",
                    appLink: "/pages/admin/customerManagement/customerManagementIndex",
                    icon: "hetongguanli"
                },
                {
                    appId: 7,
                    appIcon: "cuIcon-pay",
                    appName: "订单统计",
                    appLink: "/pages/admin/customerManagement/OrderStatistics",
                    icon: "yijianfahuo"
                }
            ]
        }
    ],
    //代理商
    [
        {
            id: 10001,
            name: "常用功能",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "一件发货",
                    appLink: "/pages/admin/oneClickDelivery/oneClickDeliveryList",
                    icon: "yijianfahuo"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "合同管理",
                    appLink: "/pages/admin/adminContract/index?fnStatus=1",
                    icon: "hetongguanli"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-send",
                    appName: "发货申请",
                    appLink: "/pages/admin/agentContractDeliverGoods/deliverGoodsApply",
                    icon: "hetongfahuoshenqing"
                },
                {
                    appId: 4,
                    appIcon: "cuIcon-form",
                    appName: "样品订单",
                    appLink: "/pages/admin/orderSample/orderSampleIndex",
                    icon: "yangpindingdan"
                },
                {
                    appId: 5,
                    appIcon: "cuIcon-pic",
                    appName: "返佣管理",
                    appLink: "/pages/admin/returnCommissionAgent/returnAdmin",
                    icon: "fanyongguanli"
                },
                {
                    appId: 6,
                    appIcon: "cuIcon-cart",
                    appName: "发票管理",
                    appLink: "/pages/admin/invoiceAdmin/index?status=1",
                    icon: "fapiaoguanli"
                },
                {
                    appId: 7,
                    appIcon: "cuIcon-cart",
                    appName: "品鉴会报销",
                    appLink: "/pages/admin/tastingMeeting/index?status=1",
                    icon: "pinjianhui"
                },
                {
                    appId: 8,
                    appIcon: "cuIcon-cart",
                    appName: "申请代理",
                    appLink: "/pages/admin/applicationAgentList/index",
                    icon: "shenqingdaili"
                },
                {
                    appId: 9,
                    appIcon: "cuIcon-cart",
                    appName: "数据统计",
                    appLink: "pages/admin/dataForAgent/dataCountIndex",
                    icon: "shujutongji"
                },
                {
                    appIcon: "cuIcon-cart",
                    appName: "合同补货",
                    appLink: "/pages/admin/replenishment/replenishmentList",
                    icon: "hetongbuhuo"
                }
            ]
        },
        // {
        //     id: 10002,
        //     name: "合同发货",
        //     childrenList: [
        //         {
        //             appId: 1,
        //             appIcon: "cuIcon-evaluate",
        //             appName: "发货申请",
        //             appLink: "/pages/admin/agentContractDeliverGoods/deliverGoodsApply",
        //             icon: "hetongfahuoshenqing"
        //         },
        //         {
        //             appId: 2,
        //             appIcon: "cuIcon-evaluate",
        //             appName: "发货订单",
        //             appLink: "/pages/admin/agentContractDeliverGoods/orderOne",
        //             icon: "hetongfahuo"
        //         },
        //         {
        //             appId: 3,
        //             appIcon: "cuIcon-evaluate",
        //             appName: "数据统计",
        //             appLink: "",
        //             icon: "shujutongji"
        //         }
        //     ]
        // },
        {
            id: 10003,
            name: "合同管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-cart",
                    appName: "申请代理",
                    appLink: "/pages/admin/applicationAgentList/index",
                    icon: "shenqingdaili"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "合同管理",
                    appLink: "/pages/admin/adminContract/index?fnStatus=1",
                    icon: "hetongguanli"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-evaluate",
                    appName: "退换货",
                    appLink: "/pages/admin/contractList/returnList",
                    icon: "tuihuanhuo"
                },
                {
                    appId: 4,
                    appIcon: "cuIcon-pay",
                    appName: "我的分销伙伴",
                    appLink: "/pages/admin/distributionPartner/distributionPartner",
                    icon: "wodehezuohuoban"
                },
            ]
        },
        {
            id: 10004,
            name: "云仓储管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "我的云库存",
                    appLink: "/pages/admin/cloudInventory/cloudInventoryIndex",
                    icon: "yunkucun"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-evaluate",
                    appName: "一件发货",
                    appLink: "/pages/admin/oneClickDelivery/oneClickDeliveryList",
                    icon: "yijianfahuo"
                }
            ]
        },
        {
            id: 10005,
            name: "订单管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "样品订单",
                    appLink: "/pages/admin/orderSample/orderSampleIndex",
                    icon: "yangpindingdan"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-cart",
                    appName: "合同补货",
                    appLink: "/pages/admin/replenishment/replenishmentList",
                    icon: "hetongbuhuo"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-cart",
                    appName: "合作订单",
                    appLink: "/pages/admin/orderAdmin/cooperativePartner",
                    icon: "wodehezuohuoban"
                },
            ]
        },
        {
            id: 10006,
            name: "财务管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "返佣管理",
                    appLink: "/pages/admin/returnCommissionAgent/returnAdmin",
                    icon: "fanyongguanli"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-evaluate",
                    appName: "发票管理",
                    appLink: "/pages/admin/invoiceAdmin/index?status=1",
                    icon: "fapiaoguanli"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-evaluate",
                    appName: "财务统计",
                    appLink: "",
                    icon: "caiwutongji"
                },
                {
                    appId: 4,
                    appIcon: "cuIcon-evaluate",
                    appName: "我的分期",
                    appLink: "pages/admin/myInstallment/myInstallmentDetails",
                    icon: "caiwutongji"
                }
            ]
        },
        {
            id: 10007,
            name: "消息管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "消息管理",
                    appLink: "",
                    icon: "xiaoxiguanli"
                }
            ]
        },
        {
            id: 10008,
            name: "品鉴会管理",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "我发布的",
                    appLink: "/pages/admin/tastingMeeting/index?status=1",
                    icon: "wofabude"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-evaluate",
                    appName: "我参与的",
                    appLink: "/pages/admin/tastingMeeting/participatingTastingMeeting/participatingTastingMeetingIndex",
                    icon: "pinjianhui"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-evaluate",
                    appName: "我报销的",
                    appLink: "/pages/admin/tastingMeeting/adminIndex",
                    icon: "wobaoxiaode"
                },
                {
                    appId: 4,
                    appIcon: "cuIcon-evaluate",
                    appName: "品鉴会推广",
                    appLink: "/pages/admin/marketing/bannerAdmin?status=3",
                    icon: "pinjianhui-1"
                }
            ]
        },
        {
            id: 10009,
            name: "我的条码",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "我的投标",
                    appLink: "/pages/admin/tender/myTender",
                    icon: "wofabude"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-evaluate",
                    appName: "合作协议合同",
                    appLink: "/pages/admin/tender/tenderIndexTwo",
                    icon: "pinjianhui"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-evaluate",
                    appName: "我的条码商品",
                    appLink: "pages/admin/barcodeCommodity/barcodeCommodity",
                    icon: "wobaoxiaode"
                },

            ]
        },
        {
            id: 10010,
            name: "舍得酒专区",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-pay",
                    appName: "样品订单",
                    appLink: "/pages/admin/orderSample/orderSampleIndex",
                    icon: "wodedailishang"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "采购进货",
                    appLink: "/pages/admin/purchasingManagement/Purchase",
                    icon: "fanyongguanli"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-pay",
                    appName: "我要提货",
                    appLink: "/pages/admin/takeDelivery/takeDeliveryIndex",
                    icon: "wodedailishang"
                },
                {
                    appId: 4,
                    appIcon: "cuIcon-pay",
                    appName: "云库存提货",
                    appLink: "/pages/admin/cloudInventory/cloudInventoryIndex",
                    icon: "fanyongguanli"
                },
                {
                    appId: 5,
                    appIcon: "cuIcon-pay",
                    appName: "换货申请",
                    appLink: "/pages/admin/exchangeApplication/exchangeApplicationIndex",
                    icon: "hetongfahuoshenqing"
                },
                {
                    appId: 6,
                    appIcon: "cuIcon-pay",
                    appName: "客户管理",
                    appLink: "/pages/admin/customerManagement/customerManagementIndex",
                    icon: "hetongguanli"
                },
                {
                    appId: 7,
                    appIcon: "cuIcon-pay",
                    appName: "订单统计",
                    appLink: "/pages/admin/customerManagement/OrderStatistics",
                    icon: "yijianfahuo"
                }
            ]
        }
    ],
    //个人合作伙伴
    [
        {
            id: 100000001,
            name: "常用功能",
            childrenList: [
                {
                    appId: 1,
                    appIcon: "cuIcon-evaluate",
                    appName: "我的订单",
                    appLink: "pages/admin/myOrderForPersonal/myOrderIndex",
                    icon: "wodedingdan",
                    tag:"免费",
                    tagColor:"red"
                },
                {
                    appId: 2,
                    appIcon: "cuIcon-pay",
                    appName: "销售记录",
                    appLink: "",
                    icon: "shujutongji",
                    tag:"私有版",
                    tagColor:"orange"
                },
                {
                    appId: 3,
                    appIcon: "cuIcon-send",
                    appName: "返佣申请",
                    appLink: "",
                    icon: "fanyongguanli",
                    tag:"专属",
                    tagColor:"blue"
                }
            ]
        }
    ]
];