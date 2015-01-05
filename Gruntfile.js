/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> \n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed under <%= pkg.license %> */\n',

    clean: {
      dist: ['dist']
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'dist/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['<%= pkg.name %>.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    watch: {
      
    },
    coffee: {
      compile: {
        files: {
          'dist/js/<%= pkg.name %>.js': 'src/coffee/<%= pkg.name %>.coffee', // 1:1 compile
        },
        options: {
          bare: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          banner: '<%= banner %>'
        },
        files: [{
          expand: true,
          flatten: true,
          cwd: 'src',
          src: ['scss/<%= pkg.name %>.scss'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },
    connect: {
      base: {
        options: {
          port: 4200,
          host: 'localhost'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Default task
  grunt.registerTask('default', ['clean', 'sass', 'coffee', 'uglify', 'cssmin']);

  // Sass compile task.
  grunt.registerTask('compileSass', ['sass']);

  // Connect task
  grunt.registerTask('server', ['connect', 'watch']);

};
