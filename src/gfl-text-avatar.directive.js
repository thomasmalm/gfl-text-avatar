(function() {
    'use strict';

    angular
        .module('gfl.textAvatar')
        .directive('gflTextAvatar', GflTextAvatarDirective);

    GflTextAvatarDirective.$inject = ['GflTextAvatarService'];
    function GflTextAvatarDirective(GflTextAvatarService) {
        return {
            link: link,
            replace: true,
            restrict: 'E',
            template: template,
            transclude: true
        };

        function link(scope, element, attrs) {
            var initials = GflTextAvatarService.getInitials(element.text());
            var bgColor = attrs.bgColor ? attrs.bgColor : GflTextAvatarService.getBgColor(initials);
            var size = parseInt(attrs.size, 10) ? attrs.size : 48;
            var square = attrs.shape === 'square';
            var textColor = attrs.textColor ? attrs.textColor : '#FFF';

            element.html(initials);
            element.css({
                backgroundColor: bgColor,
                borderRadius: square ? '2px' : '50%',
                color: textColor,
                display: 'inline-block',
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: size / 2 + 'px',
                height: size + 'px',
                lineHeight: size + 'px',
                textAlign: 'center',
                width: size + 'px'
            });
        }

        function template(element, attrs) {
            return '<div class="gfl-text-avatar" ng-transclude></div>';
        }
    }
})();
