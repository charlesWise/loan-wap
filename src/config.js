module.exports = (function resetHost() {
  return {
    admHost: process.env.NODE_ENV === "development" ?  '' : '/api',

    getDistrict: '/authentication/getDistrict', // 获取热门城市和省份
    selectCity: '/authentication/selectCity', // 查询城市
    doAuthentication: '/authentication/doAuthentication', // 认证授权接口

    login: '/login/login',
  }
})();