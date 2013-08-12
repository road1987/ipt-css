module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        less : {
	        development: {
	            options: {
	              paths: ["themes"]
	            },
	            files: {
	              "themes/ipt.css": "themes/ipt.less"
	            }
	          },
	          production: {
	            options: {
	              yuicompress: true
	            },
	            files: {
	              "themes/ipt-min.css": "themes/ipt.less"
	            }
	          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    // 注册任务
    grunt.registerTask('default', ['less']);
};
