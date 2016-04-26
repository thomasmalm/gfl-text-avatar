# gfl-text-avatar

AngularJS directive for text avatars.

The directive creates an avatar from the initials (text) provided.
The appearance is fully customizable using configuration options and CSS.

![Example](https://github.com/thomasmalm/gfl-examples/blob/master/gfl-text-avatar/default-example.png)

## Demo

[Live Demo](http://goldfishlab.com/examples/gfl-text-avatar/)

## Install

Bower:
```
$ bower install gfl-text-avatar
```

## Usage

Include script:
```html
<script src="/gfl-text-avatar/dist/gfl-text-avatar.min.js"></script>
```

Add dependency:
```js
angular.module('app', ['gfl.textAvatar']);
```

Use the directive in your code:
```html
<gfl-text-avatar>John Doe</gfl-text-avatar>

<gfl-text-avatar>{{user.name}}</gfl-text-avatar>
```
### Configurations

Attribute | Value | Description
--------- | ----- | -----------
`bg-color` | CSS color | Background color, default is based on first character.
`shape` | `round` `square` | Shape, default is `round`.
`size` | NUMBER | Size, default is 48 px.
`text-color` | CSS color | Text color, default is #FFF.

## License

[MIT](https://github.com/thomasmalm/gfl-text-avatar/blob/master/LICENSE)
