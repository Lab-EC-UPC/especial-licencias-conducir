const images = import.meta.glob('@/assets/trivia-quiz/*.png', { eager: true });

const quizImages: string[] = Object.keys(images)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key) => (images[key] as { default: string }).default);

export default quizImages;
