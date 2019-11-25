<template>
  <div id="over">
    <div class="header">
      <div id="title">数据开放平台</div>
      <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#072947"
      text-color="#fff"
      active-text-color="#fff"
      style="width:520px;"
      >
      <el-menu-item is-active index="1">首页</el-menu-item>
      <el-submenu index="2" class="submenu">
        <template slot="title">数据</template>
        <el-menu-item index="2-1">数据目录</el-menu-item>
        <el-menu-item index="2-2">数据集</el-menu-item>
        <el-menu-item index="2-3">数据接口</el-menu-item>
        <el-menu-item index="2-4">数据地图</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">应用</template>
        <el-menu-item index="3-1">创新大赛</el-menu-item>
        <el-menu-item index="3-2">数据集</el-menu-item>
        <el-menu-item index="3-3">数据接口</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">画像</template>
        <el-menu-item index="4-1">创新大赛</el-menu-item>
        <el-menu-item index="4-2">数据集</el-menu-item>
        <el-menu-item index="4-3">数据接口</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">资讯</template>
        <el-menu-item index="4-1">创新大赛</el-menu-item>
        <el-menu-item index="4-2">数据集</el-menu-item>
        <el-menu-item index="4-3">数据接口</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">互动</template>
        <el-menu-item index="6-1">创新大赛</el-menu-item>
        <el-menu-item index="6-2">数据集</el-menu-item>
        <el-menu-item index="6-3">数据接口</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="el-icon-user"></div>
    </div>
    <div id="search-content">
      <div id="search-nav">
        <input id="search" type="text" placeholder="请输入搜索内容">
        <div class="btn"><div class="el-icon-search"></div> 搜索</div>
        <div class="btn">元数据搜索</div>
        <ul id="tag">
          <li class="tag-nav">民生</li>
          <li class="tag-nav">税务</li>
          <li class="tag-nav">医疗</li>
          <li class="tag-nav">教育</li>
          <li class="tag-nav">旅游</li>
          <li class="tag-nav">房地产</li>
        </ul>
      </div>
      <div id="information">
        <div class="information-items">
          <el-badge :value="'329,524'" class="item">
            <p class="items">数据总量</p>
          </el-badge>
          <p class="num">261,717,614条</p>
        </div>
        <div class="information-items">
          <p class="items">数据目录</p>
          <p class="num">1,614个</p>
        </div>
        <div class="information-items">
          <p class="items">数据接口</p>
          <p class="num">1,636个</p>
        </div>
        <div class="information-items">
          <el-badge :value="'232,524'" class="item">
            <p class="items">调用次数</p>
          </el-badge>
          <p class="num">1,717,614条</p>
        </div>
        <div class="information-items">
          <p class="items">可下载数据</p>
          <p class="num">9,614个</p>
        </div>
        <div class="information-items">
          <el-badge :value="'155'" class="item">
            <p class="items">下载次数</p>
          </el-badge>
          <p class="num">117,614次</p>
        </div>
        <div class="information-items">
            <p class="items">市级部门/区</p>
          <p class="num">64个</p>
        </div>
      </div>
    </div>
    <div id="list">
      <div class="list-centent">
      <div class="big-list" v-for="(items,index) in [1,1]" :key="index">
        <div class="list-title">
          <div class="title-left">
            <img src="https://opendata.sz.gov.cn/static/opendata1.0/images/icon_new-data.png" class="title-img">最新数据
          </div>
          <div class="title-right">...</div>
        </div>
        <ul>
          <li class="content" v-for="(items,index) in [1,11,1,1,1,1,1,1,1,1]" :key="index">
            <div class="list-left">气象情况_自动站实时数据</div>
            <div class="list-right">2019-11-25</div>
          </li>
        </ul>
      </div>
      <div class="small-list">
        <img src="https://opendata.sz.gov.cn/static/opendata1.0/images/kfgd-logo-new.png" alt="">
        <div style="height:10px;background-color:#ECF2FA;"></div>
        <div class="list-title">
          <div class="title-left">
            <img src="https://opendata.sz.gov.cn/static/opendata1.0/images/icon_digitalSZ-P.png" class="title-img" style="margin-left:15px;">数字深圳
          </div>
          <div class="title-right" style="margin-right:15px">...</div>
          <img src="https://opendata.sz.gov.cn/static/opendata1.0/images/gov-p-digitalSZ-new.jpg" alt="" style="width:226px;height:67px;">
        <ul style="margin-top:20px;">
          <li class="content" v-for="(items,index) in [1,11,1,1,1,1]" :key="index">
            <div class="list-left" style="width:130px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:15px">气象情况_自动站实时数据</div>
            <div class="list-right" style="margin-right:15px;">2019-11-25</div>
          </li>
        </ul>
      </div>
      </div>
    </div>
    </div>
    <div id="classification"></div>
  </div>
</template>

<script>
  export default {
      name: 'HelloWorld',
      data() {
        return{}
      },
      methods: {
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .header{
      width:100%;
      height:70px;
      background-color: #072947;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #title{
        font-size:20px;
        width: 160px;
        height:100%;
        line-height: 70px;
        color:#fff;
    }
    .el-icon-user{
      font-size:25px;
      color:#fff;
      
    }
    .el-icon-user:hover{
      color:#198EF8;
    } 
    #search-content{
      background-color: #198EF8;
      text-align: 400px;
      padding: 90px 250px;
    }
    #search-nav{
      width:1000px;
      height:120px;
      background-color: rgba($color: #fff, $alpha: 0.5);
      border:8px solid rgba(83,176,244,0.5);
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;
    }
    #search{
      width:698px;
      height:30px;
      padding:10px;
      margin-left: 30px;
    }
    .btn{
      width:100px;
      height:50px;
      background-color:#198EF8;
      margin-right: 10px; 
      line-height: 50px;
      //text-align: center;
      color:#fff;
    }
    #tag{
      width:325;
      height:40px;
      margin-left: 40px;
      display: inline-block;
      color:#fff;
    }
    .tag-nav{
      width: 50px;
      height:20px;
      line-height: 20px;
      display: inline-block;
    }
    .tag-nav:hover{
      background-color: #FAC05E;
    }
    #information{
      width:1016px;
      height:80px;
      display: flex;
    }
  .information-items{
    height:80px;
    width:145px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 20px;
    color: #fff;
  }
  .information-items:hover{
    background-color: rgba(225,225,225,0.5)
  }
  .items{
    padding:5px;
  }
  .num{
    font-weight: 600;
    display: block;
    margin-left: 5px;
  }
  #list{
    height: 550px;
    background-color: #ECF2FA;
    padding: 5px;
    box-sizing:border-box;
  }
  .list-centent{
    width:1310px;
    height:550px;
    margin-left: 80px;
  }
  .big-list{
    width:440px;
    height:439px;
    background-color: #fff;
    float: left;
    margin-top: 60px;
    margin-left: 50px;
    padding: 10px;
    box-sizing:border-box; 
  }
  .small-list{
    width:260px;
    height:439px;
    background-color: #fff;
    float: left;
    margin-top: 60px;
    margin-left: 60px;
    // padding: 10px;
    // box-sizing: border-box;
  }
  .list-title{
    width:100%;
    height:52px;
    font-size:18px;
    font-weight: 700;
    vertical-align: baseline;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .title-img{
    width:21px;
    height:16px;
    margin-right: 5px;
  }
  .title-left{
    font-size:18px;
    font-weight:700;
    line-height: 52px;
    float: left;
    
  }
  .title-right{
    line-height: 20px;
    float:right;
    font-size:44px;
    color:gray;
  }
  .content{
    height:25px;
    margin-bottom: 10px;
    border-bottom:1px dashed #C8CCD8;
  }
  .list-left{
    float:left;
  }
  .list-right{
    float:right;
    color:gray;
  }
  #classification{
    height:550px;
    background-color: #F7F8FA;
    line-height: 52px;
  }
</style>
