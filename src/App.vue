<template>
  <div id="app">
    <!-- mobile -->
    <nav class="navbar navbar-dark d-md-none">
      <div class="container">
        <img src="./assets/logo.svg" alt="" class="navbar-brand mr-auto ml-auto">
      </div>
    </nav>
    <!-- desktop and pad -->
    <nav class="navbar navbar-dark d-none d-md-block">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-lg-3">
            <img src="./assets/logo.svg" alt="" class="navbar-brand ml-3">
          </div>
        </div>
        <div class="col-md-7 col-lg-9">
          <el-input class="mt-3 mb-3 w-50" v-model="searchInput" placeholder="搜尋地點..." prefix-icon="el-icon-search"></el-input>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <!-- mobile -->
        <div class="col d-md-none bg-white pb-3">
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
        <div class="col-md-7 col-lg-9 pt-4">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          
          <div class="mt-3">
            <Site class="hover mb-4" style="cursor: pointer;"/>
            <Site class="hover mb-4" style="cursor: pointer;"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Site from './components/Site'

export default {
  name: 'app',
  data() {
    return {
      searchInput: '',
      startDate: '',
      endDate: '',
      activeNames: [],
      selectedLocation: '',
      freeTicket: true,
      open: false,
      locations: [
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
      dynamicTags: ['免費參觀'],
      data: null
    };
  },
  mounted() {
    axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
    .then(res => {
      this.data = res;
    })
    .catch(error => console.log(error))
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    }
  },
  components: {
    Site
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
</style>
