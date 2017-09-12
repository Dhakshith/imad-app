var server = require('server-js');
 
 
/*   server.use();   
  *   
*   here you can write the middleware code like checking whether the user has login etc.
*   here you can use all the middlewares supported by the express webframework
*   like for example :- 
*      
*     server.use(morgan());//it is a logging middleware
*
*   u should always write your middleware at the top request will traverse in the order
*   you written your server so your middleware should be at the top.
*   you can use more than one middleware like the following.
*
*     server.use(morgan());
*     server.use(bodyparser());
*     
*      server.use(function(req,res,next)){
*       if you are using a function as a middleware you should call next() at
*        the end of the function otherwise the request will not reach other layers
*        in your server.
*      }
*
*    example:- 
*              
*               server.use(function(req,res,next){
*                    // --middleware code--
*                     next();               
*               });
*
*    
*    if you are handled the request in middleware based on condition like this you should not call
*    next() after u handled the request,if you do an exception will be thrown.
*                
*     server.use(function(req,res,next){
*                         
*         if(somecondition){
*             res.end('Error');
*             //you should not call next() here because you already handled request
*         }else{
*             next(); 
*         }                  
*                         
*    });
*
*/
 
server.use(function(req,res,next){
  
  //middleware code 
  
    next();
});
 
server.static(__dirname);
 
server.static(__dirname+'/test');
 
 
server.get('/path', function(req, res) {
    res.end('path get');
})
 
server.get('/path/:id', function(req, res) {
    res.end('path get with param' + req.params.id);
});
 
server.route('/route').get(function(req, res) {
    res.end('received');
}).put(function(req, res) {
    res.end('received put');
}).delete(function(req, res) {
    res.end('received delete');
});
 
server.route('/route2').get(function(req, res) {
    res.end('received route2 get');
}).put(function(req, res) {
    res.end('route put');
});
 
server.start().listen(3000, function() {
    console.log('server started');
});
 