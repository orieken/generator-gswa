'use strict';

var generator = require('yeoman-generator');

module.exports = generator.Base.extend({

    constructor: function() {
        // NamedBase constructor is deprecated. See https://github.com/yeoman/generator/issues/882
        generator.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });

    },
    initializing: function() {

    },
    prompting: function() {

    },
    configuring: function() {

    },
    default: function() {

    },
    writing: function() {

    },
    conflicts: function() {

    },
    install: function() {

    },
    end: function() {

    }
});