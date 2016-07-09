module.exports = function() {
  var config = {
    allTs: ['./app/**/*.ts'],
    allSass: ['./app/**/*.scss', './styles/site.scss'],
    tsOutputPath: './app/' 	
  };

  return config;
}