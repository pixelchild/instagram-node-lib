(function() {
  var InstagramLocations;
  InstagramLocations = (function() {
    function InstagramLocations(parent) {
      this.parent = parent;
    }
    InstagramLocations.prototype.info = function(params) {
      var credentials;
      credentials = this.parent._credentials({});
      params['path'] = "/" + this.parent._api_version + "/locations/" + params['location_id'] + "?" + (this.parent._to_querystring(credentials));
      return this.parent._request(params);
    };
    InstagramLocations.prototype.recent = function(params) {
      params = this.parent._credentials(params);
      params['path'] = "/" + this.parent._api_version + "/locations/" + params['location_id'] + "/media/recent?" + (this.parent._to_querystring(params));
      return this.parent._request(params);
    };
    InstagramLocations.prototype.search = function(params) {
      params = this.parent._credentials(params);
      params['path'] = "/" + this.parent._api_version + "/locations/search?" + (this.parent._to_querystring(params));
      return this.parent._request(params);
    };
    InstagramLocations.prototype.subscribe = function(params) {
      params['object'] = 'location';
      return this.parent.subscriptions._subscribe(params);
    };
    InstagramLocations.prototype.unsubscribe = function(params) {
      return this.parent.subscriptions._unsubscribe(params);
    };
    InstagramLocations.prototype.unsubscribe_all = function(params) {
      params['object'] = 'location';
      return this.parent.subscriptions._unsubscribe(params);
    };
    return InstagramLocations;
  })();
  module.exports = InstagramLocations;
}).call(this);
