### why we use base64 of image 

pros 
1. if we use the url of image, it would consume a http request.Image in base64 format could be downloaded with the html so it reduce the http request.
2. encyption. user can find the content of the image base on the code.
3. if a image is need to load to many diffrernt places. we can add the iamge of base64 format in common.css (global). it increase the load speed. 

cons
1. IE6/7 does't support.
2. increased the size of css file.
 