var geo = livecoding.json;
var state = topojson.feature(geo, geo.objects.State);
var towns = topojson.feature(geo, geo.objects.Towns);
var path = d3.geo.path().projection(null);

var bounds = path.bounds(towns);
var originalWidth = Math.ceil(bounds[1][0]);
var originalHeight = Math.ceil(bounds[1][1]);
var ratio = originalWidth/originalHeight;

var container = $('#container');
var width = container.width();
var height = container.height();
var stage = new Kinetic.Stage({container: container.get(0)});
stage.setWidth(width);
stage.setHeight(height);
stage.setScale(width/originalWidth);

var mapLayer = new Kinetic.Layer();
var topLayer = new Kinetic.Layer();

stage.add(mapLayer);
stage.add(topLayer);

stage.draw();

mapLayer.add(new Kinetic.Path({
  data: path(state),
  stroke: '#FFFFFF',
  strokeWidth: 1,
  name: state.features[0].properties.STATE,
  lineCap: 'round',
  lineJoin: 'round'
}));

mapLayer.draw();






