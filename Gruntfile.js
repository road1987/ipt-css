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
	              "themes/css/ipt.css": "themes/css/ipt.less"
	            }
	          },
	          production: {
	            options: {
	              yuicompress: true
	            },
	            files: {
	              "themes/css/ipt-min.css": "themes/css/ipt.less"
	            }
	          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    // 注册任务
    grunt.registerTask('default', ['less']);
};
