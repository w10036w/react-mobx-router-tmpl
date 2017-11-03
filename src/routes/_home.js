export default {
  path: '/dynamic/:name',
  getComponent (location, callback) {
    import('../views/HomeView')
      .then(module => callback(null, module.default));
  }
}