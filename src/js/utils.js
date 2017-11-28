module.exports = {
  // 验证密码
  validPwd: function(val) {
    var re = /[\da-zA-Z]{6,}/g;
    var result = val.toString().match(re) ? true : false;
   	return result;
  },
  // 验证手机
  validMobile: function(val) {
  	var re = /^[1][3,4,5,7,8]\d{9}$/;
  	var result = val.toString().match(re) ? true : false;
  	return result;
  },
  // 验证身份证
  validIdCard: function(val) {
    var re = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
    var result = val.toString().match(re) ? true : false;
    return result;
  },
  extend: function (target, source, deep) {
    var isArray = Array.isArray ||
      function(object){ return object instanceof Array };

    for (key in source)
      if (deep && (this.isPlainObject(source[key]) || isArray(source[key]))) {
        if (this.isPlainObject(source[key]) && !this.isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        this.extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key];
      return target;
  },
  isPlainObject: function (obj) {
    function type(obj) {
      return typeof obj;
    }
    function isWindow(obj)     { return obj != null && obj == obj.window }
    function isObject(obj)     { return type(obj) == "object" }

    return isObject(obj) && !isWindow(obj)
  },
  ajax: function(that, opts) {
    var defaultOpts = {
      method: 'post',
      emulateJSON: true,
      credientials: true,
      headers: { source: 'loan' }
    };
    var callback = opts.success || function() {};
    var error = opts.error || function() {};

    delete opts.success;
    delete opts.error;

    defaultOpts = this.extend(defaultOpts, opts, true);

    (defaultOpts.method == 'post') ? (defaultOpts.body = defaultOpts.data || {}) : 
                                     (defaultOpts.params = defaultOpts.data || {});
    delete defaultOpts.data;

    that.$http(defaultOpts).then(function(response){
        var data = (typeof response.data == "object") ? response.data : JSON.parse(response.data);
        
        if (data.message == 'no_login' && that.$route.auth) {
          this.$root.$route.router.go('/');
        } else {
          callback && callback.call(that, data);
        }
    }, function(error){
      error && error.call(that, error);
    });
  },
  getParam: function(key) {
    var data;

    try {
      data = localStorage.getItem(key);
      data = data && JSON.parse(data);
    } catch (e) {
      data = localStorage.getItem(key);
    }

    return data || '';
  },
  setParam: function(key, val) {
    var value = (typeof val == "string") ? val : JSON.stringify(val);
    if (key) {
      localStorage.setItem(key, value);
    }
  },
  isObjectValEmpty: function(arr){
    var result = true;
    for (var i = 0; i < arr.length; i++) {
      if (!arr[i].value) {
        result = false;
      }
    }
    return result;
  }
}