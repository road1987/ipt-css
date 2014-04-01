module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        less : {
        	normalize : {
		       files: {
		          "themes/css/normalize.css": "themes/less/normalize.less"
		       }        		
        	},
        	
        	function_ : {
   		       files: {
   		          "themes/css/function.css": "themes/less/function.less"
   		       }          		
          	},
        	
        	typography : {
 		       files: {
 		          "themes/css/typography.css": "themes/less/typography.less"
 		       }          		
        	},

        	table : {
  		       files: {
  		          "themes/css/table.css": "themes/less/table.less"
  		       }          		
         	},
         	
        	form : {
  		       files: {
  		          "themes/css/form.css": "themes/less/form.less"
  		       }          		
         	},
          	
         	grid : {
   		       files: {
   		          "themes/css/grid.css": "themes/less/grid.less"
   		       }
         	},
         	
	        development: {
	            options: {
	              paths: ["themes"]
	            },
	            files: {
	              "themes/css/ipt.css": "themes/less/ipt.less"
	            }
	         },
	         
	         production: {
	            options: {
	              yuicompress: true
	            },
	            files: {
	              "themes/css/ipt-min.css": "themes/less/ipt.less"
	            }
	         }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    // 注册任务
    grunt.registerTask('default', ['less']);
};
