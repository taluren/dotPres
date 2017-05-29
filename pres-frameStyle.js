
//keyword ids:
//  #main: all items will be added there instead of to the root (optional)
//  #title: svgtext element for the frame title (required for the .title() function) 
//  #background, #foreground additional groups (optional, but recommended for generic styles)

frameStyleCatalog = {
	base: function (fs) {	    
		fs
		 .append("g#background",{})      	
		  .then("svgtext#title",{x:0,y:-130, size:17})
		  .then("vector#main", {layout:"spread", align:"c",  height:260, x:0, y:15})
		  .then("g#foreground",{})
			
		
	},
	empty: function (fs) {	    
		fs
			.append("g#background",{})    
			.then("svgtext#title",{x:0,y:-130, size:17})			  
			.then("g#main",{})     
			.then("g#foreground",{})    
	}
}
frameStyleCatalog.simple = function (fs, style) {	    
		frameStyleCatalog.base(fs, style)
		fs.goto("#background")
		  .append("rect", {w:"fill", h:"fill", stroke:"#AAA", fill:"white"})
	}
	
frameStyleCatalog.emptyWithBG = function (fs, style) {       
        frameStyleCatalog.empty(fs, style)
        fs.goto("#background")
          .append("rect", {w:"fill", h:"fill", stroke:"#AAA", fill:"white"})
    }
	
frameStyleCatalog.titleFrame = function (fs, style) {	    
		fs
		  .append("rect", {w:"fill", h:"fill", stroke:null, fill:"white"})
		  .then("g#background",{})    
		  .then("vector#main", {layout:"spread", size:20, color:"#008"})
			 .append("writer#title",{size:30, align:"c"})			  
			 .up()  
		  .then("g#foreground",{})    	  
		
	}
	
frameStyleCatalog.beamer = function (fs, style) {	    
		fs	
		  .append("rect", {w:"fill", h:"fill", stroke:null, fill:"white"})			 
		  .then("g#background",{})      	
		  .then("rect", {w:"fill", y:-133, h: 30, fill:"#DDD", stroke:null})
		  .then("rect", {w:"fill", y:-135, h: 30, fill:"#000090", stroke:null})
		  .then("svgtext#title",{x:-195,y:-130, size:17, color:"#eed", anchor:"left"})
		  .then("vector#main", {layout:"spread", align:"c", height:260, x:0, y:15})
		  .then("g#foreground",{})
		  
	}
	
frameStyleCatalog.cat = function (fs, style) {	    
		fs.set()	
		  .append("rect", {w:"fill", h:"fill", stroke:null, fill:"white"})			 
		  .then("g", {x:160,y:130, opacity:0.2})
			  .append("circle#paw", {r:9, x: 12, y:0, fill:"#ECECEC", stroke:null})
			  .then("circle", {r:5, x: 23, y:-10, fill:"#ECECEC", stroke:null})
			  .then("circle", {r:5, x: 28, y:0, fill:"#ECECEC", stroke:null})
			  .then("circle", {r:5, x: 23, y:10, fill:"#ECECEC", stroke:null})
			  .up()
		  .then("g#background",{})      	
		  .then("rect", {w:"fill", y:-133, h: 30, fill:"#DDD", stroke:null})
		  .then("rect", {w:"fill", y:-135, h: 30, fill:"#400060", stroke:null})
		  
		  .then("svgtext#title",{x:-195,y:-130, size:17, color:"#eed", anchor:"left"})
		  .then("vector#main", {layout:"spread", align:"c",  height:260, x:0, y:15})
		  .then("g#foreground",{})
		  
	}

	
    
frameStyleCatalog["2Columns"] = function (fs, style) {      
  
        fs  
          .append("rect", {w:"fill", h:"fill", stroke:null, fill:"white"})           
          .then("g", {x:160,y:130, opacity:0.2})
              .append("circle", {r:9, x: 12, y:0, fill:"#ECECEC", stroke:null})
              .then("circle", {r:5, x: 23, y:-10, fill:"#ECECEC", stroke:null})
              .then("circle", {r:5, x: 28, y:0, fill:"#ECECEC", stroke:null})
              .then("circle", {r:5, x: 23, y:10, fill:"#ECECEC", stroke:null})
              .up()
          .then("g#background",{})       
          .then("rect", {w:"fill", y:-133, h: 30, fill:"#DDD", stroke:null})
          .then("rect", {w:"fill", y:-135, h: 30, fill:"#400060", stroke:null})
          
          .then("svgtext#title",{x:-195,y:-130, size:17, color:"#eed", anchor:"left"})
          .then("vector#main", {layout:"spread", align:"c", width:100, height:260, x:-50, y:15})
          .then("vector#right", {layout:"spread", align:"c", width:200, height:260, x:50, y:15})
          .then("g#foreground",{})
}