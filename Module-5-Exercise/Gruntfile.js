module.exports = function(grunt) {

    grunt.initConfig({
        // Compile typescripts
        typescript: {
            compile: {
                src: ['scripts/**/*.ts']
            }
        },
        
        // Do task when file changes
        watch: {
            files:[
                'scripts/**/*.ts'
            ],
            tasks:['dev'],
            options: {
                livereload: true,
                atBegin: true,
                interrupt: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['typescript:compile']);
};
