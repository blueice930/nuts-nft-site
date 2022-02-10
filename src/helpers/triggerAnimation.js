const triggerAnimation = (obj, beforeClass, afterClass, time ) => {
  if (obj && obj.classList) {
    if (obj && obj.classList) {
      if (afterClass && obj.classList.length) obj.classList?.remove(afterClass);
      if (beforeClass) obj.classList.add(beforeClass);
    }

    setTimeout(() => {
      if (obj && obj.classList) {
        if (beforeClass && obj.classList.length) obj.classList?.remove(beforeClass);
        if (afterClass) obj.classList.add(afterClass);
      }
    }, time);
  }
}

export default triggerAnimation;
