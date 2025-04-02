document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById("typed-text");
  const texts = [
    '从前端到后端，构建极致用户体验！',
    '用技术创造无限可能！',
    '高效、优雅、稳定的全栈解决方案！'
  ];
  
  const typeWriter = new TypeWriter(element, texts, {
    typeSpeed: 160,
    deleteSpeed: 40,
    delayBeforeDelete: 1200,
    delayBeforeNext: 500
  });
  
  typeWriter.start();
}); 