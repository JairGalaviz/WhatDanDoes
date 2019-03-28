/**
 * 2018-12-16
 *
 * From this talented blogger:
 * https://petrstepanov.wordpress.com/2018/11/07/custom-hexo-tag-plugin-with-a-nunjucks-template/
 *
 * I think the nunjucks stuff is unnecessary for grid rendering by itself 
 * (because it is plain HTML). Comments are left for future reference.
 *
 */
var fs = require('hexo-fs');
var pathFn = require('path');
var Promise = require('bluebird');
var nunjucks = require('nunjucks');
 
hexo.extend.tag.register('donorGrid', function(args) {
  // build object with template parameters passed to the tag plugin
//  var data = {
//    parameter1: args[0],
//    parameter2: args[1]
//    // add more parameters
//  };
// 
  var templatePath = pathFn.join(hexo.source_dir, '_includes/donor-grid.html');
 
  return new Promise(function(resolve, reject) {
    //nunjucks.render(templatePath, data, function(err, res) {
    nunjucks.render(templatePath, {}, function(err, res) {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
}, {
  async: true
});
