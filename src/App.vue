<template>
<div>
  <div class="loading" v-if="!readyForRender"><i class="el-icon-loading"></i></div>
  <div id="app" v-if="readyForRender">
    <!-- mobile -->
    <nav class="navbar navbar-dark d-md-none fixed-top">
      <div class="container">
        <img src="https://i.imgur.com/7lsFP0P.png" alt="" class="" style="width: 150px; height: 25px;">
      </div>
    </nav>
    <!-- desktop and pad -->
    <nav class="navbar navbar-dark d-none d-md-block fixed-top">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-lg-3">
            <img src="https://i.imgur.com/7lsFP0P.png" alt="" class="navbar-brand ml-3">
          </div>
        </div>
        <div class="col-md-7 col-lg-9">
          <el-input class="mt-3 mb-3 w-50" v-model="searchInput" placeholder="搜尋地點..." prefix-icon="el-icon-search"></el-input>
        </div>
      </div>
    </nav>
    <div class="container main">
      <div class="row">
        <!-- mobile -->
        <div class="col d-md-none bg-white pb-3" v-if="!isClick">
          <el-input class="mt-3 mb-3" v-model="searchInput" placeholder="搜尋地點..." prefix-icon="el-icon-search"></el-input>
          <el-collapse v-model="activeNames">
            <el-collapse-item title="地點" name="地點">
              <el-select v-model="selectedLocation" placeholder="選擇行政區" class="w-100">
                <el-option
                  v-for="item in locations"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-collapse-item>
            <el-collapse-item title="篩選" name="篩選">
              <el-checkbox v-model="freeTicket">免費參觀</el-checkbox>
              <el-checkbox v-model="open">全天候開放</el-checkbox>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!-- desktop and pad -->
        <div class="col-md-5 col-lg-3 pt-4 d-none d-md-block">
          <div class="card border-0 rounded-0">
            <div class="card-body">
              <div class="pt-2 pb-4">
                <span style="color: #606266;">選擇行政區</span>
                <el-select v-model="selectedLocation" placeholder="選擇行政區" class="w-100 mt-2">
                  <el-option
                    v-for="item in locations"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="pt-2 pb-2">
                <span style="color: #606266;">篩選</span>
                <br>
                <el-checkbox v-model="freeTicket" class="mt-2">免費參觀</el-checkbox>
                <br>
                <el-checkbox v-model="open" class="mt-2">全天候開放</el-checkbox>
              </div>
            </div>
          </div>
        </div>
        <!-- list -->
        <div class="col-md-7 col-lg-9 pt-4 pb-4" v-if="!isClick">
          <div class="mb-3" v-if="freeTicket === true || open === true || selectedLocation !== '全部'">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-tag
              :key="tag"
              v-for="tag in locationTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
          </div>
          <div v-for="item in searchData" :key="item.key">
            <div @click="sendInfo(item)">
              <Site class="hover mb-4" style="cursor: pointer;" :item="item"/>
            </div>
          </div>
        </div>

        <!-- detail -->
        <div class="col-md-7 col-lg-9 pt-4 pb-4" v-if="isClick">
          <div class="container mb-3">
            <el-button @click="back" size="small">回到上一頁</el-button>
          </div>
          <Detail :detailInfo="detailInfo"/>
        </div>
      </div>
    </div>
  </div>
  <back-to-top text="Back to top" visibleoffset="300">
    <el-button type="primary" icon="el-icon-caret-top"></el-button>
  </back-to-top>
</div>
</template>

<script>
import Site from './components/Site'
import Detail from './components/Detail'
import axios from 'axios'
import logo from './assets/logo.svg'

export default {
  name: 'app',
  data() {
    return {
      readyForRender: false,
      searchInput: '',
      activeNames: [],
      selectedLocation: '全部',
      freeTicket: true,
      open: false,
      locations: [
        {
          value: '全部',
          label: '全部'
        },
        {
          value: '楠梓區',
          label: '楠梓區'
        },
        {
          value: '左營區',
          label: '左營區'
        },
        {
          value: '鼓山區',
          label: '鼓山區'
        },
        {
          value: '三民區',
          label: '三民區'
        },
        {
          value: '苓雅區',
          label: '苓雅區'
        },
        {
          value: '新興區',
          label: '新興區'
        },
        {
          value: '前金區',
          label: '前金區'
        },
        {
          value: '鹽埕區',
          label: '鹽埕區'
        },
        {
          value: '前鎮區',
          label: '前鎮區'
        },
        {
          value: '旗津區',
          label: '旗津區'
        },
        {
          value: '小港區',
          label: '小港區'
        }
      ],
      res: null,
      isClick: false,
      detailInfo: {}
    };
  },
  mounted() {
    axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
    .then(res => {
      this.res = res;
      this.readyForRender = true;
    })
    .catch(error => console.log(error))
  },
  computed: {
    dynamicTags() {
      if (this.freeTicket === true && this.open === true) {
        return ['免費參觀', '全天候開放'];
      }
      else if (this.freeTicket === true && this.open === false) {
        return ['免費參觀'];
      }
      else if (this.freeTicket === false && this.open === true) {
        return ['全天候開放'];
      }
      else {
        return [];
      }
    },
    locationTags() {
      if (this.selectedLocation === '全部') {
        return [];
      }
      else {
        return [this.selectedLocation];
      }
    },
    data() {
      const res = this.res.data.result.records
      let result = [];
      if (this.freeTicket === true && this.open === true) {
        res.forEach(e => {
          if (e.Ticketinfo === '免費參觀' && e.Opentime === '全天候開放') {
            result.push(e);
          }
        })
      }
      else if (this.freeTicket === true && this.open === false) {
        res.forEach(e => {
          if (e.Ticketinfo === '免費參觀') {
            result.push(e);
          }
        })
      }
      else if (this.freeTicket === false && this.open === true) {
        res.forEach(e => {
          if (e.Opentime === '全天候開放') {
            result.push(e);
          }
        })
      }
      else {
        result = res;
      }
      return result;
    },
    sortData() {
      if (this.selectedLocation === '全部') {
        return this.data;
      }
      else {
        let result = []
        const self = this;
        this.data.forEach(e => {
          if (e.Zone === self.selectedLocation) {
            result.push(e);
          }
        })
        return result;
      }
    },
    searchData() {
      if (this.searchInput === '') {
        return this.sortData;
      }
      else {
        let result = []
        const self = this;
        this.sortData.forEach(e => {
          if (e.Name.match(self.searchInput) !== null) {
            result.push(e);
          }
        })
        return result;
      }
    }
  },
  methods: {
    handleClose(tag) {
      if (tag === '免費參觀') {
        this.freeTicket = false;
      }
      else if (tag === '全天候開放') {
        this.open = false;
      }
      else {
        this.selectedLocation = '全部';
      }
    },
    sendInfo(item) {
      this.detailInfo = item;
      this.isClick = true;
    },
    back() {
      this.isClick = false;
    }
  },
  components: {
    Site,
    Detail
  }
};
</script>

<style lang="scss">
.navbar {
  height: 50px;
  background-color: #31bdc8;
  @media (min-width: 768px) {
    height: 80px;
  }
  img {
    height: 30px;
  }
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.hover {
  transition: all 0.3s;
}
.hover:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
.loading {
  margin-right: auto;
  margin-left: auto;
  width: 60px;
  margin-top: 250px;
}
.loading i {
  font-size: 50px;
  color: #31BDC8;
}
.el-pager {
  .number {
    background-color: #fff !important;
  }
  .active {
    background-color: #31BDC8 !important;
  }
}
.btn-prev, .btn-next, .btn-quicknext {
  background-color: #fff !important;
}
.main {
  padding-top: 50px;
  @media (min-width: 768px) {
    padding-top: 80px;
  }
}
button:focus {
  outline: 0px !important;
}
</style>
