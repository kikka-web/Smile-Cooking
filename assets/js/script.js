// Smile Cooking
// フォーム送信機能は実装しないため、Enter キーなどで送信されないように止めておく。
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  }
});
