const options = {
  'require-module': ['babel-core/register', 'babel-polyfill'],
  require: ['features/steps'],
}

module.exports = {
  default: Object.keys(options)
    .map(key => options[key].map(option => `--${key} ${option}`).join(' '))
    .join(' '),
}
