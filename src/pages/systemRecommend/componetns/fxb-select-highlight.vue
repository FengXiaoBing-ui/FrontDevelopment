<template>
  <view class="flex flex-wrap">
    <view @click="option(index)" class="optionBox padding-tb-sm bg-gray radius margin-bottom-sm text-center"
          :class="dataIndex==index?'active':''" v-for="(item,index) in fileData" :key="index">
      {{ item.name }}
    </view>
  </view>
</template>

<script>
export default {
  name: "fxb-select-highlight",
  props: {
    fileData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data(){
    return{
      dataIndex:0
    }
  },
  methods: {
    option(index) {
      this.dataIndex = index
      this.$emit('option', this.fileData[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.optionBox {
  width: 30%;
  margin-right: 20rpx;
}

.active {
  background-image: linear-gradient(90deg, #ff9700, #ed1c24);
  color: white;
}
</style>