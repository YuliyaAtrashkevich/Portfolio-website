document.addEventListener('DOMContentLoaded', function() {
    var portfolio = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(portfolio);
    var burger = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(burger);
    var modal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal);
  });