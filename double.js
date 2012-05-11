/*
 * Double v0.2 2012-05-09 10:06:33 -0300
 * by Arthur Corenzan <arthur@corenzan.com>
 * licensed under http://creativecommons.org/licenses/by/3.0
 * more on http://haggen.github.com/double
 */
(function( $ ){
  $.fn.saveState = function() {  
    return this.each(function() {
      var $this = $(this);
      $this.data( '_original', $this.clone(true) );
    });
  };
  $.fn.recallState = function() {
  	return this.each(function() {
      var $this = $(this);
      $this.replaceWith( $this.data( '_original' ) );
    });	
  };
})( jQuery );
