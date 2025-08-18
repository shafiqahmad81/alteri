document.querySelectorAll('.main-menu > li').forEach(function(item) {
  let hideTimeout;

  item.addEventListener('mouseenter', function() {
    clearTimeout(hideTimeout);
    item.classList.add('show-dropdown');
  });

  item.addEventListener('mouseleave', function() {
    // dropdown সাথে সাথে বন্ধ না করে কিছু delay দেই
    hideTimeout = setTimeout(() => {
      item.classList.remove('show-dropdown');
    }, 300); // 300ms delay, চাইলে বাড়াতে পারো
  });
});