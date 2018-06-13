<template>
<div>
  <!-- mobile and pad-->
  <div class="card rounded-0 border-0 d-lg-none" style="height: 400px;">
    <img class="card-img-top rounded-0" src="http://khh.travel/FileArtPic.ashx?id=1846&w=1280&h=960" alt="Card image cap" style="height: 196px;">
    <div class="card-body">
      <h5 class="card-title mt-2" style="color: #31bdc8;">中都愛河濕地公園</h5>
      <p class="card-text card-text-mobile" style="color: #606266">
        串起高雄城市生態綠廊的中都愛河濕地公園座落於愛河南側的十全與九如路之間，全長約2.5公里，佔地達七千餘平方公尺。為了打造與市民生活融合的「水岸花香的永續生態城市」，愛河濕地公園以生態工法構築邊坡，重現早期溼地豐富生態棲息環境。園區設置原木建築為遊客解說中心，另有木造涼亭、吊橋、潮汐親水平台以及漂流木為設計主軸的燈具座椅等設施，質樸中深具原野氣息，而仿自然的複層林相植栽也使市區重現豐富林相。悠遊於綠油油曲折玲瓏的河岸可見各種水鳥飛翔駐留、紅樹林和濕地更使愛河重現盎然生機。由於中都濕地公園打造出兼具自然生態、教育解說及民眾休憩等眾多功能，又完整呈現愛河沿岸多樣性的風貌，2012年榮獲「全球卓越建設獎」殊榮，也因此有高雄都會桃花源的美稱。
      </p>
      <div>
        <small class="mr-4"><i class="el-icon-location mr-2"></i>三民區</small>
        <small><i class="el-icon-tickets mr-2"></i>免費參觀</small>
      </div>
      <div class="mt-2">
        <small><i class="el-icon-time mr-2"></i>週二至週日10:00-18:00，每週一公休</small>
      </div>
    </div>
  </div>
  <!-- desktop -->
  <div class="card border-0 rounded-0 d-none d-lg-block">
    <div class="row">
      <div class="col-4" style="overflow: hidden;">
        <img src="http://khh.travel/FileArtPic.ashx?id=1051&w=1280&h=960" class="cover">
      </div>
      <div class="col-8">
        <div class="pt-4 pb-4 pr-4">
          <h5 class="card-title" style="color: #31bdc8;">中都愛河濕地公園</h5>
          <p class="card-text card-text-mobile" style="color: #606266">
            串起高雄城市生態綠廊的中都愛河濕地公園座落於愛河南側的十全與九如路之間，全長約2.5公里，佔地達七千餘平方公尺。為了打造與市民生活融合的「水岸花香的永續生態城市」，愛河濕地公園以生態工法構築邊坡，重現早期溼地豐富生態棲息環境。園區設置原木建築為遊客解說中心，另有木造涼亭、吊橋、潮汐親水平台以及漂流木為設計主軸的燈具座椅等設施，質樸中深具原野氣息，而仿自然的複層林相植栽也使市區重現豐富林相。悠遊於綠油油曲折玲瓏的河岸可見各種水鳥飛翔駐留、紅樹林和濕地更使愛河重現盎然生機。由於中都濕地公園打造出兼具自然生態、教育解說及民眾休憩等眾多功能，又完整呈現愛河沿岸多樣性的風貌，2012年榮獲「全球卓越建設獎」殊榮，也因此有高雄都會桃花源的美稱。
          </p>
          <div>
            <small class="mr-4"><i class="el-icon-location mr-2"></i>三民區</small>
            <small><i class="el-icon-tickets mr-2"></i>免費參觀</small>
          </div>
          <div class="mt-1">
            <small><i class="el-icon-time mr-2"></i>週二至週日10:00-18:00，每週一公休</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Site',
  props: {
    msg: String
  }
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
