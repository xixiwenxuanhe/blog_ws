document.addEventListener('DOMContentLoaded', () => {
  if(typeof loadlive2d === 'function') {
    loadlive2d("live2d", "./scripts/model/xiaomai/xiaomai.model.json");
  } else {
    console.error('Live2D 加载失败');
  }
}); 