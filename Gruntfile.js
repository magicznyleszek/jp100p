module.exports = function(grunt) {

    // configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        svgstore: {
            options: {
                prefix: 'icon-',
                svg: {
                    style: 'width: 0; height: 0; overflow: hidden; position: fixed; visibility: hidden;'
                },
                formatting : {
                    indent_size : 4
                }
            },
            default : {
                files: {
                    '_includes/icons.svg': ['_assets/icons/*.svg'],
                }
            }
        },
        compass: {
            build: {
                options: {
                    config: '_assets/config.rb',
                    basePath: '_assets'
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            build: {
                files: {
                    'public/scripts/script.min.js': ['_assets/scripts/*.js']
                }
            }
        },
        watch: {
            icons: {
                files: ['_assets/icons/*.svg'],
                tasks: ['svgstore'],
                options: {
                    spawn: false,
                    debounceDelay: 250
                }
            },
            styles: {
                files: ['_assets/sass/**/*.scss'],
                tasks: ['compass']
            },
            scripts: {
                files: ['_assets/scripts/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['svgstore', 'compass', 'uglify']);

};
