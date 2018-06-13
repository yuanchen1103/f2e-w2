<template>
<div>
  <!-- mobile and pad-->
  <div class="card rounded-0 border-0 d-lg-none" style="height: 400px;">
    <img class="card-img-top rounded-0" :src="item.Picture1" alt="Card image cap" style="height: 196px;">
    <div class="card-body">
      <h5 class="card-title mt-2" style="color: #31bdc8;">{{item.Name}}</h5>
      <p class="card-text card-text-mobile" style="color: #606266">
        {{item.Description}}
      </p>
      <div>
        <small class="mr-4"><i class="el-icon-location mr-2"></i>{{item.Zone}}</small>
        <small v-if="item.Ticketinfo === '免費參觀'"><i class="el-icon-tickets mr-2"></i>{{item.Ticketinfo}}</small>
      </div>
      <div class="mt-2">
        <small><i class="el-icon-time mr-2"></i>{{item.Opentime}}</small>
      </div>
    </div>
  </div>
  <!-- desktop -->
  <div class="card border-0 rounded-0 d-none d-lg-block">
    <div class="row">
      <div class="col-4" style="overflow: hidden; height: 200px;">
        <img :src="item.Picture1" class="cover">
      </div>
      <div class="col-8">
        <div class="pt-4 pb-4 pr-4">
          <h5 class="card-title" style="color: #31bdc8;">{{item.Name}}</h5>
          <p class="card-text card-text-mobile" style="color: #606266">
            {{item.Description}}
          </p>
          <div>
            <small class="mr-4"><i class="el-icon-location mr-2"></i>{{item.Zone}}</small>
            <small v-if="item.Ticketinfo === '免費參觀'"><i class="el-icon-tickets mr-2"></i>{{item.Ticketinfo}}</small>
          </div>
          <div class="mt-1">
            <small><i class="el-icon-time mr-2"></i>{{item.Opentime}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['item'],
  name: 'Site',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-text-mobile {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
small {
  color: #909399;
}
.cover {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
