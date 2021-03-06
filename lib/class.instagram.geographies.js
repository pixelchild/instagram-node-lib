(function() {
  /*
  Geographies
  */  var InstagramGeographies;
  InstagramGeographies = (function() {
    function InstagramGeographies(parent) {
      this.parent = parent;
    }
    InstagramGeographies.prototype.recent = function(params) {
      params['client_id'] = this.parent._config.client_id;
      params['path'] = "/" + this.parent._api_version + "/geographies/" + params['geography_id'] + "/media/recent?" + (this.parent._to_querystring(params));
      return this.parent._request(params);
    };
    /*
      Subscriptions
      */
    InstagramGeographies.prototype.subscribe = function(params) {
      params['object'] = 'geography';
      return this.parent.subscriptions._subscribe(params);
    };
    InstagramGeographies.prototype.unsubscribe = function(params) {
      return this.parent.subscriptions._unsubscribe(params);
    };
    InstagramGeographies.prototype.unsubscribe_all = function(params) {
      params['object'] = 'geography';
      return this.parent.subscriptions._unsubscribe(params);
    };
    return InstagramGeographies;
  })();
  module.exports = InstagramGeographies;
}).call(this);
