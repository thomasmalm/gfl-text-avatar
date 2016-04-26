(function() {
    'use strict';

    angular
        .module('gfl.textAvatar', []);
})();

(function() {
    'use strict';

    angular
        .module('gfl.textAvatar')
        .directive('gflTextAvatar', GflTextAvatarDirective);

    GflTextAvatarDirective.$inject = ['$interpolate', 'GflTextAvatarService'];
    function GflTextAvatarDirective($interpolate, GflTextAvatarService) {
        return {
            link: link,
            replace: true,
            restrict: 'E',
            template: template,
            transclude: true
        };

        function link(scope, element, attrs) {
            var text = $interpolate(element.text())(scope);
            var initials = GflTextAvatarService.getInitials(text);
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

(function() {
    'use strict';

    angular
        .module('gfl.textAvatar')
        .factory('GflTextAvatarService', GflTextAvatarService);

    function GflTextAvatarService() {
        var colors = [];
        colors = colors.concat(['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5']);
        colors = colors.concat(['#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50']);
        colors = colors.concat(['#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800']);
        colors = colors.concat(['#FF5722', '#795548', '#9E9E9E', '#607D8B', '#000000']);

        return {
            getBgColor: getBgColor,
            getInitials: getInitials
        };

        function getBgColor(text) {
            var dec = text.charCodeAt(0);
            var index = Math.round(dec < 65 ? Math.random() * colors.length : dec % colors.length);

            return colors[index];
        }

        function getInitials(text) {
            text.replace(/[^a-zA-Z- ]/g, '');
            var texts = text.split(' ');
            var initials = texts.length > 1 ? (texts[0].charAt(0) + texts[1].charAt(0)) : texts[0].charAt(0);

            return initials.toUpperCase();
        }
    }
})();
