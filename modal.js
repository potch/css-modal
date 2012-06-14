var Modal = (function() {

    function Modal(el) {
        var self = this;
        this.el = el;
        this.show = function show() {
            el.style.display = 'block';
        }
        this.hide = function hide() {
            el.style.display = 'none';
        }
        el.addEventListener('click', function(e) {
            if (e.target.classList.contains('close')) {
                self.hide();
            }
        });
    }

    return Modal;
})();