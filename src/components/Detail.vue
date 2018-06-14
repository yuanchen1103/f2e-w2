<template>
<div>
  <div class="container">
     <div class="row">
        <div class="col">
          <div class="card rounded-0 border-0">
            <img class="card-img-top rounded-0 border-0" :src="this.detailInfo.Picture1" alt="Card image cap">
            <div class="card-body pb-5">
              <h4 class="card-title mt-2" style="color: #31BDC8">{{this.detailInfo.Name}}</h4>
              <div>
                <small class="mr-3" v-if="this.detailInfo.TicketInfo === '免費參觀'"><i class="el-icon-tickets mr-2"></i>{{this.detailInfo.TicketInfo}}</small>
                <small><i class="el-icon-time mr-2"></i>{{this.detailInfo.Opentime}}</small>
              </div>
              <div class="mt-2">
                <small><i class="el-icon-location mr-2"></i>{{this.detailInfo.Add}}</small>
              </div>
              <p class="card-text mt-4 text-justify" style="color: #606266">
                {{this.detailInfo.Description}}
              </p>
            </div>
          </div>
        </div>
     </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['detailInfo'],
  name: 'Site',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
small {
  color: #909399;
}
</style>
