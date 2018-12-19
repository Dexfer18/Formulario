import React from 'react';
import reactDom from 'react-dom';


class Appe extends React.Component{

  render(){
return(
  
 
<div className="login">
<section class="container-fluid">
<section class="row">
<section class="col-12 col-sm-6 col-md-3">
<form>
<div class="form-group">
<label for="usuario">USUARIO</label>
<input type="usuario" class="form-control" id="exampleInputEmail1" aria-describedby="usuario" placeholder="usuario">
<small id="usuario" class="form-text text-muted">We'll never share your email with anyone else.</small>
</input>
</div>
<div class="form-group">
<label for="contraseña">contraseña</label>
<input type="contraseña" class="form-control" id="contraseña" placeholder="contraseña">
</input>
</div>
</form>


</section>
</section>
</section>
</div>

         
  

);


  }


}
reactDom.render(<App />,document.getElementById("root"));


  