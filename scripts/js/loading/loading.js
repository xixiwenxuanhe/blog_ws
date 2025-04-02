document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const minDisplayTime = 1000; // 最少显示1秒
  let startTime = Date.now();
  
  // 等待所有资源加载完成
  window.addEventListener('load', () => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    
    // 如果已经显示了2秒以上，直接淡出
    // 如果不到2秒，等待到2秒再淡出
    const timeToWait = Math.max(0, minDisplayTime - elapsedTime);
    
    setTimeout(() => {
      // 添加淡出效果
      loadingScreen.style.transition = 'opacity 0.5s ease-out';
      loadingScreen.style.opacity = '0';
      
      // 完全移除加载页面
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, timeToWait);
  });
}); 