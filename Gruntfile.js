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
        	
        	helper : {
   		       files: {
   		          "themes/css/helper.css": "themes/less/helper.less"
   		       }          		
          	},

        	responsiveUtility : {
    		       files: {
    		          "themes/css/responsive-utility.css": "themes/less/responsive-utility.less"
    		       }          		
           	},
           	
        	typography : {
 		       files: {
 		          "themes/css/typography.css": "themes/less/typography.less"
 		       }          		
        	},

        	badge : {
 		       files: {
 		          "themes/css/badge.css": "themes/less/badge.less"
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

         	
        	button : {
  		       files: {
  		          "themes/css/widget/button.css": "themes/less/widget/button.less"
  		       }        		
         	},
         	
         	box : {
         		files : {
         			"themes/css/widget/box.css" : "themes/less/widget/box.less"
         		}
         	},
         	
         	panel : {
         		files : {
         			"themes/css/widget/panel.css":"themes/less/widget/panel.less"
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
