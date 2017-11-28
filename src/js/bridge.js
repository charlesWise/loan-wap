module.exports = (function resetBridge() {
  var clientType;
  var ua = window.navigator.userAgent.toLowerCase();

  if (ua.match(/ua_trj_jk_ios/i)){
    clientType = 'ios';
  } else if (ua.match(/ua_trj_jk_android/i)){
    clientType = 'android';
  } else {
    clientType = 'noapp';
  }

  window.IOS_URL = window.location.origin+'/Mobile/Act/index.php/Financing/Invest';
  var iosApi = {
    goLogin: window.IOS_URL + '/goLogin', // 登录
    popViewController: window.IOS_URL + '/popViewController', // 返回上一页
    showLoading: window.IOS_URL + '/showLoading', // 显示加载loading
    hideLoading: window.IOS_URL + '/hideLoading' // 隐藏加载loading
  };

  var addroidApi = (function(){
    return {
      goLogin: window['mainweb'] && window['mainweb']['goLogin'], // 登录
      goBack: window['mainweb'] && window['mainweb']['goBack'], // 返回上一页
      showLoading: window['mainweb'] && window['mainweb']['showLoading'], // 显示加载loading
      hideLoading: window['mainweb'] && window['mainweb']['hideLoading'] // 隐藏加载loading
    }
  })();

  return {
    clientType: clientType,
    
    goLuckDraw: function () {
      if (clientType == 'ios') {
        window.location.href = iosApi.goLogin;
      } else {
        window['mainweb'] && window['mainweb']['goLogin']();
      }
    },
    goBack: function() {
      if (clientType == 'ios') {
        window.location.href = iosApi.popViewController;
      } else {
        window['mainweb'] && window['mainweb']['goBack']();
      }
    },
    showLoading: function() {
      if (clientType == 'ios') {
        window.location.href = iosApi.showLoading;
      } else {
        window['mainweb'] && window['mainweb']['showLoading']();
      }
    },
    hideLoading: function() {
      if (clientType == 'ios') {
        window.location.href = iosApi.hideLoading;
      } else {
        window['mainweb'] && window['mainweb']['hideLoading']();
      }
    }
  }
})();